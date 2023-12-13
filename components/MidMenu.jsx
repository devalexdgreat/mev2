"use client";
import Link from "next/link";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function MidMenu() {

    const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    const handleScroll = () => {
      // Get the element's position relative to the viewport
      const elementTop = element.getBoundingClientRect().top;

      // Adjust the threshold as needed
      const threshold = window.innerHeight * 0.8;

      // Check if the element is in the viewport
      if (elementTop < threshold) {
        controls.start({ opacity: 1, y: 0 });
        console.log("true");
      } else {
        controls.start({ opacity: 0, y: 50 });
        console.log("false");
      }
    };

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

    return (
        <motion.div 
        className="w-full z-30 midMenu fixed" 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}>
            <div className="fixed z-30 bg-[#17B486] w-4/12 mx-auto flex items-center justify-center 
            rounded-full bottom-5 midMenu">
                <ul className="grid grid-cols-5 gap-1 rounded-full p-1 w-full">
                    <Link href={""} className="text-white py-1 px-3 rounded-full hover:bg-white 
                    hover:text-black duration-700 text-center">Home</Link>
                    <Link href={""} className="text-white py-1 px-3 rounded-full hover:bg-white 
                    hover:text-black duration-700 text-center">About</Link>
                    <Link href={""} className="text-white py-1 px-3 rounded-full hover:bg-white 
                    hover:text-black duration-700 text-center">Services</Link>
                    <Link href={""} className="text-white py-1 px-3 rounded-full hover:bg-white 
                    hover:text-black duration-700 text-center">Works</Link>
                    <Link href={""} className="text-white py-1 px-3 rounded-full hover:bg-white 
                    hover:text-black duration-700 text-center">Contact</Link>
                </ul>
            </div>
        </motion.div>
    );
}