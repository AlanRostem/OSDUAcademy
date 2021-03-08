import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class AppContainer extends Component {
    static displayName = AppContainer.name;

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
