import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your=awesome-password",
        },
      },
      async authorize(credentials) {
        const user = { id: "42", name: "dave", password: "nextauth" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
//   callbacks: {
//     async session({ session, token }) {
//       const username = session.user.name
//         .split(" ")
//         .join("")
//         .toLocaleLowerCase();

//       session.user.username = username + token.sub?.slice(0, 4);
//       session.user.uid = token.sub;
//       return session;
//     },
//   },
};
