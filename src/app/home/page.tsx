"use client"
import React from "react";
import Link from "next/link";
import { NextPage } from "next";

import MainPage from "./main/page";
import InfoPage from "./info/page";
import ServicePage from "./services/page";

const HomePage: React.FC = () => {
  return (
    <div className="overflow-y-scroll h-screen">
      <MainPage />
      <InfoPage />
      <ServicePage />
    </div>
  );
};

export default HomePage;