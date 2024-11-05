import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import headphone1 from "../assets/headphone.png";
import headphone2 from "../assets/headphone2.png";
import headphone3 from "../assets/headphone3.png";

const headphoneData = [
  {
    id: 1,
    image: headphone1,
    title: "Headphones Wireless",
    description:
      "The Bose QuietComfort Ultra headphones offer immersive audio, world-class noise cancellation, excellent comfort, and a clearer transparency mode, making them a top choice for audiophiles in 2024.",
    price: "RM199",
    model: "Light Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: headphone2,
    title: "Headphones Wireless 2",
    description:
      "The Bose QuietComfort Ultra headphones offer immersive audio, world-class noise cancellation, excellent comfort, and a clearer transparency mode, making them a top choice for audiophiles in 2024.",
    price: "RM199",
    model: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: headphone3,
    title: "Headphones Wireless 3",
    description:
      "The Bose QuietComfort Ultra headphones offer immersive audio, world-class noise cancellation, excellent comfort, and a clearer transparency mode, making them a top choice for audiophiles in 2024.",
    price: "RM199",
    model: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);

  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Headphone info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <h1 className="text-3xl lg:text-6xl font-bold font-varela">
                {activeData.title}
              </h1>
              <p className="text-sm leading-loose text-white/80">
                {activeData.description}
              </p>
              <button
                style={{ backgroundColor: activeData.bgColor }}
                className="px-4 py-2 inline-block font-normal rounded-sm"
              >
                Buy and Listen
              </button>

              {/* Headphone List Separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="text-sm uppercase">Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>

              {/* Headphone list switcher */}
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <div
                      key={item}
                      className="grid grid-cols-2 place-items-center cursor-pointer"
                    >
                      <div>
                        <img src={item.image} alt="" className="w-[200]px" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.model}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center">
            <img
              src={activeData.image}
              alt=""
              className="w-[300px] md:w-[400px] xl:w-[550px]"
            />
          </div>
          {/* WhatsApp Icon  */}
          <div>
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
