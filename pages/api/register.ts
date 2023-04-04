import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

// Define an API route handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is POST; if not, return a 405 status code (Method Not Allowed)
  if (req.method !== "POST") {
    return res.status(405).end()
  }

  try {
    // Extract the email, username, name, and password fields from the request body
    const { email, username, name, password } = req.body;

    // Encrypt the password using bcrypt with a salt factor of 12
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create a new user record in the database using Prisma Client
    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword
      }
    })

    // If the user creation is successful, return a 200 status code and the user object as JSON
    return res.status(200).json(user);
  } catch (error) {
    // If there is an error during user creation, log it and return a 400 status code (Bad Request)
    console.log(error)
    return res.status(400).end()
  }
}
