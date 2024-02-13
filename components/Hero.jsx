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
        bg-cover bg-left md:bg-right">


            <div className="absolute bottom-0 left-0 -z-40 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_90%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="absolute inset-0 -z-50 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#22c55e_100%)]"></div>


            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col justify-center h-4/6 
            text-white">
                <motion.h1 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-6xl md:font-medium w-full md:w-9/12 headertin 
                pb-0 md:pb-1 md:mx-auto md:text-center">
                    Hey👋, I&rsquo;m Great Alexander,
                    a passionate web developer and designer 
                    dedicated to sculpting digital identities 
                    that transcend the ordinary.
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