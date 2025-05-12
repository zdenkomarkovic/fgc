import { CardContent, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import { Cards1Data } from "@/constants/index";
import Image from "@/node_modules/next/image";

const Cards1 = ({ title, data }: { title: string; data: Cards1Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 md:py-20 border-t border-primary space-y-10 md:space-y-20">
        <h2 className="text-4xl md:text-5xl text-center text-primary font-bold">
          {title}
        </h2>
        <div className="grid md:grid-cols-4 text-center gap-6 md:gap-8 items-stretch">
          {data.map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />
              </MotionComponent1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards1;

const OneCard = ({ item }: { item: Cards1Data }) => {
  return (
    <Card className="h-full">
      <CardContent className="">
        <Image
          src={item.icon}
          width={100}
          height={100}
          alt="led rasveta"
          className="mx-auto"
        />
        <p>{item.text}</p>
      </CardContent>
    </Card>
  );
};
