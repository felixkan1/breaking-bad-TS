import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const Tool = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100px;
  bottom: 90%;
  left: 0%;
  border-radius: 3px;
  background-color: hsla(0, 0%, 20%, 0.9);
  padding: 7px;
  margin-bottom: 5px;
  color: #fff;
  text-align: center;
  font-size: 14px;
`;
