"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';
import Services from "./Services";
import './service-section-new.css';
import './turn-off-animations.css';

const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // We don't need active state for the design in the image
    const [activeItem, setActiveItem] = useState(null);

    const handleHover = (sitem) => {
        setActiveItem(sitem);
    };

    useEffect(() => {
        const allBtns = gsap.utils.toArray(".btn-wrapper");
        const allBtnCircles = gsap.utils.toArray(".btn-move");

        if (allBtns.length > 0) {
            allBtns.forEach((btn, i) => {
                const btnElement = btn;
                const btnCircle = allBtnCircles[i];

                const callParallax = (e) => parallaxIt(e, btnCircle, 80);

                const parallaxIt = (e, target, movement) => {
                    const rect = btnElement.getBoundingClientRect();
                    const relX = e.clientX - rect.left;
                    const relY = e.clientY - rect.top;

                    gsap.to(target, 0.5, {
                        x: ((relX - rect.width / 2) / rect.width) * movement,
                        y: ((relY - rect.height / 2) / rect.height) * movement,
                        ease: Power2.easeOut,
                    });
                };

                btnElement.addEventListener('mousemove', callParallax);
                btnElement.addEventListener('mouseleave', () => {
                    gsap.to(btnCircle, 0.5, {
                        x: 0,
                        y: 0,
                        ease: Power2.easeOut,
                    });
                });

                return () => {
                    btnElement.removeEventListener('mousemove', callParallax);
                };
            });
        }
    }, []);

    return (        <section className={`service-section section-padding ${props.hclass || ''}`}>
            <div className="container">                <div className="title scroll-text-animation" data-animation="fade_from_right">
                    <h2>OUR <span>SERVICES</span></h2>
                </div>
                  {/* Concentric circle pattern in the center */}                <div className="service-image-circle">
                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="160" cy="160" r="160" fill="transparent" stroke="#333" strokeWidth="1" />
                        <circle cx="160" cy="160" r="135" fill="transparent" stroke="#333" strokeWidth="1" />
                        <circle cx="160" cy="160" r="110" fill="transparent" stroke="#333" strokeWidth="1" />
                        <circle cx="160" cy="160" r="85" fill="transparent" stroke="#333" strokeWidth="1" />
                        <circle cx="160" cy="160" r="60" fill="transparent" stroke="#333" strokeWidth="1" />
                        <circle cx="160" cy="160" r="35" fill="transparent" stroke="#333" strokeWidth="1" />
                        <circle cx="160" cy="160" r="10" fill="transparent" stroke="#333" strokeWidth="1" />
                    </svg>
                </div>

                <div className="row services-grid">
                    {Services.slice(0, 6).map((service, index) => (
                        <div className={`col-md-6 service-column ${index % 2 === 0 ? 'left-column' : 'right-column'}`} key={service.Id || index}>
                            <div className="service-card-flat">                                <div className="service-text">
                                    <span className="subtitle">{service.Subtitle}</span>
                                    <h3>
                                        <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>
                                            {service.title}
                                        </Link>
                                    </h3>
                                    <div className="service-border"></div>
                                </div>
                                <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`} className="service-arrow-link" aria-label={`Learn more about ${service.title}`}>
                                    <div className="arrow-icon-wrapper">
                                        <svg 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="service-arrow"
                                        >
                                            <path 
                                                d="M5 12H19" 
                                                stroke="currentColor" 
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                            <path 
                                                d="M12 5L19 12L12 19" 
                                                stroke="currentColor" 
                                                strokeWidth="2" 
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                  {/* More Services button not needed in this design */}
            </div>            {/* Remove the background shape as it's not needed in this design */}
        </section>
    );
};

export default ServiceSection;
