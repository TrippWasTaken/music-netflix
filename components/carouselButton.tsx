import { Button } from '@nextui-org/react';

type Props = {
  onClick: () => void,
  content: string,
  left?: boolean
};

const CarouselButton = ({ onClick, content, left }: Props) => {
  return (
    <Button
      onClick={onClick}
      className={`absolute z-10 h-full ${left ? 'left-0' : 'right-0'} font-black text-2xl text-white bottom-0`}
      variant="light"
      type="button"
      radius="none"
    >
      {content}
    </Button>
  );
};

export default CarouselButton;
