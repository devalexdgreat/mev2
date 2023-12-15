"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import imgSix from '@/public/project3.jpg';
import imgSev from '@/public/project2.jpg';
import imgEig from '@/public/project1.jpg';
import upIcon from '@/public/up.png';
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

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
        <div className="w-full overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className=" mt-52 md:mt-72">
                    <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.002, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                    className="text-4xl md:text-7xl md:w-6/12 w-9/12 font-medium pb-1 headertin">
                        Medicsyn
                    </motion.h1>
                </div>

                <div className="my-32 md:mt-32 md:mb-64 w-full">
                    <div className="w-full flex flex-col-reverse md:flex-row gap-12">
                        <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.01, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-start justify-end flex-col w-full md:w-6/12 text-lg font-thin">
                            <div className="">
                                <h1 className="border-b pb-1 border-green-500 text-4xl mb-3 headertin">Stack Used</h1>
                                <p className="text-lg mb-8">
                                    html, css, Javacsript 
                                </p> 
                                <h1 className="border-b pb-1 border-green-500 text-4xl mb-3 headertin">Details</h1>
                                <p className="text-lg text-[#eee]">
                                    MedicSync empowers patients to take control of their health journey 
                                    by providing a user-friendly platform for comprehensive health management.
                                    Through seamless integration of medical records, medication tracking, 
                                    and personalized health insights. 
                                </p> 
                            </div>
                            
                                
                            <div className="mt-6 flex gap-2">
                                <Magnetic>
                                    <Link href={"#footer"} className="btnStyle group flex items-center justify-center 
                                    border py-1 px-4 rounded-lg text-lg gap-1 hover:gap-0">
                                        <Image src={upIcon} className="duration-700 group-hover:h-0 group-hover:w-0 
                                        group-hover:invisible h-6 w-6" alt="" />
                                        <span>View</span>
                                    </Link>
                                </Magnetic>
                                
                            </div>
                            
                        </motion.div>
                        <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.002, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <Image src={imgEig} alt="" className="h-full w-full"/>
                        </motion.div>
                    </div>
                    <div className="w-full mt-32">
                        <div>
                            <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.002, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
                                <h1 className="headertin text-4xl md:text-6xl pb-1">Explore Next Project</h1>
                            </motion.div>
                            <div className="h-72 mt-24 relative">
                                <Image src={imgSix} className="h-full object-cover object-center"  alt="" />
                                <div className="h-full w-full nextpjx absolute top-0 flex 
                                items-center justify-center flex-col gap-5">
                                    <h1 className="text-5xl">Tiktok Clone</h1>
                                    <Magnetic>
                                        <Link href={"/projects"} className="py-3 px-6 bg-white text-black 
                                        font-bold rounded-lg">
                                            Next Project
                                        </Link>
                                    </Magnetic>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}