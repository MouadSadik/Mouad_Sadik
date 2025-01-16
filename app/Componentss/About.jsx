"use client"
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from 'react';
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const About = () => {

    const data = [
        {
            title: "2024-cours",
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
                            1ere annee cycle d'ingenieur: Genie informatique
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Étudiant en première année de cycle d'ingénieur en Génie Informatique, je développe des compétences en développement logiciel, réseaux, et systèmes d'information à travers des cours théoriques et des projets pratiques.


                        </p>
                        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Faculte Des Scinces et Techniques</span>
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
                            DEUST: Math-Physique-Informatique (MIP)
                        </p>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">
                        Diplômé d'un DEUST en Math-Physique-Informatique, j'ai acquis une base solide en mathématiques, physique et informatique, me préparant à des études approfondies en ingénierie.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                              
                        </p>
                        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Faculte Des Scinces et Techniques</span>
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
                        Baccalauréat: Sciences Physiques 
                        </p>
                        <p className="text-sm text-neutral-700 dark:text-neutral-400">
                        Titulaire d'un Baccalauréat en Sciences Physiques, j'ai développé des compétences analytiques et une forte compréhension des principes physiques et mathématiques.
                        </p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        </p>
                        <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span> Lycee Amal, Settat</span>
                        </button>
                    </BackgroundGradient>
                </div>
            ),
        },
    ];

    return (
        <div id="about" className="min-h-screen flex flex-col items-center justify-center text-center">
            <div>
                <h2 className="text-green-500 text-4xl font-bold mt-20 mb-0 animate-fade-in-out">Education</h2>
            </div>
            <div className="w-full mt-0  px-4">
                <Timeline data={data} title="Education Timeline" />
            </div>
        </div>
    );
}

export default About;


