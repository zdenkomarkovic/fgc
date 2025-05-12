import Image from "@/node_modules/next/image";
import React from "react";

const Sertifikat = () => {
  return (
    <div className=" bg-muted-foreground">
      <div className="container px-2 md:px-24 mx-auto py-8 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-20">
        <Image
          src={"/tuv-austria-certified.jpg"}
          width={800}
          height={800}
          alt="led rasveta"
        />
        <div className="space-y-8 md:space-y-20">
          <h2>ISO 9001:2015, ISO 14001:2015, ISO 45001:2018</h2>
          <p>
            Pored dugogodišnje garancije,
            <span className="font-bold text-primary"> FGC</span> Vam nudi
            pouzdanu isporuku, servisiranje, kao i stručnu podršku pre i posle
            kupovine. U cilju unapređenja svog poslovanja, kompanija Luminos
            d.o.o. uskladila je svoje poslovne procese sa međunarodnim
            standardima{" "}
            <span className="font-bold text-primary">
              ISO 9001:2015, ISO 14001:2015 i ISO 45001:2018
            </span>
            , a sertifikaciju je izvršila renomirana kuća{" "}
            <span className="font-bold text-primary">TÜV Austria GmbH</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;
