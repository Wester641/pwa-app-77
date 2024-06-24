// // import { NextAuth } from "next-auth/next";
// // import Credentials from "next-auth/providers/credentials";

// // const authOptions = {
// //   providers: [
// //     Credentials({
// //       name: "credentials",
// //       credentials: {},
// //       async authorize(credentials) {
// //         const user = { id: "1" };
// //         return user;
// //       },
// //     }),
// //   ],
// //   session: {
// //     strategy: "jwt",
// //   },
// //   secret: process.env.NEXTAUTH_SECRET,
// //   pages: "/",
// // };

// // const handler = NextAuth(authOptions);
// // export { handler as GET, handler as POST };
// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
// };
// // export { handler as GET, handler as POST };

// export default NextAuth(authOptions);
