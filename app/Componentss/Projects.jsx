"use client"
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-green-500 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                A dynamic personal portfolio
              </span>{" "}
              built using React.js to highlight my skills, projects, and achievements in web development. The website features a sleek, modern design with a responsive layout, showcasing my work and providing easy access to my contact information. It is deployed on Vercel for seamless performance and fast loading times. <br />
              <span className="font-bold text-neutral-700">Technologies Used : </span>
              React.js,
              Next.js,
              Tailwind CSS,
              GitHub,
              Vercel (Deployment) <br />
            </p>

            <img
              src="portfolio.png"
              alt="portfolio"
              height="500"
              width="500"
              className=" m-10 h-full w-full mx-auto object-contain"
            />

            <a href="https://mouad-sadik.vercel.app/" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mr-4 transition duration-300 ease-in-out">View Project</a>

            <a href="https://github.com/MouadSadik/Mouad_Sadik" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out">Github</a>
          </div>
        );
      })}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                An interactive online platform
              </span>{" "}
              where students can register, post articles, comment, and stay updated with the latest magazine news. Users can engage with content through reactions and messaging, creating a dynamic and collaborative environment for student-driven content. I collaborated with a team of 5 developers, serving as the frontend developer and Figma designer to ensure a smooth and visually appealing user experience. <br />
              <span className="font-bold text-neutral-700">Technologies Used : </span>
              React.js,
              Next.js,
              Tailwind CSS,
              GitHub,
              Figma,
              Vercel (Deployment) <br />
            </p>

            <img
              src="magazin.png"
              alt="portfolio"
              height="500"
              width="500"
              className=" m-10 h-full w-full mx-auto object-contain"
            />

            <a href="https://github.com/zzemat/Magazine-IMPACT" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mr-4 transition duration-300 ease-in-out">View Project</a>

            <a href="https://github.com/zzemat/Magazine-IMPACT" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out">Github</a>
          </div>
        );
      })}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                A modern frontend for an eCommerce store,
              </span>{" "}
              featuring dynamic product listings, detailed product pages, and a shopping cart. The app uses App Router for smooth navigation and seamless transitions between pages, ensuring a fluid and efficient user experience across both desktop platforms. <br />
              <span className="font-bold text-neutral-700">Technologies Used : </span>
              React.js,
              Next.js,
              Tailwind CSS,
              GitHub,
              Vercel (Deployment) <br />
            </p>

            <img
              src="store.png"
              alt="portfolio"
              height="500"
              width="500"
              className=" m-10 h-full w-full mx-auto object-contain"
            />

            <a href="https://ecommerce-store-delta-silk.vercel.app/" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mr-4 transition duration-300 ease-in-out">View Project</a>

            <a href="https://github.com/MouadSadik/ecommerce-store" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out">Github</a>
          </div>
        );
      })}
    </>
  );
};

const DummyContent4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                A sleek note-taking app
              </span>{" "}
              with user authentication powered by Clerk. It allows users to securely create, edit, and manage their notes in a clean and modern interface using ShadCN UI components. <br />
              <span className="font-bold text-neutral-700">Technologies Used : </span>
              React.js,
              Next.js,
              Tailwind CSS,
              Git/GitHub,
              Clerck,
              Shadcn ui <br />
            </p>

            <img
              src="notes.png"
              alt="portfolio"
              height="500"
              width="500"
              className=" m-10 h-full w-full mx-auto object-contain"
            />

            <a href="https://github.com/MouadSadik/Add-Notes" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mr-4 transition duration-300 ease-in-out">View Project</a>

            <a href="https://github.com/MouadSadik/Add-Notes" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out">Github</a>
          </div>
        );
      })}
    </>
  );
};

const DummyContent5 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                A hotel booking management
              </span>{" "}
              system developed in C, allowing users to reserve rooms, check availability, and manage customer data via file or database interaction. <br />
              <span className="font-bold text-neutral-700">Technologies Used : </span>
              C, Database, Sql Server <br />
            </p>

            <img
              src="bd.png"
              alt="portfolio"
              height="500"
              width="500"
              className=" m-10 h-full w-full mx-auto object-contain"
            />

            <a href="https://github.com/MouadSadik/GestionReservationHoteliere" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mr-4 transition duration-300 ease-in-out">View Project</a>

            <a href="https://github.com/MouadSadik/GestionReservationHoteliere" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out">Github</a>
          </div>
        );
      })}
    </>
  );
};

const DummyContent6 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                A Java-based application
              </span>{" "}
              to digitalize the workflow of a recruitment agency, managing companies, subscriptions, job offers, newspapers, and applicants. The system handles complex business rules such as experience filtering, multi-edition job postings, and automatic offer deactivation once positions are filled. <br />
              <span className="font-bold text-neutral-700">Technologies Used : </span>
              Java,
              JDBC or JPA (for database handling),
              MySQL (or any RDBMS),
              JavaFX / Swing (if GUI),
              UML (for design modeling) <br />
            </p>

            <img
              src="agency.jpg"
              alt="portfolio"
              height="500"
              width="500"
              className=" m-10 h-full w-full mx-auto object-contain"
            />

            <a href="#projects" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded mr-4 transition duration-300 ease-in-out">View Project</a>

            <a href="#projects" class="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out">Github</a>
          </div>
        );
      })}
    </>
  );
};


const data = [
  {
    category: "Personal Portfolio",
    title: "Where my skills and passion come to life.",
    src: "portfolio.png",
    content: <DummyContent1 />,
  },
  {
    category: "Magazin-Impact Etudiant",
    title: "A student platform to post, interact, and stay updated.",
    src: "magazin.png",
    content: <DummyContent2 />,
  },
  {
    category: "Ecommerce Store",
    title: "eCommerce store with smooth navigation",
    src: "store.png",
    content: <DummyContent3 />,
  },
  {
    category: "Notes App",
    title: "A secure and stylish note manager",
    src: "notes.png",
    content: <DummyContent4 />,
  },
  {
    category: "Hotel Reservation System",
    title: "Academic Project",
    src: "bd.png",
    content: <DummyContent5 />,
  },
  {
    category: "Recruitment Agency (Coming Soon)",
    title: "Academic Java Project",
    src: "agency.jpg",
    content: <DummyContent6 />,
  },
];
