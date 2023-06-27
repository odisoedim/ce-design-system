import React from 'react';
import styled from 'styled-components';
import { ThemeConsumer } from 'styled-components';
import computeTextStyle from './Text.style';

const SmallText = React.forwardRef((props, ref) => {
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

SmallText.defaultProps = {
  tag: 'p',
  fontFamily: 'primary',
  lineHeight: '17px',
  textWeight: '400',
  textSize: '14px',
  textColor: 'GBTBlack',
};

export default SmallText;
