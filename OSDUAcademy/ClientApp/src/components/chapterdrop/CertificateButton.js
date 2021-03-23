import React, { Component } from 'react';

export class CertificateButton extends Component {
    static displayName = CertificateButton.name;

    render () {
        return (
            <div className="course-drop">
                <button
                    className="drop-button slightly-dim">
                    <h3>
                        Certification Test
                    </h3>
                </button>
            </div>
        );
    }
}