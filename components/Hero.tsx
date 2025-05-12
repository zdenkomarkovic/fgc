"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import Hero1 from "../public/22892967_6689882.jpg";
import Hero2 from "../public/2149049660.jpg";
import Hero3 from "../public/3853.jpg";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <Carousel
        className="absolute top-0 left-0 w-full h-[100dvh] z-[0]"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 5000,
          }),
          Fade(),
        ]}
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" /> */}
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Hero1}
              alt="Moderna dnevna soba"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero2}
              alt="Elegantna dnevna soba"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero3}
              alt="Luksuzni plakar"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="relative flex flex-col gap-6 w-full items-center justify-center text-white z-[1] text-center">
        <h1 className="text-primary md:text-[4rem] text-xl font-bold max-w-[900px] leading-[1.2] px-4">
          FGC - LED rasveta za javne i poslovne prostore
        </h1>
        <h2 className="text-background font-medium md:text-[1.5rem] text-md max-w-[800px] px-4">
          Ušteda energije, inovativna LED tehnologija i pametna rešenja za
          gradove.
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link href="/proizvodi">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-foreground px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium"
            >
              Led rasveta
              <ArrowRightIcon className="w-[18px]" />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
