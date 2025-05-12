"use client";
import { proizvodi } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

const Page = () => {
  return (
    <div className="py-24 container mx-auto px-2 md:px-4 space-y-10">
      <Link href={`/`} className="flex gap-2 items-center">
        <ArrowLeftIcon className="text-primary" /> Nazad
      </Link>
      <div className="w-4/5 mx-auto flex flex-col-reverse md:flex-row items-center gap-24">
        <div className="flex flex-col gap-10">
          <h2 className=" text-primary">Luminos Premium</h2>
          <p>
            Svi proizvodi pod brendom „Luminos premium“ imaju najmanje 5 godina
            garancije i predviđen radni vek duži od 100.000 sati. Izrađeni su od
            najkvalitetnijih delova renomiranih svetskih proizvođača, uz punu
            zaštitu od spoljašnjih uticaja. Sve karakteristike proizvoda
            testirane su u sopstvenim laboratorijama, a potvrđene sertifikatima
            priznatih ustanova.
          </p>
        </div>
        <Image
          src={"/luminos-premium.jpg"}
          width={300}
          height={300}
          alt="luminos rasveta"
        />
      </div>
      <div className="grid md:grid-cols-4 auto-rows-fr gap-6 pb-20 border-b border-primary">
        {proizvodi.slice(0, 4).map((item, i) => {
          return (
            <Link key={i} href={`/proizvodi/${item.slug}`}>
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0a0a0a",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-3 md:p-8 flex flex-col h-full bg-muted-foreground shadow-lg shadow-primary"
              >
                <Image
                  src={item.image}
                  width={2000}
                  height={2000}
                  alt="led rasveta"
                  className="w-2/3 mx-auto object-cover"
                />
                <div className=" flex flex-col justify-between h-full gap-8">
                  <h4 className="text-2xl font-bold text-center ">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className=" py-6 w-4/5 mx-auto flex flex-col-reverse md:flex-row items-center gap-24">
        <div className="flex flex-col gap-10">
          <h2 className=" text-primary">Luminos Ambienta</h2>
          <p>
            Proizvodi iz brenda „Luminos Ambienta“ razvijeni su u Srbiji i
            izrađeni isključivo od najkvalitetnijih komponenti. Kvalitet svakog
            proizvoda potvrđuje garancija od tri godine. U ponudi se nalazi 18
            različitih vrsta ambijentalnih LED panela snage od 3 do 24 W, u
            kvadratnim i okruglim kućištima, ugradne i nadgradne varijante. Uz
            ove proizvode imate sigurnost stalne dostupnosti na lageru, stručnu
            podršku proizvodnog tima za sve upite, reklamacije i servis, kao i
            cenu koja je konkurentna i prilagođena krajnjim korisnicima.
          </p>
        </div>
        <Image
          src={"/luminos-ambienta.jpg"}
          width={300}
          height={300}
          alt="luminos rasveta"
          className="rounded-lg"
        />
      </div>
      <div className="grid md:grid-cols-4 auto-rows-fr gap-6">
        {proizvodi.slice(4).map((item, i) => {
          return (
            <Link key={i} href={`/proizvodi/${item.slug}`}>
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0a0a0a",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-3 md:p-8 flex flex-col h-full bg-muted-foreground shadow-lg shadow-primary"
              >
                <Image
                  src={item.image}
                  width={2000}
                  height={2000}
                  alt="led rasveta"
                  className="w-2/3 mx-auto object-cover"
                />
                <div className=" flex flex-col justify-between h-full gap-8">
                  <h4 className="text-2xl font-bold text-center">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
