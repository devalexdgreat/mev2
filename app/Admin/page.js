import Image from "next/image";
import Link from "next/link";
import plusIcon from '@/public/plus.png';
import PjxList from "@/components/PjxList";

const getProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_PURL}/api/projects`, {
            cache: 'no-store',
        });
        
        if(!res.ok) {
            throw new Error("Failed to fetch Projects");
        }

        const pjxs = await res.json();
        console.log("i am all the ", pjxs);
        return pjxs;
        

    } catch (error) {
        console.log("Error loading Pjxs: ", error);
    }
};

export default async function Admin() {

    const itemsFound = await getProjects();
    console.log("I am the found Pjx: ", itemsFound);

    return(
        <div className="w-full overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto my-32">
                <div className="mb-24">
                    <h1 className="text-3xl md:text-5xl">Welcome ADG,</h1>
                </div>
                <div className="mb-32">
                    <div className="flex justify-between">
                        <h1 className="text-2xl md:text-4xl">Projects</h1>
                        <Link href={"/Createpjx"} className="py-1 px-3 bg-green-500 rounded-lg flex items-center">
                            <span className="h-6 w-6"><Image src={plusIcon} alt="" className="" /></span>
                            <span>New Project</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">

                        <PjxList pjxData={itemsFound}/>

                        {/* <motion.div 
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className=''>
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgEig} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Portfolio v1</h1>
                                        <div className="text-base font-light">
                                            <span className="py-0.5 ps-2 rounded-md text-white">
                                                20-7-23
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
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgSev} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Tiktok Clone</h1>
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
                        transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className=''>
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgSix} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Medicsyn</h1>
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
                        transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className=''>
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgSix} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Medicsyn</h1>
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
                        </motion.div> */}
                    </div>
                </div>

                <div className="mb-24">
                    <div className="flex justify-between">
                        <h1 className="text-2xl md:text-4xl">Blogs</h1>
                        <Link href={"/Createblog"} className="py-1 px-3 bg-green-500 rounded-lg flex items-center">
                            <span className="h-6 w-6"><Image src={plusIcon} alt="" className="" /></span>
                            <span>New Post</span>
                        </Link>
                    </div>
                    {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <motion.div 
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className=''>
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgEig} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Portfolio v1</h1>
                                        <div className="text-base font-light">
                                            <span className="py-0.5 ps-2 rounded-md text-white">
                                                20-7-23
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
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgSev} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Tiktok Clone</h1>
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
                        transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className=''>
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgSix} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Medicsyn</h1>
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
                        transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                        className=''>
                            <Link href={"/Projects/hhh"} className="text-white view flex flex-col items-start justify-end  
                                relative rounded-md">
                                <div className='rounded-md overflow-hidden'>
                                    <Image src={imgSix} alt='' className='h-full object-cover hover:scale-110 duration-500' />
                                </div>
                                <div className="w-full h-full flex items-end">
                                    <div className='w-full mx-auto flex items-center justify-between py-1'>
                                        <h1 className="text-lg md:text-xl font-medium">Medicsyn</h1>
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}