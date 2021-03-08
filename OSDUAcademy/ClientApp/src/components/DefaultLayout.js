import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { DefaultNavMenu } from './DefaultNavMenu';

export class DefaultLayout extends Component {
  static displayName = DefaultLayout.name;

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
