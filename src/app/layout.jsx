// Styles
import "../styles/index.css";

// Libraries
import { Geist } from "next/font/google";

// Components
import LayoutProgressBar from "@/components/LayoutProgressBar";
import Header from "@/components/Header";

// Fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
});

// Metadata
export const metadata = {
  title: "Softlance | IT Jamoa",
  description: "Softlance - IT jamoasi",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="uz">
      <body className={`${geistSans.variable} antialiased`}>
        {/* Layout progress animation */}
        <LayoutProgressBar />

        {/* Header */}
        <Header />

        {/* Main content */}
        {children}

        {/* Footer */}
      </body>
    </html>
  );
};

export default RootLayout;
