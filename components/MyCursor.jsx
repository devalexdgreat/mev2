"use client";
import { delay } from "framer-motion";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function MyCursor() {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a');
        const cursorText = document.querySelector('.cursor-text');

        const onMouseMove = (event) => {
            const {clientX,clientY} = event;
            gsap.to(cursor, {x:clientX,y:clientY, ease: "[0.16, 1, 0.3, 1]", delay: 0.00009})
        }

        const onMouseEnterLink = (event) => {
            const link = event.target;
            if(link.classList.contains('view')) {
                gsap.to(cursor,{scale:4, ease: "circ.out"})
                cursorText.style.display = 'block';
            } else {
                gsap.to(cursor,{scale:4})
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale:1, ease: "circ.out"})
            cursorText.style.display = 'none';
        }

        document.addEventListener('mousemove', onMouseMove);
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    })

    return (
        <div id="custom-cursor" className="custom-cursor hidden md:block">
            <span className="cursor-text">View</span>
        </div>
    );
}