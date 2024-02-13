import { motion } from "framer-motion";
export default function Services() {
    return (
        <div className="w-full my-44 overflow-hidden">
            <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row">
                <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className='mb-1 md:mb-12 pt-24 w-full'>
                    <h1 className='text-4xl w-11/12 md:text-6xl md:full headertin pb-1'>
                        My Expertise / Capability
                    </h1>
                </motion.div>
                <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="pt-1 md:pt-12 w-full"
                >

                    <div className="w-full mx-auto min-h-sceen">
                        <div className="grid divide-y divide-green-500 w-full mx-auto mt-8">
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span className="text-4xl headertin"> Design</span>
                                        <span className="transition group-open:rotate-180 rounded-xl p-1 bg-green-500">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-white mt-3 group-open:animate-fadeIn">
                                        I specialize in creating visually stunning designs. From concept to execution, I bring creativity and precision to every project, ensuring a compelling and cohesive visual experience.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span className="text-4xl headertin"> Development</span>
                                        <span className="transition group-open:rotate-180 rounded-xl p-1 bg-green-500">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-white mt-3 group-open:animate-fadeIn">
                                        Using React.js, Next.js, Tailwind CSS, Framer Motion, GSAP, and MongoDB, I craft dynamic, interactive websites with seamless design and robust content management.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span className="text-4xl headertin"> Maintenance</span>
                                        <span className="transition group-open:rotate-180 rounded-xl p-1 bg-green-500">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-white mt-3 group-open:animate-fadeIn">
                                        I provide efficient maintenance solutions, ensuring websites remain smooth and secure. Utilizing proactive measures, I offer timely updates and support to keep your online presence optimized.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span className="text-4xl headertin"> Consultation</span>
                                        <span className="transition group-open:rotate-180 rounded-xl p-1 bg-green-500">
                                            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-white mt-3 group-open:animate-fadeIn">
                                        Guiding your project with expert consultation. Tailored advice and industry insights to elevate your strategies and ensure success.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}