import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import Hero from "@/components/Hero";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Sertifikat from "@/components/Sertifikat";
import Statistika from "@/components/Statistika";
import { cards1Data, cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About2 />
      <Cards1 title={"Od nas možete očekivati"} data={cards1Data} />
      <Sertifikat />
      <Statistika />
      <BackgroundImage />
    </div>
  );
}
