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
      "Exceptional service from start to finish! My taxi car's looked better than ever after their team worked their magic. I was impressed by their attention to detail and professionalism. Highly recommended!",
    name: "Shivi Barich",
    title: "Cab Driver",
  },
  {
    quote:
      "I can't thank S&D Autobody enough for the outstanding job they did on my vehicle after I got into an accident. From the moment I dropped it off until the day I picked it up, they kept me informed and ensured everything went smoothly. The results exceeded my expectations!",
    name: "Conner Heathren",
    title: "Hospital Administrator",
  },
  {
    quote: "I had a minor accident and was worried about the damage to my Toyota RAV4. However, S&D Autobody reassured me and took care of everything efficiently. They made the process stress-free, and my car looks as good as new!",
    name: "Zantares Dominicus",
    title: "Accounting Student",
  },
  {
    quote:
      "S&D autobody came highly recommended, and now I know why! Their expertise and dedication to customer satisfaction are unmatched. They treated my car like their own, and the results were phenomenal.",
    name: "Kevin Ngu",
    title: "IT Specialist",
  },
  {
    quote:
      "I'm thrilled with the quality of work done by S&D Autobody. Their team went above and beyond to restore my vehicle after it was T-Boned, and the results speak for themselves. I wouldn't hesitate to recommend them to anyone in need of autobody repairs.",
    name: "Jean Matthias",
    title: "Electrician",
  },
];

const sliderImages = [
  "/images/slider/blackcarsunset.jpg",
  "/images/slider/whitecar.jpg",
  "/images/slider/truck.jpg",
];

export default function Home() {
  const ownerImageUrl = "/images/sukhbir-and-dalbir.jpg";
  return (
    <>
      <div className="w-full">
        <ImagesSlider className="h-[50rem]" images={sliderImages}>
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
            <motion.p className="font-bold md:text-8xl text-6xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-700 via-neutral-100 to-sky-500 bg-clip-text text-transparent text-center py-4 dark:text-white">
              <div className="dark:text-white">S&D Autobody</div>
            </motion.p>
            <motion.p className="text-4xl text-center md:text-4xl text-red-500 bg-clip-text dark:text-gray-300">
              Discover excellence in auto body repair services.
            </motion.p>
            <Link className="px-4 py-2 hover:animate-shimmer border border-red-400 bg-[linear-gradient(110deg,#FF0000,45%,#8B0000,55%,#FF0000)] bg-[length:200%_100%] text-white mx-auto text-center rounded-full relative mt-4 hover:scale-110 active:scale-125 transition-all duration-100" href="/book-appointment">
              <span>Book an Appointment →</span>
            </Link>

          </motion.div>
        </ImagesSlider>
      </div>

      <div className="p-4 flex justify-around w-full py-12 md:py-24 scroll-mt-10" id="about">
          <div className="flex flex-col-reverse items-center md:flex-row-reverse md:items-start gap-8 ">
            <div className="relative">
              <DirectionAwareHover imageUrl={ownerImageUrl}>
                <p className="font-bold text-xl">Sukhbir and Dalbir</p>
                <p className="font-normal text-sm">Pictured in front of the Golden Temple in Amritsar, Punjab</p>
              </DirectionAwareHover> 
          </div>  
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl border-b-slate-900 border-b">About Us</h2>
              <p className="max-w-3xl text-gray-700 dark:text-gray-500 overflow-y-scroll lg:overflow-hidden max-h-52 md:max-h-72 lg:max-h-full">
                Driven by a Vision, S&amp;D Autobody Takes Root <br/><br/>

                Sukhbir and Dalbir Bachhal&apos;s journey started in Victoria, British Columbia, where they witnessed a need for reliable and affordable auto body repair services. This ignited a passion to create a company that not only delivered high-quality vehicle work, but also treated every customer with respect, honesty, and offered competitive prices.<br/><br/>

                Their vision culminated in the birth of S&D Autobody. Beginning as a small shop in Victoria, the company steadily grew, driven by its commitment to exceptional service and customer satisfaction. Recognizing the potential for further impact, S&D Autobody embarked on an expansion journey, establishing a new location in Strathmore, Alberta. This expansion allowed them to reach a wider customer base and continue delivering their exceptional service to an even larger community.
              </p>
          </div>
      </div>
    </div>

      <div className="p-4 bg-gray-300 w-full py-12 md:py-24 scroll-mt-10" id="services">
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
                  src="/images/service-icons/checklist.png"
                  width={500}
                  height={500}
                  alt="Picture of the a clipboard with a checklist"
                  className="ml-2 p-4"
                />
              </div>
              <h3 className="text-xl font-bold">Auto Body Repair</h3>
              <p className="text-sm text-gray-500/90">Fixes such as dents, scratches, cracks, and collisions, restoring its functionality and appearance.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <Image
                    src="/images/service-icons/dent-car.png"
                    width={500}
                    height={500}
                    alt="A picture of a car getting dented in an accident"
                    className="p-4"
                  />
              </div>
              <h3 className="text-xl font-bold">Paintless Dent Repair</h3>
              <p className="text-sm text-gray-500/90">Removes dents from the body using specialized tools and techniques, without the need for traditional bodywork, paint, or fillers.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <Image
                    src="/images/service-icons/car-wash.png"
                    width={500}
                    height={500}
                    alt="Picture of a car being washed at a car wash"
                    className="p-4"
                  />
              </div>
              <h3 className="text-xl font-bold">Auto Detailing</h3>
              <p className="text-sm text-gray-500/90">A thorough cleaning and restoration process. Services typically include washing, waxing, polishing, vacuuming, stain removal, and leather or upholstery care.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <Image
                    src="/images/service-icons/ruler.png"
                    width={500}
                    height={500}
                    alt="Picture of a ruler"
                    className="p-2"
                  />
              </div>
              <h3 className="text-xl font-bold">Frame Straightening</h3>
              <p className="text-sm text-gray-500/90">Corrects misalignments or bends in your vehicle&apos;s chassis (frame) caused by accidents or collisions, ensuring proper wheel alignment and safe driving.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <Image
                    src="/images/service-icons/sticker.png"
                    width={500}
                    height={500}
                    alt="Picture of a sticker"
                    className="p-2"
                  />
              </div>
              <h3 className="text-xl font-bold">Graphics and Decals</h3>
              <p className="text-sm text-gray-500/90">Apply custom designs, logos, or lettering to your vehicle using vinyl decals or wraps.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100/70">
                <Image
                    src="/images/service-icons/wrench.png"
                    width={500}
                    height={500}
                    alt="Picture of a wrench"
                    className="p-2"
                  />
              </div>
              <h3 className="text-xl font-bold">Custom Paint Jobs</h3>
              <p className="text-sm text-gray-500/90">Offers complete repainting or unique paint schemes for your vehicle. This can involve solid colors, metallic finishes, intricate designs, or airbrushing for a personalized touch</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full py-12 md:py-24" id="reviews" >
        <div className="lg:flex flex-col items-center justify-center space-y-4 text-center">
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
      
        <div className="w-full py-12 md:py-24 bg-gray-300 " id="contact">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="max-w-3xl text-gray-500 md:text-xl/95 dark:text-gray-400">
                Have a question? Contact us today!
              </p>
            </div>
            <div>For any customer inquiries, send an email to Sdautobody@hotmail.com</div>
          </div>
        </div>
    </>
  )
}