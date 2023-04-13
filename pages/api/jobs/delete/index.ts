import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).end();
  }
  try {
    const { jobId } = req.query

    await prisma.jobsApplied.delete({
      where: {
        id: jobId?.toString()
      }
    })
    return res.status(200).json('delete succesfully')
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}