import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid red;
  padding: 10px 20px;
  background: none;
  margin: 0 10px 0 0;
  color: red;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease 0s;
  &:hover {
    color: white;
    background red; 
  }
`
export default Button
