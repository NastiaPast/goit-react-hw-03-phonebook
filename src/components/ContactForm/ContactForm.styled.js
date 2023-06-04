import styled from 'styled-components';
export const Button = styled.button`
  margin-bottom: 50px;
  min-width: 200px;
  padding: 10px 40px;
  background-color: #9ab5b9;
  color: #212121;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.88;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  &:hover {
    background-color: #2196f3;
  }
`;
export const Input = styled.input`
  margin: 0;
  margin-bottom: 25px;
  padding: 5px 10px;
  height: 30px;
  border: 1px solid rgba(62, 50, 90, 0.9);
  border-radius: 4px;
  outline: transparent;
  cursor: pointer;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border-color: #2196f3;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  font-size: 15px;
  line-height: 1.17;
  letter-spacing: 0.01em;
`;
