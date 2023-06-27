// libs
import styled, { css } from 'styled-components';
// theme
import THEME from '../../core/THEME';
//func
import findDirection from '../../style-functions/findDirection';
import makeResponsive from '../../style-functions/makeResponsive';

const withShadow = css`
  box-shadow: 0px 4px 24px -10px rgba(2, 24, 110, 0.2);

  :active {
    box-shadow: none;
  }
`;

export const PrimaryStyles = css`
  border: none;
  background-color: ${THEME.colors.GBTInteract};
  color: ${THEME.colors.white};
  ${withShadow};
  &:active {
    background-color: ${THEME.colors.GBTActive};
  }
`;

export const SecondaryStyles = css`
  border: 1px solid ${THEME.colors.GBTInteract};
  background-color: ${THEME.colors.white};

  ${withShadow};
  &:hover {
    background-color: ${THEME.colors.gray100};
  }
  &:active {
    background-color: ${THEME.colors.GBTCandydust002};
  }
`;

export const TertiaryStyles = css`
  border: none;
  background-color: transparent;

  &:hover {
    background-color: ${THEME.colors.GBTCandydust002};
  }
  &:active {
    background-color: ${THEME.colors.GBTCandydust003};
  }
`;

export const PrimaryDisabledStyles = css`
  border: none;
  background-color: ${THEME.colors.GBTCandydust002};
  color: ${THEME.colors.GBTBlack};
`;

export const SecondaryDisabledStyles = css`
  border: 1px solid ${THEME.colors.GBTCandydust004};
  background-color: ${THEME.colors.white};
  color: ${THEME.colors.GBTBlack};
`;

export const TertiaryDisabledStyles = css`
  border: none;
  background-color: transparent;
  color: ${THEME.colors.GBTBlack};
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  outline: 0;
  user-select: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  mix-blend-mode: normal;

  cursor: pointer;
  ${findDirection('8px 16px', 'padding')}
  ${makeResponsive(THEME.fontFamily.secondary, 'font-family')};

  ${({ layoutStyles }) => layoutStyles && layoutStyles}
  color: ${({ color }) => (color ? THEME.colors[color] : THEME.colors.white)};
  background-color: ${({ bgcolor }) => bgcolor && THEME.colors[bgcolor]};
`;
