import React from 'react';
import {nameSVG, animatedText} from './Home.module.css';

export default function AnimatedName() {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            className={nameSVG}
            viewBox="0 0 600 320"
            xmlSpace="preserve"
        >
            <defs>
                <path
                    id="path"
                    fill="none"
                    strokeWidth="2"
                    stroke="none"
                    d="M-15.8-52.7C91.3,55.4,312.1,2.4,468.6,56.1c125.3,43,153,125.7,61.9,184.8c-72.9,47.3-272.1,59-372.3,24.6
	c-64.5-22.1-88.6-60.8-65.2-94.7c5.7-8.2,15.7-17,23.4-19.7c5.8-2,26.4-3.8,26.4-3.8l235.3-1.2h47.3"
                />
            </defs>
            <text x="100" y="100" className={animatedText}>
                <textPath startOffset="79.8%" xlinkHref="#path">
                    Omar Alshaker
                    <animate
                        attributeName="startOffset"
                        from="0%"
                        to="79.8%"
                        begin="0s"
                        dur="6s"
                        repeatCount="1"
                        keyTimes="0;0.2"
                        calcMode="spline"
                        keySplines="0.1 0.2 .22 1"
                    />
                </textPath>
            </text>
        </svg>
    );
}
