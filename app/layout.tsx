import "./globals.css";
import { ModalProvider } from "@/app/context/Modalcontext";
import ConsultationModal from "@/app/components/ui/ConsultationModal";
import ThankYouModal from "@/app/components/ui/ThankYouModal";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Urbanhaven-Best Interior Designers in Delhi & Noida",
  description: "Transform your home into a beautiful, functional space."
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white text-gray-900">
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
