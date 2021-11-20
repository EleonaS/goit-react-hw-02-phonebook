import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 18px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: green;
    /*font-weight:600;    
  font-size: 24px;*/
  }
`;

const Button = styled.button`
  margin-left: 20px;
  width: 100px;
  height: 30px;
  vertical-align: text-bottom;
  outline: none;
  border-width: 1px;
  border-radius: 7px;
  background-color: white;
  font-size: 18px;
  padding: 0 9px;
  color: black;
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &:hover {
    border-color: gray;
    color: green;
    font-weight: 600;
    background-color: white;
  }
`;

export { StyledList, ListItem, Button };
