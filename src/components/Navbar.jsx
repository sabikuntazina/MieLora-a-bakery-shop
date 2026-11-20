import { useState } from "react";
import { Search, Menu, X, Croissant } from "lucide-react";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Menu", href: "#menu" },
    { name: "Specials", href: "#specials" },
    { name: "Our Story", href: "#about" },
    { name: "Visit Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-yellow-500/20">
      {/* Flex justify-between ব্যবহার করায় কোনো আইটেম ওভারল্যাপ করবে না */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* 1. Brand Logo & Name (shrink-0 দেওয়া হয়েছে যাতে চ্যাপ্টা না হয়) */}
        <a
          href="#home"
          className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform duration-300">
            <Croissant className="w-6 h-6 stroke-[2.2]" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              MIELORA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-yellow-500/80 uppercase -mt-1">
              Artisan Bakery
            </span>
          </div>
        </a>

        {/* 2. Desktop Navigation Links (xl স্ক্রিনে ফুল গ্যাপ, lg স্ক্রিনে কম্প্যাক্ট গ্যাপ) */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="shrink-0">
              <a
                href={link.href}
                className="relative text-sm font-medium text-neutral-300 hover:text-yellow-400 transition-colors duration-300 py-2 whitespace-nowrap group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-300 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* 3. Right Side: Search Bar, CTA & Mobile Menu Button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Input */}
          <div className="hidden sm:flex items-center relative">
            <input
              type="text"
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              placeholder="Search bakes..."
              className="input input-sm w-44 xl:w-60 pl-9 pr-4 rounded-full bg-neutral-900 border border-yellow-500/30 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300"
            />
            <Search className="w-4 h-4 text-yellow-400 absolute left-3 pointer-events-none" />
          </div>

          {/* CTA Button (শুধু xl বা তার বড় স্ক্রিনে দেখাবে যাতে জায়গা না কমে) */}
          <a
            href="#menu"
            className="hidden xl:inline-flex btn btn-sm rounded-full border-none bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-black font-bold hover:brightness-110 shadow-md shadow-yellow-500/20 px-5 whitespace-nowrap transition-all duration-300"
          >
            Explore Bakes
          </a>

          {/* Mobile/Tablet Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="btn btn-ghost btn-circle lg:hidden text-yellow-400 hover:bg-yellow-500/10"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-yellow-500/20 px-4 pt-3 pb-6 space-y-4">
          {/* Mobile Search (শুধু ছোট মোবাইলে দেখাবে যেখানে ওপরের সার্চবার লুকানো থাকে) */}
          <div className="relative sm:hidden">
            <input
              type="text"
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              placeholder="Search cakes, pastries..."
              className="input input-sm w-full pl-9 pr-4 rounded-full bg-neutral-900 border border-yellow-500/30 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-yellow-400"
            />
            <Search className="w-4 h-4 text-yellow-400 absolute left-3 top-2 pointer-events-none" />
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-neutral-200 hover:text-black hover:bg-gradient-to-r hover:from-yellow-300 hover:to-amber-500 font-medium transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="pt-2">
            <a
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-sm w-full rounded-full border-none bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-black font-bold"
            >
              Explore Bakes
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;