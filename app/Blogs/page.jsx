"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import leftIcon from '@/public/left.png';
import rightIcon from '@/public/right.png';
import bigIcon from '@/public/test.jpg';
import smallIcon from '@/public/test2.webp';
import thiIcon from '@/public/test3.webp';
import forIcon from '@/public/test4.webp';
import Image from "next/image";

export default function Blogs() {

    const slideLeft = () => {
        const slider = document.querySelector('.category');
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        const slider = document.querySelector('.category');
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <div className="w-full overflow-hidden mb-44">
            <div className="w-full">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <div className=" mt-52 md:mt-72">
                        <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} 
                        className="text-4xl md:text-7xl md:w-6/12 w-8/12 font-medium headertin pb-1">
                            Insightful Observations
                        </motion.h1>
                    </div>
                </div>
                
                <div className="w-11/12 md:w-10/12 mx-auto border-b pb-6 border-green-500">
                    <div className="w-full mx-auto relative p-1 mt-32">
                        <div className="bg-gradient-to-r from-black to-transparent absolute top-0 left-0 h-full w-[120px] flex items-center">
                            <button onClick={slideLeft} className="bg-green-800 py-1 px-3 rounded-full hover:bg-green-500 duration-500" id="left"><Image src={leftIcon} className="h-6 w-6" alt=""/></button>
                        </div>
                        
                        <div className="flex gap-3 category overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide px-16">
                            <span className="bg-green-500 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">All Posts</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Strategy</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Real estate</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">eCommerce</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Web Development</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Computer Science</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Design</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">News</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Marketplaces</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Marketplaces</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Marketplaces</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Marketplaces</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Marketplaces</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Marketplaces</span>
                            <span className="bg-green-800 text-white cursor-pointer whitespace-nowrap rounded-full py-1 px-4">Ended school</span>
                        </div>

                        <div className="bg-gradient-to-l from-black to-transparent absolute top-0 right-0 h-full w-[120px] flex items-center justify-end">
                            <button onClick={slideRight} className="bg-green-800 py-1 px-3 rounded-full hover:bg-green-500 duration-500 hidden md:block" id="right"><Image src={rightIcon} className="h-6 w-6" alt=""/></button>
                        </div>
                    </div> 
                </div>
                
                <div className="w-full mt-12">
                    <div className="w-full md:w-10/12 mx-auto">
                        <Link href={'#'} className="mb-12 group w-full flex flex-col md:flex-row bg-black/50 md:border-[0.5px] border-green-900">
                            <div className="h-[200px] md:h-[400px] w-full md:w-8/12 overflow-hidden">
                                <Image src={bigIcon} alt="" className="object-cover object-center h-full group-hover:scale-105 duration-700" />
                            </div>
                            <div className="flex flex-col justify-between w-full md:w-4/12 p-5 md:p-8 gap-12 md:gap-0">
                                <div>
                                    <h1 className="text-2xl md:text-4xl headertin">17 AI-powered Features That Will Revolutionize Banking UX</h1>
                                </div>
                                <div className="border-b-[0.5px] md:border-0 border-green-900 pb-6 md:pb-0">
                                    <span className="text-gray-400 text-xs">15 min</span>
                                    <h1 className="text-sm">Banking UX, UX Design, AI</h1>
                                </div>
                            </div>
                        </Link>

                        <div className="w-11/12 md:w-full mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                            <Link href={'#'} className="group w-full flex flex-col bg-black/50 border-[0.5px] border-green-900">
                                <div className="h-[200px] w-full overflow-hidden">
                                    <Image src={smallIcon} alt="" className="object-cover object-center h-full group-hover:scale-105 duration-700" />
                                </div>
                                <div className="flex flex-col justify-between w-full p-5 gap-12">
                                    <div>
                                        <h1 className="text-xl headertin">Case Study: Client Portal Design for Edge AI in the Cloud</h1>
                                    </div>
                                    <div className="">
                                        <span className="text-gray-400 text-xs">6 min</span>
                                        <h1 className="text-sm">Strategy, UX Design, Client Portal</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href={'#'} className="group w-full flex flex-col bg-black/50 border-[0.5px] border-green-900">
                                <div className="h-[200px] w-full overflow-hidden">
                                    <Image src={thiIcon} alt="" className="object-cover object-center h-full group-hover:scale-105 duration-700" />
                                </div>
                                <div className="flex flex-col justify-between w-full p-5 gap-12">
                                    <div>
                                        <h1 className="text-xl headertin">Case Study: Client Portal Design for Edge AI in the Cloud</h1>
                                    </div>
                                    <div className="">
                                        <span className="text-gray-400 text-xs">6 min</span>
                                        <h1 className="text-sm">Strategy, UX Design, Client Portal</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href={'#'} className="group w-full flex flex-col bg-black/50 border-[0.5px] border-green-900">
                                <div className="h-[200px] w-full overflow-hidden">
                                    <Image src={forIcon} alt="" className="object-cover object-center h-full group-hover:scale-105 duration-700" />
                                </div>
                                <div className="flex flex-col justify-between w-full p-5 gap-12">
                                    <div>
                                        <h1 className="text-xl headertin">Case Study: Client Portal Design for Edge AI in the Cloud</h1>
                                    </div>
                                    <div className="">
                                        <span className="text-gray-400 text-xs">6 min</span>
                                        <h1 className="text-sm">Strategy, UX Design, Client Portal</h1>
                                    </div>
                                </div>
                            </Link>
                            <Link href={'#'} className="group w-full flex flex-col bg-black/50 border-[0.5px] border-green-900">
                                <div className="h-[200px] w-full overflow-hidden">
                                    <Image src={smallIcon} alt="" className="object-cover object-center h-full group-hover:scale-105 duration-700" />
                                </div>
                                <div className="flex flex-col justify-between w-full p-5 gap-12">
                                    <div>
                                        <h1 className="text-xl headertin">Case Study: Client Portal Design for Edge AI in the Cloud</h1>
                                    </div>
                                    <div className="">
                                        <span className="text-gray-400 text-xs">6 min</span>
                                        <h1 className="text-sm">Strategy, UX Design, Client Portal</h1>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}