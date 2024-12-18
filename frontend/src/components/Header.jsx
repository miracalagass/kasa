import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    padding: 4px;
    img {
      width: 145px;
      height: 47px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  width: 27%;
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
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  text-underline-offset: 5px; /* Çizginin yazıdan uzaklığını ayarlar */

  @media (max-width: 768px) {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export default function Header() {
  const location = useLocation(); // Şu anki URL yolunu kontrol etmek için

  return (
    <HeaderContainer>
      <Link to="/">
        <img src="/LOGO.png" alt="Kasa Logo" />
      </Link>
      <Nav>
        <NavLink to="/" active={location.pathname === "/"}>
          Accueil
        </NavLink>
        <NavLink to="/about" active={location.pathname === "/about"}>
          A Propos
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
}
