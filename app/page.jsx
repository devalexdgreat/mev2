"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Nav from "@/components/Nav";

export default function Home() {

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('a');
    const cursorText = document.querySelector('.cursor-text');

    const onMouseMove = (event) => {
        const {clientX,clientY} = event;
        gsap.to(cursor, {x:clientX,y:clientY})
    }

    const onMouseEnterLink = (event) => {
        const link = event.target;
        if(link.classList.contains('view')) {
            gsap.to(cursor,{scale:4, ease: "power4.in"})
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
});

  return (
    <main className='overflow-hidden' data-scroll-container>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
