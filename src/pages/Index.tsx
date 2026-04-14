import { useState } from "react";
import CoverSection from "@/components/wedding/CoverSection";
import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import CountdownSection from "@/components/wedding/CountdownSection";
import EventSection from "@/components/wedding/EventSection";
import GallerySection from "@/components/wedding/GallerySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import GiftSection from "@/components/wedding/GiftSection";
import ClosingSection from "@/components/wedding/ClosingSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return <CoverSection onOpen={() => setIsOpen(true)} />;
  }

  return (
    <div className="min-h-screen">
      <MusicPlayer autoPlay={isOpen} />
      <HeroSection />
      <CoupleSection />
      <LoveStorySection />
      <CountdownSection />
      <EventSection />
      <GallerySection />
      <RSVPSection />
      <GiftSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
