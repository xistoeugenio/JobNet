import bcrypt from "bcrypt";
import NextAuth from 'next-auth'; 
import CredentialsProvider from 'next-auth/providers/credentials'; // A provider for NextAuth that allows users to authenticate with a username and password
import { PrismaAdapter } from '@next-auth/prisma-adapter'; 

import prisma from "@/libs/prismadb";

export default NextAuth({
  // Configure NextAuth with a PrismaAdapter instance, allowing it to communicate with the database
  adapter: PrismaAdapter(prisma),

  // Define the authentication providers that will be used by NextAuth
  providers: [
    // Use the CredentialsProvider to allow users to authenticate with a username and password
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        // Define the required credentials for this provider: email and password
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },

      // Define the function that will be called when a user tries to authenticate with this provider
      async authorize(credentials) {
        // Check if the email and password are provided in the credentials object
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials') // If either of them is missing, throw an error
        }

        // Find the user with the given email in the database
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        // If the user is not found, or if they don't have a hashed password, throw an error
        if (!user || !user?.hashedPassword) {
          throw new Error('This user does not exist')
        }

        // Compare the password provided by the user with the stored hashed password
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        if(!isCorrectPassword){
          throw new Error('Wrong password')
        }

        // If everything checks out, return the user object
        return user;
      }
    })
  ],

  // Set the debug mode based on the NODE_ENV environment variable
  debug: process.env.NODE_ENV === 'development',

  // Configure the session management strategy to use JSON Web Tokens (JWTs)
  session:{
    strategy: 'jwt'
  },

  // Configure the JWT secret to use for session management
  jwt:{
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },

  // Configure the secret to use for encrypting sensitive data
  secret: process.env.NEXTAUTH_SECRET
})
