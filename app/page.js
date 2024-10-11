import AboutUs from "@/components/AboutUs";
import BannerSection from "@/components/BannerSection";
import ContributeSection from "@/components/ContributeSection";
import Footer from "@/components/Footer";
import Navber from "@/components/Navber";
import RoadMap from "@/components/RoadMap";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="">
      <Navber />
      <div id="home">
        <BannerSection />
      </div>
      <div id="about-us">
        <AboutUs />
        <RoadMap />
      </div>
      <div id="vision">
        <Vision />
      </div>
      <div id="joinUs">
        <ContributeSection />
      </div>
      <Footer />
    </div>
  );
}
