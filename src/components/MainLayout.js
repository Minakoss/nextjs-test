import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

function MainLayout({ children, pageTitle }) {
  const navbar2styles = {
    height: "200px",
    backgroundColor: "#cacaca",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Navbar navbarTitle={pageTitle} />
      <div style={navbar2styles}>{pageTitle}</div>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
