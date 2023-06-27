import React from 'react';
import styled from 'styled-components';
import { ThemeConsumer } from 'styled-components';
import computeTextStyle from './Text.style';

const H4 = React.forwardRef((props, ref) => {
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

const BasicText = styled.h4`
  ${(props) => ({ ...props.$styleArray })};
`;

H4.defaultProps = {
  tag: 'h4',
  fontFamily: 'primary',
  letterSpacing: '0.03em',
  lineHeight: '26px',
  textWeight: '500',
  textSize: '16px',
  textColor: 'GBTBlack',
};

export default H4;
