import NextAuth from "next-auth/next";
import RedditProvider from "next-auth/providers/reddit";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      // @ts-ignore
      session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
      },
      async authorize(credentials, req) {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signin`;
        const token = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // @ts-ignore
            username: credentials.username,
            // @ts-ignore
            password: credentials.password,
          }),
        }).then((res) => res.json());

        if (token && token?.username) {
          return {
            name: token.username,
            email: token.email,
          };
        } else {
          throw new Error("error message");
        }
      },
    }),
  ],
  session: {
    // @ts-ignore
    jwt: true,
  },
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
  },
});
