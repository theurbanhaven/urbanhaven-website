import "./globals.css";
import Script from "next/script";
import { ModalProvider } from "@/app/context/Modalcontext";
import ConsultationModal from "@/app/components/ui/ConsultationModal";
import ThankYouModal from "@/app/components/ui/ThankYouModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theurbanhaven.in"),

  title: "UrbanHaven – Best Interior Designers in Delhi & Noida",

  description:
    "Transform your home into a beautiful, functional space with UrbanHaven’s premium interior design services.",

  alternates: {
    canonical: "/"
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico"
      }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png" // Only if you have this file
  },

  verification: {
    google: "TU_AJjcIMNqtXXxBNtH_hBoAhwzE8muEqf-ejZOvqLY"
  },

  openGraph: {
    title: "UrbanHaven – Best Interior Designers in Delhi & Noida",

    description:
      "Transform your home into a beautiful, functional space with UrbanHaven’s premium interior design services.",

    url: "/",

    siteName: "UrbanHaven",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UrbanHaven Interior Design"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title: "UrbanHaven – Best Interior Designers in Delhi & Noida",

    description:
      "Transform your home into a beautiful, functional space with UrbanHaven’s premium interior design services.",

    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2206197019884720');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="bg-white text-gray-900">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2206197019884720&ev=PageView&noscript=1"
          />
        </noscript>
        <ToastContainer position="top-right" autoClose={2000} />
        <ModalProvider>
          <ConsultationModal />
          <ThankYouModal />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
