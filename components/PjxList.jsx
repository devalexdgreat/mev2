"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PjxList({ pjxData }) {
    return (

        <>
            {pjxData.map((p) => (
            <motion.div 
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className='' key={p._id}>
                <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                    relative rounded-md">
                    <div className='rounded-md overflow-hidden'>
                        <Image src={p.imgurl} width={900} height={900} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                    </div>
                    <div className="w-full h-full flex items-end">
                        <div className='w-full mx-auto flex items-center justify-start py-1'>
                            <h1 className="text-lg md:text-xl font-medium">{p.name}</h1>
                        </div>
                    </div>
                </Link>
            </motion.div>
            ))}
        </>
        
    );
}