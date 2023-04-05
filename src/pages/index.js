import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout pageTitle="Homepage">
      <div className="imagebghome">
        <h1 className="animate__animated animate__bounce animate__slideInUp">
          Welcome to analogue world
        </h1>
        <p className="animate__animated animate__bounce animate__slideInDown animate__delay-1s ">
          Analogue Grain Moments
        </p>
      </div>
    </MainLayout>
  );
}
