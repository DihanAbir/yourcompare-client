import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Showcase from "./ShowCase";
import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        {children}
        <Showcase />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
