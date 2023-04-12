import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).end();
  }
  try {
    if (req.method === 'POST') {
      const credentials = req.body

      const job = await prisma.jobsApplied.create({
        data: { ...credentials }
      });

      return res.status(200).json(job)
    }
    if (req.method === 'GET') {
      const { currentUser } = await serverAuth(req);
      const { jobId } = req.query;
      if (jobId) {
        const job = await prisma.jobsApplied.findUnique({
          where: {
            id: jobId.toString()
          }
        });
        return res.status(200).json(job)
      } else {

        const jobs = await prisma.jobsApplied.findMany({
          where: {
            userId: currentUser.id
          },
          include: {
            user: true,
          },
          orderBy: {
            createdAt: 'desc'
          }
        });
        return res.status(200).json(jobs)
      }

    }
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}