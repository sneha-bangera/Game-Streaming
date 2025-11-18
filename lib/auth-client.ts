import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  endpoints: {
    signIn: '/api/auth/login',
    signUp: '/api/auth/register',
    signOut: '/api/auth/signout',
    session: '/api/auth/session',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          image: token.image as string | undefined,
        };
      }
      return session;
    },
  },
});

export const { signIn, signOut, signUp, useSession } = authClient;