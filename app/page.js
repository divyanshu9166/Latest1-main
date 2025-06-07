"use client";

import Layout from "../components/layout/Layout"
import Blog1 from "../components/sections/Blog1"
import Hero1 from "../components/sections/Hero1"
import Product1 from "../components/sections/Product1"
import Team1 from "../components/sections/Team1"

import TextSLider1 from "../components/sections/TextSLider1"
import TextSLider2 from "../components/sections/TextSLider2"
import TextSLider3 from "../components/sections/TextSLider3"
import Watch1 from "../components/sections/Watch1"
import TeamSection from "../components/sections/TeamSection"
import { ParallaxScrollWith3DEffect } from "../components/sections/ParallaxScrollWith3DEffect"
import QueryProjectSection from "../components/sections/QueryProjectSection.jsx"

import dynamic from 'next/dynamic'
import { AnimatedTestimonials } from "../components/sections/animated-testimonials"
import Index from "../pages/Index"
// Dynamic import with SSR disabled for client-only components
const SmoothCursor = dynamic(() => import('../components/ui/smooth-cursor'), {
    ssr: false
  })
   const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div className="position-relative overflow-hidden">

                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <SmoothCursor />
                    <Hero1 />
                    
                    {/* Services Section with ServiceCube and ContentSection - Moved up for testing */}
                    <div className="relative overflow-hidden">
                        <Index />
                    </div>
                    
                    <Product1 />
                    <TextSLider1 />
                    <ParallaxScrollWith3DEffect />
                    <Watch1 />
                    <Team1 />
                    <TextSLider2 />
                    <AnimatedTestimonials testimonials={testimonials} />                    <Blog1 />
                    <QueryProjectSection />
                    <TextSLider3 />
                    <TeamSection/>
                    
                </div>
            </Layout>
        </>
    )
}
