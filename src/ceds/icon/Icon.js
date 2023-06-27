import React, { useState } from 'react';
import computeIconStyle from './Icon.style';
import { iconPaths } from './iconPaths';
import styled, { ThemeConsumer } from 'styled-components';

const Icon = React.forwardRef((props, ref) => {
  const [hovered, setHover] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <ThemeConsumer>
      {(theme) => {
        const CapName = capitalizeFirstLetter(props.name);
        const IconName = iconPaths[CapName];
        const output = computeIconStyle(props, theme);
        return (
          <BasicIcon
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
            ref={ref}
            viewBox='0 0 24 24'
            {...output[0]}
            $styleArray={output[1]}
          >
            <IconName
              color={
                theme.colors[
                  hovered ? props.hoverColor || props.color : props.color
                ] || props.color
              }
            />
          </BasicIcon>
        );
      }}
    </ThemeConsumer>
  );
});

const BasicIcon = styled.svg`
  ${(props) => ({ ...props.$styleArray })};
`;

Icon.defaultProps = {
  size: '1.5rem',
  color: 'black',

  overflow: 'visible',
};

export default Icon;
