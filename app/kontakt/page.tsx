"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Mail } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Molimo unesite vase ime i prezime" }),
  phone: z.string().min(2, { message: "Molimo unesite vas broj telefona" }),
  email: z.string().email({ message: "Molimo unesite vasu email adresu" }),
  message: z.string().min(10, {
    message: "Poruka mora imati najmanje 10 karaktera.",
  }),
});
export default function Contact() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Ime: ${values.name}\n Telefon: ${values.phone}\n Email: ${values.email}\n Poruka: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });

    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
    form.reset();
  };
  return (
    <div className="">
      <div className="container mx-auto pt-28 pb-16 px-6 md:px-8 md:py-32 space-y-12 md:space-y-24">
        <h1 className="text-2xl md:text-5xl pl-2 md:px-32 text-primary">
          FGC DOO Kontakt
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className=" mx-2 md:mx-20">
            <div className="space-y-3 md:space-y-7 text-lg md:text-2xl">
              <a
                href="tel:+381631123104"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaPhone className="text-[20px] lg:text-[30px]" />
                  +381 063 1123104
                </button>
              </a>
              <a
                href="tel:+381213017111"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaPhone className="text-[20px] lg:text-[30px]" />
                  +381 21 301 7111
                </button>
              </a>
              <a
                href="viber://chat?number=%2B381631123104"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaViber className="text-[28px] lg:text-[35px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
                  +381 063 1123104
                </button>
              </a>
              <a
                href="https://wa.me/381631123104"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <FaWhatsappSquare className="text-[30px] lg:text-[35px] rounded-2xl text-green-700 " />{" "}
                  +381 063 1123104
                </button>
              </a>
              <a
                href="mailto:office@fgc.rs"
                className="py-[7px] flex border-b-[1px] border-primary"
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  <Mail className=" w-[28px] h-[28px]" /> office@fgc.rs
                </button>
              </a>
              <a
                href="https://www.instagram.com/fgc_luminos/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-[7px] flex border-b-[1px] border-primary "
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  {" "}
                  <FaInstagram className=" text-[28px] lg:text-[30px]" />
                  fgc_luminos
                </button>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="py-[7px] flex border-b-[1px] border-primary "
              >
                <button className="hover:scale-110 transition-transform duration-500 px-4 md:px-8 flex gap-4 items-center">
                  {" "}
                  <Facebook className=" text-[28px] lg:text-[30px]" />
                  fgc_luminos
                </button>
              </a>
            </div>
          </div>
          <div className="mx-2 md:mx-20 rounded-3xl ">
            <Form {...form}>
              <form
                className="grid grid-cols-3 items-center p-4 lg:p-10 shadow-xl shadow-primary rounded-xl"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="col-span-3 flex flex-col gap-4 lg:col-span-3 lg:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Ime i Prezime:
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Unesite ime i prezime"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">
                          Broj telefona:
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Unesite vas broj telefona"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl">Email:</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-xl  ">
                          Vasa poruka:
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Vasa poruka za nas"
                            className="text-gray-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={isLoading}
                    className="bg-primary  hover:bg-gray-600 transition-colors ease-in-out duration-500"
                  >
                    {isLoading ? "Sending....." : "Send"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75587.75174035551!2d19.733870068479035!3d45.246849818848474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b0fd0d608d789%3A0xfc5384057a6963db!2sPodunavska%2066%2C%20Novi%20Sad!5e0!3m2!1sen!2srs!4v1747179198366!5m2!1sen!2srs"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-2xl"
        ></iframe>
      </div>
    </div>
  );
}
