import React from 'react';
// libs
import Loader from 'react-loader-spinner';
import Div from '../div/Div';

// theme
import {
  StyledButton,
  PrimaryStyles,
  PrimaryDisabledStyles,
  SecondaryStyles,
  SecondaryDisabledStyles,
  TertiaryStyles,
  TertiaryDisabledStyles,
} from './styles';

const EButtonLayouts = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const getButtonStyles = (layout = 'primary') => {
  switch (layout) {
    case EButtonLayouts.PRIMARY:
      return PrimaryStyles;
    case EButtonLayouts.SECONDARY:
      return SecondaryStyles;
    case EButtonLayouts.TERTIARY:
      return TertiaryStyles;
    default:
      return TertiaryStyles;
  }
};

const getButtonDisabledStyles = (layout = 'primary') => {
  switch (layout) {
    case EButtonLayouts.PRIMARY:
      return PrimaryDisabledStyles;
    case EButtonLayouts.SECONDARY:
      return SecondaryDisabledStyles;
    case EButtonLayouts.TERTIARY:
      return TertiaryDisabledStyles;
    default:
      return TertiaryDisabledStyles;
  }
};

const ButtonComponent = ({
  children,
  layout,
  disabled,
  isLoading,
  loaderProps,
  color,
  suffix,
  prefix,
  ...rest
}) => {
  const styles = disabled
    ? getButtonDisabledStyles(layout)
    : getButtonStyles(layout);

  return (
    <StyledButton
      layoutStyles={styles}
      disabled={disabled || isLoading}
      color={color}
      {...rest}
    >
      {isLoading ? (
        <Loader
          height={'15px'}
          visible
          type='ThreeDots'
          // color={color === 'yellow' ? colors.loader : colors.white}
          {...loaderProps}
        />
      ) : (
        <>
          {prefix && (
            <Div pos='relative' d='flex' align='center'>
              {prefix}
            </Div>
          )}
          <Div p={{ l: `${prefix && '8px'}`, r: `${suffix && '8px'}` }}>
            {children}
          </Div>
          {suffix && (
            <Div pos='relative' d='flex' align='center'>
              {suffix}
            </Div>
          )}
        </>
      )}
    </StyledButton>
  );
};

ButtonComponent.defaultProps = {
  loaderProps: {},
};

export default ButtonComponent;
