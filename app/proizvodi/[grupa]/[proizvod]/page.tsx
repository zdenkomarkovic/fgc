"use client";

import { Button } from "@/components/ui/button";
import { proizvodi } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useParams } from "@/node_modules/next/navigation";
import React from "react";
import { ArrowLeftIcon } from "lucide-react";

const Page = () => {
  const { grupa, proizvod } = useParams();
  const grupaData = proizvodi.find((g) => g.slug === grupa);
  const proizvodData = grupaData?.products.find((p) => p.slug === proizvod);

  return (
    <div className=" container px-2 md:px-4 mx-auto py-24 space-y-10">
      <Link href={`/proizvodi/${grupa}`} className="flex gap-2 items-center">
        <ArrowLeftIcon className="text-primary" /> Nazad
      </Link>
      <h2 className="">{proizvodData?.title}</h2>
      <div className="flex gap-8 items-center">
        <div className="w-2/3 space-y-2">
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
      <div className="grid grid-cols-4 gap-4">
        {proizvodData?.images.map((img, i) => {
          return (
            <Image
              key={i}
              src={img}
              width={500}
              height={500}
              alt="led rasveta"
              className="w-full aspect-[1/1] object-cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
