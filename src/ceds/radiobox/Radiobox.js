import React from 'react';
import styled from 'styled-components';

const Radiobox = React.forwardRef((props, ref) => {
  const { m, size, activeColor, inactiveColor, isLoading, checked, ...rest } =
    props;

  return (
    <>
      <RadioboxInput type='radio' ref={ref} {...rest} checked={checked} />
    </>
  );
});

const RadioboxInput = styled.input`
  display: none;
  background: #edf2f7;
`;
Radiobox.defaultProps = {
  cursor: 'pointer',
  m: { r: '0.5rem' },
  size: '20px',
  inactiveColor: 'gray500',
  activeColor: 'info700',
};

export default Radiobox;
