import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 30%;
  max-width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Tag = styled.span`
  background-color: #ff6b6b;
  color: white;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: fit-content;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 5px 10px;
  }
`;

export default function Tags({ tags }) {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsContainer>
  );
} 