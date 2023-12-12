import useHero from '@/hooks/useHero';
import { PlayCircleFilled } from '@ant-design/icons';
import { Badge, Button, Card, Col, Container, Row, Text } from '@nextui-org/react';
import { relative } from 'path';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const HeroCard = () => {
  const { data, isLoading } = useHero();
  return isLoading ? (
    <div>loading</div>
  ) : (
    <Card
      id="video-aligner"
      css={{
        padding: '0',
        margin: '0',
        aspectRatio: '16/9',
        maxHeight: '75%',
        top: '0',
        left: '0',
        borderRadius: '0',
        overflow: 'hidden'
      }}
    >
      <Card.Body
        css={{
          padding: '0',
          margin: '0',
          display: 'felx',
          flexDirection: 'row',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <ReactPlayer
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
        <Container
          css={{
            position: 'absolute',
            bottom: '0',
            height: '100%',
            background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)'
          }}
        />
        <Container
          css={{
            position: 'absolute',
            bottom: 0
          }}
        >
          <div style={{ width: 'fit-content' }}>
            <Text h1 css={{ padding: '0', margin: '0' }}>
              {data.name}
            </Text>
            {data.translatedName && (
              <Text
                css={{
                  padding: '0',
                  margin: '0',
                  textAlign: 'end',
                  position: 'relative',
                  top: '-20px',
                  opacity: '0.5'
                }}
              >
                {data.translatedName}
              </Text>
            )}
          </div>

          <Text h2 css={{ position: 'relative', top: data.translatedName ? '-40px' : '0', paddingBottom: '1rem' }}>
            {data.author}
          </Text>
          <Badge
            variant="bordered"
            css={{
              position: 'relative',
              textTransform: 'capitalize',
              top: data.translatedName ? '-40px' : '0',
              marginLeft: 'auto'
            }}
          >
            {data.genre}
          </Badge>
          <Text
            css={{
              width: '100%',
              fontWeight: '400',
              position: 'relative',
              top: data.translatedName ? '-40px' : '0',
              '@md': {
                width: '30%'
              }
            }}
          >
            {data.description}
          </Text>
          <Button ghost icon={<PlayCircleFilled />} css={{ position: 'relative', bottom: 0, marginBottom: '1rem' }}>
            Play now
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default HeroCard;
