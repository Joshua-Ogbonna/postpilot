import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import InstagramProvider from "next-auth/providers/instagram";

const prisma = new PrismaClient();
// Password123!@#
const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
});

export { handler as GET, handler as POST };