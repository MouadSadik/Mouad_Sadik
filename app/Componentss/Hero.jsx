"use client"

import Image from 'next/image';
import React from 'react'
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SiFramework } from "react-icons/si";
import { BsDownload } from "react-icons/bs";
import { FloatingDock } from '@/components/ui/floating-dock';
import { BackgroundBeams } from '@/components/ui/background-beams';

import {
    IconBrandVercel,
    IconBrandLinkedin,
    IconBrandGithub,
    IconBrandX,
    IconBrandInstagram,
    IconBrandGmail,
    IconTerminal2,
} from "@tabler/icons-react";

const Hero = () => {

    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/mouad-sadik-5b8907257/",
        },

        {
            title: "Email",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "mailto:sadik.mou.fst@uhp.ac.ma.com",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/mouad_sadik_?igsh=NXoyNzhjamozZTFt",
        },
        {
            title: "Vercel",
            icon: (
                <IconBrandVercel className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://vercel.com/mouad-sadiks-projects",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/MouadSadik",
        },
    ];


    return (
        <div id='home'>
            
            
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" relative flex flex-col gap-4 items-center justify-center px-4 z-50"
                >

                    <div>
                        <img className='mt-40 w-40 z-50  rounded-full object-cover border-4 border-green-500 shadow-lg' 
                            src="photo2.png" 
                            alt="me" />
                    </div>

                    <div className="font-extralight text-3xl md:text-4xl   dark:text-white text-center z-50 m-5">
                        Hey there! <span className='text-green-500'>I’m Mouad</span> a Computer Science student <br />
                        with a passion for building software <br />
                        and making cool things with code. <br />
                    </div>
                    
                </motion.div>
                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4 mt-4 z-10">
                    <Button className="bg-green-500  hover:scale-110 transition-all duration-500">
                        <Link href="#projects">View More</Link>
                        <SiFramework className="ml-2 " />
                    </Button>
                    <Button variant="outline" className="text-green-500 cursor-pointer transition-all duration-500">
                        <Link className="hidden md:block" href="#projects">
                            Download CV
                        </Link>
                        <BsDownload className="ml-2 animate-pulse" />
                    </Button>
                </div>

                {/* Social Links */}
            <div className="flex items-center justify-center w-full mt-12 z-10 ">
                    <FloatingDock
                        mobileClassName="translate-y-20" // only for demo, remove for production
                        items={links}
                    />
            </div>

            <BackgroundBeams />
            
        </div>
    )
}

export default Hero