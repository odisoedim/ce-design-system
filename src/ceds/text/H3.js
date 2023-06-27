import React from 'react';
import styled from 'styled-components';
import { ThemeConsumer } from 'styled-components';
import computeTextStyle from './Text.style';

const H3 = React.forwardRef((props, ref) => {
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

const BasicText = styled.h3`
  ${(props) => ({ ...props.$styleArray })};
`;

H3.defaultProps = {
  tag: 'h3',
  fontFamily: 'primary',
  letterSpacing: '0.015em',
  lineHeight: '26px',
  textWeight: '500',
  textSize: '20px',
  textColor: 'GBTBlack',
};

export default H3;
