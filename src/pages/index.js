import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import color from "./color";

import Navbar from "@/components/Navbar";
import footer from "@/components/footer";

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

      <footer className="footercss">
        <div className="w3">
          <a href="#">
            <i className="fa fa-facebook-official "></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram "></i>
          </a>
          <a href="https://twitter.com/home">
            <i className="fa fa-twitter "></i>
          </a>

          <div>
            <h6> &copy;Minakos</h6>
          </div>
          <p> Copyright © 2023 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
