// pages/api/user/[email].js
import connectMongo from '@/lib/mongoose';
import { NextResponse } from 'next/server';
import User from '@/models/User';

export async function POST(req: Request) {
  const { email } = await req.json();

  await connectMongo();
  const user = await User.findOne({ email });

  if(!user){
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ user });
}
