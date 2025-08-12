import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoIosSearch } from "react-icons/io";
import { IoBag } from "react-icons/io5";
const Header = () => {
  const appleIcon =
    "https://www.apple.com/v/macbook-pro/as/static/uploads/c2o2UCwL6n9OQc5Y0APz-r5_tCxGUps-cFIHqMQvyMQ.avif";

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".navber a ", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  });

  return (
    <div className="navber absolute z-10 top-3 flex gap-7 w-full left-1/2 -translate-x-1/2 justify-center">
      <a  href="/#" className="cursor-pointer inline-block">
        <img src={appleIcon} alt="Apple Logo" className="w-5 mr-10" />
      </a>
      {[
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support",
        <IoIosSearch className="text-md " />,
        <IoBag />,
      ].map((item, index) => (
        <h1 key={index}>
          <a
            href="/#"
            className="text-white cursor-pointer inline-block text-sm font-semibold"
          >
            {item}
          </a>
        </h1>
      ))}
    </div>
  );
};

export default Header;
