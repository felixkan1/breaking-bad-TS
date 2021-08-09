import React from 'react';
import { useHover } from '../hooks/useHover';

interface Props {
  text: string;
  children: HTMLDivElement;
}

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100px',
    bottom: '90%',
    left: '0%',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};

export const Tooltip: React.FC<Props> = ({ text, children }) => {
  const [hovering, attrs] = useHover();
  //attr is onMouseOut and onMouseOver
  return (
    <div>hi</div>
    // <div style={styles.container} {...attrs}>
    //   {hovering === true && <div style={styles.tooltip}>{text}</div>}
    //   {children}
    // </div>
  );
};
