import { useEffect } from "react";
import Image from "next/image";
import homeImage from "@/assets/images/home.jpg";
import { handbuck } from "@/utils/font";
import { HomeProps } from "@/types";

const Home: React.FC<HomeProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const homePosition = window.document.getElementById("home");
    if (homePosition && onSetPositions)
      onSetPositions((prevState) => ({
        ...prevState,
        home: homePosition?.offsetTop,
      }));
  }, []);
  return (
    <section className="mt-44 lg:mt-36 mx-auto max-w-6xl w-5/6" id="home">
      <div className="w-4/5 max-w-2xl mx-auto ">
        <h2
          className={`${handbuck.className} text-3xl text-center lg:text-7xl`}
        >
          Welcome to <span className="text-[#ee7834]">Debbie Chops</span>
        </h2>
        <p className="text-xs text-center lg:text-base mt-3 lg:mt-0 font-light">
          Hello, and welcome to Debbie Chops, your go-to destination for
          mouthwatering treats that bring joy to every bite! We specialize in
          crafting delicious cakes, buns, meat pies, and doughnuts that are made
          with love and the finest ingredients.
        </p>
      </div>
      <div className="relative h-36 sm:h-48 lg:h-[450px] w-5/6 lg:w-full mx-auto mt-4 lg:mt-10">
        <Image src={homeImage} fill objectFit="contain" alt="home" />
      </div>
    </section>
  );
};

export default Home;
