import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import Vector from '../assets/image/Vector.png'

const CollapseContainer = styled.div`
  margin: 10px auto;
  border-radius: 5px;
  overflow: hidden;
  max-width: ${(props) => (props.page === "logement" ? "500px" : "1023px")};
  .collapseHeader{
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${theme.colors.orange};
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  img{
    transition: all 500ms ease-in-out;
  }
  .rotate{
    transform: rotate(180deg);
    transition: all 500ms ease-in-out;
  }
  }
`;

const CollapseContent = styled.div`
  padding: ${({ $isOpen }) => ($isOpen ? '15px' : '0')};
  background-color: #f5f5f5;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  border-top: 1px solid #ddd;
`;

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapseContainer>
      <div className='collapseHeader' onClick={toggleCollapse}>
        {title}
        {/* {isOpen ? <FaChevronUp /> : <FaChevronDown />} */}
        <img className={isOpen ? 'rotate':''} src={Vector} alt="Fleche" />
      </div>
      <CollapseContent $isOpen={isOpen}>
        {children}
      </CollapseContent>
    </CollapseContainer>
  );
}
