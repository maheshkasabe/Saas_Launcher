import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectMongo from "../../../../lib/mongoose"
import User from "../../../../models/User"

const handler = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  })],
  callbacks: {
    async session({ session }) {
      await connectMongo();

      // Check if user exists in MongoDB
      const userData = await User.findOne({ email: session.user?.email });

      // If user doesn't exist, create with default subscription details
      if (!userData) {
        const newUser = await User.create({
          name: session.user?.name,
          email: session.user?.email,
          profileImage: session.user?.image,
          subscriptionStatus: 'free',
          subscriptionPlan: 'Free',
        });
        session.user.subscriptionStatus = newUser.subscriptionStatus;
        session.user.subscriptionPlan = newUser.subscriptionPlan;
      } else {
        // If user exists, add subscription details to session
        session.user.subscriptionStatus = userData.subscriptionStatus;
        session.user.subscriptionPlan = userData.subscriptionPlan;
      }

      return session;
    },
  }
})


export { handler as GET, handler as POST }