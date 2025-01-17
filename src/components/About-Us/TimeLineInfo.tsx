import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/timeline";
import TitleHero from "./TitleHero";

export default function TimeLineInfo() {
  return (
    <div className="w-full bg-[#E5E5E5]">
      <TitleHero />
      <Timeline data={timelineData} />
    </div>
  );
}