import { handbuck, ollifiaPoettry } from "@/utils/font";
import { useEffect, useState } from "react";
import { NavigationProps, Positions } from "@/types";
import restaurantData from "@/data";

const NAVIGATION_LINKS = ["Home", "About", "Menu", "Order"];

const Navigation: React.FC<NavigationProps> = ({ positions }) => {
  const [heightOfNavigation, setheightOfNavigation] = useState(0);

  useEffect(() => {
    const heightOfNavigation = document.querySelector("header");
    if (heightOfNavigation)
      setheightOfNavigation(heightOfNavigation.offsetHeight);
  }, []);

  return (
    <header
      className={`${handbuck.className} fixed top-0 w-full z-30 bg-white pb-8`}
    >
      <section className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center mt-14 mx-auto max-w-6xl w-5/6">
        <h2
          className={`${ollifiaPoettry.className} text-2xl lg:text-4xl text-center lg:text-left`}
        >
          {restaurantData.title}
        </h2>
        <nav className="flex justify-between w-[203px] lg:w-[326px] mt-7 lg:mt-0">
          {NAVIGATION_LINKS.map((link, index) => (
            <button
              key={index}
              className="text-xs lg:text-2xl"
              onClick={(event) => {
                scrollTo({
                  top:
                    positions[link.toLocaleLowerCase() as keyof Positions] -
                    heightOfNavigation,
                });
                event.preventDefault();
              }}
            >
              {link}
            </button>
          ))}
        </nav>
      </section>
    </header>
  );
};

export default Navigation;
