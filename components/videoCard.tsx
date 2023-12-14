'use client';
import { videoType } from '@/global';
import { Card, CardBody, Image, card } from '@nextui-org/react';

type Props = {
  video: videoType,
  cardWidth: number,
  margin: number
};
const VideoCard = ({ video, cardWidth, margin }: Props) => {
  return (
    <Card isPressable style={{ margin: `${margin}px`, minWidth: `${cardWidth}px` }} className="p-0">
      <CardBody className="p-0 m-0 aspect-video overflow-hidden">
        <Image
          className="aspect-video"
          isZoomed
          src={`https://img.youtube.com/vi/${video.source}/hqdefault.jpg`}
          alt={video.name}
        />
      </CardBody>
    </Card>
  );
};

export default VideoCard;
