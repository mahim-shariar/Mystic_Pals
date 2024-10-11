"use client";
import { useState } from "react";
import { FaGamepad, FaPalette, FaBook } from "react-icons/fa"; // Use suitable icons
import { Tooltip } from "@nextui-org/react"; // Importing Tooltip from Next UI

const RoadMap = () => {
  const steps = [
    {
      label: "Concept and Story Planning",
      icon: <FaBook className="text-xl md:text-2xl" />, // Smaller icons
      description: "Concept and story planning (Completed)",
    },
    {
      label: "Game Engine Setup and Prototype",
      icon: <FaGamepad className="text-xl md:text-2xl" />, // Smaller icons
      description: "Game engine setup and prototype (In progress)",
    },
    {
      label: "Art and Design Assets",
      icon: <FaPalette className="text-xl md:text-2xl" />, // Smaller icons
      description: "Art and design assets (Coming soon)",
    },
  ];

  const [currentStep, setCurrentStep] = useState(steps.length); // All steps complete

  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="mb-8 text-lg text-center md:text-4xl sixtyfour-convergence-unique">
            Development Roadmap
          </h1>
        </div>
        <div className="w-full max-w-4xl mx-auto mt-10">
          {/* Horizontal stepper for desktop, vertical for mobile */}
          <div className="flex flex-col justify-between mb-8 md:flex-row">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center md:items-start md:flex-row ${
                  index < steps.length - 1 ? "lg:mb-10 md:mb-0" : ""
                }`}
              >
                <Tooltip
                  content={
                    <div className="p-2 text-sm text-white rounded-lg shadow-lg md:text-base">
                      {step.description}
                    </div>
                  }
                  placement={index < steps.length - 1 ? "bottom" : "top"} // Tooltip position
                  color="secondary" // Tooltip color
                >
                  <div>
                    <div
                      className={`${
                        index + 1 <= currentStep
                          ? "bg-[#7ED6E8] shadow-[0_0_10px_2px_#7ED6E8]"
                          : "bg-gray-300 text-gray-500"
                      } w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                        index + 1 <= currentStep ? "scale-110 shadow-lg" : ""
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>
                </Tooltip>

                {/* Connector for desktop view (horizontal) */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-1/2 left-10 w-24 lg:w-96 md:w-80 h-1 ${
                      index + 1 < currentStep
                        ? "bg-[#7ED6E8] shadow-[0_0_10px_2px_#7ED6E8]"
                        : "bg-gray-300"
                    } transition-all duration-500`}
                  ></div>
                )}

                {/* Connector for mobile view (vertical) */}
                {index < steps.length - 1 && (
                  <div
                    className={`md:hidden  w-1 h-40 ${
                      index + 1 < currentStep
                        ? "bg-[#7ED6E8] shadow-[0_0_10px_2px_#7ED6E8]"
                        : "bg-gray-300"
                    } transition-all duration-500`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
