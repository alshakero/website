import React from 'react';
import {
    sideBySide,
    title,
    paddingWrapper,
    theRightSideList,
    paddedList
} from '../../sideBySide.module.css';
import { skewRight } from '../../generics.module.css';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className={paddingWrapper}>
            <div className={sideBySide}>
                <div className={title}>
                    <h1>Projects I maintain</h1>
                </div>
                <div className={theRightSideList}>
                    <div>
                        <ul className={paddedList}>
                            <li>
                                <a
                                    href="https://github.com/Starcounter-Jack/JSON-Patch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    JSON-Patch
                                </a>
                                <span> — </span>
                                Lean and mean TypeScript implementation of the
                                JSON-Patch standard (RFC 6902). Observe and
                                update JSON documents using delta patches. The
                                fastest available alternative.
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Palindrom/JSONPatcherProxy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    JSONPatcherProxy
                                </a>
                                <span> — </span>
                                ES6 proxy-powered JSON Object synchronous
                                observer that emits JSON patches upon your
                                object tree mutation. Deep or shallow. The
                                fastest available alternative.
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Palindrom/palindrom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Palindrom
                                </a>
                                <span> — </span>
                                Library for two-way data binding between local
                                and remote JSON models. It uses JSON-Patch for
                                data updates and Operational Transformation for
                                versioning and data consistency. It operates via
                                HTTP or WebSocket or both.
                            </li>
                            <li>
                                <span
                                    title="Discontinued"
                                    role="img"
                                    aria-label="Discontinued"
                                >
                                    ⚠️&nbsp;
                                </span>
                                <a
                                    href="https://github.com/alshakero/ez-s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ez-s.io
                                </a>
                                <span> — </span>
                                Run a green-badge local HTTPS server with zero
                                configuration; no certificate creation, no
                                tunnels and no hassle.
                            </li>
                            <li>
                                <a
                                    href="https://github.com/alshakero/json-squash"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    JSON-Squash
                                </a>
                                <span> — </span>
                                Squash JSON-Patch operations patch into a
                                mathematically equivalent yet smaller patch.
                            </li>
                            <li>
                                <span
                                    title="Unmaintained"
                                    role="img"
                                    aria-label="Unmaintained"
                                >
                                    ⚠️&nbsp;
                                </span>
                                <a
                                    href="https://perf.zone/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    perf.zone
                                </a>
                                <span> — </span>
                                Sleek JavaScript benchmarking with NPM modules
                                support.
                                <br />
                                <em>
                                    <small>
                                        JSPerf was constantly down for a while
                                        so I built this in a weekend and didn't
                                        maintain it much later
                                    </small>
                                </em>
                            </li>
                            <br />
                            <div className={skewRight}>
                                <Link to="/websites">
                                    And I run some websites →
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
