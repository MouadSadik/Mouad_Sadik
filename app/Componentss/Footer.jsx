"use client"
import { Button } from '@/components/ui/moving-border'
import React from 'react'
import Link from 'next/link'
import {  IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import { BackgroundBeams } from '@/components/ui/background-beams'

const links = [
    {
        icon:<IconBrandGithub />,
        link: "https://github.com/MouadSadik"
    },
    {
        icon:<IconBrandLinkedin />,
        link: "https://www.linkedin.com/in/mouad-sadik-5b8907257/"
    },
    {
        icon:<IconBrandInstagram />,
        link: "https://www.instagram.com/mouad_sadik_?igsh=NXoyNzhjamozZTFt"
    },
]

const Footer = () => {
  return (
    <footer>
      <div id='contact' className="h-[12rem] w-full dark:bg-black bg-neutral-200 relative flex items-center justify-center md:justify-between md:px-20 gap-10 flex-col md:flex-row">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="text-lg md:text-2xl font-bold">
            Copyright @ <span className="text-primary">SADIK Mouad</span>
        </h1>
        <div className="flex items-center justify-center gap-5">
            {links.map((link,key) => {
                return <Button key={key}  className="bg-neutral-500 hover:bg-green-700 hover:scale-110 transition-all duration-500">
                    <Link href={link.link}>
                        {link.icon}
                    </Link>
                </Button>   
            })}
        </div>
      </div>
      <BackgroundBeams />
    </footer>
  )
}

export default Footer