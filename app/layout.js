import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ugyan Tech Solutions | Ai, Web Development & Data Science",
  description:
    "Ugyan Tech Solutions specializes in Web Development, GenAI, ML, Data Science, and Custom Tool Development to help businesses innovate and scale.",
  keywords: [
    "ugyan",
    "ugyan tech solutions",
    "IT services",
    "IT consulting",
    "Web Development",
    "AI solutions",
    "Machine Learning",
    "Data science",
    "Software Development",
    "Generative AI",
    "cloud solutions",
    "custom software",
    "tech company",
  ],
  authors: [
    {
      name: "Ugyan Tech Solutions",
    },
  ],
  creator: "Ugyan Tech Solutions",

  openGraph: {
    title: "Ugyan Tech Solutions | AI, Web Development & Data Science",

    description:
      "Ugyan Tech Solutions specializes in Web Development, GenAI, ML, Data Science, and Custom Tool Development to help businesses innovate and scale.",

    siteName: "Ugyan Tech Solutions",

    images: [
      {
        url: "/ugyanTech.png",
        width: 1200,
        height: 630,
        alt: "Ugyan Tech Solutions",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ugyan Tech Solutions | AI, Web Development & Data Science",

    description:
      "Ugyan Tech Solutions specializes in Web Development, GenAI, ML, Data Science, and Custom Tool Development to help businesses innovate and scale.",

    images: ["/ugyanTech.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
