import serverAuth from "@/libs/serverAuth"; // A function for server-side authentication using NextAuth and Prisma
import { NextApiRequest, NextApiResponse } from "next";

// Define an API route handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is GET; if not, return a 405 status code (Method Not Allowed)
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    // Call the serverAuth function to authenticate the request and get the current user
    const { currentUser } = await serverAuth(req);

    // If the authentication is successful, return a 200 status code and the current user object as JSON
    return res.status(200).json(currentUser);
  } catch (error) {
    // If there is an error during authentication, log it and return a 400 status code (Bad Request)
    console.log(error)
    return res.status(400).end()
  }
}
