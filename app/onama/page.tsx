import BackgroundImage from "@/components/BackgroundImage";
import Link from "@/node_modules/next/link";
import React from "react";
import bgImg from "/public/Svečana sala Beograd.jpg";

const page = () => {
  return (
    <div className=" pt-20 pb-6 md:pb-20 space-y-7">
      <div className="container px-2 md:px-4 mx-auto space-y-3 md:space-y-7">
        <h1 className="text-center text-primary font-bold text-4xl md:text-7xl py-3">
          FGC DOO
        </h1>
        <p className="first-letter:pl-6">
          <span className="text-primary font-bold">Kompanija FGC</span> nastala
          je 2016 godine, i do 2023 godine core business aktivnosti ove
          kompanije bile su konsultantske usluge iz oblasti energetike. Oblašću
          energetike bavi se od 2012 godine ali kroz drugačiji oblik društva, te
          aktivnosti oblikuje u društvo sa ograničenom odgovornošću od 2016
          godine.
        </p>
        <p className="first-letter:pl-6">
          Od 2023 sredine godine kompanija FGC doo postaje generalni zastupnik
          za Republiku Srbiju,{" "}
          <span className="text-primary font-bold">LED rasvete </span>
          kompanije Luminos iz BiH. Analizirajući tržište Srbije, zajedničkim
          aktivnostima menadžmenta obe kompanije ustanovilo se da postoji veliki
          potencijal za plasman proizvoda visokog kvaliteta iz oblasti rasvete.
          Proizvodi kompanije Luminos spadaju upravo u red visokokvalitetnih
          proizvoda, ali sa izuzetno prihvatljivom cenom. Zahvaljujući činjenici
          da zastupamo proizvod koji je{" "}
          <span className="text-primary font-bold">vrhunskog kvaliteta</span>, a
          po <span className="text-primary font-bold">pristupačnoj ceni</span>,
          i sa veoma kratkim rokom isporuke, naša kompanija je od početka
          operativnih aktivnosti na teritoriji Republike Srbije, uspela da
          uspostavi saradnju sa desetinama klijenata, iz svih delova Republike
          Srbije. Zahvaljujući ovome, LED rasveta kompanije Luminos, u Srbiji,
          nalazi se na mnogim mestima, o čemu najbolje govori naša{" "}
          <Link
            href={"/reference"}
            className="font-bold text-primary underline"
          >
            {" "}
            referentna lista
          </Link>{" "}
          projekata koji su urađeni.
        </p>
        <p className="first-letter:pl-6">
          Težeći stalnom razvoju, adekvatnom uobličavanju i prilagođavanju
          svojih usluga potrebama klijenata, naša kompanija posvećena je
          uspostavljanju i održavanju dugoročne saradnje sa svim svojim
          klijentima. Uvereni smo da je negovanje takvih odnosa od suštinske
          važnosti kako za poslovne uspehe kompanija i investitora sa kojima
          sarađujemo, tako i za dalji razvoj ovdašnjeg investicionog ambijenta,
          i svih aktera na njemu.
        </p>
        <p className="first-letter:pl-6">
          Koncept naše usluge zasniva se na izrazitoj orijentaciji na
          individualnom pristupu klijentu, temeljno razumevanje klijentovih
          potreba, poslovnih okolnosti, planova za budućnost i svih ostalih
          važnih klijentovih preferencija koje utiču na odabir najprikladnijeg
          rešenja. Time postižemo to da naši pomno izbalansiarni saveti, daju
          optimalno rešenje i tako utiču na zadovoljstvo klijenta našom uslugom.
          Želimo time opravdati poverenje klijenata i potvrditi imidž dinamične
          i moderne kompanije koja prati i sledi zahteve tržišta, na dobrobit
          svojih klijenata.
        </p>
        <p className="first-letter:pl-6">
          FGC je pažljivo kreirana kompanija koja nastoji zadovoljiti potrebu za
          očuvanjem, odnosno rastom imovine tokom vremena, a ujedno pružiti
          klijentu najbolju infrastrukturu pri realizaciji poslova. Osnovne
          odlike naših usluga jesu pre svega kvalitet usluge, pouzdanost,
          poverenje i fleksibilnost.
        </p>
      </div>
      <BackgroundImage img={bgImg} />
    </div>
  );
};

export default page;
