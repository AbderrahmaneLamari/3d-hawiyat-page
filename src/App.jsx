import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate on scroll back up
    });

  });

  return (
    <main>
      {/* Gradient image*/}
      <img className="absolute top-0 right-0 opacity-60 -z-1" src="/img/gradient.png" alt="Gradient Background" />

      {/* Blur Effect*/}
      <div className="h-0 w-[40rem] absolute top-[20%]
                      right-[-5%] shadow-[0_0_900px_20px_#ddd]
                      -rotate-[30deg] -z-10">

      </div>
      <Header />
      <Hero />
    </main>
  )
}