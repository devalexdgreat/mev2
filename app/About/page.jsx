"use client";
import { gsap } from "gsap";
import heroImg from '@/public/avatar.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from "framer-motion";


export default function About() {

    return (
        <div className="w-full pt-56 md:pt-72 mb-32 md:mb-64 overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto">
                <div className='mb-24 md:mb-64'>
                    <motion.h1 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-7xl font-medium pb-1 headertin">
                        I&rsquo;m a reliable design and development ally
                    </motion.h1>
                </div>
            </div>
            
            <div className='w-11/12 md:w-10/12 mx-auto mb-24 flex flex-col md:flex-row md:mb-72 gap-8 md:gap-0'>
                <div className='w-full md:w-6/12 flex items-end'>
                    <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className='w-full flex flex-col gap-4 justify-start'>
                        <p className='text-baseline md:text-xl w-full md:w-11/12 leading-10'>
                            Hello there! I&rsquo;m Ogbuagu Great Alexander, a passionate 
                            and versatile Fullstack Developer and Designer with a 
                            keen eye for detail and a love for creating seamless, 
                            user-friendly digital experiences. With over 2 years of hands-on experience, 
                            I&rsquo;ve honed my skills across various technologies to craft compelling web applications.
                        </p>
                        <p className='text-baseline md:text-xl w-full md:w-11/12 leading-10'>
                            I strongly advocate for design and development that is modular, 
                            scalable, aesthetically pleasing, and user-centered. With extensive 
                            proficiency in both UI/UX design and web development, 
                            I craft websites that excel in selling, performance, and visual appeal.
                        </p>
                    </motion.div>
                </div>
                <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className='w-full md:w-6/12 flex justify-end'>
                    <Image src={heroImg} className='w-full md:w-10/12' alt=""/>
                </motion.div>
            </div>

            <div className="w-11/12 md:w-10/12 mx-auto">
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="mb-24">
                    <h1 className="w-8/12 md:w-6/12 text-3xl md:text-5xl lg:text-5xl 
                    pb-1 headertin">My Tech stack & Proficiency.</h1>
                </motion.div>
                <motion.div 
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-4 md:grid-cols-6 w-full gap-4">
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full flex justify-start items-start">                         
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" x="0px" y="0px" width="50" 
                                height="50" viewBox="0 0 48 48">
                                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                            </svg>                            
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" x="0px" y="0px" width="50" 
                                height="50" viewBox="0 0 48 48">
                                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                            </svg>                            
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" x="0px" y="0px" width="50" 
                                height="50" viewBox="0 0 48 48">
                                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                            </svg>                            
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" x="0px" y="0px" width="50" 
                                height="50" viewBox="0 0 48 48">
                                <linearGradient id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1" x1="24" x2="24" y1="43.734" y2="4.266" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0a070a"></stop><stop offset=".465" stop-color="#2b2b2b"></stop><stop offset="1" stop-color="#4b4b4b"></stop></linearGradient><circle cx="24" cy="24" r="19.734" fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"></circle><rect width="3.023" height="15.996" x="15.992" y="16.027" fill="#fff"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2" x1="30.512" x2="30.512" y1="33.021" y2="18.431" gradientUnits="userSpaceOnUse"><stop offset=".377" stop-color="#fff" stop-opacity="0"></stop><stop offset=".666" stop-color="#fff" stop-opacity=".3"></stop><stop offset=".988" stop-color="#fff"></stop></linearGradient><rect width="2.953" height="14.59" x="29.035" y="15.957" fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3" x1="22.102" x2="36.661" y1="21.443" y2="40.529" gradientUnits="userSpaceOnUse"><stop offset=".296" stop-color="#fff"></stop><stop offset=".521" stop-color="#fff" stop-opacity=".5"></stop><stop offset=".838" stop-color="#fff" stop-opacity="0"></stop></linearGradient><polygon fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)" points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"></polygon>
                            </svg>                            
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" x="0px" y="0px" width="50" 
                                height="50" viewBox="0 0 48 48">
                                <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path><path fill="#37474f" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path><path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path><path fill="#37474f" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
                            </svg>                            
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" x="0px" y="0px" width="50" 
                                height="50" viewBox="0 0 48 48">
                                <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                            </svg>                            
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                            </svg>                           
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                            </svg>                           
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 80 80">
                                <path fill="#dcd5f2" d="M40,61.5C18.22,61.5,0.5,51.855,0.5,40S18.22,18.5,40,18.5S79.5,28.145,79.5,40S61.78,61.5,40,61.5z"></path><path fill="#8b75a1" d="M40,19c21.505,0,39,9.421,39,21S61.505,61,40,61S1,51.579,1,40S18.495,19,40,19 M40,18 C17.909,18,0,27.85,0,40s17.909,22,40,22s40-9.85,40-22S62.091,18,40,18L40,18z"></path><path fill="#36404d" d="M25.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C29.023 43.074 27.395 44 21.57 44h-4.14l1.75-10H25.112M25.112 32H17.5L14 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C32.842 35.096 29.436 32 25.112 32L25.112 32zM61.112 34c1.725 0 3.214.622 4.084 1.706.749.934.981 2.171.668 3.577C65.023 43.074 63.395 44 57.57 44h-4.14l1.75-10H61.112M61.112 32H53.5L50 52h2l1.056-6h4.515c5.863 0 9.053-.905 10.246-6.284C68.842 35.096 65.436 32 61.112 32L61.112 32z"></path><g><path fill="#36404d" d="M49.072,33.212C48.193,32.348,46.644,32,44.334,32h-5.538L40,26h-2.1L34,46h1.99l2.388-12h0.419 h5.538c2.338,0,3.094,0.4,3.335,0.637c0.343,0.338,0.424,1.226,0.217,2.363l-1.767,9h2.106l1.626-8.63 C50.199,35.462,49.936,34.062,49.072,33.212z"></path></g>
                            </svg>                           
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z"></path><path fill="#fff" d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"></path>
                            </svg>                          
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                            </svg>                         
                        </div>                        
                    </div>
                    <div className="w-20 h-20">                        
                        <div className="w-full h-full mx-auto flex justify-center items-center">                            
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"></path>
                            </svg>                         
                        </div>                        
                    </div>
                </motion.div>
            </div>

            <div className='w-11/12 md:w-10/12 mx-auto mt-44 md:mt-64'>
                <div className='w-7/12 md:w-5/12'>
                    <motion.h1 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.01, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className='text-3xl md:text-5xl pb-1 headertin'>Values i go through</motion.h1>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-12 md:gap-y-24 mt-24 md:mt-44'>
                    <motion.div 
                    // initial={{ y: 100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className='text-2xl mb-8 font-medium headertin'>I Cultivate Attention to Detail</h1>
                        <p className='leading-10 text-[#eee]'>
                            I cultivate an attention to detail in coding for clean, 
                            efficient, and error-resistant solutions.
                        </p>
                    </motion.div>
                    <motion.div 
                    // initial={{ y: 100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ delay: 0.09, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className='text-2xl mb-8 font-medium headertin'>I Embrace Resilience</h1>
                        <p className='leading-10 text-[#eee]'>
                            I develop resilience to bounce back from setbacks, 
                            viewing challenges as opportunities for improvement.
                        </p>
                    </motion.div>
                    <motion.div 
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className='text-2xl mb-8 font-medium headertin'>I Adopt a User-Centric Mindset</h1>
                        <p className='leading-10 text-[#eee]'>
                            I prioritize understanding user needs and preferences for 
                            creating meaningful and impactful solutions.
                        </p>
                    </motion.div>
                    <motion.div 
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className='text-2xl mb-8 font-medium headertin'>I Master Effective Communication</h1>
                        <p className='leading-10 text-[#eee]'>
                            I focus on mastering the art of communication, 
                            expressing ideas clearly and actively listening to others.
                        </p>
                    </motion.div>
                    <motion.div 
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className='text-2xl mb-8 font-medium headertin'>I Embrace Failure as a Learning Opportunity</h1>
                        <p className='leading-10 text-[#eee]'>
                            I focus on mastering the art of communication, 
                            expressing ideas clearly and actively listening to others.
                        </p>
                    </motion.div>
                    <motion.div 
                    // initial={{ y: -100, opacity: 0 }}
                    // whileInView={{ y: 0, opacity: 1 }}
                    // transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className='text-2xl mb-8 font-medium headertin'>I Prioritize Collaboration</h1>
                        <p className='leading-10 text-[#eee]'>
                            I foster a culture of teamwork and shared success, 
                            recognizing that collaboration leads to innovation.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}