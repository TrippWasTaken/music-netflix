import { signOut, getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import { Button, Text } from '@nextui-org/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import Header from '@/components/Header';
import HeroCard from '@/components/HeroCard';
import VideoCarosuel from '@/components/videoCarosuel';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: '/auth', pernment: false }
    };
  }

  return { props: {} };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  console.log(user);
  return (
    <>
      <Header />
      <HeroCard />
      <VideoCarosuel />
    </>
  );
}
