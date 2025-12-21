import "./globals.css";
import Script from "next/script";
import { ModalProvider } from "@/app/context/Modalcontext";
import ConsultationModal from "@/app/components/ui/ConsultationModal";
import ThankYouModal from "@/app/components/ui/ThankYouModal";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "UrbanHaven – Best Interior Designers in Delhi & Noida",
  description:
    "Transform your home into a beautiful, functional space with UrbanHaven’s premium interior design services.",
  icons: {
    icon: "/favicon.ico"
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
        <meta
          name="google-site-verification"
          content="TU_AJjcIMNqtXXxBNtH_hBoAhwzE8muEqf-ejZOvqLY"
        />
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
        <Toaster position="top-center" />
        <ModalProvider>
          <ConsultationModal />
          <ThankYouModal />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
