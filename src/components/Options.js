import React from 'react';
import styled from 'styled-components';

function Options(props) {
  const { 
    problemId,
    formType,
    options,
    updateOptionTitle,
    addOption,
    removeOption } = props;

  const addNewOption = () => {
    const newOption = {
      name: `옵션${options.length+1}`,
    }
    addOption(problemId, newOption)
  }

  return (
    <>
      {options.map((option, idx) =>
        <OptionWrapper key={idx}>
          <OptionTypeInput 
            type={formType}
            disabled
          />
          <OptionNameInput 
            value={option.name}
            onChange={e => updateOptionTitle(problemId, idx, e.target.value)}
          />
          <RemoveOptionButton onClick={() => removeOption(problemId, idx)}>
            x
          </RemoveOptionButton>
        </OptionWrapper>
      )}
      <NewOptionButton onClick={addNewOption}>
        옵션 추가
      </NewOptionButton>
    </>
  )
}

export default Options;

const OptionWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  border: 1px solid #ECECEC;
  padding: 5px;
  border-radius: 5px;
`;

const OptionTypeInput = styled.input`
  width: 15px;
  height: 15px;
`;

const OptionNameInput = styled.input`
  all: unset;
  width: calc(100% - 42px);
  height: 15px;
  margin-left: 10px;
`;

const RemoveOptionButton = styled.button`
  all: unset;
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  text-align: center;
  font-size: 7px;
  font-weight: bolder;
  line-height: 15px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const NewOptionButton = styled.button`
  all: unset;
  border-radius: 10px;
  background-color: #ECECEC;
  text-align: center;
  width: 100%;
  height: 50px;
  &:hover {
    background-color: #DEDEDE;
    cursor: pointer;
  }
`;