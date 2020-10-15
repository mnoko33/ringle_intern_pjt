import React from 'react';
import styled from 'styled-components';

function Title({title, setTitle}) {
  return (
    <TitleInput 
    value={title}
    onChange={setTitle}
    type="text"
    placeholder="제목을 입력해주세요."
    />
  )
}

export default React.memo(
  Title,
  (prevProps, nextProps) => prevProps.title === nextProps.title
);

const TitleInput = styled.input`
  all: unset;
  width: 100%;
  padding: 20px;
  font-size: 20px;
  font-weight: bolder;
`;