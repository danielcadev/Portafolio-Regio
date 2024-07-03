// components/AboutUsContent.tsx
import AboutUs from "../components/About-Us/AboutUs"
import SpaceTeamSection from '../components/About-Us/SpaceSection';

const AboutUsContent: React.FC = () => {
  return (
    <div className="relative w-full">
    <div className="min-h-screen flex items-center justify-center">
      <AboutUs />
    </div>

      <SpaceTeamSection />
   
  </div>
  );
};

export default AboutUsContent;