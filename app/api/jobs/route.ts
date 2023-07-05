import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import prismadb from '@/libs/prismadb';

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const credentials = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }


    const store = await prismadb.jobsApplied.create({
      data: {
        ...credentials,
        userId,
      }
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


export async function GET() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const jobs = await prismadb.jobsApplied.findMany({
      where: {
        userId: userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(jobs);

  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}