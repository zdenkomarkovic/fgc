"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistika2 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="py-12 text-center container px-2 md:px-4 mx-auto"
    >
      <div className="grid grid-cols-2 gap-4 md:gap-8">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={20} duration={2} suffix="+" />}
          </p>
          <p className="mt-2">godina životni vek naših LED lampi</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={5} duration={2} />}
          </p>
          <p className="mt-2">godina garancije za naše proizvode</p>
        </div>
      </div>
    </section>
  );
};

export default Statistika2;
