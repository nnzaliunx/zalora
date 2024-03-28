import React from "react";
import MainWrapper from "../components/shared/MainWrapper";
import Header from "../components/index/Header";
import Hero from "../components/index/Hero";
import Card from "../components/index/Card";
import Footer from "../components/index/Footer";

const Index = () => {
  return (
    <MainWrapper>
      <Header />
      <Hero />
      <Card />
      <Footer />
    </MainWrapper>
  );
};

export default Index;
