import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import color from "./color";
import Footer from "../components/Footer";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="imagebghome">
        <h1 className="animate__animated animate__bounce animate__slideInUp">
          Welcome to analogue world
        </h1>
        <p className="animate__animated animate__bounce animate__slideInDown animate__delay-1s ">
          Analogue Grain Moments
        </p>
      </div>

      <Footer />
    </>
  );
}
