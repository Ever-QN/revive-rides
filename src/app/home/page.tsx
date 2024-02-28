import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Component() {
  return (
    <>
      <div className="w-full pt-24 pb-48">
        <div className="relative">
          <img
            alt="Hero"
            className="absolute inset-0 object-cover w-full max-h-96"
            src="./images/home_background.png"
          />
          <div className="container grid items-center gap-6 px-4 pt-6 md:pt-12 md:gap-10 xl:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter lg:text-6xl xl:text-7xl/75 bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text">
                  S&D Autobody
                </h1>
                <p className="max-w-[700px] text-white md:text-xl dark:text-white">
                  Discover excellence in auto body repair services.
                </p>
              </div>
              <div className="grid max-w-sm gap-4 min-[400px]:grid-cols-2">
                <Link
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm gap-1 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Us
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24">
        <div className="container grid items-start gap-6 px-4 md:gap-10 xl:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/95 dark:text-gray-400">
                From minor dents to major collision damage, we offer a full range of auto body repair services.
              </p>
            </div>
          </div>
          <div className="grid max-w-sm gap-6 min-[400px]:grid-cols-2 md:max-w-none md:grid-cols-3 md:gap-4 lg:grid-cols-3xl xl:gap-8">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <WrenchIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold">Auto Body Repair</h3>
              <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <WrenchIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold">Paintless Dent Repair</h3>
              <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <WrenchIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold">Auto Detailing</h3>
              <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <WrenchIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold">Frame Straightening</h3>
              <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <WrenchIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold">Windshield Replacement</h3>
              <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <WrenchIcon className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold">Custom Paint Jobs</h3>
              <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Testimonials</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/95 dark:text-gray-400">
                See what our customers have to say about our auto body repair services.
              </p>
              <div className="items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
              />
            </div>
        </div>
    </div>
      <div className="w-full py-12 md:py-24">
        <div className="container grid items-start gap-6 px-4 md:gap-10 xl:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/95 dark:text-gray-400">
                Have a question? Ready to schedule an appointment? Contact us today!
              </p>
            </div>
            <form className="grid max-w-sm gap-4 min-[400px]:grid-cols-2 md:gap-6 md:max-w-4xl lg:gap-8 lg:max-w-5xl xl:gap-10">
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm font-medium tracking-wide text-gray-500 peer-placeholder-shown:translate-y-[-1.5em] peer-placeholder-shown:text-xs transition-all"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <Input className="h-10 peer-accent-0" id="name" placeholder="Enter your full name" type="text" />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm font-medium tracking-wide text-gray-500 peer-placeholder-shown:translate-y-[-1.5em] peer-placeholder-shown:text-xs transition-all"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <Input className="h-10 peer-accent-0" id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm font-medium tracking-wide text-gray-500 peer-placeholder-shown:translate-y-[-1.5em] peer-placeholder-shown:text-xs transition-all"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <Input className="h-10 peer-accent-0" id="phone" placeholder="Enter your phone number" type="tel" />
              </div>
              <div className="flex flex-col space-y-1 col-span-2">
                <label
                  className="text-sm font-medium tracking-wide text-gray-500 peer-placeholder-shown:translate-y-[-1.5em] peer-placeholder-shown:text-xs transition-all"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <Textarea className="min-h-[100px] peer-accent-0" id="message" placeholder="Enter your message" />
              </div>
              <Button className="w-full justify-center" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full py-6 bg-gray-900 text-gray-50 text-center">
        <p>© 2024 Auto Body Repair Inc. All rights reserved.</p>
      </footer>
    </>
  )
}

function WrenchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
