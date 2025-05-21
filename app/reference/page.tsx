import ImageSliderKlizni from "@/components/ImageSliderKlizni";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="container px-2 md:px-4 mx-auto pt-24 pb-10 space-y-5 md:space-y-10">
        <h2>
          Spisak objekata i javnih površina koje su opremljene našom Led
          rasvetom
        </h2>
        <ImageSliderKlizni images={images} />
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
  "Unutrašnja rasveta hale Kraljeva voda mesto Zlatibor, grad Užice",
  "Spoljašnja rasveta mesta Zaovine, planina Tara",
];

const images = [
  "/Bazen Obrenovac 1.jpg",
  "/Bazen Obrenovac 2.jpg",
  "/Bazen Obrenovac 3.jpg",
  "/Bazen Obrenovac 4.jpg",
  "/Cerevicka skela 1.jpg",
  "/Cerevicka skela 2.jpg",
  "/Cerevicka skela 3.jpg",
  "/Cerevicka skela 4.jpg",
  "/Cerevicka skela 5.jpg",
  "/Cvetnjak Čačak 1.jpg",
  "/Cvetnjak Čačak 2.jpg",
  "/Cvetnjak Čačak 3.jpg",
  "/Cvetnjak Čačak 4.jpg",
  "/Cvetnjak Čačak 5.jpg",
  "/Cvetnjak Čačak 6.jpg",
  "/Cvetnjak Čačak 7.jpg",
  "/Cvetnjak Čačak 8.jpg",
  "/Cvetnjak Čačak 9.jpg",
  "/Cvetnjak Čačak 10.jpg",
  "/Cvetnjak Čačak 11.jpg",
  "/Lađevci hala.jpg",
  "/Narodni muzej Čačak 1.jpg",
  "/Narodni muzej Čačak 2.jpg",
  "/Narodni muzej Čačak 3.jpg",
  "/Narodni muzej Čačak 4.jpg",
  "/Narodni muzej Čačak 5.jpg",
  "/Narodni muzej Čačak 6.jpg",
  "/Pantelej Niš 1.jpg",
  "/Pantelej Niš 2.jpg",
  "/Pantelej Niš 3.jpg",
  "/Šećeranski park Zrenjanin.jpg",
  "/Svečana sala Beograd.jpg",
  "/Tomasevac 1.webp",
  "/Tomasevac 2.webp",
  "/Tomasevac 3.webp",
  "/Tomaševac park 1.jpg",
  "/Tomaševac park 2.jpg",
  "/Tomaševac park 3.jpg",
  "/Tomaševac park 4.jpg",
  "/Tomaševac park 5.jpg",
  "/Tomaševac park 6.jpg",
  "/Zlatica.jpg",
  "/Zrenjanin beli lampion 2.jpg",
  "/Zrenjanin beli lampion.jpg",
  "/Zrenjanin crni lampion 2.jpg",
  "/Zrenjanin crni lampion.jpg",
  "/Zrenjanin kej Begej.jpg",
  "/Zrenjanin P.Drapšina 1.jpg",
  "/Zrenjanin P.Drapšina 2.jpg",
  "/Zrenjanin šetalište 1.webp",
  "/Zrenjanin šetalište 2.webp",
  "/Zaovine 4.jpg",
  "/Zaovine 1.jpg",
  "/Zaovine 2.jpg",
  "/Zaovine 3.jpg",
];
