"use client"
import React from "react";
import MainPage from "./main/page";
import InfoPage from "./info/page";
import ServicePage from "./services/page";
import GlobalHeader from "@/components/global-header";

const HomePage: React.FC = () => {
  return (
    <div className="h-screen">
      <MainPage />
      <InfoPage />
      <ServicePage />
    </div>
  );
};

export default HomePage;