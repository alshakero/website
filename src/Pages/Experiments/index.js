import React from 'react';
import {
    sideBySide,
    title,
    paddingWrapper,
    theRightSideList
} from '../../sideBySide.module.css';

export default function Experiments() {
    return (
        <div className={paddingWrapper}>
            <div className={sideBySide}>
                <div className={title}>
                    <h1>Experiments</h1>
                </div>
                <div className={theRightSideList}>
                    <h3>ThreeJS</h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.omaralshaker.com/psyball.php"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PsyBall
                            </a>
                            <span> — </span>A psychedelic Audio-Reactive Sphere
                            - HTML5 Audio API and ThreeJS experiment.
                        </li>{' '}
                    </ul>
                    <h3>Web Canvas API</h3>
                    <ul>
                        <li>
                            <a
                                href="https://alshakero.github.io/Codevember/3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Drawing video-harvested dancing data
                            </a>
                            <span> — </span>A set of polygons were extracted
                            from a dance video using OpenCV, then were drawn on
                            HTMLCanvas.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a
                                href="https://www.omaralshaker.com/lyricart.php"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LyricArt
                            </a>
                            <span> — </span>
                            Canvas 2D manipulation and Audio API Expirement.
                            Words are transcribed using IBM's Watson API.
                        </li>

                        <li>
                            <a
                                href="https://alshakero.github.io/Codevember/2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Archimedean spiral
                            </a>
                            <span> — </span>
                            Archimedean spiral with two binural audio
                            oscillators.
                        </li>
                        <li>
                            <a
                                href="https://alshakero.github.io/Codevember/1/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Simple math fun
                            </a>
                            <span> — </span>
                            See polar flower blooming before your eyes.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
