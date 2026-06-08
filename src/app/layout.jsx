import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FavoritesProvider } from "@/app/context/FavoritesContext";
export const metadata = {
  title: "MyLibrary",
  description: "Biblioteca personal desarrollada con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-grow container mx-auto p-6">
            {children}
          </main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}