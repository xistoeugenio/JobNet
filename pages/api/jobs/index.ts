import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import { TypeOf } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }
  try {
    if (req.method === 'POST') {
      const credentials = req.body

      // Filter out any key-value pairs where the value is an empty string
      const validFields = Object.fromEntries(
        Object.entries(credentials).filter(([_, v]) => v !== "")
      );
      const job = await prisma.jobsApplied.create({
        data: {...validFields}
      });

      return res.status(200).json(job)
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}