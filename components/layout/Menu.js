'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Menu() {
    // const pathname = usePathname()
    // const [currentMenuItem, setCurrentMenuItem] = useState("")

    // useEffect(() => {
    //     setCurrentMenuItem(pathname)
    // }, [pathname])

    // const checkCurrentMenuItem = (path) => currentMenuItem === path ? "active" : ""
    // const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "active" : ""
    const [isAccordion, setIsAccordion] = useState(0)

    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }

    // Style for menu links that uses the new color scheme
    const menuLinkStyle = {
        color: 'var(--colors--font-color)',
    }
    
    // Style for hover state that uses accent color
    const hoverStyle = {
        color: 'var(--colors--acent-color)',
    }

    return (
        <>
            <ul className="custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
                <li className="menu-item position-relative">
                    <button className="position-relative ps-5 white-clr fw_500 cus-z1" onClick={() => handleAccordion(1)}>
                        Home
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 1 ? "block" : "none"}`, backgroundColor: 'var(--colors--element-color)' }}>
                        <li className="menu-link py-1">
                            <Link href="/" className="fw_500 white-clr" style={menuLinkStyle}>Home Version-1</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/index2" className="fw_500 white-clr" style={menuLinkStyle}>Home Version-2</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/index3" className="fw_500 white-clr" style={menuLinkStyle}>Home Version-3</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/index4" className="fw_500 white-clr" style={menuLinkStyle}>Home Version-4</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(2)}>
                        Pages
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 2 ? "block" : "none"}`, backgroundColor: 'var(--colors--element-color)' }}>
                        <li className="menu-link py-1">
                            <Link href="/about" className="fw_500 white-clr" style={menuLinkStyle}>About</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/pricing" className="fw_500 white-clr" style={menuLinkStyle}>Pricing Plan</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/team" className="fw_500 white-clr" style={menuLinkStyle}>Team Grid</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/team-details" className="fw_500 white-clr" style={menuLinkStyle}>Team Details</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/faq" className="fw_500 white-clr" style={menuLinkStyle}>Faqs</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/contact" className="fw_500 white-clr" style={menuLinkStyle}>Contact</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/oops" className="fw_500 white-clr" style={menuLinkStyle}>Oops 404</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(3)}>
                        Protfolio
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 3 ? "block" : "none"}`, backgroundColor: 'var(--colors--element-color)' }}>
                        <li className="menu-link py-1">
                            <Link href="/study-grid" className="fw_500 white-clr" style={menuLinkStyle}>Case Study</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/study-details" className="fw_500 white-clr" style={menuLinkStyle}>Case Study Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(4)}>
                        Blog
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 4 ? "block" : "none"}`, backgroundColor: 'var(--colors--element-color)' }}>
                        <li className="menu-link py-1">
                            <Link href="/blog-grid" className="fw_500 white-clr" style={menuLinkStyle}>Blog Grid</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/blog-list" className="fw_500 white-clr" style={menuLinkStyle}>Blog List</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/blog-details" className="fw_500 white-clr" style={menuLinkStyle}>Blog Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <button className="position-relative  ps-5 fw_500 white-clr cus-z1" onClick={() => handleAccordion(5)}>
                        Services
                    </button>
                    <ul className="sub-menu px-lg-4 py-xxl-3 py-2" style={{ display: `${isAccordion == 5 ? "block" : "none"}`, backgroundColor: 'var(--colors--element-color)' }}>
                        <li className="menu-link py-1">
                            <Link href="/service" className="fw_500 white-clr" style={menuLinkStyle}>Service</Link>
                        </li>
                        <li className="menu-link py-1">
                            <Link href="/service-details" className="fw_500 white-clr" style={menuLinkStyle}>Service Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="menu-item position-relative">
                    <Link href="/contact" className="fw_500 white-clr" style={menuLinkStyle}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </>
    )
}

