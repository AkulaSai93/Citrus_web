import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/features/FeatureSection";
import WorkspaceTour from "@/components/workspace/WorkspaceTour";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <WorkspaceTour />
    </main>
  );
}
