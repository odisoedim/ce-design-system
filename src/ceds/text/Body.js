import React from 'react';
import styled from 'styled-components';
import { ThemeConsumer } from 'styled-components';
import computeTextStyle from './Text.style';

const Body = React.forwardRef((props, ref) => {
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

Body.defaultProps = {
  tag: 'p',
  fontFamily: 'primary',
  letterSpacing: '0.02em',
  lineHeight: '26px',
  textWeight: '300',
  textSize: '16px',
  textColor: 'GBTBlack',
};

export default Body;
