import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "O nama",
    link: "/onama",
  },
  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  {
    title: "Reference",
    link: "/reference",
  },

  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface Cards1Data {
  id: number;
  icon: string;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: "/icons8-stopwatch-gradient-96.png",
    title: "",
    text: "Da brzo odgovaramo na sve upite.",
  },
  {
    id: 2,
    icon: "/quality_10074059.png",
    title: "",
    text: "Proizvod vrhunskog kvaliteta.",
  },
  {
    id: 3,
    icon: "/icons8-best-price-96.png",
    title: "",
    text: "Povoljna i konkurentna cena.",
  },
  {
    id: 4,
    icon: "/icons8-consultation-96.png",
    title: "",
    text: "Stručno savetovanje pri izboru proizvoda i izradi rasvetnog rešenja.",
  },
  {
    id: 5,
    icon: "/icons8-service-96.png",
    title: "",
    text: "Brza i pouzdana servisna podrška.",
  },
  {
    id: 6,
    icon: "/icons8-service-96 (1).png",
    title: "",
    text: "Rezervni delovi dostupni i nakon isteka garantnog roka.",
  },
  {
    id: 7,
    icon: "/icons8-new-product-96.png",
    title: "",
    text: "Stalni razvoj novih proizvoda u skladu sa savremenim trendovima.",
  },
  {
    id: 7,
    icon: "/icons8-standard-96.png",
    title: "",
    text: "Led rasveta proizvedena po evropskim standardima.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Elektroinstalacije",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Elektro ormani",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Industrijski elektro ormani",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Pružamo usluge izrade, montaže i održavanja elektro ormana za domaćinstva, poslovne prostore i industrijska postrojenja. Naš tim vodi računa o kvalitetu instalacija i bezbednosti sistema, uz poštovanje svih standarda i propisa.",
};

export interface ProductDocs {
  title: string;
  image: string;
}

export interface Product {
  title: string;
  slug: string;
  image: string;
  images: string[];
  text: string[];
  docs: ProductDocs[];
}

export interface Proizvodi {
  title: string;
  slug: string;
  image: string;
  products: Product[];
}

export const proizvodi: Proizvodi[] = [
  {
    title: "LED ulična rasveta",
    slug: "LED-ulicna-rasveta",
    image: "/LPU-10.png",
    products: [
      {
        title: "LED ulična svetiljka LPU-10",
        slug: "LED-ulicna-svetiljka-LPU-10",
        image: "/LPU-10.png",
        images: [
          "/Cerevicka skela 1.jpg",
          "/Cerevicka skela 2.jpg",
          "/Cerevicka skela 3.jpg",
          "/Cerevicka skela 4.jpg",
          "/Cerevicka skela 5.jpg",
        ],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora. Svetiljka je pogodna za postavljanje na stubove visine od 4 do 8 metara.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug životni vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitno staklo svetiljke napravljeno je od termički ojačanog ravnog stakla, a njegova debljina i vrsta mogu se prilagoditi potrebama kupca.",
          "Temperatura boje svetlosti kreće se od 2700 do 6500 K.",
          "Svetiljka je opremljena asimetričnom optikom za ulično osvetljenje, izrađenom od polikarbonata.",
          "Dostupna je u klasi električne izolacije I ili II.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-10.pdf",
          },
          {
            title: "Tehnicki dokument (100-200w)",
            image: "/LPU-10-100-200W.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-20",
        slug: "LED-ulicna-svetiljka-LPU-20",
        image: "/LPU-20.png",
        images: [
          "/G3-Kolodvorska.jpg",
          "/Garaze-G3-Kolodvorska.jpg",
          "/Konjic-0.jpg",
          "/Lasva.jpg",
        ],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 19 do 250 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitno staklo svetiljke napravljeno je od termički ojačanog ravnog stakla, a njegova debljina i vrsta mogu se prilagoditi potrebama kupca.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K, a svetlosni snop može biti prilagođen različitim uglovima osvetljenja zahvaljujući više tipova optike – u zavisnosti od konfiguracije ulica i puteva.",
          "Po potrebi, svetiljke mogu biti opremljene prekidačem koji automatski isključuje napajanje pri otvaranju kućišta.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-20.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-19",
        slug: "LED-ulicna-svetiljka-LPU-19",
        image: "/LPU-19.png",
        images: [],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 19 do 180 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitno staklo svetiljke napravljeno je od termički ojačanog ravnog stakla, a njegova debljina i vrsta mogu se prilagoditi potrebama kupca.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K, a svetlosni snop može biti prilagođen različitim uglovima osvetljenja zahvaljujući više tipova optike – u zavisnosti od konfiguracije ulica i puteva.",
          "Po potrebi, svetiljke mogu biti opremljene prekidačem koji automatski isključuje napajanje pri otvaranju kućišta.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-19.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-01",
        slug: "LED-ulicna-svetiljka-LPU-01",
        image: "/LPU-01.png",
        images: [],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 15 do 45 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K, a svetlosni snop može biti prilagođen različitim uglovima osvetljenja zahvaljujući više tipova optike – u zavisnosti od konfiguracije ulica i puteva.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-01.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-18",
        slug: "LED-ulicna-svetiljka-LPU-18",
        image: "/LPU-18.png",
        images: [],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 50 do 90 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K, a svetlosni snop može biti prilagođen različitim uglovima osvetljenja zahvaljujući više tipova optike – u zavisnosti od konfiguracije ulica i puteva.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-18.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-28",
        slug: "LED-ulicna-svetiljka-LPU-28",
        image: "/LPU-28.png",
        images: [],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 90 do 180 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, obezbeđujući čvrstoću i dugotrajnost. Svetiljka je otporna na udarce i poseduje visok nivo mehaničke zaštite, pogodna za primenu u zahtevnim uslovima (antivandal izvedba).",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K, a svetlosni snop može biti prilagođen različitim uglovima osvetljenja zahvaljujući više tipova optike – u zavisnosti od konfiguracije ulica i puteva.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-28.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-30",
        slug: "LED-ulicna-svetiljka-LPU-30",
        image: "/LPU-30.png",
        images: [
          "/Tomaševac park 1.jpg",
          "/Tomaševac park 2.jpg",
          "/Tomaševac park 3.jpg",
          "/Tomaševac park 4.jpg",
          "/Tomaševac park 5.jpg",
          "/Tomaševac park 6.jpg",
          "/Park-K.-Monten.jpg",
          "/Park-Kemala-M.jpg",
          "/Park-Kemala-Montena.jpg",
          "/Parkovska.jpg",
        ],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 40 do 80 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-30.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-31A",
        slug: "LED-ulicna-svetiljka-LPU-31A",
        image: "/LPU-31A.png",
        images: [
          "/Zrenjanin P.Drapšina 1.jpg",
          "/Zrenjanin P.Drapšina 2.jpg",
          "/LPU-31A-Braon1.jpg",
          "/1729752519898.jpg",
        ],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 40 do 100 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-31A.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LPU-32D",
        slug: "LED-ulicna-svetiljka-LPU-32D",
        image: "/LPU-32D.png",
        images: ["/20241027_115448-scaled.jpg", "/20241027_115551-scaled.jpg"],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 40 do 70 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPU-32D.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LP-U34F",
        slug: "LED-ulicna-svetiljka-LP-U34F",
        image: "/LP-U34F.png",
        images: [
          "/Zrenjanin beli lampion 2.jpg",
          "/Zrenjanin beli lampion.jpg",
          "/Zrenjanin crni lampion 2.jpg",
          "/Zrenjanin crni lampion.jpg",
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
          "/Dobrinja-0.jpg",
          "/Dobrinja-00.jpg",
          "/1729752519493.jpg",
          "/1729752519416.jpg",
          "/1729752519377.jpg",
          "/1729752519329.jpg",
        ],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 40 do 70 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
          "Rade se u crnoj i beloj boji",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LP-U34F.pdf",
          },
        ],
      },
      {
        title: "LED ulična svetiljka LP-U35V",
        slug: "LED-ulicna-svetiljka-LP-U35V",
        image: "/LP-U35V.png",
        images: [
          "/Tuzla-Korzo.jpg",
          "/Tuzla-Korzo-000.jpg",
          "/Tuzla-Korzo-00.jpg",
          "/Tuzla-Korzo-0.jpg",
          "/Gorazde.jpg",
          "/Gorazde-novo-stanje-1.jpg",
          "/Gorazde-00.jpg",
        ],
        text: [
          "Koristi se za osvetljavanje svih vrsta javnih i privatnih spoljašnjih prostora – kao što su ulice, putevi, autoputevi, parkirališta, biciklističke staze, parkovi, stambena naselja, gradska središta i slične površine. Savremeni izgled svetiljki se lepo uklapa u svaki od pomenutih prostora.",
          "Proizvodnja se vrši u Bosni i Hercegovini, u skladu sa važećim EN standardima.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug vek trajanja od najmanje 100.000 radnih sati.",
          "Modularna konstrukcija omogućava brzo servisiranje i lako unapređenje svetiljke ugradnjom efikasnijih delova.",
          "LED izvori svetlosti dostupni su u snagama od 40 do 70 W.",
          "Kućište LED svetiljke izrađeno je od livenog aluminijuma, što omogućava jednostavno održavanje.",
          "Zaštitni poklopac svetiljke izrađen je od polikarbonata, što omogućava lako i praktično održavanje.",
          "Boja svetlosti dostupna je u rasponu od 2700 do 6500 K.",
          "Po zahtevu kupca, svetiljke mogu biti dodatno opremljene zaštitom od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/LPU-35V-new.pdf",
          },
        ],
      },
      {
        title: "LED Corn LKS-39",
        slug: "LED-Corn-LKS-39",
        image: "/LKS-39.png",
        images: [],
        text: [
          "LED Corn sijalice sa standardnim grlom E27 ili E40, po dimenzijama, obliku i funkciji savršeno se uklapaju u kućišta namenjena javnom osvetljenju, naročito u parkovima i duž pešačkih staza.",
          "Prilagođene su svim vrstama postojećih svetiljki, a zamena je izuzetno jednostavna — umesto klasične sijalice, LED Corn se jednostavno zavrne u grlo bez potrebe za dodatnim balastima.",
          "Predstavljaju najbrže, najisplativije i najekonomičnije rešenje za zamenu postojećih svetiljki, uključujući živine (250W–400W), metalhalogene i natrijumove sijalice.",
          "Pogodne su za montažu u zatvorena kućišta.",
          "Dostupne su u snagama od 12 do 63 W.",
          "Karakteriše ih dug radni vek od najmanje 100.000 sati",
          "Raspon boje svetlosti od 3000 do 6000 K.",
          "Omogućavaju uštedu energije do 80% u poređenju sa konvencionalnim sijalicama.",
          "Izrađene su od materijala otpornih na visoke temperature i vatru.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LED-Corn.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "LED reflektori",
    slug: "LED-Reflektori",
    image: "/LPR-30.png",
    products: [
      {
        title: "Viseća LED svetiljka LP-UFO",
        slug: "Viseca-LED-svetiljka-LP-UFO",
        image: "/LP-UFO.png",
        images: ["/Standard.jpg", "/Standard-hala.jpg", "/Lađevci hala.jpg"],
        text: [
          "Namena joj je prvenstveno za industrijsko osvetljenje, sa mogućnošću neprekidnog rada tokom dugog vremenskog perioda.",
          "Idealna je za upotrebu u proizvodnim halama, fabričkim postrojenjima i magacinima.",
          "Predstavlja odličnu alternativu tradicionalnoj rasveti.",
          "Može da zameni sijalice snage od 250W do 1000W.",
          "LED izvor svetlosti snage između 100 i 200W.",
          "Obezbeđuje prijatno osvetljenje koje pogoduje radnom okruženju.",
          "Omogućava značajnu uštedu električne energije.",
          "Izrađena je u skladu sa standardima EN propisa.",
          "Temperatura svetlosti od 2700 do 6500 K.",
          "Dug radni vek – najmanje 100.000 sati rada.",
          "Mogući uglovi svetlosti: 120°, 90° i 60°, u zavisnosti od primene.",
          "Kućište svetiljke napravljeno je od aluminijuma.",
          "Zaštitni poklopac izrađen je od polikarbonata.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LP-UFO.pdf",
          },
        ],
      },
      {
        title: "LED reflektor LPR-01",
        slug: "LED-reflektor-LPR-01",
        image: "/LPR-01-1.png",
        images: ["/Tekija-Stolac-2.jpg", "/Tramvajska-stanica-Sarajevo.jpg"],
        text: [
          "LED reflektori su višenamenske svetiljke koje nalaze široku primenu u savremenom osvetljenju. Zahvaljujući karakteristikama raspršivanja svetlosti, mogu ravnomerno osvetliti prostrane industrijske površine ili naglasiti fasade, spomenike i druge objekte.",
          "Ugrađeni kvalitetni delovi omogućavaju dug radni vek od najmanje 100.000 sati.",
          "Kućište reflektora izrađeno je od aluminijuma, dok je zaštitni poklopac od otpornog polikarbonata. Održavanje je jednostavno i brzo.",
          "Proizvodnja se obavlja u Bosni i Hercegovini, u skladu sa EN standardima.",
          "Boja svetlosti u rasponu od 2700 do 6500 K.",
          "Ne trepere i ne proizvode neugodne zvuke, što omogućava komforan rad.",
          "Reflektor je otporan na oštećenja, sa visokom IK zaštitom - Antivandal.",
          "Ekološki su prihvatljivi.",
          "Postavljanje se vrši pomoću nosača za montažu na zid ili slične ravne površine.",
          "Na zahtev kupca moguće je dodati zaštitu od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPR-01.pdf",
          },
        ],
      },
      {
        title: "LED reflektor LPR-18",
        slug: "LED-reflektor-LPR-18",
        image: "/LPR-18-1.png",
        images: [
          "/Sip-dvorana.jpg",
          "/Dvorana-Sip-1.jpg",
          "/Dvorana-Sip-2.jpg",
          "/begova_dzamija-1.jpg",
          "/Dzemat-Careva-dzamija-Sarajevo-1.jpg",
          "/Maglaj-1.jpg",
          "/vodopad-kravice-1.jpg",
          "/Olovo.jpg",
          "/Olovo-0.jpg",
          "/Svetiste-Gospe-Olovske.jpg",
        ],
        text: [
          "LED reflektori predstavljaju univerzalna rasvetna rešenja sa širokom upotrebom u savremenim uslovima. Zahvaljujući posebnoj sposobnosti širenja svetlosti, ravnomerno osvetljavaju velike industrijske prostore ili ističu detalje na fasadama, spomenicima i objektima od značaja.",
          "Korišćenje visokokvalitetnih komponenti obezbeđuje dug vek trajanja – najmanje 100.000 sati rada.",
          "Reflektor ima kućište od aluminijuma, dok je zaštitni deo izrađen od izdržljivog polikarbonata. Održavanje uređaja je lako i efikasno.",
          "Proizvod je napravljen u Bosni i Hercegovini, uz poštovanje EN standarda.",
          "Temperatura svetlosti u rasponu od 2700 do 6500 K.",
          "Bez treperenja i neželjenih zvukova, što doprinosi prijatnijem radnom ambijentu.",
          "Otporan je na fizička oštećenja, sa visokom IK zaštitom - Antivandal.",
          "Ekološki prihvatljiv.",
          "Montira se pomoću držača za kačenje na zidove ili druge ravne površine.",
          "Na zahtev korisnika moguće je ugraditi zaštitu od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPR-18.pdf",
          },
        ],
      },
      {
        title: "LED reflektor LPR-28",
        slug: "LED-reflektor-LPR-28",
        image: "/LPR-28-1.png",
        images: [
          "/Dolina-heroja-Tjentiste-1.jpg",
          "/Tjentiste.-Dolina-heroja.jpg",
          "/71e0cef1-2c2a-49b0-b69f-65f4fabf341eLuminos_spens.jpg",
          "/Dvorana-Spens-Novi-Sad-1.jpg",
          "/65915937_1227982504049317_34797988240949248_n.jpg",
          "/Bilmisce-dvorana.jpg",
          "/Dvorana-Bilmisce-Zenica.jpg",
          "/Bilmisce.jpg",
          "/Dvorana-Gradacac-scaled.jpg",
          "/Franjevacka-gimnazija.jpg",
          "/Piramide-Foca-1.jpg",
        ],
        text: [
          "LED reflektori predstavljaju univerzalna rasvetna rešenja sa širokom upotrebom u savremenim uslovima. Zahvaljujući posebnoj sposobnosti širenja svetlosti, ravnomerno osvetljavaju velike industrijske prostore ili ističu detalje na fasadama, spomenicima i objektima od značaja.",
          "Korišćenje visokokvalitetnih komponenti obezbeđuje dug vek trajanja – najmanje 100.000 sati rada.",
          "Reflektor ima kućište od aluminijuma, dok je zaštitni deo izrađen od izdržljivog polikarbonata. Održavanje uređaja je lako i efikasno.",
          "Proizvod je napravljen u Bosni i Hercegovini, uz poštovanje EN standarda.",
          "Temperatura svetlosti u rasponu od 2700 do 6500 K.",
          "Bez treperenja i neželjenih zvukova, što doprinosi prijatnijem radnom ambijentu.",
          "Otporan je na fizička oštećenja, sa visokom IK zaštitom - Antivandal.",
          "Ekološki prihvatljiv.",
          "Montira se pomoću držača za kačenje na zidove ili druge ravne površine.",
          "Na zahtev korisnika moguće je ugraditi zaštitu od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPR-28.pdf",
          },
        ],
      },
      {
        title: "LED reflektor LPR-29",
        slug: "LED-reflektor-LPR-29",
        image: "/LPR-29-1.png",
        images: [],
        text: [
          "LED reflektori predstavljaju univerzalna rasvetna rešenja sa širokom upotrebom u savremenim uslovima. Zahvaljujući posebnoj sposobnosti širenja svetlosti, ravnomerno osvetljavaju velike industrijske prostore ili ističu detalje na fasadama, spomenicima i objektima od značaja.",
          "Korišćenje visokokvalitetnih komponenti obezbeđuje dug vek trajanja – najmanje 100.000 sati rada.",
          "Reflektor ima kućište od aluminijuma, dok je zaštitni deo izrađen od izdržljivog polikarbonata. Održavanje uređaja je lako i efikasno.",
          "Proizvod je napravljen u Bosni i Hercegovini, uz poštovanje EN standarda.",
          "Temperatura svetlosti u rasponu od 2700 do 6500 K.",
          "Bez treperenja i neželjenih zvukova, što doprinosi prijatnijem radnom ambijentu.",
          "Otporan je na fizička oštećenja, sa visokom IK zaštitom - Antivandal.",
          "Ekološki prihvatljiv.",
          "Montira se pomoću držača za kačenje na zidove ili druge ravne površine.",
          "Na zahtev korisnika moguće je ugraditi zaštitu od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPR-29.pdf",
          },
        ],
      },
      {
        title: "LED reflektor LPR-30",
        slug: "LED-reflektor-LPR-30",
        image: "/LPR-30.png",
        images: [
          "/Balon-2.jpg",
          "/Balon-1.jpg",
          "/Bazen Obrenovac 1.jpg",
          "/Bazen Obrenovac 2.jpg",
          "/Bazen Obrenovac 3.jpg",
          "/Bazen Obrenovac 4.jpg",
        ],
        text: [
          "LED reflektori predstavljaju univerzalna rasvetna rešenja sa širokom upotrebom u savremenim uslovima. Zahvaljujući posebnoj sposobnosti širenja svetlosti, ravnomerno osvetljavaju velike industrijske prostore ili ističu detalje na fasadama, spomenicima i objektima od značaja.",
          "Korišćenje visokokvalitetnih komponenti obezbeđuje dug vek trajanja – najmanje 100.000 sati rada.",
          "Reflektor ima kućište od aluminijuma, dok je zaštitni deo izrađen od izdržljivog polikarbonata. Održavanje uređaja je lako i efikasno.",
          "Proizvod je napravljen u Bosni i Hercegovini, uz poštovanje EN standarda.",
          "Temperatura svetlosti u rasponu od 2700 do 6500 K.",
          "Bez treperenja i neželjenih zvukova, što doprinosi prijatnijem radnom ambijentu.",
          "Otporan je na fizička oštećenja, sa visokom IK zaštitom - Antivandal.",
          "Ekološki prihvatljiv.",
          "Montira se pomoću držača za kačenje na zidove ili druge ravne površine.",
          "Na zahtev korisnika moguće je ugraditi zaštitu od prenapona.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPR-30.pdf",
          },
        ],
      },
      {
        title: "LED rasveta za nadstrešnice LPB-51",
        slug: "LED-rasveta-za-nadstresnice-LPB-51",
        image: "/LPB-51.png",
        images: [],
        text: [
          "LED osvetljenje na benzinskim stanicama doprinosi uštedi električne energije i pruža pozitivan utisak korisnicima.",
          "Privlačenje vozača i olakšavanje kupovine cilj je svakog prodajnog objekta – ni pumpe nisu izuzetak. Ukoliko želite da putnici lako uoče vašu stanicu, da se osećaju bezbedno dok toče gorivo i brzo završe kupovinu, pravi izbor je model LPB-51.",
          "Ugrađene komponente visokog kvaliteta obezbeđuju dug životni vek trajanja od najmanje 100.000 radnih sati.",
          "Proizvedeno u Bosni i Hercegovini, u skladu sa evropskim standardima (EN).",
          "Temperatura svetlosti se kreće između 2700 i 6500 kelvina, uz mogućnost različitih uglova rasipanja svetlosti.",
          "Kućište reflektora izrađeno je od aluminijuma, a zaštitni sloj od ojačanog stakla.",
          "Održavanje je jednostavno i praktično.",
          "U zavisnosti od podloge, dostupni su modeli za ugradnju i za nadgradnju.",
          "Ekološki prihvatljiv proizvod, bez štetnih emisija.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPB-51.pdf",
          },
        ],
      },
      {
        title: "Viseća LED svetiljka LPL-16",
        slug: "Viseca-LED-svetiljka-LPL-16",
        image: "/LPL-16.png",
        images: [],
        text: [
          "Ova svetiljka je prvenstveno dizajnirana za industrijsku upotrebu, sa mogućnošću rada tokom dugih perioda bez prekida.",
          "Idealna je za osvetljavanje objekata poput proizvodnih hala, skladišta i drugih industrijskih prostora.",
          "Savršena je zamena za tradicionalnu rasvetu koja koristi starije tehnologije.",
          "Pruža efikasnu zamenu za sijalice u rasponu snage od 250W do 1000W.",
          "Koristi LED tehnologiju u snazi od 85W do 225W.",
          "Obezbeđuje optimalno osvetljenje koje omogućava prijatnu radnu atmosferu.",
          "Ovaj proizvod omogućava značajnu uštedu energije.",
          "Proizvedena u skladu sa svim relevantnim EN standardima.",
          "Ima dug vek trajanja, sa minimalnim radnim vekom od 100.000 radnih sati.",
          "Pruža mogućnost podešavanja uglova svetlosti kako bi se prilagodila različitim potrebama.",
          "Kućište je izrađeno od aluminijuma.",
          "Zaštitna plastika (protektor) je napravljena od visokokvalitetnog polikarbonata, što olakšava održavanje.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPL-16.pdf",
          },
        ],
      },
      {
        title: "Tunelska LED svetiljka LPT-61",
        slug: "Tunelska-LED-svetiljka-LPT-61",
        image: "/LPT-61.png",
        images: [],
        text: [
          "Osvetljenje u tunelima omogućava bezbedan ulazak, prolazak i izlazak iz tunela. Zbog efekta 'crnog otvora' i 'crnog okvira' potrebna je postepena promena osvetljenja za udobnu i sigurnu vožnju.",
          "Pravilnim odabirom rasvete omogućava se brzo prilagođavanje oka i uočavanje prepreka bez naglog smanjenja brzine.",
          "Proizvedeno u Bosni i Hercegovini u skladu sa EN standardima.",
          "Kućište svetiljke je od aluminijuma, a zaštitno staklo od termički ojačanog stakla.",
          "Boja svetlosti u rasponu od 2700 do 6500 K.",
          "Jednostavno za održavanje.",
          "Mogućnost podešavanja ugla osvetljenja u zavisnosti od potreba.",
          "Dug vek trajanja – minimalno 100.000 radnih sati.",
          "Montaža pomoću nadgradnog ili visećeg nosača.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPT-61.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "LED linearne lampe",
    slug: "LED-linearne-lampe",
    image: "/LPL-71-1.png",
    products: [
      {
        title: "LED linearna svetiljka LPL-71",
        slug: "LED-linearna-svetiljka-LPL-71",
        image: "/LPL-71-1.png",
        images: [],
        text: [
          "LED linearna lampa predstavlja ekonomično rešenje za unutrašnje osvetljenje, odlična zamena za fluorescentne cevi.",
          "Ne zahteva održavanje niti zamenu cevi tokom čitavog radnog veka.",
          "Zahvaljujući savremenom dizajnu, idealna je za hodnike, kancelarije, škole, garaže, prodavnice, tržne centre, fabrike i proizvodne hale do 4 m visine.",
          "Kućište svetiljke izrađeno je od aluminijuma, a boja se može prilagoditi zahtevima kupca.",
          "Temperatura boje svetla u opsegu od 2700 do 6500 K.",
          "Proizvedena u Bosni i Hercegovini, u skladu sa EN normama.",
          "Zaštitni poklopac svetiljke izrađen je od pleksiglasa sa difuzorom.",
          "Bez treperenja, pogodna za prostore u kojima se boravi duže vreme.",
          "Svi delovi su lako zamenljivi (reč zamenljivi) što omogućava jeftinu popravku u slučaju kvara.",
          "Dostupna u ugradnoj i nadgradnoj (kao visilica) verziji.",
          "Dug radni vek od najmanje 100.000 radnih sati.",
          "Montaža pomoću sajli (visilica).",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPL-71.pdf",
          },
        ],
      },
      {
        title: "LED Vodootporna linearna svetiljka LPL-72",
        slug: "LED-Vodootporna-linearna-svetiljka-LPL-72",
        image: "/LPL-72-1.png",
        images: [],
        text: [
          "Vodootporna linearna svetiljka namenjena je za vlažne prostore, magacine i spoljašnje okruženje, pogodna za montažu do 4 metra visine.",
          "Odlična zamena za klasične vodootporne svetiljke sa fluorescentnim cevima zbog niže potrošnje struje i manjih troškova održavanja.",
          "Ugrađeni su kvalitetni LED drajveri, a marka i model drajvera mogu se prilagoditi po želji kupca. Po zahtevu, moguće je ugraditi prenaponsku zaštitu.",
          "Dostupne varijante sa jednim ili dva izlaza.",
          "Proizvedena u Bosni i Hercegovini prema važećim EN standardima.",
          "Kućište svetiljke izrađeno je od polikarbonata.",
          "Opremljena LED izvorima svetlosti snage od 18W do 36W, a po potrebi i u drugim jačinama.",
          "Boja svetlosti se može prilagoditi – u rasponu od 2700K do 6500K.",
          "Svi delovi svetiljke su zasebno zamenjivi, što olakšava i pojeftinjuje popravku tokom eksploatacije.",
          "Montaža je moguća pomoću nosača ili ovjesnog sistema.",
          "Dug radni vek – najmanje 50.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-LPL-72.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "Unutrašnja LED rasveta",
    slug: "Unutrasnja-LED-rasveta",
    image: "/Doro-SM.png",
    products: [
      {
        title: "LED panel 1200×300",
        slug: "LED-panel-1200-300",
        image: "/panel-1200x300-1.png",
        images: [],
        text: [
          "LED panel ne proizvodi treperenje koje zamara ljudsko oko, a ugrađeni difuzor štiti vid sprečavajući direktan sjaj LED dioda.",
          "Ovi paneli su predviđeni za osvetljenje zatvorenih prostora kao što su stanovi, kancelarije, restorani, tržni centri i prodavnice.",
          "Zamjenom običnih sijalica sa žarnom niti LED panelom, moguće je ostvariti uštedu električne energije i do 86%.",
          "Proizvod ispunjava sve bezbednosne i zdravstvene uslove za upotrebu u unutrašnjoj rasveti.",
          "Izrađeni u Bosni i Hercegovini u skladu sa EN standardima.",
          "Kućište panela je napravljeno od aluminijuma bele boje, dok je zaštitni poklopac izrađen od polikarbonata sa difuzijom svetla koja ravnomerno raspoređuje osvetljenje.",
          "Montaža: nadgradna",
          "Ugrađeni kvalitetni delovi garantuju dug vek trajanja od najmanje 50.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Ambienta-1200x300-1.pdf",
          },
        ],
      },
      {
        title: "Kvadratni LED panel 600×600",
        slug: "Kvadratni-LED-panel-600-600",
        image: "/panel-600x600-1.png",
        images: [],
        text: [
          "LED panel ne proizvodi treperenje koje zamara ljudsko oko, a ugrađeni difuzor štiti vid sprečavajući direktan sjaj LED dioda.",
          "Ovi paneli su predviđeni za osvetljenje zatvorenih prostora kao što su stanovi, kancelarije, restorani, tržni centri i prodavnice.",
          "Zamjenom običnih sijalica sa žarnom niti LED panelom, moguće je ostvariti uštedu električne energije i do 86%.",
          "Proizvod ispunjava sve bezbednosne i zdravstvene uslove za upotrebu u unutrašnjoj rasveti.",
          "Izrađeni u Bosni i Hercegovini u skladu sa EN standardima.",
          "Kućište panela je napravljeno od aluminijuma bele boje, dok je zaštitni poklopac izrađen od polikarbonata sa difuzijom svetla koja ravnomerno raspoređuje osvetljenje.",
          "Montaža: nadgradna / ugradna",
          "Ugrađeni kvalitetni delovi garantuju dug vek trajanja od najmanje 50.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Ambienta-600x600-1.pdf",
          },
        ],
      },
      {
        title: "LED svetiljka Gin Downlight",
        slug: "LED-svetiljka-Gin-Downlight",
        image: "/Gin.png",
        images: [],
        text: [
          "Downlight svetiljke usmeravaju snop svetlosti pravo nadole. Koriste se za indirektnu rasvetu različitih prostora ili osvetljenje zidova.",
          "Mogu se ugraditi u plafon, pa ih zovemo ugradne downlight svetiljke.",
          "Kvalitetne komponente omogućavaju dug vek trajanja od najmanje 60.000 radnih sati.",
          "Izrađene u skladu sa EN standardima.",
          "Boja svetlosti dostupna je u rasponu od 3000 do 6500K, dok je mogući raspon rasipanja svetlosti moguć u više uglova.",
          "Kućište svetiljke je od aluminijuma, a pokrov od providnog raspršivača svetlosti.",
          "Radna temperatura svetiljke je od -40 do +50 stepeni Celzijusa.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Gin.pdf",
          },
        ],
      },
      {
        title: "LED svetiljka Akira Downlight",
        slug: "LED-svetiljka-Akira-Downlight",
        image: "/Akira.png",
        images: [],
        text: [
          "Downlight svetiljke u svom osnovnom obliku usmeravaju svetlosni tok nadole. Koriste se za indirektnu rasvetu različitih prostora ili osvetljenje zidova.",
          "Mogu se ugraditi u plafon, pa ih zovemo ugradne downlight svetiljke.",
          "Kvalitetne komponente omogućavaju dug vek trajanja od najmanje 60.000 radnih sati.",
          "Izrađene u skladu sa EN standardima.",
          "Boja svetlosti dostupna je u rasponu od 3000 do 6500K, dok je mogući raspon rasipanja svetlosti moguć u više uglova.",
          "Kućište svetiljke je od aluminijuma, a pokrov od providnog raspršivača svetlosti.",
          "Radna temperatura svetiljke je od -40 do +50 stepeni Celzijusa.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Akira.pdf",
          },
        ],
      },
      {
        title: "LED svetiljka Sora Downlight",
        slug: "LED-svetiljka-Sora-Downlight",
        image: "/Sora.png",
        images: [],
        text: [
          "Downlight svetiljke u svom osnovnom obliku usmeravaju svetlosni tok nadole. Koriste se za indirektnu rasvetu različitih prostora ili osvetljenje zidova.",
          "Mogu se ugraditi u plafon, pa ih zovemo ugradne downlight svetiljke.",
          "Kvalitetne komponente omogućavaju dug vek trajanja od najmanje 60.000 radnih sati.",
          "Izrađene u skladu sa EN standardima.",
          "Boja svetlosti dostupna je u rasponu od 3000 do 6500K, dok je mogući raspon rasipanja svetlosti moguć u više uglova.",
          "Kućište svetiljke je od aluminijuma, a pokrov od providnog raspršivača svetlosti.",
          "Radna temperatura svetiljke je od -40 do +50 stepeni Celzijusa.",
          "Dostupno u crnoj i beloj boji.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Sora.pdf",
          },
        ],
      },
      {
        title: "Lotus LED spot",
        slug: "Lotus-LED-spot",
        image: "/Lotus.png",
        images: [],
        text: [
          "Za razliku od fiksnih svetlosnih tela, pokretne svetiljke mogu da se prilagode promenama u nameni prostora.",
          "Mogu se ugraditi u plafon, pa ih zovemo ugradne LED spot svetiljke.",
          "Kvalitetne komponente omogućavaju dug vek trajanja od najmanje 60.000 radnih sati.",
          "Izrađene u skladu sa EN standardima.",
          "Boja svetlosti dostupna je u rasponu od 3000 do 6500K, dok je mogući raspon rasipanja svetlosti moguć u više uglova.",
          "Kućište svetiljke je od aluminijuma, a protektor od termički ojačanog stakla.",
          "Radna temperatura svetiljke je od -40 do +50 stepeni Celzijusa.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Lotus.pdf",
          },
        ],
      },
      {
        title: "Doro LED spot reflektor",
        slug: "Doro-LED-spot-reflektor",
        image: "/Doro.png",
        images: [],
        text: [
          "Reflektori su najčešći oblik pokretnih svetiljki. Namenjeni su osvetljavanju određenih delova prostora, pa se najviše koriste za isticanje određenih elemenata u prostoru.",
          "Često se koriste kada se zahtevi za osvetljenjem često menjaju, jer omogućavaju lako prilagođavanje pravca i položaja svetlosti.",
          "Reflektori se mogu nabaviti sa različitim uglovima snopa – od uskih do širokih. Uski snop pokriva manje površine sa veće udaljenosti, dok širi snop omogućava osvetljenje većeg prostora sa iste daljine.",
          "Proizvedeni su u skladu sa EN standardima.",
          "Boja svetlosti dostupna je u rasponu od 3000 do 6500K, dok je mogući raspon rasipanja svetlosti moguć u više uglova.",
          "Kućište LED svetiljke izrađeno je od aluminijuma, a zaštitni poklopac od providnog difuzora.",
          "Radna temperatura svetiljke kreće se od -40 do +50°C.",
          "Korišćene su kvalitetne komponente koje obezbeđuju radni vek od najmanje 60.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Doro.pdf",
          },
        ],
      },
      {
        title: "Doro mali LED spot reflektor",
        slug: "Doro-mali-LED-spot-reflektor",
        image: "/Doro-SM.png",
        images: [],
        text: [
          "Reflektori su najčešći oblik pokretnih svetiljki. Namenjeni su osvetljavanju određenih delova prostora, pa se najviše koriste za isticanje određenih elemenata u prostoru.",
          "Često se koriste kada se zahtevi za osvetljenjem često menjaju, jer omogućavaju lako prilagođavanje pravca i položaja svetlosti.",
          "Reflektori se mogu nabaviti sa različitim uglovima snopa – od uskih do širokih. Uski snop pokriva manje površine sa veće udaljenosti, dok širi snop omogućava osvetljenje većeg prostora sa iste daljine.",
          "Proizvedeni su u skladu sa EN standardima.",
          "Boja svetlosti dostupna je u rasponu od 3000 do 6500K, dok je mogući raspon rasipanja svetlosti moguć u više uglova.",
          "Kućište LED svetiljke izrađeno je od aluminijuma, a zaštitni poklopac od providnog difuzora.",
          "Radna temperatura svetiljke kreće se od -40 do +50°C.",
          "Korišćene su kvalitetne komponente koje obezbeđuju radni vek od najmanje 60.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Doro-SM.pdf",
          },
        ],
      },
      {
        title: "Tamaki LED viseća svetiljka",
        slug: "Tamaki-LED-viseca-svetiljka",
        image: "/Tamaki.png",
        images: [],
        text: [
          "Viseća LED svetiljka Tamaki privući će pažnju svojim nesvakidašnjim izgledom. Odlično se uklapa u kuhinje, dnevne sobe i radne prostore, unoseći dozu originalnosti u enterijer.",
          "Za ljubitelje modernog i drugačijeg dizajna, ova svetiljka je pun pogodak. Može se prilagoditi po visini tako što se nosač skraćuje prema potrebi.",
          "Difuzor raspršuje svetlost u više pravaca, smanjujući blještavilo i povećavajući površinu sa koje svetlost izlazi.",
          "Proizvedena je u skladu sa EN standardima.",
          "Kućište LED svetiljke izrađeno je od aluminijuma, dostupno u crnoj ili beloj boji, dok je zaštitni sloj izrađen od opalnog difuzora.",
          "Zahvaljujući širokom rasponu osvetljenja, ove svetiljke se često koriste. Najčešće su kružnog oblika.",
          "Radna temperatura svetiljke je od -40 do +50°C.",
          "Visok kvalitet ugrađenih komponenti omogućava radni vek od najmanje 60.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnički dokument",
            image: "/Luminos-Tamaki.pdf",
          },
        ],
      },
      {
        title: "Sadou LED viseća svetiljka",
        slug: "Sadou-LED-viseca-svetiljka",
        image: "/Sadou.png",
        images: [],
        text: [
          "Viseća LED svetiljka Sadou privući će pažnju svojim nesvakidašnjim izgledom. Odlično se uklapa u kuhinje, dnevne sobe i radne prostore, unoseći dozu originalnosti u enterijer.",
          "Za ljubitelje modernog i drugačijeg dizajna, ova svetiljka je pun pogodak. Može se prilagoditi po visini tako što se nosač skraćuje prema potrebi.",
          "Difuzor raspršuje svetlost u više pravaca, smanjujući blještavilo i povećavajući površinu sa koje svetlost izlazi.",
          "Proizvedena je u skladu sa EN standardima.",
          "Kućište LED svetiljke izrađeno je od aluminijuma, dostupno u crnoj ili beloj boji, dok je zaštitni sloj izrađen od opalnog difuzora.",
          "Zahvaljujući širokom rasponu osvetljenja, ove svetiljke se često koriste. Najčešće su kružnog oblika.",
          "Radna temperatura svetiljke je od -40 do +50°C.",
          "Visok kvalitet ugrađenih komponenti omogućava radni vek od najmanje 60.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnički dokument",
            image: "/Luminos-Sadou.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "Okrugli LED paneli",
    slug: "Okrugli-LED-paneli",
    image: "/okrugli-led-panel_opt.png",
    products: [
      {
        title: "Okrugli LED panel SIGNUM",
        slug: "Okrugli-LED-panel-SIGNUM",
        image: "/okrugli-led-panel_opt.png",
        images: [],
        text: [
          "LED paneli marke Luminos ambienta predstavljaju odličan izbor za osvetljavanje unutrašnjih prostora.",
          "Proizvode se u Bosni i Hercegovini uz upotrebu visokokvalitetnih delova.",
          "Laki su za ugradnju, dolaze sa trogodišnjom garancijom i uvek su dostupni po povoljnoj ceni.",
          "Kupcima je obezbeđena i kvalitetna postprodajna podrška.",
          "U ponudi je 18 modela ambijentalnih LED panela snage od 3 do 24 vata, ugradne i nadgradne varijante.",
        ],
        docs: [],
      },
    ],
  },
  {
    title: "Kvadratni LED paneli",
    slug: "Kvadratni-LED-paneli",
    image: "/kvadratni-led-panel_opt.png",
    products: [
      {
        title: "Kvadratni LED panel SIGNUM",
        slug: "Kvadratni-LED-panel-SIGNUM",
        image: "/kvadratni-led-panel_opt.png",
        images: [],
        text: [
          "LED paneli marke Luminos ambienta predstavljaju odličan izbor za osvetljavanje unutrašnjih prostora.",
          "Proizvode se u Bosni i Hercegovini uz upotrebu visokokvalitetnih delova.",
          "Laki su za ugradnju, dolaze sa trogodišnjom garancijom i uvek su dostupni po povoljnoj ceni.",
          "Kupcima je obezbeđena i kvalitetna postprodajna podrška.",
          "U ponudi je 18 modela ambijentalnih LED panela snage od 3 do 24 vata, ugradne i nadgradne varijante.",
        ],
        docs: [],
      },
    ],
  },
  {
    title: "Kvadratni LED panel 600x600",
    slug: "dfsg",
    image: "/panel-600x600-1.png",
    products: [
      {
        title: "Kvadratni LED panel 600×600",
        slug: "Kvadratni-LED-panel-600-600",
        image: "/panel-600x600-1.png",
        images: [],
        text: [
          "LED panel ne proizvodi treperenje koje zamara ljudsko oko, a ugrađeni difuzor štiti vid sprečavajući direktan sjaj LED dioda.",
          "Ovi paneli su predviđeni za osvetljenje zatvorenih prostora kao što su stanovi, kancelarije, restorani, tržni centri i prodavnice.",
          "Zamjenom običnih sijalica sa žarnom niti LED panelom, moguće je ostvariti uštedu električne energije i do 86%.",
          "Proizvod ispunjava sve bezbednosne i zdravstvene uslove za upotrebu u unutrašnjoj rasveti.",
          "Izrađeni u Bosni i Hercegovini u skladu sa EN standardima.",
          "Kućište panela je napravljeno od aluminijuma bele boje, dok je zaštitni poklopac izrađen od polikarbonata sa difuzijom svetla koja ravnomerno raspoređuje osvetljenje.",
          "Montaža: nadgradna / ugradna",
          "Ugrađeni kvalitetni delovi garantuju dug vek trajanja od najmanje 50.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Ambienta-600x600-1.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "LED panel 1200×300",
    slug: "dfsg",
    image: "/panel-1200x300-1.png",
    products: [
      {
        title: "LED panel 1200×300",
        slug: "LED-panel-1200-300",
        image: "/panel-1200x300-1.png",
        images: [],
        text: [
          "LED panel ne proizvodi treperenje koje zamara ljudsko oko, a ugrađeni difuzor štiti vid sprečavajući direktan sjaj LED dioda.",
          "Ovi paneli su predviđeni za osvetljenje zatvorenih prostora kao što su stanovi, kancelarije, restorani, tržni centri i prodavnice.",
          "Zamjenom običnih sijalica sa žarnom niti LED panelom, moguće je ostvariti uštedu električne energije i do 86%.",
          "Proizvod ispunjava sve bezbednosne i zdravstvene uslove za upotrebu u unutrašnjoj rasveti.",
          "Izrađeni u Bosni i Hercegovini u skladu sa EN standardima.",
          "Kućište panela je napravljeno od aluminijuma bele boje, dok je zaštitni poklopac izrađen od polikarbonata sa difuzijom svetla koja ravnomerno raspoređuje osvetljenje.",
          "Montaža: nadgradna",
          "Ugrađeni kvalitetni delovi garantuju dug vek trajanja od najmanje 50.000 radnih sati.",
        ],
        docs: [
          {
            title: "Tehnicki dokument",
            image: "/Luminos-Ambienta-1200x300-1.pdf",
          },
        ],
      },
    ],
  },
];
