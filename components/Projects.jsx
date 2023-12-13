import Image from 'next/image';
import heroImg from '@/public/avatar.jpg';
import imgTwo from '@/public/1.jpg';
import imgOne from '@/public/2.jpg';
import imgFiv from '@/public/3.jpg';
import imgFor from '@/public/4.jpg';
import imgThr from '@/public/5.jpg';
import imgSix from '@/public/project3.jpg';
import imgSev from '@/public/project2.jpg';
import imgEig from '@/public/project1.jpg';
import imgNin from '@/public/favicon.png';
import Link from 'next/link';
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useScroll } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Projects() {

    return(
        <div className="w-full my-40 overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto" id='works'>
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className='mb-12 pt-24'>
                    <h1 className='text-4xl w-11/12 md:text-6xl md:w-5/12 headertin'>
                        My Recent Endeavors
                    </h1>
                </motion.div>
                <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
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

                {/* <div className='w-full flex flex-col border-t border-[#17B486]'>
                    <div className='w-full border-b border-[#17B486]'>
                        <Link href={"/Projects/hhfhh"} className=' w-full group view'>
                            <div className='w-full px-3 mx-auto flex justify-between items-center'>
                                <span className='text-xl md:text-6xl py-6 group-hover:-translate-x-4 duration-500 
                                group-hover:text-gray-100/30'>Medicsyn Club</span>
                                <span className='text-sm md:text-base group-hover:translate-x-4 duration-500 
                                group-hover:text-gray-100/30'>Design & Development</span>
                            </div>
                        </Link> 
                    </div>
                    
                    <Link href={"/Projects/hhfhh"} className='border-b border-[#17B486] w-full group view'>
                        <div className='w-full px-3 mx-auto flex justify-between items-center'>
                            <span className='text-xl md:text-6xl py-6 group-hover:-translate-x-4 duration-500 
                            group-hover:text-gray-100/30'>Portfolio V1-23</span>
                            <span className='text-sm md:text-base group-hover:translate-x-4 duration-500 
                            group-hover:text-gray-100/30'>Design & Development</span>
                        </div>
                    </Link>
                    <Link href={"/Projects/hhfhh"} className='border-b border-[#17B486] w-full group view'>
                        <div className='w-full px-3 mx-auto flex justify-between items-center'>
                            <span className='text-xl md:text-6xl py-6 group-hover:-translate-x-4 duration-500 
                            group-hover:text-gray-100/30'>AkGlobal</span>
                            <span className='text-sm md:text-base group-hover:translate-x-4 duration-500 
                            group-hover:text-gray-100/30'>Design & Development</span>
                        </div>
                    </Link>
                </div> */}

                <motion.div
                className="w-full flex flex-col items-center justify-center mt-16">
                    <Magnetic>
                        <Link href={"/Projects"} className="btnStyle py-4 px-6">See more works</Link>
                    </Magnetic>
                    

                    <div className="w-full flex flex-col mt-52 gap-8">
                        <div className="w-full flex justify-start">
                            <motion.p 
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.0069, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            className="leading-10 w-full md:w-6/12 font-light text-xl place-self-start">
                                I&rsquo;ve successfully collaborated with diverse clients, 
                                including marketers, product managers, designers, 
                                and developers from corporations, agencies, software houses, 
                                and small businesses.
                            </motion.p>
                        </div>
                        <div className="w-full flex justify-end py-4">
                            <div className="w-full grid-cols-2 md:w-6/12 grid md:grid-cols-3 gap-4">
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-[#17B486] w-full flex items-center">
                                        <p className='ms-4'>TradeLink ltd.</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-[#17B486] w-full flex items-center">
                                        <p className='ms-4'>ObiSoft</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-[#17B486] w-full flex items-center">
                                        <p className='ms-4'>CheckSymptoms</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                                    className="h-12 bg-[#17B486] w-full flex items-center">
                                        <p className='ms-4'>Great Tunes</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-[#17B486] w-full flex items-center">
                                        <p className='ms-4'>House Sort</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-[#17B486] w-full flex items-center">
                                        <p className='ms-4'>Alesoft AI</p>
                                    </motion.div>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}