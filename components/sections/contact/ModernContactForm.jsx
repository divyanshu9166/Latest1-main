"use client";

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ModernContactForm.css';

const ModernContactForm = ({ whatsappNumber = "YOUR_WHATSAPP_BUSINESS_NUMBER" }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        services: [],
        message: ''
    });

    // Initialize EmailJS
    useEffect(() => {
        if (typeof window !== 'undefined') {
            emailjs.init('YOUR_EMAILJS_USER_ID');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setFormData(prev => ({
            ...prev,
            services: e.target.checked
                ? [...prev.services, value]
                : prev.services.filter(item => item !== value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', formData)
            .then(() => {
                alert('Message sent successfully via email!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    services: [],
                    message: ''
                });
            }, (error) => {
                alert('Failed to send email: ' + error.text);
            });

        // Send WhatsApp message
        const whatsappMessage = `New Contact Request:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Services: ${formData.services.join(', ')}
Message: ${formData.message}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="modern-contact-form">
            <h3>Leave A Message</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Mail</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="eg. hello@yoursite.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            type="tel" 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+0123 4567 8910"
                            required
                        />
                    </div>
                </div>
                
                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label>What type of website do you need?</label>
                    <div className="checkbox-container">
                        <label className="checkbox-label">
                            <input 
                                type="checkbox" 
                                value="Web Design"
                                checked={formData.services.includes('Web Design')}
                                onChange={handleCheckboxChange}
                            />
                            <span>Web Design</span>
                        </label>
                        <label className="checkbox-label">
                            <input 
                                type="checkbox" 
                                value="Web Development"
                                checked={formData.services.includes('Web Development')}
                                onChange={handleCheckboxChange}
                            />
                            <span>Web Development</span>
                        </label>
                        <label className="checkbox-label">
                            <input 
                                type="checkbox" 
                                value="Logo Design"
                                checked={formData.services.includes('Logo Design')}
                                onChange={handleCheckboxChange}
                            />
                            <span>Logo Design</span>
                        </label>
                        <label className="checkbox-label">
                            <input 
                                type="checkbox" 
                                value="Other"
                                checked={formData.services.includes('Other')}
                                onChange={handleCheckboxChange}
                            />
                            <span>Other</span>
                        </label>
                    </div>
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message"
                        name="message" 
                        rows={4} 
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" className="submit-button">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ModernContactForm;