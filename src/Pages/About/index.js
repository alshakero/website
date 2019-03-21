import React from 'react';
import {
    sideBySide,
    profilePicture,
    paddingWrapper,
    aboutMe
} from './About.module.css';
import { skewRight } from '../../generics.module.css';
import { Link } from 'react-router-dom';
import PP from '../../Assets/PP.jpg';

export default function Contact() {
    return (
        <div className={paddingWrapper}>
            <div className={sideBySide}>
                <div className={profilePicture}>
                    <img alt="An portrait of Omar Alshaker" src={PP} />
                </div>
                <div className={aboutMe}>
                    <h1>About Me</h1>
                    <p>
                        I'm a JavaScript engineer. I use the two most{' '}
                        <em>seemingly</em> fighting technologies in parallel. I
                        use Web Components and Polymer by day and React and
                        friends by night. I jump between those two worlds every
                        day. Although I admit, I like the night time much
                        better. I have been writing JavaScript for more than eleven
                        years and TypeScript for two, although not as much.
                    </p>
                    <br />
                    <p className={skewRight}>
                        <Link to="/projects">Glance at my work →</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
