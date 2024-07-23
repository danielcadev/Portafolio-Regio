"use client";
import Navbar from '../../components/Layout/Navbar/Navbar';
import Parallax from '../About-Us/Parallax';
import AboutUsContent from './AboutUsContent';

export default function About() {
  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <Parallax>
        <AboutUsContent />
      </Parallax>
    </div>
  );
}