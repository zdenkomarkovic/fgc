import BackgroundImage from "@/components/BackgroundImage";
import React from "react";

const page = () => {
  return (
    <div className="">
      <BackgroundImage
        img={"469527209_970434601773753_8674334394693392864_n-600x600.jpg"}
      />
      <div className="container px-2 md:px-4 mx-auto py-6 md:py-16 space-y-5 md:space-y-10">
        <h2>
          Spisak objekata i javnih površina koje su opremljene našom Led
          rasvetom
        </h2>
        <div className="space-y-1 md:space-y-3 md:px-52">
          {reference.map((item, i) => {
            return (
              <p
                key={i}
                className="hover:text-primary hover:scale-105 transform origin-left cursor-pointer"
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

const reference = [
  "Regionalni put Jošanička Banja - Kopaonik, kod mesta Biljanovac",
  "Narodni muzej sa uličnom rasvetom - Čačak",
  "Turistički objekat Cvetnjak - Čačak",
  "Granični prelaz Sremska Rača",
  "Osnovna škola u Apatinu",
  "Osnovna škola u Adeševcima,",
  "Osnovna škola u mestu Višnjevac",
  "Osnovna škola u mestu Bačka Palanka",
  "Park doma za decu i omladinu ometenu u razvoju, Veternik, Novi Sad",
  "Mala dvorana Spens-a, sportska hala, grad Novi Sad",
  "Srpska pravoslavna crkva u mestu Sremska Kamenica, Novi Sad",
  "Ulično osvetljenje Čerevićka skela, grad Novi Sad",
  "Svečana sala vojne ustanove Beograd",
  "Stambeni objekat, ulica Mlatišumina, grad Beograd",
  "PharmaSwiss proizvodna hala, grad Beograd",
  "Sportsko rekreativni centar Tašmajdan, grad Beograd",
  "Sportsko rekreativni centar, zatvoreni bazeni, grad Obrenovac",
  "Park mesto Zlatica – opština Zrenjanin",
  "Srpska pravoslavna crkva u mestu Tomaševac, Zrenjanin",
  "Ulica Petra Drapšina, grad Zrenjanin",
  "Gradsko jezero, šetalište, grad Zrenjanin",
  "Šećeranski park, grad Zrenjanin",
  "Šetalište uz reku Begej, pored stare pivnice, grad Zrenjanin",
  "Deo ulične rasvete, grad Vranje",
  "Ulična rasveta, mesto Pantelej, grad Niš",
  "Vojna kasarna „Mija Stanimirović“ grad Niš",
  "Vojna kasarna „Filip Kljajić“ grad Niš",
  "Vojni aerodrom, mesto Lađevci, grad Kraljevo",
  "Deo javne rasvete grada Novog Pazara",
  "Stambeni objekti i podzemne garaže, grad Novi Pazar",
  "Parkovsko osvetljenje - Petrovac na Mlavi",
  "Deo uličnog osvetljenjenja - Valjevo",
  "Deo ulične rasvete grada Bor",
  "Ulična rasveta grada Ivanjica",
  "Valjaonica Bakra Sevojno, grad Užice",
  "Proizvodnja plastike, Divi, mesto Tara",
  "Ulična rasveta, ulica Tekstilna, grad Prijepolje",
  "Stambeni blok Stadion, grad Prijepolje",
];
