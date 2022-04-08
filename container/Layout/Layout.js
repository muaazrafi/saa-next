import React from "react";
import { withRouter } from "next/router";
import { Layout as LayoutWrapper } from "antd";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LayoutProvider from "context/LayoutProvider";

const { Content } = LayoutWrapper;

const Layout = ({ children, router }) => {
  return (
    <LayoutWrapper>
      <LayoutProvider>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </LayoutProvider>
    </LayoutWrapper>
  );
};

export default withRouter(Layout);
