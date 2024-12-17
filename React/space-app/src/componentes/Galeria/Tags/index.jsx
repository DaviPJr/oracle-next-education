import styled from "styled-components";
import tags from "./tags.json";

const TagContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: 39px 0;
`;

const TagTitle = styled.p`
  font-size: 24px;
  color: #d9d9d9;
`;

const TagButton = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <TagContainer>
      <TagTitle>Busque por tags:</TagTitle>
      {tags.map((tag) => (
        <TagButton key={tag.id}>{tag.titulo}</TagButton>
      ))}
    </TagContainer>
  );
};

export default Tags;
