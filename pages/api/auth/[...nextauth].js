import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRECT_KEY,
    }),
  ],
  secret: "1q2w3e4r!",
};
export default NextAuth(authOptions);
