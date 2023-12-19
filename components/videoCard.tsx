'use client';
import { videoType } from '@/global';
import { HeartOutlined, HeartFilled, PlayCircleFilled, SoundFilled, SoundOutlined } from '@ant-design/icons';
import { Card, CardBody, Image, CardFooter, Button, Tooltip, Badge, Chip } from '@nextui-org/react';
import { useState } from 'react';
import ReactPlayer from 'react-player';

type Props = {
  video: videoType,
  cardWidth: number,
  margin: number,
  lastItem?: boolean
};
const VideoCard = ({ video, cardWidth, margin, lastItem }: Props) => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  return (
    <>
      <Tooltip
        shouldFlip={false}
        triggerScaleOnOpen={false}
        placement="bottom"
        className="p-0 m-0 border-r-0"
        classNames={{
          content: ['rounded-none rounded-b-xl']
        }}
        offset={-16}
        content={
          <div style={{ minWidth: `${cardWidth}px` }} className="p-4">
            <div className="">
              <p className="text-xl font-medium">{video.name}</p>
              <p>{video.author}</p>
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <div className="flex gap-x-2">
                  <Button size="lg" isIconOnly>
                    <PlayCircleFilled />
                  </Button>
                  <Button size="lg" isIconOnly>
                    <HeartOutlined />
                  </Button>
                </div>
                <div className="flex gap-x-2">
                  <Chip color="primary" variant="faded" size="lg" className="capitalize">
                    {video.genre}
                  </Chip>
                  <Chip color="danger" variant="faded" size="lg" hasStartContent startContent={<HeartFilled />}>
                    {video.likes}
                  </Chip>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <Card
          isPressable
          isFooterBlurred
          style={{ margin: `${margin}px`, minWidth: `${cardWidth}px`, marginRight: lastItem ? '0px' : 'auto' }}
          className="p-0"
          onMouseLeave={() => setTooltipOpen(false)}
          onMouseEnter={() => setTooltipOpen(true)}
        >
          <CardBody className=" relative p-0 m-0 overflow-hidden">
            {tooltipOpen && (
              <ReactPlayer
                style={{
                  position: 'absolute',
                  zIndex: '1000',
                  aspectRatio: '16/9',
                  top: '50%',
                  left: '50%',
                  translate: '-50% -50%',
                  pointerEvents: 'none'
                }}
                className=""
                url={`https://youtu.be/${video.source}`}
                width="100%"
                loop
                volume={100}
                muted
                playing
                config={{
                  youtube: {
                    playerVars: { showInfo: 0, controls: 0, disablekb: 1, fs: 0, end: 30 }
                  }
                }}
              />
            )}

            <Image
              className="aspect-video w-fit object-cover scale-110 z-1"
              src={`https://img.youtube.com/vi/${video.source}/hqdefault.jpg`}
              alt={video.name}
            />
          </CardBody>
        </Card>
      </Tooltip>
    </>
  );
};

export default VideoCard;
