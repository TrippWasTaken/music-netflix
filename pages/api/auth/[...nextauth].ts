import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import prismadb from '@/libs/prismadb';
import { compare } from 'bcrypt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      profile(profile: any) {
        return {
          id: profile.id,
          name: profile.name,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      profile(profile: any) {
        return {
          id: profile.sub,
          username: profile.name,
          name: profile.given_name,
          email: profile.email,
          image: profile.picture
        };
      }
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || credentials?.password) {
          throw new Error('Email and password are required to login');
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !!user.hashedPassword) {
          throw new Error('User not recognized');
        }

        const isPasswordCorrect = await compare(credentials.password, user.hashedPassword);

        if (!isPasswordCorrect) throw new Error('Password is Incorrect');
        return user;
      }
    })
  ],
  pages: {
    signIn: '/auth'
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET
});
