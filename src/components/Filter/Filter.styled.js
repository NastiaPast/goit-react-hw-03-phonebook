import styled from 'styled-components';
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
export const Label = styled.label`
  font-size: 15px;
  line-height: 1.17;
  letter-spacing: 0.01em;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
