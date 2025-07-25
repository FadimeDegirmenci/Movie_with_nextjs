// import { PrismaClient } from "@prisma/client";

// declare global{
//   var prisma: PrismaClient
// }

// const client = globalThis.prisma || new PrismaClient();

// if(process.env.NODE_ENV === 'production') globalThis.prisma = client;

// export default client;
// libs/prismadb.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
