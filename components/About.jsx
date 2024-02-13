import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import viewIcon from '@/public/up.png';
import Link from 'next/link';

export default function About() {

    return(
        <div className="w-full overflow-hidden pt-10" id="aboutme">
            <div className='w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row'>
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className='mb-1 md:mb-12 w-full'>
                    <h1 className='text-4xl w-11/12 md:text-6xl md:full headertin pb-1'>
                        About the Mind Behind the Code
                    </h1>
                </motion.div>
                <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="pt-12 md:pt-32 w-full"
                >
                    <p className='text-xl leading-7'>
                        Hello, I&rsquo;m Alexander Great Ogbuagu, a passionate React JS developer hailing from the vibrant state of Anambra in Nigeria. With a toolbox filled with HTML, CSS, JavaScript, Next.js, MongoDB, Tailwind CSS, Git, and more, I bring your digital visions to life. I thrive on crafting seamless, interactive, and visually stunning web experiences. Let&rsquo;s embark on a journey of innovation and excellence together. Welcome to my world of code and creativity!
                    </p>
                    <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className='mb-1 md:mb-2 w-full'>
                        <h1 className='text-3xl w-11/12 md:text-4xl md:full headertin pb-1 pt-6'>
                            Certificates / Resume
                        </h1>
                    </motion.div>
                    <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className='flex gap-3'>
                        {/* <Link href={"/res.pdf"} className="btnStyle py-2 px-4">
                            <span>View Resume</span>
                            <Image className="h-6 w-6" src={viewIcon} alt='' />
                        </Link> */}
                        <Link href={'/res.pdf'} className="btnStyle group flex items-center justify-center 
                        border py-1 px-2 rounded-lg text-base gap-1 hover:gap-0">
                            <Image src={viewIcon} className="duration-700 group-hover:h-0 group-hover:w-0 
                            group-hover:invisible h-6 w-6" alt="" />
                            <span>Resume</span>
                        </Link>
                        <Link href={'/cert.pdf'} className="btnStyle group flex items-center justify-center 
                        border py-1 px-2 rounded-lg text-base gap-1 hover:gap-0">
                            <Image src={viewIcon} className="duration-700 group-hover:h-0 group-hover:w-0 
                            group-hover:invisible h-6 w-6" alt="" />
                            <span>Certificate</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}