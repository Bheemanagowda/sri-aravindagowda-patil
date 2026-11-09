import HeroSlider from "../components/HeroSlider";
import About from "../components/About";
import DirectSevaImpact from "../components/DirectSevaImpact";
import Manifesto from "../components/Manifesto";
import YouthDevelopment from "../components/YouthDevelopment";
import LeadershipShowcase from "../components/LeadershipShowcase";
import Gallery from "../components/Gallery";
import VoterEndorsements from "../components/VoterEndorsements";
import Contact from "../components/Contact";
import RealHelpBanner from "../components/RealHelpBanner";

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. About Preview */}
      <About />

      {/* 3. Direct Seva Impact ("Real Help for Real People in Their Hour of Need") */}
      <DirectSevaImpact />

      {/* 4. 10-Point Manifesto Preview */}
      <Manifesto />

      {/* 5. Youth Development */}
      <YouthDevelopment />

      {/* 6. Leadership Showcase */}
      <LeadershipShowcase />

      {/* 7. Gallery Showcase */}
      <Gallery />

      {/* 8. Citizen & Voter Endorsements */}
      <VoterEndorsements />

      {/* 9. Global Mission Banner */}
      <RealHelpBanner />

      {/* 10. Grievance & Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage;
