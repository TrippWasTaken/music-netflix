import useSongList from '@/hooks/useSongsList';
import React, { UIEvent, useEffect, useRef, useState } from 'react';
import VideoCard from './videoCard';
import { videoType } from '@/global';
import { Button } from '@nextui-org/react';
import CarouselButton from './carouselButton';

type Props = {
  headerText?: string
};
const VideoCarosuel = ({ headerText = 'Whats new?' }: Props) => {
  const { isLoading, data, error } = useSongList();
  const [cardWidth, setCardWidth] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const margin = 10;

  const widthWatcher = (e?: Event) => {
    const calculatedWidth = window.innerWidth / (window.innerWidth < 1000 ? 3 : 5);
    setCardWidth(calculatedWidth - margin * 2);
  };

  const scrollAction = (forward: boolean = true) => {
    const scrollAmount = () => {
      if (window.innerWidth < 1000) return (margin * 2 + cardWidth) * 2;
      return (margin * 2 + cardWidth) * 3;
    };
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: forward ? scrollAmount() : -scrollAmount(),
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    widthWatcher();
    window.addEventListener('resize', e => widthWatcher(e));
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h1 className="px-10 text-4xl">Recent Additions</h1>
      <section className="relative w-full bottom-0">
        <div className="flex flex-nowrap overflow-hidden" ref={scrollRef}>
          {data.map((video: videoType, index: number) => (
            <VideoCard
              key={video.id}
              video={video}
              cardWidth={cardWidth}
              margin={margin}
              lastItem={index === data.length - 1}
            />
          ))}
        </div>
        <CarouselButton onClick={() => scrollAction(false)} content={`<`} left />
        <CarouselButton onClick={() => scrollAction()} content={`>`} />
      </section>
    </>
  );
};

export default VideoCarosuel;
