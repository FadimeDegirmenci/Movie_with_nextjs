"use client";

import { signOut } from 'next-auth/react';
import React from 'react';

export default function LogoutBtn() {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: '/signin' });
      }}
      className="border border-white bg-black text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition duration-300"
    >
      Çıkış Yap
    </button>
  );
}
