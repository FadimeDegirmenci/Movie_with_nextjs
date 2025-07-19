'use client';

import Navbar from '@/components/Navbar';

export default function FilmPage({ params }: { params: { id: string; slug: string } }) {
  const { id, slug } = params;

  return (
    <>
      <Navbar /> {/* 👈 Navbar eklendi */}
      <div className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl font-bold mb-4">Film Sayfası</h1>
        <p className="text-lg">ID: {id}</p>
        <p className="text-lg">Slug: {slug}</p>
      </div>
    </>
  );
}
