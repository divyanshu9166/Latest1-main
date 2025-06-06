"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMemberCard = ({ name, role, avatarSrc, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D effect implementation
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = '';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Updated to use a single transition property for everything
  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl cursor-pointer w-[300px] h-[400px] ${isHovered ? 'bg-gradient-to-b from-rose-500 to-rose-600' : 'bg-[#1b1b33]'}`}
      style={{
        transition: 'background 0.5s ease-in-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <div 
        className={`flex flex-col items-center justify-center h-full p-8`}
        style={{
          transform: isHovered ? 'translateY(-64px)' : 'translateY(0)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {/* Avatar Image */}
        <div 
          className={`relative w-40 h-40 mb-6 rounded-full overflow-hidden`}
          style={{
            transform: isHovered ? 'scale(0.75) translateY(-6px)' : 'scale(1) translateY(0)',
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          <Image
            src={avatarSrc}
            alt={name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name and Role */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
          <p 
            className="text-sm font-medium tracking-wider uppercase"
            style={{
              color: isHovered ? '#f1f1f1' : '#e11d48',
              transition: 'color 0.5s ease-in-out',
            }}
          >
            {role}
          </p>
        </div>
      </div>
      
      {/* Social Media Icons - Only visible on hover */}
      <div 
        className="absolute bottom-8 left-0 w-full flex justify-center space-x-4"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Link href="#" className="rounded-full bg-white/20 p-3 hover:bg-white/40 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </Link>
        <Link href="#" className="rounded-full bg-white/20 p-3 hover:bg-white/40 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
          </svg>
        </Link>
        <Link href="#" className="rounded-full bg-white/20 p-3 hover:bg-white/40 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
          </svg>
        </Link>
        <Link href="#" className="rounded-full bg-white/20 p-3 hover:bg-white/40 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'JONATHAN LEE',
      role: 'FULL STACK DEVELOPER',
      avatarSrc: '/assets/img/team/team1.png'
    },
    {
      id: 2,
      name: 'RACHANA SHETH',
      role: 'FULL STACK DEVELOPER',
      avatarSrc: '/assets/img/team/team2.png'
    },
    {
      id: 3,
      name: 'YORGAN TED',
      role: 'FULL STACK DEVELOPER',
      avatarSrc: '/assets/img/team/team3.png'
    }
  ];

  return (
    <section className="py-20 w-full bg-[#13132b] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Meet our talented professionals dedicated to bringing your vision to life</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              avatarSrc={member.avatarSrc}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;