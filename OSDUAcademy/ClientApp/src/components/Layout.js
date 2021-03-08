import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { DefaultNavMenu } from './DefaultNavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <DefaultNavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
