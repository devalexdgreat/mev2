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
        <div className="w-full h-screen flex relative items-center heroStyle overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col justify-center h-4/6 
            text-white">
                <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl font-bold md:text-7xl md:font-medium w-full md:w-11/12 headertin 
                pb-0 md:pb-1 hidden md:block">
                    <span className="md:flex gap-2 items-center hidden">
                        <span>Hello, I&rsquo;m Great</span> 
                        <span className="h-12 md:h-16 w-12 md:w-16 rounded-full flex items-center justify-center">
                            <Image src={myPic} alt="" className="h-full w-full rounded-full hover:scale-150
                             duration-300" />
                        </span>
                        
                        <span>Alexander,</span>
                    </span>
                    <span className="block md:hidden">Hello, I&rsquo;m Great Alexander,<br/></span>
                    A Developer & Designer,<br/>
                    Here to build, design,<br/>
                    and transform your visions<br/>
                    into reality.<br/>
                </motion.h1>
                <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl font-bold w-full md:w-11/12 headertin 
                pb-0 md:pb-12 text-left md:hidden">
                    Hello, I&rsquo;m Great Alexander,<br/>
                    A Developer & Designer
                    Here to build, design,
                    and transform your visions
                    into reality.
                </motion.h1>
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="w-full hidden mx-auto md:flex justify-center md:justify-end">
                    <Link href={"/About"} className="w-full pt-12 md:pt-0 md:w-4/12 md:text-right text-right 
                    text-lg md:text-[15px] md:hover:scale-125 duration-700 bottom-24 md:bottom-16 absolute pe-4
                    mt-16 md:mt-0">
                        I&rsquo;m Based in Nigeria, 
                        Specializing in React.js, Next.js, Mongo DB and Tailwind CSS, 
                        I blend form and function to create seamless digital experiences.
                    </Link>
                </motion.div>
                <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex md:hidden mx-auto justify-center">
                    <Link href={"/About"} className="w-full pt-12 text-left 
                    text-xl duration-700 pe-4">
                        I&rsquo;m Based in Nigeria, 
                        Specializing in React.js, Next.js, Mongo DB and Tailwind CSS, 
                        I blend form and function to create seamless digital experiences.
                    </Link>
                </motion.div>
                {/* <p className="md:text-left my-6 text-xl md:text-2xl text-[#17b486]">
                    I'm a {text}
                    <Cursor cursorColor='#17B486' /> 
                </p> */}
                
                <Link href={'#works'} className="absolute bottom-4 flex-col place-self-center 
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