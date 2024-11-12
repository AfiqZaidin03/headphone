import { UpdateFollower } from "react-mouse-follower";
import Icon1 from "../assets/icons/obj1.png";
import Icon2 from "../assets/icons/obj2.png";
import Icon3 from "../assets/icons/obj3.png";

const ServiceData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    desc: "Designed for covert operations, these headphones offer clear audio and a rugged build to withstand demanding conditions.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarantee",
    icon: Icon2,
    desc: "We offer a 100% satisfaction guarantee on all our products. Your satisfaction is our top priority. Shop with confidence.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    desc: "Enjoy high-quality products at affordable prices. Experience luxury without the cost. Shop wisely and save more.",
    delay: 1.1,
  },
];

const Service = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Services</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ServiceData.map((data) => (
              <UpdateFollower
                key={data.id}
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: 720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <div>
                      <img src={data.icon} />
                    </div>
                  ),
                }}
              >
                <div className="flex flex-col items-center justify-center p-5 max-w-[350px] mx-auto shadow-lg rounded-xl bg-white">
                  <img src={data.icon} alt="" className="w-[100]px mb-4" />
                  <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold">{data.title}</h1>
                    <p className="text-center text-lg text-black/75">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
