"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Form } from "../ui/form";
import { formSchema, FormValues } from "./contact/ContactFormTypes";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init('YOUR_EMAILJS_USER_ID'); // Replace with your actual EmailJS user ID
}

interface ContactFormProps {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
  whatsappNumber?: string;
}

const ContactForm = ({
  serviceId = "YOUR_SERVICE_ID",
  templateId = "YOUR_TEMPLATE_ID",
  publicKey = "YOUR_PUBLIC_KEY",
  whatsappNumber = "YOUR_WHATSAPP_BUSINESS_NUMBER" // Add your WhatsApp number here
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      services: [],
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current as HTMLFormElement,
        publicKey
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        
        // Format WhatsApp message
        const whatsappMessage = `New Contact Request:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Services: ${data.services?.join(', ')}
Message: ${data.message}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  

      <div className="contact-form md:w-2/3">
        <Form {...form}>
          <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
              <Input 
                {...form.register("firstName")} 
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
              <Input 
                {...form.register("lastName")} 
                id="lastName"
                className="w-full p-2 border border-gray-300 rounded"
              />
              {form.formState.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <Input 
                {...form.register("email")} 
                id="email"
                type="email"
                placeholder="eg. hello@yoursite.com"
                className="w-full p-2 border border-gray-300 rounded"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
              <Input 
                {...form.register("phone")} 
                id="phone"
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 mb-2">What type of website do you need?</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    value="Web Design" 
                    {...form.register("services")}
                  />
                  <span>Web Design</span>
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    value="Web Development" 
                    {...form.register("services")}
                  />
                  <span>Web Development</span>
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    value="Logo Design" 
                    {...form.register("services")}
                  />
                  <span>Logo Design</span>
                </label>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    value="Other" 
                    {...form.register("services")}
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <Textarea 
                {...form.register("message")} 
                id="message"
                placeholder="Write your message..."
                rows={5}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;