import useSongList from '@/hooks/useSongsList';
import React, { UIEvent, useEffect, useRef, useState } from 'react';
import VideoCard from './videoCard';
import { videoType } from '@/global';

const VideoCarosuel = () => {
  const { isLoading, data, error } = useSongList();
  const [cardWidth, setCardWidth] = useState(0);
  const [list, setList] = useState<videoType[] | null>(null);
  const scrollRef = useRef<HTMLElement | null>(null);

  const widthWatcher = (e?: Event) => {
    const calculatedWidth = window.innerWidth / (window.innerWidth < 1000 ? 3 : 5);
    setCardWidth(calculatedWidth);
  };
  const scrollAction = (e: WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: e.deltaY > 0 ? cardWidth : -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    widthWatcher();
    window.addEventListener('resize', e => widthWatcher(e));
    if (scrollRef.current) {
      scrollRef.current.addEventListener('wheel', e => scrollAction(e), { passive: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section style={{ whiteSpace: 'nowrap', overscrollBehavior: 'auto', overflow: 'hidden' }} ref={scrollRef}>
      {data.map((video: videoType) => (
        <VideoCard key={video.id} video={video} cardWidth={cardWidth} />
      ))}
    </section>
  );
};

export default VideoCarosuel;
