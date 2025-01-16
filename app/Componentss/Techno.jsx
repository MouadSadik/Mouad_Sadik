"use client"
import React from 'react'
import { FloatingDock } from '@/components/byme';
import {
  IconBrandVercel,
  IconBrandGithub,
  IconBrandJavascript,
  IconJava,
  IconHtml,
  IconBrandCss3,
  IconBrandCpp,
  IconBrandMysql,
  IconSql,
  IconBrandTailwind,
  IconBrandGit,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandFramerMotion,
} from "@tabler/icons-react";

const Techno = () => {

  const links = [
    {
      title: "JavaScript",
      icon: (
        <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },

    {
      title: "React JS",
      icon: (
        <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Next JS",
      icon: (
        <IconBrandNextjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Framer Motion",
      icon: (
        <IconBrandFramerMotion className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "C/C++",
      icon: (
        <IconBrandCpp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Html",
      icon: (
        <IconHtml className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },

    {
      title: "Css",
      icon: (
        <IconBrandCss3 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Tailwind Css",
      icon: (
        <IconBrandTailwind className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "SQL/MySql/SqlServer",
      icon: (
        <IconBrandMysql className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Vercel",
      icon: (
        <IconBrandVercel className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    
    {
      title: "Git",
      icon: (
        <IconBrandGit className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center  justify-center w-full mt-12 ">
        <FloatingDock
          items={links}
        />
      </div>
    </div>
  )
}

export default Techno