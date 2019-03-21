import React from 'react';
import Sheet from './Components/Sheet/';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Experiments from './Pages/Experiments';
import Websites from './Pages/Websites';
import About from './Pages/About';

export default {
    '/contact': {
        Page({ style }) {
            return (
                <Sheet style={style}>
                    <Contact />
                </Sheet>
            );
        },
        title: 'Contact'
    },
    '/': {
        title: 'Omar Alshaker - Home',
        Page() {
            return (
                <Sheet>
                    <Home />
                </Sheet>
            );
        },
        navigationLabel: (
            <span
                aria-label="Home"
                title="Home page"
                style={{ fontWeight: 300, fontSize: '1.52em' }}
            >
                ⌂
            </span>
        )
    },
    '/about': {
        Page() {
            return (
                <Sheet>
                    <About />
                </Sheet>
            );
        },
        title: 'About Me'
    },
    '/projects': {
        Page() {
            return (
                <Sheet>
                    <Projects />
                </Sheet>
            );
        },
        title: 'Projects I Maintain'
    },
    
    '/websites': {
        Page() {
            return (
                <Sheet>
                    <Websites />
                </Sheet>
            );
        },

        title: 'Websites I Run'
    },

    '/expirements': {
        Page() {
            return (
                <Sheet>
                    <Experiments />
                </Sheet>
            );
        },

        title: 'Experiments for Fun'
    }
    
};
