import styled from 'styled-components';

export const Container = styled.div`
  position: 'relative';
  display: 'flex';
`;

export const Tool = styled.div`
  boxsizing: 'border-box';
  position: 'absolute';
  width: '100px';
  bottom: '90%';
  left: '0%';
  borderradius: '3px';
  backgroundcolor: 'hsla(0, 0%, 20%, 0.9)';
  padding: '7px';
  marginbottom: '5px';
  color: '#fff';
  textalign: 'center';
  fontsize: '14px';
`;
