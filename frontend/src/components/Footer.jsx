import styled from 'styled-components';
import { Link } from 'react-router-dom';


const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background-color: #000;
  color: #fff;
  font-size: 0.9rem;
  padding-bottom: 90px;
  margin-top: auto;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Link>
        <img src="/logo-footer.png" alt="Kasa Logo Footer" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  );
}
