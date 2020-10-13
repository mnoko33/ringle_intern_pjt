import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Form from './Form';

function Problem(props) {
  const {
    problem,
    removeProblem,
    updateProblemTitle,
    updateProblemDetail,
    updateOptionTitle,
    addOption,
    removeOption,
    updateProblemType,
  } = props;

  return (
    <Card key={problem.id}>
      <CardHeader>
        <Dropdown
          problemId={problem.id}
          selectedItem={problem.type}
          setSelectedItem={updateProblemType}
        />
        <RemoveProblemButton onClick={() => removeProblem(problem.id)}>
          x
        </RemoveProblemButton>
      </CardHeader>
      <Form 
        problem={problem} 
        updateProblemTitle={updateProblemTitle}
        updateProblemDetail={updateProblemDetail}
        updateOptionTitle={updateOptionTitle}
        addOption={addOption}
        removeOption={removeOption}
      />
    </Card>
  )
}

export default React.memo(
  Problem,
  (prevProps, nextProps) => prevProps.problem === nextProps.problem
);

const Card = styled.div`
  width: 100%;
  background-color: #FFF;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 5px 5px 2px rgba(0,0,0,.07);
`;

const CardHeader = styled.div`
  background-color: #5530E2;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const RemoveProblemButton = styled.button`
  all: unset;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #FFF;
  text-align: center;
  font-weight: bolder;
  line-height: 20px;
  &:hover {
    cursor: pointer;
  }
`;