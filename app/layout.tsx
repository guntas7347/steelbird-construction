import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.steelbirdconstruction.com"),

  title: {
    default: "Steel Bird Construction",
    template: "%s | Steel Bird Construction",
  },

  description:
    "Industrial-strength concrete and foundation services for residential and commercial projects including driveways, slabs, garage flooring, steps, and structural foundations.",

  keywords: [
    "Steel Bird Construction",
    "Concrete Contractor",
    "Concrete Driveways",
    "Garage Flooring",
    "Basement Slabs",
    "Concrete Foundations",
    "Concrete Steps",
    "Stamped Concrete",
    "Exposed Aggregate",
    "Commercial Concrete",
    "Residential Concrete",
    "Concrete Services",
    "Foundation Contractor",
    "Concrete Saskatchewan",
  ],

  authors: [{ name: "Steel Bird Construction" }],
  creator: "Steel Bird Construction",
  publisher: "Steel Bird Construction",

  applicationName: "Steel Bird Construction",

  category: "Construction",

  alternates: {
    canonical: "https://www.steelbirdconstruction.com",
  },

  icons: {
    icon: [
      {
        url: "/logo-full-circle.png",
        type: "image/png",
      },
    ],
    shortcut: "/logo-full-circle.png",
    apple: "/logo-full-circle.png",
  },

  openGraph: {
    title: "Steel Bird Construction",
    description:
      "Professional concrete and foundation services for residential and commercial projects.",
    url: "https://www.steelbirdconstruction.com",
    siteName: "Steel Bird Construction",
    locale: "en_CA",
    type: "website",

    images: [
      {
        url: "/logo-full.jpeg",
        width: 1200,
        height: 630,
        alt: "Steel Bird Construction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Steel Bird Construction",
    description: "Industrial-strength concrete and foundation services.",
    images: ["/logo-full.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  other: {
    "contact:phone_number": "+1-306-213-7602",
    "contact:email": "info@steelbirdconstruction.com",
    "business:contact_data:street_address": "",
    "business:contact_data:locality": "",
    "business:contact_data:country_name": "Canada",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
