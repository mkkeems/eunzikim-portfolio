import React from "react";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/HomePage/Header";
import { PageContainer } from "../components/PageContainer";
import WorkSection from "../components/HomePage/WorkSection";

const Content = styled.div`
  flex: 1 0 auto;
`;

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
