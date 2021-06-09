import React from "react";
import styled from "styled-components/macro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/HomePage/Header";
import { PageContainer } from "../components/PageContainer";

const Content = styled.div`
  flex: 1 0 auto;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <Header />
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
