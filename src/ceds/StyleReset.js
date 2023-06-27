import React, { Component } from 'react';
import { ThemeConsumer } from 'styled-components';

class StyleReset extends Component {
  render() {
    return (
      <ThemeConsumer>
        {(theme) => {
          return (
            <>
              <link
                href='https://fonts.googleapis.com/css2?family=Rubik&display=block'
                rel='stylesheet'
              />
              <style
                dangerouslySetInnerHTML={{
                  __html: `html { font-size: 16px }   body {  background: white; font-size: ${theme.textSize.size.body}; line-height: ${theme.textSize.height.body}; -webkit-font-smoothing: antialiased; font-family:${theme.fontFamily.primary}; margin: 0; color: ${theme.colors.black}; } p, h1, h2, h3, h4, h5, h6 { padding: 0; margin: 0; font-size: ${theme.textSize.size.body}; line-height: ${theme.textSize.height.body};} input { border: none; font-family: inherit } a {
            margin: 0;
            padding: 0;
            color: ${theme.colors.info700};
            cursor: pointer;
            text-decoration: none;
          } button { border: none } pre {
            margin: 0; padding: 1rem; font-size: ${theme.textSize.size.body};
            line-height: ${theme.textSize.height.body};
            font-family: ${theme.fontFamily.code};
          } :focus {outline: none;}`,
                }}
              />
            </>
          );
        }}
      </ThemeConsumer>
    );
  }
}

export default StyleReset;
