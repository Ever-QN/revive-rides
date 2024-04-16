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
    title: "Book an Appointment",
    description:
      "Book a new appointment with us.",
    link: "/book-appointment",
  },
  {
    title: "Settings",
    description:
      "Manage your account settings.",
    link: "/dashboard/settings",
  },
  {
    title: "Help & Support",
    description:
      "Contact us for help with your appointments, or to provide feedback on our services.",
    link: "/home#contact",
  },
];
