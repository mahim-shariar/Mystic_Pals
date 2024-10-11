"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import logo from "../assets/pokemon.png";
import Image from "next/image";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About Us", sectionId: "about-us" },
    { name: "Vision", sectionId: "vision" },
    { name: "Join Us", sectionId: "joinUs" },
  ];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the menu after selection
    }
  };

  return (
    <Navbar
      className="bg-transparent"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="flex justify-center pr-3 lg:hidden hover:cursor-pointer">
        <NavbarBrand as={Link} href="#home">
          <Image src={logo} alt="NextUI logo" width={50} height={50} />
          <p className="lg:text-xl sm:text-xs ms-4 glow-text sixtyfour-convergence-unique font-bold text-transparent bg-gradient-to-b from-[#7ED6E8] to-[#3A5F8A] bg-clip-text">
            Mystic Pals
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile view: Toggle button on the left */}
      <NavbarContent className="flex lg:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Desktop view: Navigation links in the center */}
      <NavbarContent className="hidden gap-4 justify-evenly lg:flex hover:cursor-pointer">
        <NavbarBrand onClick={() => handleScroll("home")} as={Link}>
          <Image src={logo} alt="NextUI logo" width={50} height={50} />
          <p className="text-xl md:text-lg ms-4 glow-text sixtyfour-convergence-unique font-bold text-transparent bg-gradient-to-b from-[#7ED6E8] to-[#3A5F8A] bg-clip-text">
            MYSTIC PALS
          </p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            className="text-sm sixtyfour-convergence-unique hover:cursor-pointer"
            onClick={() => handleScroll("about-us")}
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleScroll("vision")}
            className="text-sm sixtyfour-convergence-unique hover:cursor-pointer"
          >
            Vision
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleScroll("joinUs")}
            className="text-sm sixtyfour-convergence-unique hover:cursor-pointer"
          >
            Join Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            className="text-white"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfjMEAqj7ttBpdDKptyzDYHvPUgbZ4MYIgmVT7n2xWZhqj3KQ/viewform?usp=sf_link"
            variant="shadow"
            target="_blank"
          >
            Contribute
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu dropdown */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-black "
              onClick={() => handleScroll(item.sectionId)} // Update to call handleScroll
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navber;
