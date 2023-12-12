import { Card } from '@nextui-org/react';
import { FC } from 'react';

type Props = {
  video: any
  cardWidth: number
};
const VideoCard = ({ video, cardWidth }: Props) => {
const margin = 10
  return (
    <Card
      isPressable
      css={{ margin: `${margin}px`, display: 'inline-block', width: `${cardWidth - (margin*2)}px`, aspectRatio: '16/9' }}
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={`https://img.youtube.com/vi/${video.source}/hqdefault.jpg`}
          objectFit="cover"
          css={{
            aspectRatio: '16/9'
          }}
          alt={video.title}
        />
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
