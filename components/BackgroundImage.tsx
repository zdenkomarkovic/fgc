import Image from "@/node_modules/next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <div className="relative flex min-h-[30dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={"/469527209_970434601773753_8674334394693392864_n-600x600.jpg"}
        alt="slep puric"
        fill
        className="w-full h-full  object-cover"
      />
    </div>
  );
};

export default BackgroundImage;
