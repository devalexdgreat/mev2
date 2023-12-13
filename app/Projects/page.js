"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import imgSix from '@/public/project3.jpg';
import imgSev from '@/public/project2.jpg';
import imgEig from '@/public/project1.jpg';
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Projects() {

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
    })

    return (
        <div className="mb-12 w-full overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className=" mt-52 md:mt-72">
                    <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.002, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                    className="text-4xl md:text-7xl md:w-6/12 w-9/12 font-medium pb-1 headertin">
                        A Glimpse into My Finest Works
                    </motion.h1>
                </div>
                <div className="my-32 md:my-64 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className=''>
                        <Link href={"#"} className="text-white view flex flex-col items-start justify-end  
                            relative rounded-md hover:scale-110 duration-500">
                            <div className='rounded-md'>
                                <Image src={imgEig} alt='' className='h-full object-cover' />
                            </div>
                            <div className="w-full h-full flex items-end">
                                <div className='w-full mx-auto flex items-center justify-between py-1'>
                                    <h1 className="text-2xl md:text-2xl font-medium">Portfolio v1</h1>
                                    <div className="text-base font-light">
                                        <span className="py-0.5 px-2 rounded-md text-white">
                                            DEV
                                        </span>
                                        <span className="py-0.5 ps-2 rounded-md text-white">
                                            UI
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className=''>
                        <Link href={"#"} className="text-white view flex flex-col items-start justify-end  
                            relative rounded-md hover:scale-110 duration-500">
                            <div className='rounded-md'>
                                <Image src={imgSev} alt='' className='h-full object-cover' />
                            </div>
                            <div className="w-full h-full flex items-end">
                                <div className='w-full mx-auto flex items-center justify-between py-1'>
                                    <h1 className="text-2xl md:text-2xl font-medium">Tiktok Clone</h1>
                                    <div className="text-base font-light">
                                        <span className="py-0.5 px-2 rounded-md text-white">
                                            DEV
                                        </span>
                                        <span className="py-0.5 ps-2 rounded-md text-white">
                                            UI
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className=''>
                        <Link href={"#"} className="text-white view flex flex-col items-start justify-end  
                            relative rounded-md hover:scale-110 duration-500">
                            <div className='rounded-md'>
                                <Image src={imgSix} alt='' className='h-full object-cover' />
                            </div>
                            <div className="w-full h-full flex items-end">
                                <div className='w-full mx-auto flex items-center justify-between py-1'>
                                    <h1 className="text-2xl md:text-2xl font-medium">Medicsyn</h1>
                                    <div className="text-base font-light">
                                        <span className="py-0.5 px-2 rounded-md text-white">
                                            DEV
                                        </span>
                                        <span className="py-0.5 ps-2 rounded-md text-white">
                                            UI
                                        </span>
                                    </div> 
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}