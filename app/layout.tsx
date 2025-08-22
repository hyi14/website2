import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Sandbox Institute",
  description: "Freedom within frameworks — research in GRC.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <header className="flex items-center justify-between gap-4">
            <a href="/" className="inline-flex items-center gap-2 font-bold text-xl">
              <span className="inline-block h-4 w-4 rounded-full bg-brand-accent" />
              Sandbox Institute
            </a>
            <nav className="text-sm space-x-4">
              <a href="#current" className="hover:underline">Current</a>
              <a href="#former" className="hover:underline">Former</a>
              <a href="#other" className="hover:underline">Other</a>
              <a href="#blog" className="hover:underline">Blog</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
          </header>
          <main className="mt-10">{children}</main>
          <footer className="mt-16 text-xs text-gray-500">© {new Date().getFullYear()} Sandbox Institute</footer>
        </div>
      </body>
    </html>
  );
}
