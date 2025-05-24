"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";
import Statistika2 from "./Statistika2";
import img from "/public/Cvetnjak Čačak 10.jpg";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-24 mx-auto relative flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="">
            FGC – Zvanični zastupnik za teritoriju Republike Srbije i Republike
            Crne Gore Luminos rasvete za javne i poslovne prostore
          </h2>
          <p className=" first-letter:pl-6">
            Firma FGC je ovlašćeni zastupnik renomiranog brenda Luminos, koji se
            ističe vrhunskim LED rasvetnim rešenjima namenjenim kako javnim,
            tako i poslovnim prostorima. Naša ponuda obuhvata moderne i
            energetski efikasne proizvode koji ispunjavaju najviše standarde
            kvaliteta, pouzdanosti i dugovečnosti.
          </p>
          <p className=" first-letter:pl-6">
            Bez obzira da li opremate kancelarije, hale, tržne centre, škole,
            ulice ili parkove – FGC vam nudi kompletna rešenja prilagođena vašim
            potrebama. Kroz saradnju sa proizvođačem Luminos, garantujemo
            tehničku podršku, dostupnost robe i konkurentne cene.
          </p>
          <Statistika2 />
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
        >
          <Image
            src={img}
            width={800}
            height={800}
            alt="led rasveta"
            className="object-cover w-full aspect-square"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
