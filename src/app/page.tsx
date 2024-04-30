
"use client"
import { Homepage } from "@/components/home/home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <main className="">
     <Homepage/>
    </main>
  );
}
