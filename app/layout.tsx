import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEEE WIE Club MJCET - Women in Engineering | Empowering Future Tech Leaders",
  description: "IEEE Women in Engineering (WIE) Club at Muffakham Jah College of Engineering & Technology. Empowering women in STEM through workshops, mentorship, technical training, and leadership development programs.",
  keywords: "IEEE WIE, Women in Engineering, MJCET, Muffakham Jah College, women in STEM, engineering students, technical workshops, mentorship, leadership development, IEEE student branch, Hyderabad engineering college",
  authors: [
    {
      name: "Adnan",
      url: "https://www.linkedin.com/in/syedadnanali99",
    },
  ],
  creator: "Adnan",
  publisher: "IEEE WIE Club MJCET",
  openGraph: {
    title: "IEEE WIE Club MJCET - Empowering Women in Engineering",
    description: "Join IEEE Women in Engineering Club at Muffakham Jah College of Engineering & Technology. Participate in technical workshops, mentorship programs, and leadership development initiatives.",
    url: "https://ieee-wie-mjcet.com",
    siteName: "IEEE WIE Club MJCET",
    images: [
      {
        url: "/assets/ieee-wie-mjcet-banner.png",
        width: 1200,
        height: 630,
        alt: "IEEE WIE Club MJCET - Women in Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE WIE Club MJCET - Women in Engineering",
    description: "Empowering women in STEM through workshops, mentorship, and technical training at Muffakham Jah College of Engineering & Technology.",
    images: ["/assets/ieee-wie-mjcet-banner.png"],
    creator: "@IEEEWIEMJCET",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://ieee-wie-mjcet.com",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script id="schema-script" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "IEEE WIE Club MJCET",
            alternateName: "IEEE Women in Engineering Club Muffakham Jah College",
            url: "https://ieee-wie-mjcet.com",
            logo: "/assets/ieee-wie-mjcet-logo.png",
            description: "IEEE Women in Engineering Club at Muffakham Jah College of Engineering & Technology, empowering women in STEM through workshops, mentorship, and technical training.",
            foundingDate: "2018",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Road No 3, Banjara Hills",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500034",
              addressCountry: "IN"
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "general",
              email: "ieeewie@mjcollege.ac.in"
            },
            parentOrganization: {
              "@type": "EducationalOrganization",
              name: "Muffakham Jah College of Engineering & Technology",
              url: "https://mjcollege.ac.in/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Road No 3, Banjara Hills",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500034",
                addressCountry: "IN"
              }
            },
            memberOf: {
              "@type": "Organization",
              name: "IEEE (Institute of Electrical and Electronics Engineers)",
              url: "https://www.ieee.org"
            },
            subOrganization: {
              "@type": "Organization",
              name: "IEEE Women in Engineering",
              url: "https://wie.ieee.org"
            },
            sameAs: [
              "https://www.linkedin.com/company/ieee-wie-mjcet",
              "https://www.instagram.com/ieee_wie_mjcet",
              "https://twitter.com/IEEEWIEMJCET"
            ],
            knowsAbout: [
              "Women in Engineering",
              "STEM Education",
              "Technical Workshops",
              "Mentorship Programs",
              "Leadership Development",
              "Engineering Students",
              "Professional Development",
              "IEEE Standards",
              "Technology Training"
            ],
            areaServed: {
              "@type": "Place",
              name: "Hyderabad, Telangana, India"
            },
            audience: {
              "@type": "Audience",
              audienceType: "Engineering Students, Women in STEM, Technical Professionals"
            }
          })}
        </Script>
      </body>
    </html>
  );
}