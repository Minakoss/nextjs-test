import React from "react";
import Footer from "@/components/common/Footer";
import Super8Content from "@/components/super8"
import Header from "@/components/common/Header";

function super8() {
  return (
    <>
      <Header pageTitle="Super8 Page" />
      <Super8Content />
      <Footer />
    </>
  );
}

export default super8;
