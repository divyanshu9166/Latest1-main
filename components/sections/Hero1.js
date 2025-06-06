import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"
import dynamic from 'next/dynamic'

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false
})

export default function Hero1() {
    return (
        <>
            {/* Updated Background with Linear Gradient */}
            <div className="fixed h-full w-full bg-[#0f172a]" style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(180deg,_rgba(2,3,10,1)_13%,_rgba(36,65,197,1)_64%,_rgba(223,229,225,1))] animate-pulse-subtle"></div>
            </div>
            
            <section className="hero-section-version1 position-relative" style={{ background: 'transparent' }}>
                <div className="container">
                    <div className="d-flex flex-lg-row flex-column align-items-center">
                        {/* Content Column */}
                        <div className="hero-v1-content flex-grow-1" style={{ maxWidth: '60%' }}>
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between">
                                <h1 className="white-clr text-uppercase">
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        Next Generation
                                    </span>
                                    <span>
                                        <span className="text-italic me-3" data-aos="zoom-in-right" data-aos-duration={2100}>
                                            Creative 
                                        </span>
                                        <span className="designers" data-text="Agency" data-aos="zoom-in" data-aos-duration={2000} style={{color: "var(--colors--gradient-color-01)", WebkitTextStrokeColor: "var(--colors--gradient-color-01)"}}>Agency</span>
                                    </span>
                                </h1>
                                <VideoPopup style={1}/>
                            </div>
                            
                            <div className="hero-sponsor">
                                <div className="sponsor-inner d-flex align-items-center gap-xxl-13 gap-xl-10 gap-lg-8 gap-md-6 gap-5 mb-xxl-10 mb-xl-7 mb-lg-6 mb-6">
                                    <Link href="/">
                                        <img src="/assets/img/client/c1.png" alt="img" />
                                    </Link>
                                    <Link href="/">
                                        <img src="/assets/img/client/c2.png" alt="img" />
                                    </Link>
                                    <Link href="/">
                                        <img src="/assets/img/client/c3.png" alt="img" />
                                    </Link>
                                </div>
                                <div className="brandin-wrap d-block">
                                    <h4 className="white-clr brading-text">
                                        1k + Brands Trust Us
                                    </h4>
                                </div>
                            </div>
                        </div>
                        
                        {/* 3D Spline Element - Positioned to the right */}
                        <div className="hero-spline-element" 
                             style={{ 
                                 height: '500px', 
                                 width: '40%',
                                 backgroundColor: 'transparent',
                                 outline: 'none',
                                 border: 'none',
                                 boxShadow: 'none'
                             }}>
                            <Spline scene="https://prod.spline.design/Dmz-N1JjJVXuxsrZ/scene.splinecode" />
                        </div>
                    </div>
                </div>
                {/* Hero Exprience box */}
                <div className="hero-expriencebox d-flex align-items-center">
                    <div className="expri-thumb">
                        <img src="/assets/img/banner/bn-expri.png" alt="img" />
                    </div>
                    <div className="expri-content d-flex align-items-center gap-xxl-11 gap-xl-9 gap-lg-7 gap-6">
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                12+
                            </h6>
                            <span className="yer spantext-clr">
                                years of experience
                            </span>
                        </div>
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                25K+
                            </h6>
                            <span className="yer spantext-clr">
                                completed projects
                            </span>
                        </div>
                    </div>
                </div>
                {/* Element */}
                <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="hero-arrow" />
            </section>
        </>
    )
}
