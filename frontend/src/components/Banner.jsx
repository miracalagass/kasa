import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  height: 223px;
  border-radius: 25px;
  margin: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; 
  h1{
    position: absolute;
    color: white;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 111px;
    border-radius: 10px;
    h1 {
      font-size: 24px;
      padding-left: 24px;
    }
  }
`;

export default function Banner({ image, title }) {
  return <BannerContainer $image={image}>
        {title ?<h1>{title}</h1> :''}
    </BannerContainer>;
}
