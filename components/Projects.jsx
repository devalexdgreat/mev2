"use client";
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

    const [pjxData, setPjxData] = useState([]);
    
    useEffect(() => {
        fetch('https://devalexdgreat.vercel.app/api/projects', {
            cache: 'no-store',
        })
        .then((res) => res.json())
        .then((data) => {
            const recentData = data.reverse();
            setPjxData(recentData);
            
        })
    }, [])

    return(
        <div className="w-full my-40 overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto" id='works'>
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className='mb-12 pt-24'>
                    <h1 className='text-4xl w-11/12 md:text-6xl md:w-5/12 headertin'>
                        My Recent Endeavors
                    </h1>
                </motion.div>
                <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {pjxData.map((p) => (
                            
                            <motion.div 
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            className='' key={p._id}>
                                <Link href={`/Projects/${p._id}`} className="text-white view flex flex-col items-start justify-end  
                                    relative rounded-md">
                                    <div className='rounded-md overflow-hidden'>
                                        <Image src={p.imgurl} width={900} height={900} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                    </div>
                                    <div className="w-full h-full flex items-end">
                                        <div className='w-full mx-auto flex items-center justify-between py-1'>
                                            <h1 className="text-2xl md:text-2xl font-medium">{p.name}</h1>
                                            <div className="text-base font-light w-6/12 flex justify-end">
                                                <span className="py-0.5 ps-2 rounded-md text-white truncate">
                                                    {p.stack}
                                                </span>
                                            </div> 
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                </div>

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
                                    className="h-12 bg-green-500 w-full flex items-center">
                                        <p className='ms-4'>TradeLink ltd.</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-green-500 w-full flex items-center">
                                        <p className='ms-4'>ObiSoft</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-green-500 w-full flex items-center">
                                        <p className='ms-4'>Symptopia</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                                    className="h-12 bg-green-500 w-full flex items-center">
                                        <p className='ms-4'>Great Tunes</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-green-500 w-full flex items-center">
                                        <p className='ms-4'>House Sort</p>
                                    </motion.div>
                                </Magnetic>
                                
                                <Magnetic>
                                    <motion.div 
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-12 bg-green-500 w-full flex items-center">
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