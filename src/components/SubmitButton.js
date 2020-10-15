import React from 'react';
import styled from 'styled-components';

function SubmitButton({onSubmit}) {
  return (
    <Button onClick={onSubmit}>
      제출
    </Button>
  )
}

export default React.memo(SubmitButton);

const Button = styled.button`
  all: unset;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #5530E2;
  text-align: center;
  font-weight: bolder;
  color: #FFF;
  position: fixed;
  bottom: 40px;
  right: 40px;
  &:hover {
    cursor: pointer;
    background-color: #4828bf;
  }
`;