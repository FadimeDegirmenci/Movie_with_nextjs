import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/libs/prismadb';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
    }

    const body = await req.json();
    const { movieId, title, posterPath, releaseDate } = body;

    // Kontrol
    if (!movieId || !title || !posterPath || !releaseDate) {
      return NextResponse.json({ error: 'Eksik veri' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Film daha önce kayıtlı mı kontrol et
    let movie = await prisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movie) {
      movie = await prisma.movie.create({
        data: {
          id: movieId, // dikkat: movieId string ObjectId formatında olmalı!
          title,
          posterPath,
          releaseDate,
        },
      });
    }

    // Favori zaten eklenmiş mi
    const existing = await prisma.favorite.findFirst({
      where: { userId: user.id, movieId: movie.id },
    });

    if (existing) {
      await prisma.favorite.delete({ where: { id: existing.id } });
      return NextResponse.json({ removed: true });
    }

    await prisma.favorite.create({
      data: {
        userId: user.id,
        movieId: movie.id,
      },
    });

    return NextResponse.json({ removed: false });
  } catch (error) {
    console.error('Favori ekleme hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
    }

    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId: user.id },
      include: { movie: true },
    });

    return NextResponse.json(favorites.map((f) => f.movie));
  } catch (error) {
    console.error('Favori listeleme hatası:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
