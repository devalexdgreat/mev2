"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import imgSix from '@/public/project3.jpg';
import imgSev from '@/public/project2.jpg';
import imgEig from '@/public/project1.jpg';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PjxList from "@/components/PjxList";

export default function Projects() {

    const [pjxData, setPjxData] = useState([]);
    
    useEffect(() => {
        fetch('https://devalexdgreat.vercel.app/api/projects', {
            cache: 'no-store',
        })
        .then((res) => res.json())
        .then((data) => {
            setPjxData(data);
            
        })
    }, [])
    console.log("i", pjxData)

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
            </div>
        </div>
    );
}