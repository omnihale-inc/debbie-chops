import { useEffect } from "react";
import Image from "next/image";
import homeImage from "@/assets/images/home.jpg";
import { handbuck } from "@/utils/font";
import { HomeProps } from "@/types";
import restaurantData from "@/data";
import getElementPosition from "@/utils/getElementPosition";

const Home: React.FC<HomeProps> = ({ onSetPositions }) => {
  useEffect(() => {
    getElementPosition(onSetPositions, "home");
  }, []);
  return (
    <section className="mt-44 lg:mt-36 mx-auto max-w-6xl w-5/6" id="home">
      <div className="w-4/5 max-w-2xl mx-auto ">
        <h2
          className={`${handbuck.className} text-3xl text-center lg:text-7xl`}
        >
          {restaurantData.home.header.main}{" "}
          <span className={`text-[${restaurantData.themeSecondaryColor}]`}>
            {restaurantData.home.header.span}
          </span>
        </h2>
        <p className="text-xs text-center lg:text-base mt-3 lg:mt-0 font-light">
          {restaurantData.home.paragraph}
        </p>
      </div>
      <div className="relative h-36 sm:h-48 lg:h-[450px] w-5/6 lg:w-full mx-auto mt-4 lg:mt-10">
        <Image src={homeImage} fill objectFit="contain" alt="home" />
      </div>
    </section>
  );
};

export default Home;
