import Image from "next/image";
import forIcon from '@/public/test4s.webp';
import forbIcon from '@/public/test4.webp';
import sIcon from '@/public/test2.webp';
import leftIcon from '@/public/left.png';

export default function Blog() {
    return (
        <div className="w-full overflow-hidden">
            <div className="w-full mb-32">
                <div className="h-screen w-full">
                    <div className="w-full h-5/6 md:hidden overflow-hidden relative">
                        
                        <Image src={forIcon} className="h-full w-full object-cover absolute -z-20 opacity-60" alt=""/>
                        <div className="w-10/12 mx-auto mt-32">
                            <button className="gap-3 h-10 flex items-center">
                                <Image src={leftIcon} alt="" className="h-6 w-6 p-0.5 bg-green-500 rounded-full" />
                                <span className="text-lg headertin">All Insights</span>
                            </button>
                           <h1 className="text-3xl w-11/12 headertin">11 Steps to Improve Your eCommerce User Experience</h1> 
                        </div>
                        
                    </div>
                    <div className="w-full h-5/6 overflow-hidden hidden md:block relative">
                        <Image src={forbIcon} className="h-full w-full object-cover absolute -z-20 opacity-60" alt=""/>
                        <div className="w-10/12 mx-auto mt-32">
                           <h1 className="text-7xl w-11/12 headertin">11 Steps to Improve Your eCommerce User Experience</h1> 
                        </div>
                        
                    </div>
                    <div className="h-1/6 bg-transparent w-full">
                        <div className="h-full w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row md:justify-between items-center justify-center gap-4 md:gap-0  md:border-b-[0.5px] md:border-green-600">
                            <div className="flex items-center w-full md:w-4/12">
                                <span className="text-sm">July 2022</span>
                            </div>
                            <hr className="w-full border-green-600 md:hidden"/>
                            <div className="flex items-center justify-between w-full md:w-8/12">
                                <div className=""><h1>UX Design, eCommerce</h1></div>
                                <div className=""><h1>7 min reading</h1></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}