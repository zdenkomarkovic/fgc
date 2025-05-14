"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistika = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="border-t border-primary py-6 md:py-12 text-center container px-2 md:px-4 mx-auto"
    >
      <h2 className="mb-6 md:mb-16">Zašto mi...</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={100} duration={3} suffix="+" />}
          </p>
          <p className="mt-2">Objekata i javnih površina opremljeno</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={20} duration={4} suffix="+" />}
          </p>
          <p className="mt-2">godina životni vek naših LED lampi</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={5} duration={4} suffix="+" />}
          </p>
          <p className="mt-2">godina garancije za sve proizvode</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={3} duration={4} />}
          </p>
          <p className="mt-2">ISO standarda</p>
        </div>
      </div>
    </section>
  );
};

export default Statistika;
