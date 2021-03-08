import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { DefaultNavMenu } from './DefaultNavMenu';

export class SimpleLayout extends Component {
  static displayName = SimpleLayout.name;

  render () {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}