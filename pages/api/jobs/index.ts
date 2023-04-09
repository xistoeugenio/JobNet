import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }
  try {
    if (req.method === 'POST') {
      const credentials = req.body

      const job = await prisma.jobsApplied.create({
        data: {...credentials}
      });

      return res.status(200).json(job)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}