'use client'

import { HoverEffect } from "./ui/card-hover-effect";

export function DashboardOverviewCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Your Appointments",
    description:
      "View and manage your upcoming appointments.",
    link: "/dashboard/appointments",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Settings",
    description:
      "Manage your account settings.",
    link: "/settings",
  },
  {
    title: "Help & Support",
    description:
      "Contact us for help with your appointments, or to provide feedback on our services.",
    link: "/home#contact",
  },
];
