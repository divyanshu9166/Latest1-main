"use client";

import Image from "next/image";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

const items1 = [
  {
    title: "Travel Website Design",
    image: "/assets/img/case/case-1.jpg",
    categories: ["UI Design", "UX Design", "Website Design"],
  },
  {
    title: "AI Chatting Website Design",
    image: "/assets/img/case/case-2.jpg",
    categories: ["UI Design", "UX Design", "Website Design"],
  },
  {
    title: "Music App Design",
    image: "/assets/img/case/case-3.jpg",
    categories: ["UI Design", "UX Design", "Mobile App"],
  },
  {
    title: "Business Card Design",
    image: "/assets/img/case/case-4.jpg",
    categories: ["Branding", "Print Design", "Identity"],
  },
];

export const ParallaxScrollWith3DEffect = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const firstPart = items1.slice(0, 2);
  const secondPart = items1.slice(2, 4);

  return (
    <div
      style={{ background: "#0E0C23" }}
      className={cn("min-h-screen mx-auto overflow-hidden w-full py-24", className)}
    >
      <div className="flex flex-col md:flex-row items-start mx-auto gap-8 md:gap-16 lg:gap-24 py-12 sm:px-10 justify-center w-full">
        {/* First Column */}
        <div className="flex flex-col space-y-24 w-full md:w-auto">
          {firstPart.map((item, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={`first-${idx}`}
              className="w-full"
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] bg-[#1A1836]/80 w-full sm:w-[500px] rounded-3xl p-0">
                  {/* Image on top */}
                  <CardItem
                    translateZ="100"
                    className="w-full overflow-hidden rounded-3xl"
                  >
                    <Image
                      src={item.image}
                      height={400}
                      width={500}
                      className="w-full h-[300px] object-cover"
                      alt={item.title}
                    />
                  </CardItem>
                  
                  {/* Content section */}
                  <div className="p-8">
                    {/* Title */}
                    <CardItem
                      translateZ="50"
                      className="text-3xl font-bold text-white mb-6"
                    >
                      {item.title}
                    </CardItem>
                    
                    {/* Category buttons */}
                    <CardItem translateZ="60" className="flex flex-wrap gap-2">
                      {item.categories.map((category, catIdx) => (
                        <Link 
                          href="#" 
                          key={catIdx}
                          className="px-4 py-2 bg-[#2D2A47] text-white text-sm rounded-full hover:bg-purple-700 transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="flex flex-col space-y-24 w-full md:w-auto mt-12 md:mt-24">
          {secondPart.map((item, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={`second-${idx}`}
              className="w-full"
            >
              <CardContainer className="inter-var w-full">
                <CardBody className="group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] bg-[#1A1836]/80 w-full sm:w-[500px] rounded-3xl p-0">
                  {/* Image on top */}
                  <CardItem
                    translateZ="100"
                    className="w-full overflow-hidden rounded-3xl"
                  >
                    <Image
                      src={item.image}
                      height={400}
                      width={500}
                      className="w-full h-[300px] object-cover"
                      alt={item.title}
                    />
                  </CardItem>
                  
                  {/* Content section */}
                  <div className="p-8">
                    {/* Title */}
                    <CardItem
                      translateZ="50"
                      className="text-3xl font-bold text-white mb-6"
                    >
                      {item.title}
                    </CardItem>
                    
                    {/* Category buttons */}
                    <CardItem translateZ="60" className="flex flex-wrap gap-2">
                      {item.categories.map((category, catIdx) => (
                        <Link 
                          href="#" 
                          key={catIdx}
                          className="px-4 py-2 bg-[#2D2A47] text-white text-sm rounded-full hover:bg-purple-700 transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};