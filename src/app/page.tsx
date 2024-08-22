"use client";

import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  const [positions, setPositions] = useState({
    home: 0,
    about: 0,
    menu: 0,
    contact: 0,
  });
  const Components = [Home, About, Contact];

  return (
    <main>
      <Navigation positions={positions} />
      {/* Navigatable contents start */}
      {Components.map((Component, index) => (
        <React.Fragment key={index}>
          <Component onSetPositions={setPositions} />
        </React.Fragment>
      ))}
      {/* Navigatable contents end*/}
      <Footer />
    </main>
  );
}
