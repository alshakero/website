import React, { useState } from 'react';
import {
    sideBySide,
    profilePicture,
    paddingWrapper,
    contactInfo,
    emailSvg,
    doneText,
    checkmark,
    goHome
} from './Contact.module.css';
import { skewRight } from '../../generics.module.css';

import { Link } from 'react-router-dom';
import PP from '../../Assets/PP.jpg';

async function Copy(setCopyingStateCallback) {
    setCopyingStateCallback(1);
    var input = document.createElement('input');
    // email obfuscation
    input.value = 'o#m#a#r##@#omar#al#sh#a#ker.#co#m'.replace(/#/g, '');
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    setTimeout(setCopyingStateCallback, 5000, 0);
}

export default function Contact() {
    const [copyingState, setCopyingState] = useState(0);
    return (
        <div className={paddingWrapper}>
            <div className={sideBySide}>
                <div className={profilePicture}>
                    <img alt="Portrait of Omar Alshaker" src={PP} />
                </div>
                <div className={contactInfo}>
                    <h1>Contact</h1>
                    <span>Email me</span>
                    <svg
                        onClick={() => Copy(setCopyingState)}
                        className={emailSvg}
                        viewBox="0 0 520 50"
                        data-is-copying={copyingState}
                    >
                        <g>
                            <g className={doneText}>
                                <g className={checkmark}>
                                    <rect
                                        x="0"
                                        transform="rotate(-45) translate(20 -30)"
                                        y="10"
                                        width="5"
                                        height="15"
                                    />
                                    <rect
                                        x="0"
                                        transform="rotate(-45) translate(20 -30)"
                                        y="20"
                                        width="25"
                                        height="5"
                                    />
                                </g>
                                <text
                                    fill="lightgreen"
                                    fontSize="33pt"
                                    fontWeight="600"
                                    x="40"
                                    y="-14"
                                >
                                    copied
                                </text>
                            </g>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="0"
                                y="32"
                            >
                                omar
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="1000"
                                y="32"
                            >
                                !
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="1000"
                                y="32"
                            >
                                &
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="1000"
                                y="32"
                            >
                                #
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="1000"
                                y="32"
                            >
                                %
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="100"
                                y="32"
                            >
                                @
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="1000"
                                y="32"
                            >
                                `
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="1000"
                                y="32"
                            >
                                _
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="1000"
                                y="32"
                            >
                                +
                            </text>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="145"
                                y="32"
                            >
                                omaralshaker.com
                            </text>
                        </g>
                        <g>
                            <text
                                fontSize="33pt"
                                fill="lightgreen"
                                fontWeight="600"
                                x="0"
                                y="90"
                            >
                                Click to copy
                            </text>
                        </g>
                    </svg>
                    <span>Tweet at me</span>
                    <p>
                        <a
                            style={{ color: 'lightgreen' }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/alshakero"
                        >
                            @alshakero
                        </a>
                    </p>
                    <div className={[goHome, skewRight].join(' ')}>
                        <Link to="/">Home →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
