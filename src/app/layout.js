import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Load Data Web",
  description: "Reloading data management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-grey-500 min-h-screen">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
