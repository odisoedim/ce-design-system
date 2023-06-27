import React from 'react';
import computeDivStyle from './computeDivStyle.style';
import styled, { ThemeConsumer } from 'styled-components';
const Div = React.forwardRef((props, ref) => {
  return (
    <ThemeConsumer>
      {(theme) => {
        const output = computeDivStyle(props, theme);

        return (
          <BaseDiv
            ref={ref}
            as={props.tag}
            {...output[0]}
            $styleArray={output[1]}
          />
        );
      }}
    </ThemeConsumer>
  );
});

const BaseDiv = styled.div`
  ${(props) => ({ ...props.$styleArray })};
`;

Div.defaultProps = {
  tag: 'div',
};

export default Div;
