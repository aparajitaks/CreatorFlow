import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import HistoryPanel from "@/components/layout/HistoryPanel";

export const metadata: Metadata = {
  title: "CreatorFlow",
  description: "Premium dashboard for creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="flex h-screen overflow-hidden bg-background text-foreground">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 min-w-0">
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
              {children}
            </main>
            
            {/* Right History Panel */}
            <HistoryPanel />
          </div>
        </div>
      </body>
    </html>
  );
}
