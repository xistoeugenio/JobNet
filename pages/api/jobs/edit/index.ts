import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).end();
  }
  try {
    const { jobId } = req.query
    const credentials = req.body

    const jobUpdated = await prisma.jobsApplied.update({
      where: {
        id: jobId?.toString()
      },
      data: { ...credentials }
    })
    return res.status(200).json(jobUpdated)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}