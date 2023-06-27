import React, { Component } from 'react';

import {
  StyleReset,
  ThemeProvider,
  Icon,
  Div,
  Radiobox,
  Row,
  Col,
  THEME,
  Container,
  H2,
  Body,
} from '../src/index';
import TestModal from './Modal';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
        <StyleReset />
        <Container>
          <Row>
            <Div p='1rem' bg='warning500'>
              <Col size='4'>
                <H2>Ganbatte</H2>
              </Col>
            </Div>
            <Col>
              <Body>
                Ganbatte is a product enables city officials or consultants to
                identify insights in their city, assess the circularity of the
                city, explore solutions and case studies to drive circular
                change.
              </Body>

              <Icon name='Emissions' />
            </Col>
          </Row>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
