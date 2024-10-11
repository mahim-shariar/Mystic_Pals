"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardFooter } from "@nextui-org/react";

const BannerSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    if (!isLoading) {
      attemptPlay();
    }
  }, [isLoading]);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="">
      <Card isFooterBlurred className="border-none">
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
          loop
          muted
          autoPlay
          onCanPlayThrough={handleVideoLoad}
          alt="All the devices"
          ref={videoEl}
        >
          <source type="video/mp4" src="/bannerVideo.mp4"></source>
        </video>

        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-col">
            {/* Adjust text sizes for different devices */}
            <p className="p-2 text-sm text-center lg:text-7xl md:text-3xl sixtyfour-convergence-unique">
              COMING SOON
            </p>
            <p className="p-1 text-center lg:text-lg md:text-base text-xs text-[#7ED6E8]">
              "Embark on a co-op Pokemon World adventure where bonds are as
              magical as the Pokemon you befriend!"
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BannerSection;
