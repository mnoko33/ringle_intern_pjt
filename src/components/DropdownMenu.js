import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

function DropdownMenu(props) {
  const dropdown = useRef();
  const {
    problemId,
    setIsVisible,
    selectedItem,
    setSelectedItem,
  } = props;

  const onClickItem = (item) => {
    setSelectedItem(problemId, item);
    setIsVisible(false);
  }

  const onClickOutside = (e) => {
    if (!dropdown.current.contains(e.target)) {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', onClickOutside);
    return () => {
      window.removeEventListener('click', onClickOutside);
    }
  }, [])

  const items = ['text', 'checkbox', 'radio'];

  return (
    <Wrapper ref={dropdown}>
      {items.map((item, idx) => 
        <DropdownItem key={idx} onClick={() => onClickItem(item)}>
          <ItemName isSelected={selectedItem === item}>{item}</ItemName>
        </DropdownItem>
      )}
    </Wrapper>
  )
}

export default DropdownMenu;

const Wrapper = styled.div`
  position: absolute;
  width: 100px;
  background-color: #FFF;
  border: 1px solid #000;
  right: 0;
`;

const DropdownItem = styled.div`
  width: 100%;
  margin: 5px auto;
  padding: 0 5px;
  &:hover {
    cursor: pointer;
    background-color: #ECECEC;
  }
`;

const ItemName = styled.span`
  color: ${props => props.isSelected ? 'red' : 'black'}
`;