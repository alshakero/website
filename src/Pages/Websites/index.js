import React from 'react';
import {
    sideBySide,
    title,
    paddingWrapper,
    theRightSideList,
    badge,
    alignRight,
    paddedList
} from '../../sideBySide.module.css';
import { skewRight } from '../../generics.module.css';

import { Link } from 'react-router-dom';

export default function Websites() {
    return (
        <div className={paddingWrapper}>
            <div className={sideBySide}>
                <div className={title}>
                    <h1>Websites I run</h1>
                </div>
                <div className={theRightSideList}>
                    <ul className={paddedList}>
                        <li>
                            <a
                                href="https://www.360toolkit.co/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                360toolkit.co
                            </a>
                            <span> — </span>A rich toolkit that helps you
                            convert 360° photos from most major types back and
                            forth. It's multithreaded (well multi-web-workered)
                            and converts completely offline. Built with React.
                            My favorite pet project. Happy with the 5K monthly
                            visitors and the daily thank you messages (it solves
                            a quite niche & frusturating problem).
                        </li>
                        <li>
                            <a
                                href="https://zgps.live/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                ZGPS
                            </a>
                            <span> — </span>
                            Fleet and individual vehicle or person GPS tracking
                            SaaS. Buy a $50 device and have it tracked live
                            using (MQTT), with many features like track history
                            player, grouping, subselling and custom periodic
                            reports. I'm responsible for the frontend of the
                            project. Working with three good friends and we're
                            trying to compete with huge veteran companies in
                            this field, so close to succeeding. Built with React.
                        </li>
                        <li>
                            <a
                                href="http://www.hananosman.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                hananosman.com
                            </a>
                            <span> — </span>A personal website for Hanan Osman.
                            A Syrian architect residing in Warsaw, Poland. It
                            has a{' '}
                            <a
                                href="http://www.hananosman.com/airport-pre.php"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Unity Expirement
                            </a>{' '}
                            and a{' '}
                            <a
                                href="http://www.hananosman.com/full-house-tour/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                360° virtual tour
                            </a>
                            .
                        </li>
                        <li>
                            <a
                                href="https://syr-res.com"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Syrian Researchers{' '}
                                <span className={badge}>Arabic</span>
                            </a>
                            <span> — </span>
                            1M visitor/month science communicating website. with
                            17K articles and counting. An attempt to increase
                            the lacking Arabic scientific content on the Web.
                            Runs on a DigitalOcean VM. Built from scratch using
                            PHP and CodeIgniter, the website is single-person
                            effort. But the material is created by more than 500
                            amazing science-enthusiastic mostly Syrian young
                            inspiring people. The website is in Arabic but there
                            is an
                            <a
                                href="https://syr-res.com/about/english.html"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {' '}
                                About Us{' '}
                            </a>
                            page in English.
                        </li>
                    </ul>
                    <br />
                    <p className={[skewRight, alignRight].join(' ')}>
                        <Link to="/expirements">
                            I still make time for <em>fun</em> →
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
