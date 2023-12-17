"use client";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import upIcon from '@/public/up.png';
import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export default function Details({ data }) {
    return (
        <>
            <div className=" mt-52 md:mt-72">
                        <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.002, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                        className="text-4xl md:text-7xl md:w-6/12 w-9/12 font-medium pb-1 headertin">
                            {data.name}
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
                                        {data.stack} 
                                    </p> 
                                    <h1 className="border-b pb-1 border-green-500 text-4xl mb-3 headertin">Details</h1>
                                    <p className="text-lg text-[#eee]">
                                        {data.desc} 
                                    </p> 
                                </div>
                                
                                    
                                <div className="mt-6 flex gap-2">
                                    <Magnetic>
                                        <Link href={data.demo} className="btnStyle group flex items-center justify-center 
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
                                <Image src={data.imgurl} width={900} height={900} alt="" className="h-full w-full"/>
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
                                    <Image src={data.imgurl} width={1200} height={1200} className="h-full object-cover object-center"  alt="" />
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
        </>
    );
}