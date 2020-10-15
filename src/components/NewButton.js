import React from 'react';
import styled from 'styled-components';

function NewButton({addNewProblem}) {
  return (
    <Button onClick={addNewProblem}>
      <ButtonMark>+</ButtonMark>
    </Button>
  )
}

export default React.memo(NewButton);

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  border: 2px #000 dashed;
  border-radius: 10px;
  margin-top: 20px;
  padding: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonMark = styled.div`
  width: 50px;
  height: 50px;
  border: 2px #000 dashed;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  line-height: 40px;
`;