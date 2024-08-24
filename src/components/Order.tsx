import { useEffect } from "react";
import Image from "next/image";
import { handbuck } from "@/utils/font";
import contactImage from "@/assets/images/contact.png";
import { OrderProps } from "@/types";

const Order: React.FC<OrderProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const orderPosition = window.document.getElementById("order");
    if (orderPosition && onSetPositions)
      onSetPositions((prevState) => ({
        ...prevState,
        order: orderPosition?.offsetTop,
      }));
  }, []);
  return (
    <section
      id="order"
      className="flex justify-between items-center bg-[#d9d9d9] w-11/12 lg:w-11/12 h-32 lg:h-[355px] max-w-7xl mx-auto mt-32 px-4 py-7 rounded-md"
    >
      <div className="w-8/12 lg:w-8/12 mx-auto lg:ml-10">
        <h2 className={`${handbuck.className} text-[12px] lg:text-[40px]`}>
          Are you ready to place an order?
        </h2>
        <a href="mailto:contact@omnihale.com">
          <p className="text-[9px] lg:text-base mt-3 lg:mt-0 font-light">
            <span className="font-bold">Email:</span>{" "}
            order@debbiechops.omnihale.com
          </p>
        </a>
      </div>
      <div className="relative -top-10 h-56 lg:h-[530px] mx-auto mt-10 lg:mt-0 w-full max-w-[620px]">
        <Image src={contactImage} fill objectFit="contain" alt="home" />
      </div>
    </section>
  );
};

export default Order;
