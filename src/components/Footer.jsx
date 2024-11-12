import { FaGoogle } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import Card from "../assets/credit-cards.webp";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company details section */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Elevate your listening experience with innovation, quality, and
                style. Join our community for the latest updates on new
                products, exclusive offers, and expert tips. Connect with us on
                social media and experience sound like never before.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +1 (123) 456-7890
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkedAlt /> Kuala Lumpur, Malaysia
                </p>
              </div>
            </div>
            {/* Footer links section */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Social links section */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={Card} alt="" />
              </div>
            </div>
          </div>
          {/* Copyright  section */}
          <p className="text-white text-center mt-8 border-t-2 pt-8">
            © 2024. All Right Reserved || Headphone Company
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
