"use client";
import Navbar from '../../../src/components/Layout/Navbar/Navbar';
import Parallax from '../../../src/components/About-Us/Parallax';
import { AboutUsMain } from '@/src/components/About-Us';

export default function About() {
  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <Parallax>
        <AboutUsMain />
      </Parallax>
    </div>
  );
}