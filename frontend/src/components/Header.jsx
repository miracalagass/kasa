import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: 20px;
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    padding: 4px;
    img{
      width: 145px;
      height: 47px;
    }
  }

`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  width: 18%;
  @media (max-width: 768px) {
    width: 45%;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  width: 50%;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/LOGO.png" alt="Kasa Logo" />
      </Link>
      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </Nav>
    </HeaderContainer>
  );
}
