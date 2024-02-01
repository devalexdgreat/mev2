"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import GoDownBtn from "./GoDownBtn";
import Link from "next/link";
import SplitType from 'split-type';
import gsap from "gsap";
import Magnetic from "./Magnetic";
import myPic from "@/public/avatar.jpg";
import Image from "next/image";

export default function Hero() {
    // const [text] = useTypewriter({
    //     words: ['Fullstack Developer.', 'Web Designer.'],
    //     loop: 0
    //   });

    return(
        <div className="w-full h-screen flex relative items-center heroStyle overflow-hidden 
        bg-cover md:bg-none bg-left md:bg-right">
            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col justify-center h-4/6 
            text-white">
                <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-7xl md:font-medium w-full md:w-9/12 headertin 
                pb-0 md:pb-1 md:mx-auto md:text-center">
                    Hey, I&rsquo;m Great Alexander
                    Elevate your brand with my coding and 
                    design – Let&rsquo;s make it the best.
                </motion.h1>
                {/* <p className="md:text-left my-6 text-xl md:text-2xl text-[#17b486]">
                    I'm a {text}
                    <Cursor cursorColor='#17B486' /> 
                </p> */}
                
                <Link href={'#works'} className="absolute bottom-6 flex-col place-self-center 
                mx-auto flex items-center justify-center gap-1">
                    <Magnetic>
                        <span className="font-thin text-xs place-self-center">SCROLL</span>
                        <GoDownBtn/>
                    </Magnetic>
                </Link>
                
            </div>
        </div>
    );
}