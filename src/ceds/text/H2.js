import React from 'react';
import styled from 'styled-components';
import { ThemeConsumer } from 'styled-components';
import computeTextStyle from './Text.style';

const H2 = React.forwardRef((props, ref) => {
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

const BasicText = styled.h2`
  ${(props) => ({ ...props.$styleArray })};
`;

H2.defaultProps = {
  tag: 'h2',
  fontFamily: 'primary',
  letterSpacing: '0.01em',
  lineHeight: '33px',
  textWeight: 'normal',
  textSize: '28px',
  textColor: 'GBTBlack',
};

export default H2;
