import prismadb from "@/libs/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { jobId: string } }
) {
  try {
    if (!params.jobId) {
      return new NextResponse("job id is required", { status: 400 });
    }

    const job = await prismadb.jobsApplied.findUnique({
      where: {
        id: params.jobId
      }
    });
  
    return NextResponse.json(job);
  } catch (error) {
    console.log('[JOB_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function PUT(
  req: Request,
  { params }: { params: { jobId: string } }
) {
  try {   
    const { userId } = auth();
    const body = await req.json();
    const credentials = body;
    
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.jobId) {
      return new NextResponse("Job id is required", { status: 400 });
    }

    const jobIdUpdated = await prismadb.jobsApplied.update({
      where: {
        id: params.jobId,
      },
      data: credentials
    });

    if (!jobIdUpdated) {
      return new NextResponse("Unauthorized", { status: 405 });
    }
  
    return NextResponse.json(jobIdUpdated);
  } catch (error) {
    console.log('[JOB_PUT]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { jobId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.jobId) {
      return new NextResponse("Job id is required", { status: 400 });
    }

    const job = await prismadb.jobsApplied.delete({
      where: {
        id: params.jobId
      }
    });
  
    return NextResponse.json(job);
  } catch (error) {
    console.log('[JOB_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};