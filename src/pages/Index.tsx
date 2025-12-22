
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImageCarousel from '@/components/ImageCarousel';
import BrandCarousel from '@/components/BrandCarousel';
import AboutUs from '@/components/AboutUs';
import ProductCategories from '@/components/ProductCategories';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageCarousel />
      <BrandCarousel />
      <AboutUs />
      <ProductCategories />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
