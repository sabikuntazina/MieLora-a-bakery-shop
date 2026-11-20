import { Croissant, Camera, MessageCircle, Send, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Menu", href: "#menu" },
    { name: "Signature Bakes", href: "#specials" },
    { name: "Our Story", href: "#about" },
    { name: "Visit Us", href: "#contact" },
  ];

  const categories = [
    { name: "Pastries & Croissants", href: "#menu" },
    { name: "Artisan Cakes", href: "#menu" },
    { name: "Cupcakes & Cookies", href: "#menu" },
    { name: "Sourdough Breads", href: "#menu" },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-black text-neutral-300 border-t border-yellow-500/20 pt-16 pb-8 overflow-hidden"
    >
      {/* Subtle Yellow Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-48 rounded-full bg-amber-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand Info, Quick Links, Categories & Visit Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-yellow-500/15">
          
          {/* 1. Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform duration-300">
                <Croissant className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  MIELORA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-yellow-500/80 uppercase -mt-1">
                  Artisan Bakery
                </span>
              </div>
            </a>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Crafting golden pastries, decadent cakes, and rustic sourdough loaves
              with pure ingredients and warm hospitality every single day.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-yellow-500/30 flex items-center justify-center text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-amber-500 hover:text-black transition-all duration-300"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-yellow-500/30 flex items-center justify-center text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-amber-500 hover:text-black transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-neutral-900 border border-yellow-500/30 flex items-center justify-center text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-amber-500 hover:text-black transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Bakery Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Fresh Specialties
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <a
                    href={cat.href}
                    className="text-neutral-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Bakery Hours & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Bakery &amp; Hours
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>42 Golden Lane, Gulshan Avenue, Dhaka</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>Daily: 7:00 AM – 10:30 PM</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>+880 1700-000000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-semibold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Mielora Artisan Bakery
            </span>
            . All rights reserved.
          </p>
          <p className="text-neutral-500">
            Crafted with warm butter &amp; golden care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;