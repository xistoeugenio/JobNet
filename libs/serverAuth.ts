import { NextApiRequest } from "next";
import { getSession } from "next-auth/react" // A function for getting the current user's session using NextAuth
import prisma from "@/libs/prismadb"

const serverAuth = async (req: NextApiRequest) => {
  // Get the current user's session using the getSession function from NextAuth
  const session = await getSession({ req })

  // Check if the user is signed in by looking for their email in the session object
  if (!session?.user?.email) {
    throw new Error("Not signed in")
  }

  // Look up the user in the database using their email
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  })

  if (!currentUser) {
    throw new Error("User not found")
  }

  // If the user is found, return an object containing the currentUser property
  return { currentUser };
}

export default serverAuth
