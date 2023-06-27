import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import computeColStyle from './computeColStyle.style';
import Div from '../div/Div';

const Col = React.forwardRef((props, ref) => {
  return (
    <ThemeConsumer>
      {(theme) => {
        const output = computeColStyle(props, theme);
        return (
          <BaseCol
            ref={ref}
            p={{ y: '0', x: `calc(${theme.grid.gutterWidth}/2)` }}
            {...output[0]}
            $styleArray={output[1]}
          />
        );
      }}
    </ThemeConsumer>
  );
});

const BaseCol = styled(Div)`
  ${(props) => ({ ...props.$styleArray })};
`;
export default Col;
