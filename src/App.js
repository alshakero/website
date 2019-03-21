import React, { useState } from 'react';
import { carousel, slidingChild } from './App.module.css';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RoutesMap from './RoutesMap';
import NavButtons from './Components/NavButtons';
import Sheet from './Components/Sheet';
import NotFoundCanvas from './Pages/NotFoundCanvas';

function updateTitle() {
    const route = RoutesMap[window.location.pathname];
    if (route) {
        document.title = RoutesMap[window.location.pathname].title;
    } else {
        document.title = 'Omar Alshaker - 404';
    }
}
const routesPathNames = Object.keys(RoutesMap);
const routes = Object.values(RoutesMap);

const history = createHistory();

let transitioningMarker = () => {};

updateTitle();

history.listen(() => {
    transitioningMarker(true);
    setTimeout(() => {
        transitioningMarker(false);
    }, 1850);
    updateTitle();
});

function firstPageMargin(pageNumber = 0) {
    return { transform: `translateX(-${pageNumber * window.innerWidth}px)` };
}

export default function App() {
    const [transitioning, setTransitioning] = useState(false);
    transitioningMarker = setTransitioning;
    const pageNumber = routesPathNames.indexOf(window.location.pathname);

    return (
        <Router history={history}>
            <>
                <div className={carousel} data-transitioning={transitioning}>
                    <div className={slidingChild} style={firstPageMargin(pageNumber)}>
                        {RoutesMap[window.location.pathname] ? (
                            routes.map(({ Page }) => <Page />)
                        ) : (
                            <Sheet>
                                <NotFoundCanvas />
                            </Sheet>
                        )}
                    </div>
                </div>
                <NavButtons
                    routesMap={RoutesMap}
                    currentPageNumber={pageNumber}
                />
            </>
        </Router>
    );
}
