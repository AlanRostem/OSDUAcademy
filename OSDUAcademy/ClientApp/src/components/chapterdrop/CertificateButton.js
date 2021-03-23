import React, { Component } from 'react';

/**
 * The component returns a button that is set to be used as an extension of the "ChapterDrop" drop-down menu. 
 */

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