import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import styled from "styled-components";
import Tags from "../components/Tags";

const Container = styled.div`
  padding: 0px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LeftSection = styled.div`
  flex: 2;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ff6b6b;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Location = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #777;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Host = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 32%;
  height: 64px;
`;

const HostName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #ff6b6b;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const HostPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CollapseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const CollapseWrapper = styled.div`
  flex: 1;
`;

export default function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/properties/${id}`);
        if (response.status === 200) {
          const data = await response.json();
          setLogement(data);
        } else {
          navigate('/404', { replace: true });
        }
      } catch (error) {
        console.error("Error fetching logement:", error);
        navigate('/404', { replace: true });
      }
    };

    fetchLogement();
  }, [id, navigate]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <Container>
      <Slideshow images={logement.pictures} />
      <InfoContainer>
        <LeftSection>
          <Title>{logement.title}</Title>
          <Location>{logement.location}</Location>
          <Tags tags={logement.tags} />
        </LeftSection>
        <RightSection>
          <Host>
            <HostName>{logement.host.name}</HostName>
            <HostPicture src={logement.host.picture} alt={logement.host.name} /> 
          </Host>
          <Rating rating={logement.rating} />
        </RightSection>
      </InfoContainer>
      <CollapseContainer page="logement">
        <CollapseWrapper>
          <Collapse title="Description">{logement.description}</Collapse>
        </CollapseWrapper>
        <CollapseWrapper>
          <Collapse title="Équipements">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </CollapseWrapper>
      </CollapseContainer>
    </Container>
  );
}
