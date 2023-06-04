import styled from 'styled-components';
export const Button = styled.button`
  width: 150px;
  padding: 5px 5px;
  background-color: #68128a;
  color: #f5f4fa;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.88;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) color 250ms
    cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin-bottom: 40px;
  &:hover {
    background-color: #ab84bb;
    color: #212121;
  }
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: baseline;
  gap: 15px;
`;
export const Text = styled.p`
  margin: 0;
  margin-bottom: 10px;
  width: 150px;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  text-align: center;
  font-weight: 500;
`;
