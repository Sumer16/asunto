import { NextRequest, NextResponse } from 'next/server';

import * as z from 'zod';
import prisma from '@/prisma/client';

const createIssueSchema = z.object({
  title: z.string().min(1, {
    message: 'Issue name is required.'
  }).max(255),
  description: z.string().min(1, {
    message: 'Issue description is required.'
  }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
  
    const validation = createIssueSchema.safeParse(body);
  
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
