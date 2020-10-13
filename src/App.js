import React from 'react';
import './App.css';
import styled from 'styled-components';
import Title from './components/Title';
import NewButton from './components/NewButton';
import SubmitButton from './components/SubmitButton';
import Problem from './components/Problem';

import useProblem from './hooks/useProblem';
import useInput from './hooks/useInput';

function App() {
  const { title, setTitle } = useInput();
  const { 
    problems, 
    addNewProblem,
    updateProblemTitle,
    updateProblemDetail,
    removeProblem,
    updateOptionTitle,
    addOption,
    removeOption,
    updateProblemType,
  } = useProblem();

  const submitResult = () => {
    console.log('설문조사 이름:', title ? title : '제목없는 설문조사');
    problems.forEach(problem => {
      const {title, id, detail, type, options} = problem;
      console.log('-'.repeat(40));
      console.log('id      :', id);
      console.log('title   :', title ? title : '제목없는 질문');
      console.log('detail  :', detail ? detail : '설명없는 질문');
      console.log('type    :', type);
      if (problem.type !== 'text') {
        console.log('options')
        options.forEach(option => {
          console.log('    *', option.name ? option.name : '이름없는 옵션');
        })
      }
    })
  }

  return (
    <div className="App">
      <Card>
        <Title 
          title={title}
          setTitle={setTitle}
        />
      </Card>
      {problems.map(problem => 
        <Problem 
          key={problem.id}
          problem={problem}
          removeProblem={removeProblem}
          updateProblemTitle={updateProblemTitle}
          updateProblemDetail={updateProblemDetail}
          updateOptionTitle={updateOptionTitle}
          updateProblemType={updateProblemType}
          addOption={addOption}
          removeOption={removeOption}
        />
      )}
      <NewButton addNewProblem={addNewProblem} />
      <SubmitButton onSubmit={submitResult} />
    </div>
  );
}

export default App;

const Card = styled.div`
  width: 100%;
  background-color: #FFF;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 5px 5px 2px rgba(0,0,0,.07);
`;