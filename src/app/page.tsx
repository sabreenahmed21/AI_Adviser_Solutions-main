import Intro from "@/components/Intro";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <Intro />
      <div className="max-w-container px-container-padding mx-auto">
        <LandingPage />
      </div>
    </>
  );
}
