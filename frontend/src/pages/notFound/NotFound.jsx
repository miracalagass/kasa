import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 66vh;
  text-align: center;
  color: #ff6b6b;
`;

const ErrorCode = styled.h1`
  font-size: 10rem; /* Tasarıma göre daha büyük font boyutu */
  margin: 0;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  color: #ff6b6b;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HomeLink = styled(Link)`
  margin-top: 20px;
  font-size: 1rem;
  color:#000000;
  text-decoration: none;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
      <HomeLink to="/">Retourner sur la page d’accueil</HomeLink>
    </NotFoundContainer>
  );
}
