"use client"
import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const Testimonials = () => {


    const testimonials = [
        {
          quote:
            "La passion de Mouad pour le développement frontend est évidente. Il est toujours à jour avec les dernières technologies et apporte des solutions innovantes à chaque projet.",
          name: "Amina El Haddadi",
          designation: "Étudiant en cycle d'ingénieur en informatique",
          src: "/1.webp",
        },
        {
          quote:
            "Mouad est un excellent collègue de classe. Son expertise en développement frontend nous a aidés à surmonter de nombreux défis techniques. Il est toujours prêt à partager ses connaissances.",
          name: "Youssef Bendon",
          designation: "Étudiant en informatique",
          src: "/2.webp",
        },
        {
          quote:
            "Travailler avec Mouad sur des projets universitaires a été une expérience enrichissante. Sa maîtrise du frontend et son sens du détail ont vraiment amélioré la qualité de notre travail.",
          name: "Mohamed Lahlou",
          designation: "Étudiant en ingénierie informatique",
          src: "/3.webp",
        },
        {
          quote:
            "Mouad a une capacité impressionnante à transformer des idées complexes en interfaces utilisateur intuitives et esthétiques. Son dévouement et sa créativité le distinguent.",
          name: "Rachid Chafik",
          designation: "Développeur frontend chez IT Solutions",
          src: "/4.webp",
        },
        {
          quote:
            "En tant que professionnel, je peux dire que Mouad a un potentiel énorme. Sa curiosité intellectuelle et ses compétences en développement frontend en font un atout précieux pour n'importe quel projet.",
          name: "Hassan Ouahidi",
          designation: "Consultant IT chez MarocTech",
          src: "/5.webp",
        },
      ];
      
      

  return (
    <div>
        <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default Testimonials