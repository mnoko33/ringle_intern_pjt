import React from 'react';
import Options from './Options';
import styled from 'styled-components';

function Form(props) {
  const { 
    problem, 
    updateProblemTitle,
    updateProblemDetail,
    updateOptionTitle,
    addOption,
    removeOption } = props;

  return (
    <Wrapper>
      <TitleInput
        type="text"
        placeholder="문제 제목을 입력해주세요"
        value={problem.title}
        onChange={(e) => updateProblemTitle(problem.id, e.target.value)}
      />
      <DetailInput
        type="text"
        placeholder="문제 설명을 입력해주세요"
        value={problem.detail}
        onChange={(e) => updateProblemDetail(problem.id, e.target.value)}
      />
      {problem.type !== 'text' &&
        <Options 
          problemId={problem.id}
          formType={problem.type}
          options={problem.options}
          updateOptionTitle={updateOptionTitle}
          addOption={addOption}
          removeOption={removeOption}
        />
      }
    </Wrapper>
  )
}

export default Form;

const Wrapper = styled.div`
  width: 100%;
  padding: 15px;
`;

const TitleInput = styled.input`
  all: unset;
  width: 100%;
  font-size: 17px;
  font-weight: bolder;
  margin-bottom: 5px;
  `;

const DetailInput = styled.input`
  all: unset;
  width: 100%;
  font-size: 15px;
  margin-bottom: 5px;
`;