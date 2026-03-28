import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";

const BASE_URL = "https://hp-yakiniku-taiho.vercel.app";

export const metadata: Metadata = {
  title: "焼肉 大鵬 | 北海道釧路市の焼肉店",
  description:
    "北海道釧路市寿の焼肉 大鵬。個室完備の落ち着いた空間で味わう本格焼肉。掘りごたつ個室あり、全席禁煙、駐車場10台完備。火〜日営業。",
  keywords: ["焼肉", "大鵬", "釧路", "北海道", "個室", "掘りごたつ"],
  openGraph: {
    title: "焼肉 大鵬 | 北海道釧路市の焼肉店",
    description:
      "個室完備の落ち着いた空間で味わう本格焼肉。掘りごたつ個室あり、全席禁煙、駐車場10台完備。",
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    images: [
      {
        url: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "焼肉 大鵬",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "焼肉 大鵬 | 北海道釧路市の焼肉店",
    description:
      "個室完備の落ち着いた空間で味わう本格焼肉。掘りごたつ個室あり、全席禁煙、駐車場10台完備。",
    images: [
      "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1200&h=630&fit=crop&q=80",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "焼肉 大鵬",
  image:
    "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=1200&h=630&fit=crop&q=80",
  url: BASE_URL,
  telephone: "0154-24-9156",
  address: {
    "@type": "PostalAddress",
    streetAddress: "寿3-4-8",
    addressLocality: "釧路市",
    addressRegion: "北海道",
    postalCode: "",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.975,
    longitude: 144.374,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "22:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "16:00",
      closes: "22:30",
    },
  ],
  servesCuisine: "焼肉",
  priceRange: "$$",
  smokingAllowed: false,
  acceptsReservations: true,
  hasMenu: `${BASE_URL}/menu`,
  parkingFacility: {
    "@type": "ParkingFacility",
    totalCapacity: { "@type": "QuantitativeValue", value: 10 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
