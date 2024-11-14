// pages/api/user/[email].js
import connectMongo from '@/lib/mongoose';
import { useSession } from 'next-auth/react';
import { NextResponse } from 'next/server';
import User from '@/models/User';

export async function POST(req: Request) {
  // const { data: session } = await useSession();
  const { email } = await req.json();

  await connectMongo();
  const user = await User.findOne({ email });

  if(!user){
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  var plan = user.subscriptionPlan;

  return NextResponse.json({ user });
}
