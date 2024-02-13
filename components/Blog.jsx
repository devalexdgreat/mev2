import { motion } from "framer-motion";
import Link from "next/link";
import smallIcon from '@/public/test2.webp';
import thiIcon from '@/public/test3.webp';
import forIcon from '@/public/test4.webp';
import Image from "next/image";

export default function Blog() {
    return (
        <div className="w-full">
            <div className="w-11/12 md:w-10/12 mx-auto mb-32">
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className='mb-12 pt-12'>
                    <h1 className='text-4xl w-11/12 md:text-6xl md:w-5/12 headertin pb-1'>
                        Insights & Inspiration
                    </h1>
                </motion.div>
                <div className="w-full md:w-full mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Link href={'/Blogs/hjjd'} className="group w-full flex flex-col bg-black/50 border-[0.5px] border-green-900">
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
                    <Link href={'/Blogs/hyhhh'} className="group w-full flex flex-col bg-black/50 border-[0.5px] border-green-900">
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
                    <Link href={'/Blogs/hhh'} className="group w-full flex flex-col bg-black/50 border-[0.5px] border-green-900">
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
                </div>
                <div className="w-full flex justify-center">
                    <Link href={"/Blogs"} className="btnStyle py-4 px-6 mt-12">See more Blogs</Link>
                </div>
            </div>
        </div>
    );
}