"use client";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState, useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Image from 'next/image'
import { AnimatePresence, motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";


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

const images = [
  "/images/slider/blackcarsunset.jpg",
  "/images/slider/truck.jpg",
  "/images/slider/brokentruck.jpg",
];

export default function Home() {
  const ownerImageUrl = "/images/dalbir-and-sukhbir.jpg";
  return (
    <>
      <div className="w-full pt-24">
        <ImagesSlider className="h-[50rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center p-4"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              S&D Autobody
            </motion.p>
            <motion.p className="text-4xl bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
              Discover excellence in auto body repair services.
            </motion.p>
            <Link className="px-4 py-2 backdrop-blur-sm border bg-red-300/10 border-red-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:scale-110 active:scale-125 transition-all duration-100" href="/booking">
              <span>Book an Appointment →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
            </Link>

          </motion.div>
        </ImagesSlider>
      </div>

      <div className="p-3 flex justify-around w-full py-12 md:py-24">
          <div className="flex flex-row-reverse gap-8 items-start">
            <div className="h-[20rem] relative">
              <DirectionAwareHover imageUrl={ownerImageUrl}>
                <p className="font-bold text-xl">Dalbir and Sukhbir</p>
                <p className="font-normal text-sm">Pictured in front of the Golden Temple in Amritsar, Punjab</p>
              </DirectionAwareHover>
          </div>  
          <div className="flex flex-col space-y-2 sm: max-h-64 overflow-y-scroll">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/95 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/> <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
      </div>
    </div>

      <div className="bg-gray-300 w-full py-12 md:py-24">
          <div className="container grid items-start gap-6 px-4 md:gap-10 xl:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-4xl text-lg text-gray-500 md:text-xl/95 dark:text-gray-400">
                  From minor dents to major collision damage, we offer a full range of auto body repair services.
                </p>
            </div>
            <div className="grid max-w-sm gap-6 min-[400px]:grid-cols-2 md:max-w-none md:grid-cols-3 md:gap-4 lg:grid-cols-3xl xl:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                  <Image
                    src="/images/services/service1.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold">Auto Body Repair</h3>
                <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                  <Image
                      src="/images/services/service2.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="invert"
                    />
                </div>
                <h3 className="text-xl font-bold">Paintless Dent Repair</h3>
                <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                  <Image
                      src="/images/services/service3.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="invert"
                    />
                </div>
                <h3 className="text-xl font-bold">Auto Detailing</h3>
                <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                  <Image
                      src="/images/services/service4.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="invert"
                    />
                </div>
                <h3 className="text-xl font-bold">Frame Straightening</h3>
                <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                  <Image
                      src="/images/services/service5.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="invert"
                    />
                </div>
                <h3 className="text-xl font-bold">Graphics and Decals</h3>
                <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                  <Image
                      src="/images/services/service1.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="invert"
                    />
                </div>
                <h3 className="text-xl font-bold">Custom Paint Jobs</h3>
                <p className="text-sm text-gray-500/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
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
      
      <div>
        <div className="w-full py-12 md:py-24 bg-gray-300">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/95 dark:text-gray-400">
                Have a question? Contact us today!
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
        <p>© 2024 S&D Autobody. All rights reserved.</p>
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
