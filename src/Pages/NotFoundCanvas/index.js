import React, { useEffect, useRef } from 'react';
import { wrapper } from './NotFound.module.css';

let currentA = 0.5;
let currentB = 0.5;

let centerx = window.innerWidth / 2;
let centery = window.innerHeight / 2;

let currentPureA = 0;
let currentPureB = 0;

let context;

let keepDrawing = true;

function plotSpiral() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.moveTo(centerx, centery);

    context.beginPath();

    const a = currentA * 100;
    const b = currentB * 10;
    for (let i = a; i < a + 6000; i++) {
        const angle = 0.1 * i;
        const x = centerx + (a + b * angle) * Math.cos(angle);
        const y = centery + (a + b * angle) * Math.sin(angle);
        context.lineWidth = currentA * 40;
        context.lineTo(x, y);
    }

    context.strokeStyle = 'hsl(' + currentPureA * 360 + ',100%,60%)';
    context.stroke();
    keepDrawing && requestAnimationFrame(plotSpiral);
}

export default function NotFoundCanvas() {
    const ref = useRef(null);
    useEffect(() => {
        keepDrawing = true;
        const canvas = ref.current;

        const windowResize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            centerx = window.innerWidth / 2;
            centery = window.innerHeight / 2;
        };
        windowResize();

        context = canvas.getContext('2d');
        plotSpiral(context);

        const mouseMove = event => {
            currentPureA = event.clientX / window.innerWidth;
            currentPureB = event.clientY / window.innerHeight;

            currentA = Math.pow(currentPureA + 0.5, 2);
            currentB = Math.pow(currentPureB + 0.5, 2);
        };
        const deviceOrientation = event => {
            currentPureA = event.gamma / 90;
            currentPureB = event.beta / 90;

            currentA = Math.pow(currentPureA + 0.5, 2);
            currentB = Math.pow(currentPureB + 0.5, 2);
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('resize', windowResize);
        window.addEventListener('deviceorientation', deviceOrientation);

        return () => {
            keepDrawing = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('resize', windowResize);
            window.removeEventListener('resize', deviceOrientation);
        };
    });
    return (
        <div className={wrapper}>
            <canvas ref={ref} />
            <h1>404 NOT FOUND</h1>
        </div>
    );
}
