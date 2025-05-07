import ChiSiamoHero from "@/components/ChiSiamoHero";
import StorySection from "@/components/StorySection";
import MissionSection from "@/components/MissionSection";
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "Chi siamo",
};

export default function ChiSiamo() {
  return (
    <>
      <ChiSiamoHero />
      <StorySection />
      <MissionSection />
      <TeamSection />
    </>
  );
}
