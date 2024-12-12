import { useState } from "react";
import styled from "styled-components";

const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  .counter {
    position: absolute;
    bottom: 10px; /* Slider'ın altına yerleştirmek için */
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 500px;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: 3;
  }
  @media (max-width: 768px) {
    height: 255px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 255px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 148.3px;
  ${({ direction }) =>
    direction === "left" ? "left: 23.36px;" : "right: 23.36px;"}
  width: 46.68px;
  height: 79.2px;
  background: ${({ direction }) =>
    direction === "left"
      ? "url('/left-arrow.png')"
      : "url('/right-arrow.png')"} no-repeat center;
  background-size: contain;
  cursor: pointer;
  z-index: 2;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    top: 115px;
  }
`;

export default function Slideshow({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <SlideshowContainer>
      <Image src={images[current]} alt={`Slide ${current + 1}`} />
      {images.length > 1 && (
        <>
          <Arrow direction="left" onClick={prevSlide}/>
          <Arrow direction="right" onClick={nextSlide}/>
        </>
      )}
      <div className="counter">
        {current + 1}/{images.length}
      </div>
    </SlideshowContainer>
  );
}
