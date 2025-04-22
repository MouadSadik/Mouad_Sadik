"use client"

import React from "react";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const About = () => {

    const data = [
        {
            title: "2024-Present",
            content: (
                <div className="w-full flex ">
                    <BackgroundGradient className="md:w-[600px] max-w-md rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900">
                        <Image
                            src={`/fsts.png`}
                            alt="fsts"
                            height={80}
                            width={80}
                            className="mo"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            1st year of Engineering Cycle: Computer Engineering
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        As a first-year engineering student in Computer Engineering, I am developing skills in software development, networks, and information systems through theoretical courses and practical projects.
                        </p>
                        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Faculty of Science and Technology</span>
                        </button>
                    </BackgroundGradient>
                </div>
            ),
        },
        {
            title: "2022-2024",
            content: (
                <div className="w-full flex ">
                    <BackgroundGradient className="md:w-[600px] max-w-md rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900">
                        <Image
                            src={`/fsts.png`}
                            alt="fsts"
                            height={80}
                            width={80}
                            className="mo"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            DEUST: Mathematics-Physics-Computer Science (MIP)
                        </p>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">
                        Graduated with a DEUST in Mathematics-Physics-Computer Science, I gained a solid foundation in mathematics, physics, and computer science, preparing me for advanced engineering studies.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                              
                        </p>
                        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Faculty of Science and Technology</span>
                        </button>
                    </BackgroundGradient>
                </div>
            ),
        },
        {
            title: "2019-2022",
            content: (
                <div className="w-full flex ">
                    <BackgroundGradient className="md:w-[700px] max-w-md rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900">
                        <Image
                            src={`/fsts.png`}
                            alt="fsts"
                            height={80}
                            width={80}
                            className="mo"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        Baccalaureate: Physical Sciences 
                        </p>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">
                        Holder of a Baccalaureate in Physical Sciences, I developed analytical skills and a strong understanding of physical and mathematical principles.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        </p>
                        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Amal High School, Settat</span>
                        </button>
                    </BackgroundGradient>
                </div>
            ),
        },
    ];

    return (
        <div id="about" className="min-h-screen flex flex-col items-center justify-center text-center">
            <div>
                <h2 className="text-green-500 text-4xl font-bold mt-32 mb-0 animate-fade-in-out">Education</h2>
            </div>
            <div className="w-full mt-0  px-4">
                <Timeline data={data} title="Education Timeline" />
            </div>
        </div>
    );
}

export default About;
