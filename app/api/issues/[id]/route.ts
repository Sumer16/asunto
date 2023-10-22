import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/prisma/client';

import { issueSchema } from '@/app/validationSchema';

export async function PATCH(
  request: NextRequest, 
  { params }: { params: { id: string }}
) {
  try {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);
    
    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });
  
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) }
    });
    
    if (!issue) 
      return NextResponse.json({ error: 'Invalid issue' }, { status: 404 });
  
    const updatedIssue = await prisma.issue.update({
      where: { id: issue.id },
      data: {
        title: body.title,
        description: body.description
      }
    });
  
    return NextResponse.json(updatedIssue, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}