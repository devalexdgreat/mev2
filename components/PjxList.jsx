"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import editIcon from "@/public/edit.png";
import delIcon from "@/public/del.png";
import DeleteBtn from "./DeleteBtn";

export default function PjxList({ pjxData }) {
    return (

        <>
            {pjxData.map((p) => (
            <motion.div 
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className='' key={p._id}>
                <div className="text-white flex flex-col items-start justify-end  
                    relative rounded-md">
                    <div className='rounded-md overflow-hidden'>
                        <Image src={p.imgurl} width={900} height={900} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                    </div>
                    <div className="w-full h-full flex items-end">
                        <div className='w-full mx-auto flex items-center justify-between py-2'>
                            <h1 className="text-lg md:text-xl font-medium">{p.name}</h1>
                            <div className="flex gap-1">
                                <Link href={`https://devalexdgreat.vercel.app/Editpjx/${p._id}`} className="bg-green-500 hover:bg-green-600 h-8 w-8 flex items-center 
                                justify-center rounded-full">
                                    <Image src={editIcon} alt="" className="h-4/6 w-8/12"/>
                                </Link>
                                <DeleteBtn id={p._id} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            ))}
        </>
        
    );
}