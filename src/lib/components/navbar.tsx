"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  // SSR safety
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navItems = [
    { label: "Home", href: "/" },
    // { label: "upload", href: "/upload" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Service", href: "/service" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 h-[12vh] min-h-[55px] max-h-[60px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] flex items-center justify-between px-4 md:px-[60px]">
      {/* Logo */}
      <Link
        href="/"
        // className="uppercase font-semibold block text-[25px] text-[#252525] tracking-tight hover:opacity-80 transition-all duration-300 max-w-[210px] md:max-w-[300px] overflow-hidden whitespace-nowrap"
        className="uppercase font-semibold block text-[25px] text-[#252525] tracking-tight hover:opacity-80 transition-all duration-300 overflow-hidden whitespace-nowrap"
      >
        Andri Reimondo
      </Link>

      {/* Burger button */}
      <button
        className="md:hidden text-[#252525]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Nav Items */}
      {/* <ul
        className={`absolute md:static top-[60px] right-0 w-48 md:w-auto bg-white shadow md:shadow-none flex-col md:flex-row md:flex transition-all duration-300 ease-in-out ${
          menuOpen ? "flex" : "hidden"
        }`}
      > */}
      <ul
        className={`
          absolute md:static top-[60px] right-0 w-48 md:w-auto bg-white shadow md:shadow-none
          flex-col md:flex-row md:flex
          transition-all duration-300 ease-in-out
          ${menuOpen ? "flex" : "hidden"}
        `}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hovered === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
                className={`
                  flex items-center justify-center
                  h-[32px] px-5 text-[16px] font-medium
                  transition-all duration-500 ease-in-out delay-75
                  hover:shadow-md
                  ${
                    isHovered
                      ? "bg-[#252525] text-white"
                      : isActive && !hovered
                      ? "bg-[#252525] text-white"
                      : "bg-[#FFFFFF] text-[#252525]"
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   // SSR safety
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Portfolio", href: "/portfolio" },
//     { label: "Service", href: "/service" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     // <nav className="sticky top-0 z-50 h-[12vh] min-h-[55px] max-h-[60px] px-[60px] bg-white flex items-center justify-between shadow-[0_1px_2px_0_rgba(0,0,0,0.2)]">
//     <nav
//       className="sticky top-0 z-50 h-[12vh] min-h-[55px] max-h-[60px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] flex items-center justify-between px-4 md:px-[60px]">
//       {/* Logo */}
//       <Link
//         href="/"
//         className="uppercase font-semibold block text-[25px] text-[#252525] tracking-tight hover:opacity-80 transition-all duration-300 max-w-[210px] md:max-w-[300px]
//           overflow-hidden whitespace-nowrap"  
//       >
//         Andri Reimondo Tamba
//       </Link>

//       {/* Burger button (mobile) */}
//       <button
//         className="md:hidden text-[#252525]"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle menu"
//       >
//         {menuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {/* Nav Items */}
//       {/* <ul
//         className={`absolute md:static top-[60px] right-0 w-48 md:w-auto bg-white shadow md:shadow-none flex-col md:flex-row md:flex transition-all duration-300 ease-in-out ${
//           menuOpen ? "flex" : "hidden"
//         }`}
//       > */}
      
//       <ul
//       className={`
//       absolute md:static top-[60px] right-0 w-48 md:w-auto bg-white shadow md:shadow-none
//       flex-col md:flex-row md:flex
//       transition-all duration-300 ease-in-out
//       ${menuOpen ? "flex" : "hidden"}
//       `}
//       >
//         {navItems.map((item) => (
//           <li key={item.href}>
//             {/* <Link
//               href={item.href}
//               onClick={() => setMenuOpen(false)}
//               className={`block md:flex items-center justify-center h-[32px] px-5 text-[15px] font-medium bg-[#F8F9FA] transition-all duration-300 ease-in-out ${
//                 pathname === item.href
//                   ? "bg-[#252525] text-white"
//                   : "text-[#252525] hover:bg-[#252525] hover:text-white"
//               }`}
//             >
//               {item.label}
//             </Link> */}
//             <Link
//             href={item.href}
//             onClick={() => setMenuOpen(false)}
//             className={`
//               flex
//               items-center justify-center
//               h-[32px] px-5 text-[16px] font-medium
//               transition-all duration-300 ease-in-out
//               ${
//                 pathname === item.href
//                   ? "bg-[#252525] text-white"
//                   : "bg-[#FFFFFF] text-[#252525] hover:bg-[#252525] hover:text-white active:bg-[#252525] active:text-white"
//               }
//             `}
//             // className={`
//             //     flex  
//             //     block md:flex items-center justify-center
//             //     h-[32px] px-5 text-[16px] font-medium
//             //     transition-all duration-300 ease-in-out
//             //     ${
//             //         pathname === item.href
//             //         ? "bg-[#252525] text-white"
//             //         : "bg-[#FFFFFF] text-[#252525] hover:bg-[#252525] hover:text-white"
//             //     }
//             //     `}
//                 >
//                     {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }