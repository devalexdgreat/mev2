"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {

//   useEffect(() => {
//     const cursor = document.getElementById('custom-cursor');
//     const links = document.querySelectorAll('a');
//     const cursorText = document.querySelector('.cursor-text');

//     const onMouseMove = (event) => {
//         const {clientX,clientY} = event;
//         gsap.to(cursor, {x:clientX,y:clientY})
//     }

//     const onMouseEnterLink = (event) => {
//         const link = event.target;
//         if(link.classList.contains('view')) {
//             gsap.to(cursor,{scale:4, ease: "power4.in"})
//             cursorText.style.display = 'block';
//         } else {
//             gsap.to(cursor,{scale:4})
//         }
//     }

//     const onMouseLeaveLink = () => {
//         gsap.to(cursor, {scale:1, ease: "circ.out"})
//         cursorText.style.display = 'none';
//     }

//     document.addEventListener('mousemove', onMouseMove);
//     links.forEach((link) => {
//         link.addEventListener('mouseenter', onMouseEnterLink)
//         link.addEventListener('mouseleave', onMouseLeaveLink)
//     })
// });

  return (
    <main className='overflow-hidden relative'>
      <div className="absolute -z-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Nav />
      <Hero />
      <Projects />
      <Services />
      <Skills />
    </main>
  );
}
