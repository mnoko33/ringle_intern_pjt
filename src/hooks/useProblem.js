import { useState, useCallback } from 'react';

function useProblem() {
  const [problems, setProblems] = useState([]);
  const [nextId, setNextId] = useState(1);
  const DEFAULT_PROBLEM = {
    id: 0,
    title: '',
    detail: '',
    type: 'text',
    options: [
      { name: '옵션1' },
    ],
  }
  const addNewProblem = useCallback(
    () => {
    const newProblem = { ...DEFAULT_PROBLEM, id: nextId, options: [{name: '옵션1'}] };
    setNextId(nextId => nextId + 1);
    setProblems(problems => [...problems, newProblem]);
  })

  const updateProblemTitle = (problemId, newTitle) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          title: newTitle
        }
      }
      return problem;
    }))
  }

  const updateProblemDetail = (problemId, newDetail) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          detail: newDetail
        }
      }
      return problem;
    }))
  }

  const removeProblem = (problemId) => {
    setProblems(problems => problems.filter(problem => problem.id !== problemId)) 
  }

  const updateOptionTitle = (problemId, optionIdx, newOptionTitle) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          options: problem.options.map((option, idx) => {
            if (idx === optionIdx) {
              return {
                name: newOptionTitle
              };
            }
            return option;
          })
        }
      }
      return problem;
    }))
  }

  const addOption = (problemId, newOption) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          options: [...problem.options, newOption]
        }
      }
      return problem;
    }))
  }

  const removeOption = (problemId, optionIdx) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          options: problem.options.filter((option, idx) => idx !== optionIdx)
        }
      }
      return problem;
    }))
  }

  const updateProblemType = (problemId, problemType) => {
    setProblems(problems => problems.map(problem => {
      if (problem.id === problemId) {
        return {
          ...problem,
          options: [{name: '옵션1'}],
          type: problemType,
        }
      }
      return problem;
    }))
  }

  return { 
    problems, 
    addNewProblem,
    updateProblemTitle,
    updateProblemDetail,
    removeProblem,
    updateOptionTitle,
    addOption,
    removeOption,
    updateProblemType,
  }
}

export default useProblem;