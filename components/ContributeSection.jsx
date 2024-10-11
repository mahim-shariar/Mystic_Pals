import Image from "next/image";
import React from "react";
import dualPic from "../assets/pokemonDual.png";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Link,
  CardHeader,
} from "@nextui-org/react";
import { FaLightbulb } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContributeSection = () => {
  return (
    <div className="container mx-auto mt-60">
      <div className="flex flex-col items-center justify-center my-24 ">
        <div className="relative">
          <h1 className="mb-8 text-center lg:text-4xl sm:text-sm sixtyfour-convergence-unique">
            Why You Should Contribute?
          </h1>
          {/* Glowing border effect */}
          <div className="absolute inset-x-0 bottom-0 w-6/12 mx-auto h-1 bg-[#7ED6E8] rounded-full shadow-[0_0_10px_2px_#7ED6E8]"></div>
        </div>
      </div>
      <div className="flex justify-center ">
        <Card isBlurred className="glass-effect" shadow="sm">
          <CardBody>
            <div className="grid items-center justify-center grid-cols-6 gap-10 md:grid-cols-12 md:gap-4">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover w-full h-full rounded-xl "
                  height="100%"
                  shadow="md"
                  src={dualPic}
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 p-10 md:col-span-8">
                <div>
                  <h1 className="mb-4 text-2xl font-bold sixtyfour-convergence-unique">
                    {" "}
                    Join Us!{" "}
                  </h1>
                  <div>
                    <p className="text-lg text-[#7ED6E8]">
                      We’re not just making this game – we all are. This is a
                      passion project for all Pokémon fans, and we want to
                      include the community in every aspect of development.
                      Whether you have ideas for gameplay mechanics, are skilled
                      in 2D pixel or 3D voxel art, or simply want to share your
                      thoughts, we’d love for you to be part of the Mystic Pals
                      journey.
                    </p>
                  </div>
                  <div>
                    <ul className="my-4 space-y-4 text-base text-gray-200 list-disc list-inside">
                      <li className="flex items-center">
                        <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full ">
                          <FaLightbulb />
                        </span>
                        <p>
                          <span className="text-[#7ED6E8] glow-text">
                            {" "}
                            Share ideas for features, puzzles, battles, and
                            anything you'd like to see in the game.
                          </span>{" "}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full">
                          <CiHeart />
                        </span>
                        <p>
                          <span className="text-[#7ED6E8] glow-text">
                            If you’re an artist, we’d love your help with
                            creating game assets – from Pokémon designs to
                            environments.
                          </span>
                        </p>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full">
                          <FaCode />
                        </span>
                        <p>
                          <span className="text-[#7ED6E8] glow-text">
                            {" "}
                            Even if you're not an artist or developer, your
                            opinions and feedback are just as important. Let us
                            know what kind of Pokémon game you've always wanted
                            to play!
                          </span>{" "}
                        </p>
                      </li>
                      <li className="flex items-center ">
                        <span className="mr-4 text-[#7ED6E8] shadow-[0_0_7px_1px_#7ED6E8] text-lg p-2 rounded-full">
                          <FaPenAlt />
                        </span>
                        <p>
                          <span className="text-[#7ED6E8] glow-text">
                            Every contributor will be credited in the game, and
                            this journey will be just as exciting for us to
                            build as it will be for everyone to play!
                          </span>{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-lg text-[#7ED6E8]">
                      {" "}
                      This game is a community effort, and we’re excited to have
                      everyone’s input. Let’s make Mystic Pals the Pokémon co-op
                      adventure we’ve all been dreaming of.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Button
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfjMEAqj7ttBpdDKptyzDYHvPUgbZ4MYIgmVT7n2xWZhqj3KQ/viewform?usp=sf_link"
                      target="_blank"
                      color="primary"
                      variant="shadow"
                      as={Link}
                    >
                      Contribute
                    </Button>
                    <Button
                      as={Link}
                      href="https://discord.gg/f42BTmJnzj"
                      target="_blank"
                      isIconOnly
                      className="bg-[#5865f2] text-white"
                    >
                      <FaDiscord className="text-2xl" />
                    </Button>
                    <Button
                      as={Link}
                      href="https://www.youtube.com/@MysticPals"
                      target="_blank"
                      isIconOnly
                      color="danger"
                      className="text-white "
                    >
                      <FaYoutube className="text-2xl" />
                    </Button>
                    <Button
                      as={Link}
                      href="https://x.com/MysticPals"
                      target="_blank"
                      isIconOnly
                      className="text-white bg-black"
                    >
                      <FaXTwitter className="text-2xl" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4"></div>
    </div>
  );
};

export default ContributeSection;
