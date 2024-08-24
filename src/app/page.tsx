"use client";

import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import About from "@/components/About";
import Order from "@/components/Order";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Page() {
  const [positions, setPositions] = useState({
    home: 0,
    about: 0,
    menu: 0,
    order: 0,
  });
  const Components = [Home, About, Menu, Order];

  return (
    <main>
      <Navigation positions={positions} />
      {/* Navigatable contents start */}
      {Components.map((Component, index) => (
        <React.Fragment key={index}>
          <Component onSetPositions={setPositions} menu={[]} />
        </React.Fragment>
      ))}
      {/* Navigatable contents end*/}
      <Footer />
    </main>
  );
}
