"use client";

import { Button } from "@/components/ui/button";
import { proizvodi } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useParams } from "@/node_modules/next/navigation";
import React from "react";
import { ArrowLeftIcon } from "lucide-react";
import ImageSliderKlizni from "@/components/ImageSliderKlizni";

const Page = () => {
  const { grupa, proizvod } = useParams();
  const grupaData = proizvodi.find((g) => g.slug === grupa);
  const proizvodData = grupaData?.products.find((p) => p.slug === proizvod);
  const images = proizvodData?.images;

  return (
    <div className=" container px-2 md:px-4 mx-auto pt-24 pb-10 space-y-6 md:space-y-10">
      <Link href={`/proizvodi/${grupa}`} className="flex gap-2 items-center">
        <ArrowLeftIcon className="text-primary" /> Nazad
      </Link>
      <h2 className="">{proizvodData?.title}</h2>
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center">
        <div className="md:w-2/3 space-y-2">
          {proizvodData?.text.map((line, i) => {
            const isBold = i === 0 || i === 4;
            return (
              <p key={i} className={isBold ? "font-bold text-primary" : ""}>
                {line}
              </p>
            );
          })}
        </div>
        <Image
          src={proizvodData!.image}
          width={500}
          height={500}
          alt="led rasveta"
          className="bg-muted rounded-lg object-cover"
        />
      </div>
      <div className="flex gap-6">
        {proizvodData?.docs.map((item, i) => {
          return (
            <Link
              href={item.image}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Tehnički dokument</Button>
            </Link>
          );
        })}
      </div>
      <div className="">
        <ImageSliderKlizni images={images || []} />
      </div>
    </div>
  );
};

export default Page;
