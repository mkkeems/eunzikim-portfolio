import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/HomePage/Header";
import { PageContainer, Content } from "../components/PageContainer";
import WorkSection from "../components/HomePage/WorkSection";

const HomePage = ({ history }) => {
  return (
    <PageContainer>
      <Navbar />
      <Content>
        <Header />
        <WorkSection history={history} />
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
