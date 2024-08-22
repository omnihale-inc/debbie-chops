import { useEffect } from "react";
import Image from "next/image";
import { handbuck } from "@/utils/font";
import contactImage from "@/assets/images/contact.png";
import { ContactProps } from "@/types";

const Contact: React.FC<ContactProps> = ({ onSetPositions }) => {
  useEffect(() => {
    const contactPosition = window.document.getElementById("contact");
    if (contactPosition)
      onSetPositions((prevState) => ({
        ...prevState,
        contact: contactPosition?.offsetTop,
      }));
  }, []);
  return (
    <section
      id="contact"
      className="flex justify-between items-center bg-[#d9d9d9] w-11/12 lg:w-11/12 h-32 lg:h-[355px] max-w-7xl mx-auto mt-32 px-4 py-7 rounded-md"
    >
      <div className="w-8/12 lg:w-8/12 mx-auto lg:ml-10">
        <h2 className={`${handbuck.className} text-[12px] lg:text-[40px]`}>
          Are you ready to place an order?
        </h2>
        <a href="mailto:contact@walkaboutfoodie.omnihale.com">
          <p className="text-[9px] lg:text-base mt-3 lg:mt-0 font-light">
            <span className="font-bold">Email:</span>{" "}
            contact@debbiechops.omnihale.com
          </p>
        </a>
      </div>
      <div className="relative -top-9 lg:-top-14 h-52 lg:h-[530px] mx-auto mt-10 lg:mt-0 w-full max-w-[620px]">
        <Image src={contactImage} fill objectFit="contain" alt="home" />
      </div>
    </section>
  );
};

export default Contact;
