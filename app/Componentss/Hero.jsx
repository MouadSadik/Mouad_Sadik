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
            <AuroraBackground>
            
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="md:mt-40 text-3xl md:text-7xl font-bold text-green-500 dark:text-white text-center">
                        Bonjour, Je Suis Mouad Sadik.
                    </div>
                    <div className="font-extralight text-base md:text-4xl text-gray-700  dark:text-neutral-200 py-4">
                        Eleve Ingenieur Et developpeur frontend.
                    </div>
                </motion.div>
                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4 mt-4 z-10">
                    <Button className="bg-green-500  hover:scale-110 transition-all duration-500">
                        <Link href="#projects">Voir mon travail</Link>
                        <SiFramework className="ml-2 " />
                    </Button>
                    <Button variant="outline" className="text-green-500 cursor-pointer transition-all duration-500">
                        <Link className="hidden md:block" href="#projects">
                            Telecharger CV
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
            <BackgroundBeams/>
            </AuroraBackground>
        </div>
    )
}

export default Hero