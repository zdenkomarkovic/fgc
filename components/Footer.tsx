"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="py-4 md:py-8  shadow-[0px_-3px_10px] shadow-primary bg-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-2 md:pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link href="/" className=" hover:text-primary">
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/proizvodi" className=" hover:text-primary">
                  Proizvodi
                </Link>
              </li>

              <li>
                <Link href="/kontakt" className="hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-1 md:space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381631123104">
                <p className="hover:text-primary">Mob. Tel: +381 63 1123104</p>
              </a>
            </div>
            <div>
              {" "}
              <a href="tel:+381213017111">
                <p className="hover:text-primary">Telefon: +381 21 301 7 111</p>
              </a>
            </div>
            <div>
              <a href="mailto:" target={"_blank"}>
                <p className="text-wrap  hover:text-primary">
                  Email: office@fgc.rs
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start items-center">
              <a href="viber://chat?number=%2B381631123104" className="">
                <FaViber className="text-[28px] lg:text-[28px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
              </a>
              <a href="https://wa.me/381631123104" className="">
                <FaWhatsappSquare className="text-[30px] lg:text-[28px] rounded-2xl text-green-700 " />{" "}
              </a>
              <a
                href="#"
                target={"_blank"}
                className=" bg-blue-700 rounded-full p-1"
              >
                <Facebook classname="" />
              </a>
              <a
                href="#"
                target={"_blank"}
                className=" bg-orange-600 rounded-full"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">FGC</h3>

            <p className=" font-bold ">Vaše svetlo poverenja</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-primary mt-4 md:mt-10 pt-2 md:pt-5">
          <p>&copy; 2025 FGC DOO. Sva prava zadržana.</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            izrada sajta:{" "}
            <span className="font-bold text-primary"> ManikamWebSolutions</span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
