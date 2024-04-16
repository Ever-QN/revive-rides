"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm: React.FC = () => {
 const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Simulate form submission logic here
    console.log("Form submitted");
    setSubmitted(true); // Update the state to show the success message
 };

 if (submitted) {
    return <div>Successfully submitted!</div>;
 }

 return (
    <form onSubmit={handleSubmit} className="grid max-w-sm gap-4 min-[400px]:grid-cols-2 md:gap-6 md:max-w-4xl lg:gap-8 lg:max-w-5xl xl:gap-10 p-4">
      {/* Form fields */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium tracking-wide text-gray-500" htmlFor="name">
          Full Name
        </label>
        <Input className="h-10" id="name" placeholder="Enter your full name" type="text" />
      </div>
      {/* Add other form fields similarly */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium tracking-wide text-gray-500" htmlFor="email">
          Email Address
        </label>
        <Input className="h-10" id="email" placeholder="Enter your email" type="email" />
      </div>
      <div className="flex flex-col space-y-1 col-span-2 gap-4">
        <label className="text-sm font-medium tracking-wide text-gray-500" htmlFor="message">
          Your Message
        </label>
        <Textarea className="min-h-[100px] max-h-[300px]" id="message" placeholder="Enter your message" />
        <Button className="w-full justify-center" type="submit">
          Submit
        </Button>
      </div>
    </form>
 );
};


export default ContactForm;

