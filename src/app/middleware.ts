import { NextResponse, NextRequest } from 'next/server'
import connectMongo from '@/lib/mongoose'
import User from '@/models/User'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
    
    const token = await getToken({ req });

     if(!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', req.url))
     }

     await connectMongo();

     const user = await User.findOne({ email: token.email});

      if(!user || user.subscriptionPlan !== 'Pro' || user.subscriptionPlan !== 'Plus') {
        return NextResponse.redirect(new URL('/forbidden', req.url))
      }

    return NextResponse.next()

}

export const config = {
    matcher: ['/dashboard/:path*'],
};