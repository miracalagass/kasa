import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import BannerImage from './../../assets/image/homepage-banner.jpg'
import styled from 'styled-components';

export default function Home() {
  const [properties, setProperties] = useState([]);

  const WrapperContainer = styled.div`
  background-color: #F6F6F6;
  border-radius: 25px;
  display: 'flex'; 
  flex-wrap: 'wrap'; 
  gap: '20px'; 
  justify-Content: 'center';
  @media (max-width: 768px) {
    background-color: transparent;
  }
  `;

  const Wrapper = styled.div`
  max-width: 1240px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 30px;
  padding: 42px;
  justify-content: center;
  a{
    width: 31%;
  }
  
  @media (max-width: 768px) {
    padding: 6px;
    a{
    width: 100%;
  }
  }
`;

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error("Erreur d'extraction des données:", error));
  }, []);

  return (
    <div>
      <Banner image={BannerImage} title='Chez vous, partout et ailleurs'/>
      <WrapperContainer>
      <Wrapper>
        {properties.map(property => (
          <Card key={property.id} id={property.id} title={property.title} cover={property.cover} />
        ))}
      </Wrapper>
      </WrapperContainer>
      </div>
  );
}
