import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const notes = await prisma.note.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching notes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    const note = await prisma.note.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json(note);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating note' }, { status: 500 });
  }
} 