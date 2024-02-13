import Image from "next/image";
import forIcon from '@/public/test4s.webp';
import forbIcon from '@/public/test4.webp';
import sIcon from '@/public/test2.webp';
import leftIcon from '@/public/left.png';
import Link from "next/link";
import smallIcon from '@/public/test2.webp';
import thiIcon from '@/public/test3.webp';
import forrIcon from '@/public/test4.webp';

export default function Blog() {
    return (
        <div className="w-full">
            <div className="w-full mb-32 relative">
                <div className="h-screen w-full">
                    <div className="w-full h-5/6 md:hidden overflow-hidden relative">
                        
                        <Image src={forIcon} className="h-full w-full object-cover absolute -z-20 opacity-60" alt=""/>
                        <div className="w-10/12 mx-auto mt-44">
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

                <div className="flex w-11/12 md:w-10/12 mx-auto pt-16 top-0 md:overflow-y-scroll md:h-[90vh] scrollbar-hide">
                    <div className="md:flex flex-col headertin w-4/12 md:sticky top-0 hidden">
                        <Link href={'#'} className="">Introduction</Link>
                        <Link href={'#'} className="">Basics</Link>
                        <Link href={'#'} className="">Types</Link>
                        <Link href={'#'} className="">Importance</Link>
                        <Link href={'#'} className="">Reviews</Link>
                        <Link href={'#'} className="">Closure</Link>
                    </div>
                    <div className="w-full md:w-8/12 flex flex-col gap-7">
                        <p>The world of eCommerce moves fast. In this world, one change follows another, and trends and research are shaping the industry at lightning speed. Today eshopping has become an easy way to obtain the thing or service you want – but selling online is a skill. We have compiled a list of the best practices in eCommerce.</p>
                        <p>With the advent of eСommerce, many sellers are trying to find best-practices UX design for a positive user experience. UX design is central to the user experience of your eCommerce store. This is not just about beauty. Intuitive interaction, logical transitions and CTA buttons, payment for purchase – all these details play in your favor or otherwise. eCommerce is fairer than retail. Theres constant change there, and it requires the retailer to constantly monitor the market.</p>
                        <p>Retailers used to study customer psychology. Buyers and managers positioned merchandise on their shelves in a meaningful way. This was to ensure that the customer made his journey through the store the way the salesperson wanted. The customers spend increased with the help of competent navigation on the shelves and racks, music and additional services: tastings, discounts and random purchases at the cash point.</p>
                        <p>The world of eCommerce moves fast. In this world, one change follows another, and trends and research are shaping the industry at lightning speed. Today eshopping has become an easy way to obtain the thing or service you want – but selling online is a skill. Weve compiled a list of the best practices in eCommerce.</p>
                        <p>With the advent of eСommerce, many sellers are trying to find best-practices UX design for a positive user experience. UX design is central to the user experience of your eCommerce store. This is not just about beauty. Intuitive interaction, logical transitions and CTA buttons, payment for purchase – all these details play in your favor or otherwise. eCommerce is fairer than retail. Theres constant change there, and it requires the retailer to constantly monitor the market.</p>
                        <p>Retailers used to study customer psychology. Buyers and managers positioned merchandise on their shelves in a meaningful way. This was to ensure that the customer made his journey through the store the way the salesperson wanted. The customers spend increased with the help of competent navigation on the shelves and racks, music and additional services: tastings, discounts and random purchases at the cash point.</p>
                        <p>The world of eCommerce moves fast. In this world, one change follows another, and trends and research are shaping the industry at lightning speed. Today eshopping has become an easy way to obtain the thing or service you want – but selling online is a skill. Weve compiled a list of the best practices in eCommerce.</p>
                        <p>With the advent of eСommerce, many sellers are trying to find best-practices UX design for a positive user experience. UX design is central to the user experience of your eCommerce store. This is not just about beauty. Intuitive interaction, logical transitions and CTA buttons, payment for purchase – all these details play in your favor or otherwise. eCommerce is fairer than retail. Theres constant change there, and it requires the retailer to constantly monitor the market.</p>
                        <p>Retailers used to study customer psychology. Buyers and managers positioned merchandise on their shelves in a meaningful way. This was to ensure that the customer made his journey through the store the way the salesperson wanted. The customers spend increased with the help of competent navigation on the shelves and racks, music and additional services: tastings, discounts and random purchases at the cash point.</p>
                        <p>The world of eCommerce moves fast. In this world, one change follows another, and trends and research are shaping the industry at lightning speed. Today eshopping has become an easy way to obtain the thing or service you want – but selling online is a skill. Weve compiled a list of the best practices in eCommerce.</p>
                        <p>With the advent of eСommerce, many sellers are trying to find best-practices UX design for a positive user experience. UX design is central to the user experience of your eCommerce store. This is not just about beauty. Intuitive interaction, logical transitions and CTA buttons, payment for purchase – all these details play in your favor or otherwise. eCommerce is fairer than retail. Theres constant change there, and it requires the retailer to constantly monitor the market.</p>
                        <p>Retailers used to study customer psychology. Buyers and managers positioned merchandise on their shelves in a meaningful way. This was to ensure that the customer made his journey through the store the way the salesperson wanted. The customers spend increased with the help of competent navigation on the shelves and racks, music and additional services: tastings, discounts and random purchases at the cash point.</p>
                        <p>The world of eCommerce moves fast. In this world, one change follows another, and trends and research are shaping the industry at lightning speed. Today eshopping has become an easy way to obtain the thing or service you want – but selling online is a skill. Weve compiled a list of the best practices in eCommerce.</p>
                        <p>With the advent of eСommerce, many sellers are trying to find best-practices UX design for a positive user experience. UX design is central to the user experience of your eCommerce store. This is not just about beauty. Intuitive interaction, logical transitions and CTA buttons, payment for purchase – all these details play in your favor or otherwise. eCommerce is fairer than retail. Theres constant change there, and it requires the retailer to constantly monitor the market.</p>
                        <p>Retailers used to study customer psychology. Buyers and managers positioned merchandise on their shelves in a meaningful way. This was to ensure that the customer made his journey through the store the way the salesperson wanted. The customers spend increased with the help of competent navigation on the shelves and racks, music and additional services: tastings, discounts and random purchases at the cash point.</p>
                        <p>The world of eCommerce moves fast. In this world, one change follows another, and trends and research are shaping the industry at lightning speed. Today eshopping has become an easy way to obtain the thing or service you want – but selling online is a skill. Weve compiled a list of the best practices in eCommerce.</p>
                        <p>With the advent of eСommerce, many sellers are trying to find best-practices UX design for a positive user experience. UX design is central to the user experience of your eCommerce store. This is not just about beauty. Intuitive interaction, logical transitions and CTA buttons, payment for purchase – all these details play in your favor or otherwise. eCommerce is fairer than retail. Theres constant change there, and it requires the retailer to constantly monitor the market.</p>
                        <p>Retailers used to study customer psychology. Buyers and managers positioned merchandise on their shelves in a meaningful way. This was to ensure that the customer made his journey through the store the way the salesperson wanted. The customers spend increased with the help of competent navigation on the shelves and racks, music and additional services: tastings, discounts and random purchases at the cash point.</p>
                        <p>The world of eCommerce moves fast. In this world, one change follows another, and trends and research are shaping the industry at lightning speed. Today eshopping has become an easy way to obtain the thing or service you want – but selling online is a skill. Weve compiled a list of the best practices in eCommerce.</p>
                        <p>With the advent of eСommerce, many sellers are trying to find best-practices UX design for a positive user experience. UX design is central to the user experience of your eCommerce store. This is not just about beauty. Intuitive interaction, logical transitions and CTA buttons, payment for purchase – all these details play in your favor or otherwise. eCommerce is fairer than retail. Theres constant change there, and it requires the retailer to constantly monitor the market.</p>
                        <p>Retailers used to study customer psychology. Buyers and managers positioned merchandise on their shelves in a meaningful way. This was to ensure that the customer made his journey through the store the way the salesperson wanted. The customers spend increased with the help of competent navigation on the shelves and racks, music and additional services: tastings, discounts and random purchases at the cash point.</p>
                    </div>
                </div>

                <div className="mt-24 w-11/12 md:w-10/12 mx-auto mb-5 sticky">
                    <h1 className="text-2xl md:text-4xl headertin">More Blogs</h1>
                </div>
                <div className="w-11/12 md:w-10/12 mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
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