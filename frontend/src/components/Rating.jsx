import styled from "styled-components";
import { Link } from 'react-router-dom';


const RatingContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;
  width: 196px;
  height: 36px;
  padding-left: 25px;
  @media (max-width: 768px) {
    width: 98px;
    height: 18px;
    margin-top: 0px;
    padding-left: 0px
  }
`;

const Star = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 13px;
    height: 13px;
  }
`;

export default function Rating({ rating }) {
  return (
    <RatingContainer>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          src={index < rating ? "/star-filled.png" : "/star-empty.png"}
          alt={index < rating ? "filled star" : "empty star"}
        />
      ))}
    </RatingContainer>
  );
}
