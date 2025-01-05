import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Metadata } from "next";

import { seo } from "@/portfolio";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: ["Portfolio", "Freelancer", "Full stack", "Developer", "Frontend", "Backend"],
  applicationName: seo.applicationName,
  authors: [{ name: seo.author, url: seo.author_site }],
  robots: "index, follow",
  metadataBase: new URL(seo.url),
  // openGraph: {
  //   title: seo.title,
  //   description: seo.description,
  //   url: seo.url,
  //   siteName: seo.applicationName,
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "it_IT",
  //   type: "website",
  // },
};

export default function Home() {
  return (
    <div id='top' className="font-poppins leading-6 text-fg bg-bg shadow-lg p-8">
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
