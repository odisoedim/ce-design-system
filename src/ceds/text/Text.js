import React from 'react';
import styled from 'styled-components';
import { ThemeConsumer } from 'styled-components';
import computeTextStyle from './Text.style';

const Text = React.forwardRef((props, ref) => {
  return (
    <ThemeConsumer>
      {(theme) => {
        const output = computeTextStyle(props, theme);

        return (
          <BasicText
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

const BasicText = styled.p`
  ${(props) => ({ ...props.$styleArray })};
`;

Text.defaultProps = {
  tag: 'p',
  m: '0',
  p: '0',
};

export default Text;
