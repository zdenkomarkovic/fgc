"use client";
import { proizvodi } from "@/constants/index";
import { useParams } from "@/node_modules/next/navigation";
import React from "react";
import { motion } from "framer-motion";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { ArrowLeftIcon } from "lucide-react";

const Page = () => {
  const { grupa } = useParams();

  const grupaData = proizvodi.find((g) => g.slug === grupa);

  return (
    <div>
      <div className="container px-2 md:px-4 mx-auto py-24 space-y-12">
        {" "}
        <Link href={`/proizvodi`} className="flex gap-2 items-center">
          <ArrowLeftIcon className="text-primary" /> Nazad
        </Link>
        <h2 className="">{grupaData?.title}</h2>
        <div className="grid grid-cols-4 gap-8">
          {grupaData?.products.map((product, i) => {
            return (
              <Link key={i} href={`/proizvodi/${grupa}/${product.slug}`}>
                <motion.div
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#0a0a0a",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-5 shadow-lg shadow-primary bg-muted-foreground h-full"
                >
                  <h4 className="text-center">{product.title}</h4>
                  <Image
                    src={product.image}
                    width={2000}
                    height={2000}
                    alt="led rasveta"
                    className="w-2/3 mx-auto object-cover"
                  />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
