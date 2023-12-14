import useHero from '@/hooks/useHero';
import { PlayCircleFilled } from '@ant-design/icons';
import { Button, Card } from '@nextui-org/react';
import { relative } from 'path';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const HeroCard = () => {
  const { data, isLoading } = useHero();
  return isLoading ? (
    <div>loading</div>
  ) : (
    <div className="min-h-[56.25vw] ">
      <section className="absolute max-h-[56.25vw] aspect-video w-full overflow-hidden m-auto p-0 left-0 top-0 border-r-0 z-0">
        <div className=" absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-black" />
        <ReactPlayer
          className=""
          url={`https://youtu.be/${data.source}`}
          style={{
            pointerEvents: 'none'
          }}
          loop
          volume={0}
          muted
          width="100vw"
          height="calc(56.25vw)"
          playing
          config={{
            youtube: {
              playerVars: { showInfo: 0, controls: 0, disablekb: 1, fs: 0, end: 30 }
            }
          }}
        />
        <div className="absolute md:h-2/4 h-3/4 bottom-0 w-fit mx-5">
          <div className="relative w-fit">
            {data.translatedName && (
              <h1 className="absolute -right-10 -top-8 text-2xl md:text-4xl opacity-50">{data.translatedName}</h1>
            )}
            <h1 className="font-bold -my-2 text-4xl md:text-7xl">{data.name}</h1>
            <h2 className="md:text-4xl text-2xl">{data.author}</h2>
          </div>
          <p className="w-2/4 leading-5 pb-4">{data.description}</p>
          <Button type="button" title="Watch now" color="primary" className="">
            Watch now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HeroCard;
