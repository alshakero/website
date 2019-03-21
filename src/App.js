import React, { useState } from 'react';
import { carousel } from './App.module.css';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RoutesMap from './RoutesMap';
import NavButtons from './Components/NavButtons';

const routesPathNames = Object.keys(RoutesMap);
const routes = Object.values(RoutesMap);

const history = createHistory();

let transitioningMarker = () => {};

document.title = RoutesMap[window.location.pathname].title;

history.listen(() => {
    transitioningMarker(true);
    setTimeout(() => {
        transitioningMarker(false);
    }, 1850);
    document.title = RoutesMap[window.location.pathname].title;
});

function firstPageMargin(pageNumber = 0) {
    return { marginLeft: `calc(-${pageNumber * 100}% - ${pageNumber * 2}rem)` };
}

export default function App() {
    const [transitioning, setTransitioning] = useState(false);
    transitioningMarker = setTransitioning;
    const pageNumber = routesPathNames.indexOf(window.location.pathname);

    return (
        <Router history={history}>
            <Route
                render={() => (
                    <div
                        className={carousel}
                        data-transitioning={transitioning}
                    >
                        {routes.map(({ Page }, index) => (
                            <Page
                                key={index}
                                style={firstPageMargin(pageNumber)}
                            />
                        ))}
                        <NavButtons
                            routesMap={RoutesMap}
                            currentPageNumber={pageNumber}
                        />
                    </div>
                )}
            />
        </Router>
    );
}
