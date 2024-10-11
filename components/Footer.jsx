import { Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-60">
      <Card isBlurred radius="lg" className="glass-effect">
        <div className="flex flex-col items-center justify-between p-10 md:flex-row">
          <div className="flex items-center mb-4 space-x-4 md:mb-0">
            <div className="text-3xl md:text-4xl text-[#7ED6E8] transition-transform duration-300 transform hover:scale-110">
              <IoMailSharp />
            </div>
            <div>
              <p className="text-sm md:text-lg text-[#7ED6E8] font-semibold">
                pokemysticpals@gmail.com
              </p>
              <p className="text-xs md:text-sm text-[#6FC3DF] italic">
                Contact us anytime!
              </p>
            </div>
          </div>
          <div className="text-right sm:text-center ">
            <p className="text-xs md:text-sm text-[#7ED6E8]">
              2024-2025 © Mystic Pals. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-[#6FC3DF] mt-1">
              Follow us for updates!
            </p>
          </div>
        </div>
        <CardFooter className="w-full">
          <div className="text-center w-full text-[#7ED6E8] py-4 border-t border-[#6FC3DF]">
            <p className="text-xs text-center md:text-sm sixtyfour-convergence-unique">
              Built with ❤️ by the Mystic Pals team
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer;
