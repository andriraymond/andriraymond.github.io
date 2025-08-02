import type { Metadata } from "next";
import "./globals.css";

// add another import
import Navbar from "../lib/components/navbar";
import { Poppins } from "next/font/google";
import Content from "../lib/components/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portofolio | Andri Reimondo Tamba",
  description: "Portofolio website",
  icons: {
    icon: "/ray-img.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${poppins.variable} antialiased`} */}
      <body className={`${poppins.variable} antialiased overflow-hidden`}>
        <Navbar />
        {/* // delete gap-x-8 */}
        {/* <main className="flex w-full flex-col lg:flex-row justify-center items-center max-w-screen mx-auto min-h-screen px-4 lg:px-16 "> */}
        <main className="flex w-full lg:flex-row flex-col max-w-screen h-screen px-4 lg:px-16">

          {/* content 40% */}
          {/* <div className="flex w-full lg:w-2/5 mx-auto justify-center items-center"> */}
          <div className="flex w-full lg:w-2/5 justify-center items-center h-[40vh] lg:h-full phone-view">
            {/* <div className="hidden lg:flex w-full lg:w-2/5 justify-center items-center h-[40vh] lg:h-full"> */}
            <Content />
          </div>

          {/* children 60% */}
          {/* <div className="flex w-full min-h-screen lg:w-3/5 mx-auto justify-center items-center p-6"> */}
          {/* <div className="flex w-full lg:w-3/5 justify-center items-start h-[60vh] lg:h-full overflow-y-auto p-6">
            {children}
          </div> */}
          <div className="w-full lg:w-3/5 h-full overflow-y-auto">
            {/* <div className="flex flex-col lg:flex-row overflow-y-auto"> */}
            <div className="flex justify-center items-center min-h-full p-6">
              {children}
            </div>
          </div>

        </main>
      </body>
    </html>
  );
}
