import { signOut, getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
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
  return (
    <>
      <Header user={user} />
      <HeroCard />
      <div className="lg:absolute md:-bottom-2 lg:-bottom-5 z-100 max-w-full">
        <VideoCarosuel />
      </div>
    </>
  );
}
