"use client";
import React, { useEffect, useState } from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import { GiCrossedSwords } from "react-icons/gi";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaPuzzlePiece } from "react-icons/fa6";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const aboutSection = document.getElementById("about-us-section");
      const rect = aboutSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(inView);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container mx-auto mt-20 md:mt-60">
      <div
        id="about-us-section"
        className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20"
      >
        {/* First div with glowing animation */}
        <div
          className={`glass-effect text-[#7ED6E8] p-6 md:p-10 h-[auto] border border-white/20 backdrop-blur-lg rounded-lg shadow-lg flex flex-col justify-center 
            ${isVisible ? "animate-glow-once" : ""} hover:glow-hover`}
        >
          <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl sixtyfour-convergence-unique">
            What is Mystic Pals?
          </h1>
          <p className="text-sm md:text-lg lg:text-xl">
            Mystic Pals is a two-player pokémon adventure game where you and
            your best friend team up to solve puzzles,Pokémon battle, and
            explore enchanting worlds. With a unique blend of hand-drawn 2D
            sprites and dynamic 3D environments, Mystic Pals brings a fresh yet
            nostalgic experience to all Pokémon and RPG fans.
          </p>
        </div>

        {/* Divider for desktop view */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-[#7ED6E8] shadow-[0_0_10px_2px_#7ED6E8]"></div>

        {/* Second div */}
        <div
          className={`flex flex-col justify-center p-6 md:p-10 h-[auto] border rounded-lg shadow-lg glass-effect border-white/20 backdrop-blur-lg ${
            isVisible ? "animate-glow-once" : ""
          } hover:glow-hover`}
        >
          <h1 className="mb-4 text-xl font-bold md:text-2xl lg:text-4xl sixtyfour-convergence-unique">
            Why You’ll Love Mystic Pals
          </h1>
          <ul className="space-y-4 text-sm text-gray-200 list-disc list-inside md:text-base lg:text-lg">
            <li className="flex items-center">
              <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full ">
                <FaHandshakeAngle />
              </span>
              <p>
                <span className="text-[#7ED6E8] glow-text">
                  {" "}
                  Co-op Adventure:{" "}
                </span>{" "}
                Play with your friends in real-time.
              </p>
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full">
                <GiCrossedSwords />
              </span>
              <p>
                <span className="text-[#7ED6E8] glow-text">
                  Mystical Battles:
                </span>{" "}
                Use strategic combat to defeat powerful Pokémon.
              </p>
            </li>
            <li className="flex items-center">
              <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full">
                <HiMiniPencilSquare />
              </span>
              <p>
                <span className="text-[#7ED6E8] glow-text">
                  {" "}
                  Hand-Drawn Charm:{" "}
                </span>{" "}
                Beautiful 2D sprites mixed with dynamic 3D effects.
              </p>
            </li>
            <li className="flex items-center ">
              <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full">
                <FaPuzzlePiece />
              </span>
              <p>
                <span className="text-[#7ED6E8] glow-text">
                  Puzzles & Quests:{" "}
                </span>{" "}
                Engage in exciting puzzles and complete epic storylines.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
