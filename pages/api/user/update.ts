import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

// Define an API route handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is GET; if not, return a 405 status code (Method Not Allowed)
  if (req.method !== "PUT") {
    return res.status(405).end();
  }
  try {
    const { userId } = req.query
    const credentials = req.body

    const jobUpdated = await prisma.user.update({
      where: {
        id: userId?.toString()
      },
      data: { ...credentials }
    })
    return res.status(200).json(jobUpdated)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}