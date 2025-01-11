import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { Metadata } from "next";

import { seo } from "@/portfolio";
import Head from "next/head";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [
    "Portfolio",
    "Freelancer",
    "Full stack",
    "Developer",
    "Frontend",
    "Backend",
    "Web Developer",
    "Full Stack Developer",
    "Freelance Developer",
    "Web Development Portfolio",
    "Cybersecurity Master’s Student",
    "Cybersecurity",
    "Computer Science Graduate",
    "Tech Projects",
    "Innovative Projects",
    "Coding Enthusiast",
    "Software Developer",
    "Freelancer Portfolio",
    "Sergio Vittorio Zambelli",
  ],
  applicationName: seo.applicationName,
  authors: [{ name: seo.author, url: seo.author_site }],
  robots: "index, follow",
  metadataBase: new URL(seo.url),
};

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

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sergio Vittorio Zambelli",
  jobTitle: "Full Stack Developer",
  url: seo.url,
  sameAs: ["https://github.com/sergiovzambelli"],
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  description: seo.description,
  author: {
    "@type": "Person",
    name: seo.author,
  },
  image: "https://www.sergiovzambelli.it/me.webp",
};

export default function Home() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>
      <main
        id="top"
        className="font-poppins leading-6 text-fg bg-bg shadow-lg p-8"
      >
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </main>
    </>
  );
}
