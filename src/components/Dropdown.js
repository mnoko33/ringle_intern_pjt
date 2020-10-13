import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';

function Dropdown({problemId, selectedItem, setSelectedItem}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Wrapper>
      <DropdownButton onClick={() => setIsVisible(true)}>
        {`문제유형: ${selectedItem} 🔽`}
      </DropdownButton>
      {isVisible &&
        <DropdownMenu
          problemId={problemId}
          setIsVisible={setIsVisible}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      }
    </Wrapper>
  )
}

export default Dropdown;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled.button`
  all: unset;
  text-align: center;
  color: #FFF;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`;

