import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/libs/prismadb';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { movieId } = body;

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
  }

  const user = await prisma.user.findFirst({
    where: { email: session.user.email },
  });

  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const existing = await prisma.watchLater.findFirst({
    where: { userId: user.id, movieId },
  });

  if (existing) {
    await prisma.watchLater.delete({ where: { id: existing.id } });
    return NextResponse.json({ removed: true });
  }

  const created = await prisma.watchLater.create({
    data: {
      userId: user.id,
      movieId,
    },
  });

  return NextResponse.json(created);
}
