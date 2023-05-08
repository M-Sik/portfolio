'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';
import BottomToTopFadeIn from '../gasp/BottomToTopFadeIn';

type Props = {
  children: React.ReactNode;
  imgWidth: number;
  imgCount: number;
};

const IMG_GAP = 16;

const MultiCarousel = ({ children, imgWidth, imgCount }: Props) => {
  const MultiCarouselRef = useRef<HTMLDivElement>(null);
  const [currentImgOrder, setcCurrentImgOrder] = useState(0);

  const IMG_WIDTH = imgWidth + IMG_GAP;
  const slideRange = currentImgOrder * IMG_WIDTH;

  useEffect(() => {
    if (MultiCarouselRef.current == null) return;
    MultiCarouselRef.current.style.transition = 'all 0.5s ease-in-out';
    if (currentImgOrder === imgCount - 1) {
      const endSlideRange = slideRange - (imgWidth / 2 + IMG_GAP);
      MultiCarouselRef.current.style.transform = `translateX(-${endSlideRange}px)`;
      return;
    }
    MultiCarouselRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentImgOrder, slideRange, imgCount, imgWidth]);

  const leftClick = () => {
    if (currentImgOrder === 0) return;
    setcCurrentImgOrder(currentImgOrder - 1);
  };
  const rightClick = () => {
    if (currentImgOrder === imgCount - 1) return;
    setcCurrentImgOrder(currentImgOrder + 1);
  };

  // 마우스 드래그
  const [startX, setStartX] = useState(0);
  const [distance, setDistance] = useState(0);

  function handleMouseDown(e: React.MouseEvent) {
    setStartX(e.clientX);
    return;
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (startX !== null) {
      const dx = e.clientX - startX;
      setDistance(dx);
    }
    return;
  }

  function handleMouseUp(e: React.MouseEvent) {
    // console.log('스타트 x => ', startX);
    // console.log('움직인 거리 => ', distance);
    if (distance < -50) {
      if (currentImgOrder === imgCount - 1) return;
      setcCurrentImgOrder(currentImgOrder + 1);
    } else if (distance > 50) {
      if (currentImgOrder === 0) return;
      setcCurrentImgOrder(currentImgOrder - 1);
    }
    setStartX(0);
    setDistance(0);
    return;
  }

  return (
    <div className="flex">
      <BottomToTopFadeIn delay={0.3}>
        <div className=" relative pt-8 pl-2">
          <button
            aria-label="arrow left button"
            name="arrow left button"
            className="mr-4"
            onClick={leftClick}
          >
            <BsArrowLeftCircle
              className={`text-4xl ${currentImgOrder === 0 ? 'text-gray-400' : 'text-black'}`}
            />
          </button>
          <button aria-label="arrow right button" name="arrow right button" onClick={rightClick}>
            <BsArrowRightCircle
              className={`text-4xl ${
                currentImgOrder === imgCount - 1 ? 'text-gray-400' : 'text-black'
              }`}
            />
          </button>
          <p className=" absolute top-0 left-0 animate-c-bounce text-lg text-yellow-400 font-bold w-[150px]">
            👇click here👇
          </p>
        </div>
      </BottomToTopFadeIn>

      <article
        className={`items-center w-[600px] ml-auto overflow-hidden`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        draggable={false}
      >
        <BottomToTopFadeIn delay={0.8}>
          <div ref={MultiCarouselRef} className={`flex gap-[16px] items-center `} draggable={false}>
            {children}
          </div>
        </BottomToTopFadeIn>
      </article>
    </div>
  );
};

export default MultiCarousel;
