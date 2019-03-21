import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navButtonsWrapper, navArrow } from './NavButtons.module.css';

export default function NavButtons({ routesMap = {}, currentPageNumber }) {
    const pathnames = Object.keys(routesMap);
    const [title, setTitle] = useState('');
    return (
        <nav className={navButtonsWrapper} onMouseOut={() => setTitle('')}>
            <div>
                <h3 style={{ opacity: title === '' ? 0 : 1 }}>&nbsp;{title}</h3>
            </div>
            {pathnames.map((pathname, index) => (
                <Link
                    onMouseOver={() => setTitle(routesMap[pathname].title)}
                    key={index}
                    to={pathname}
                    title={routesMap[pathname].title}
                    data-current={currentPageNumber === index}
                >
                    {routesMap[pathname].navigationLabel || (
                        <span aria-label="">●</span>
                    )}
                </Link>
            ))}
            <div
                className={navArrow}
                style={{
                    visibility:
                        currentPageNumber < pathnames.length - 1
                            ? 'visible'
                            : 'hidden'
                }}
            >
                <Link to={pathnames[currentPageNumber + 1] || ''}><span aria-label="">→</span></Link>
            </div>
        </nav>
    );
}
