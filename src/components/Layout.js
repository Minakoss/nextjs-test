import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ title, children, layoutStyles }) {
  return (
    <>
      <Navbar />
      <div style={layoutStyles}>
        {title && <h1>{`This title is coming from props: ${title}`}</h1>}
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
