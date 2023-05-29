
import HeroSection from "@/components/ui/HeroSection";
import Products from "@/components/ui/Products";
import Promotion from "@/components/ui/Promotion";
import React from 'react';

function Home() {
  return <div>
    <HeroSection />
    <Promotion />
    {/*@ts-ignore*/}
    <Products />
  </div>;
}

export default Home;
