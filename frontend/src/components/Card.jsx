import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  background-color: #ff6b6b;
  width: 100%;
  height: 340px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
  }
  img{
    z-index: 0;
    position: absolute;
  }
  @media (max-width: 375px) {
    width: 335px;
    height: 255px;
  }
`;

const CardTitle = styled.h2`
  color: white;
  font-size: 1rem;
  padding: 10px;
  text-align: left;
  z-index: 2;
  position: absolute;
  left: 0;
`;

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} style={{ textDecoration: 'none' }}>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <img src={cover} alt={title}/>
      </CardContainer>
    </Link>
  );
}
