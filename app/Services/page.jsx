"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function Services() {

    return (
        <div className="w-full mb-44 overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className=" mt-52 md:mt-72">
                    <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                    className="text-4xl md:text-7xl md:w-6/12 w-8/12 font-medium headertin">
                        Services at your disposal
                    </motion.h1>
                </div>
                <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="my-32 md:my-64 w-full">
                    <p className="text-lg md:text-3xl w-11/12 md:w-8/12 mx-auto leading-8 headertin">
                        <span className="text-[#17B486] font-bold">&ldquo;</span>
                        Rest assured, I prioritize clear communication, 
                        meeting deadlines, and putting your needs first. 
                        You won&rsquo;t face the common issues that clients often 
                        encounter when hiring a developer. Your satisfaction is my commitment.
                        <span className="text-[#17B486] font-bold">&rdquo;</span>
                    </p>
                </motion.div>
                <div className="flex flex-col gap-16 mt-28 md:mt-52">
                    <div className="flex w-full flex-col md:flex-row gap-8 md:gap-0">
                        <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                        className="w-full md:w-6/12">
                            <h1 className="text-4xl md:text-5xl headertin pb-1">Design</h1>
                        </motion.div>
                        <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <p className="w-full md:w-10/12 mx-0 md:mx-auto md:text-lg text-base leading-8">
                                I specialize in creating visually stunning designs. 
                                From concept to execution, I bring creativity and 
                                precision to every project, ensuring a compelling 
                                and cohesive visual experience.
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex w-full flex-col md:flex-row gap-8 md:gap-0">
                        <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <h1 className="text-4xl md:text-5xl headertin">Development</h1>
                        </motion.div>
                        <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <p className="w-full md:w-10/12 mx-0 md:mx-auto md:text-lg text-base leading-8">
                                Using React.js, Next.js, Tailwind CSS, Framer Motion, GSAP, 
                                and MongoDB, I craft dynamic, interactive websites with 
                                seamless design and robust content management.
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex w-full flex-col md:flex-row gap-8 md:gap-0">
                        <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <h1 className="text-4xl md:text-5xl headertin">Seo Expertise</h1>
                        </motion.div>
                        <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <p className="w-full md:w-10/12 mx-0 md:mx-auto md:text-lg text-base leading-8">
                                I specialize in optimizing websites to rank higher in search engine results, driving organic traffic and increasing your online presence. From keyword research to on-page optimization and content strategy. 
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex w-full flex-col md:flex-row gap-8 md:gap-0">
                        <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <h1 className="text-4xl md:text-5xl headertin">Maintenace</h1>
                        </motion.div>
                        <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <p className="w-full md:w-10/12 mx-0 md:mx-auto md:text-lg text-base leading-8">
                                I provide efficient maintenance solutions, 
                                ensuring websites remain smooth and secure. 
                                Utilizing proactive measures, I offer timely updates 
                                and support to keep your online presence optimized.
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex w-full flex-col md:flex-row gap-8 md:gap-0">
                        <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <h1 className="text-4xl md:text-5xl headertin">Consultation</h1>
                        </motion.div>
                        <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-6/12">
                            <p className="w-full md:w-10/12 mx-0 md:mx-auto md:text-lg text-base leading-8">
                                Guiding your project with expert consultation. 
                                Tailored advice and industry insights to elevate 
                                your strategies and ensure success.
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-full flex items-center justify-center mt-8 mb-8">
                        <Magnetic>
                            <Link href={"#footer"} className="btnStyle py-4 px-6">Let&rsquo;s work together</Link>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </div>
        
    );
}