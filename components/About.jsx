import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from 'next/link';

export default function About() {

    return(
        <div className="w-full pt-24 md:pt-32 overflow-hidden flex items-center" id="aboutme">
            <div className="w-11/12 md:w-10/12 mx-auto flex md:flex-row gap-6 md:gap-0 md:justify-between 
            flex-col">
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center items-center md:bg-[#17b48523] w-full md:w-3/12">
                    <h1 className="text-4xl w-full md:text-5xl md:full md:-rotate-90 headertin">
                        A brief intro <br/>about me
                    </h1>
                </motion.div>
                <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="flex w-full md:w-9/12 flex-col justify-center items-center py-6">
                    <p className="w-full md:w-11/12 text-xl md:text-5xl leading-10">
                        I am a <strong className="text-[#17B486] font-medium leading-10">Full-stack Developer </strong>&  
                        <strong className="text-[#17B486] font-medium leading-10"> Designer </strong>with my core value as excellence. 
                        i specialize in full-stack development using  
                        <strong className="text-[#17B486] font-medium leading-10"> React JS </strong><span 
                        className='leading-10'>
                        and its frameworks to create engaging and intuitive 
                        user interfaces that bring your digital products to life.</span>  
                    </p>
                    <div className="w-full flex md:hidden items-start justify-start mt-16">
                        <Link href={"/services"} className="btnStyle py-4 px-6">View Services</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}