import React from 'react';
import computeImageStyle from './Image.style';
import styled, { ThemeConsumer } from 'styled-components';
const Image = React.forwardRef((props, ref) => {
  return (
    <ThemeConsumer>
      {(theme) => {
        const output = computeImageStyle(props, theme);
        return <BaseImg ref={ref} {...output[0]} $styleArray={output[1]} />;
      }}
    </ThemeConsumer>
  );
});

const BaseImg = styled.img`
  ${(props) => ({ ...props.$styleArray })};
`;

Image.defaultProps = {
  w: '100%',
};

export default Image;
