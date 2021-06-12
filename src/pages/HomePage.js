import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/HomePage/Header";
import { PageContainer, Content } from "../components/PageContainer";
import WorkSection from "../components/HomePage/WorkSection";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <Header />
        <WorkSection />
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
