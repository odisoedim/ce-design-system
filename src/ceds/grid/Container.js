import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Div from '../div/Div';
const Container = React.forwardRef((props, ref) => {
  const context = useContext(ThemeContext);

  return <Div ref={ref} maxW={context.grid.containerMaxWidth} {...props} />;
});

Container.defaultProps = {
  w: '100%',
  m: { y: 0, x: 'auto' },
  p: { y: 0, x: 0 },
};

export default Container;
