import React from 'react';
import { useHover } from '../../hooks/useHover';
import { Container, Tool } from './styles';

interface Props {
  text: string;
  children: any;
}

export const Tooltip: React.FC<Props> = ({ text, children }) => {
  const [hovering, attrs] = useHover();
  //attr is onMouseOut and onMouseOver
  return (
    <Container {...attrs}>
      {hovering === true && <Tool>{text}</Tool>}
      {children}
    </Container>
  );
};
