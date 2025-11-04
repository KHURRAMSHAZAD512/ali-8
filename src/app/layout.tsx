import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FinVerse - International Finance Platform",
  description: "Currency converter and global financial analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
