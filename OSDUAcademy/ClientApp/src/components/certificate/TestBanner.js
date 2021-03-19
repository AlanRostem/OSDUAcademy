import React, {Component} from 'react';

export class TestBanner extends Component {
    static displayName = TestBanner.name;

    render() {
        return (
            <div className="certificate-banner">
                <h1>Certificate</h1>
                <a href="/"><i className="fa fa-chevron-left" aria-hidden="true"/> Course</a>
            </div>
        );
    }
}