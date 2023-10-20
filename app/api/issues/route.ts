import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/prisma/client';
import { issueSchema } from '../../validationSchema';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
  
    const validation = issueSchema.safeParse(body);
  
    if (!validation.success) {
      return NextResponse.json(validation.error.format() , { status: 400 });
    }
  
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      }
    });
  
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.log(error);    
  }
}
