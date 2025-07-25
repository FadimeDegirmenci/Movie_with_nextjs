import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getSessionUser() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) throw new Error('Not authenticated');
  return session.user;
}
