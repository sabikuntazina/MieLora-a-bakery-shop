import { Sparkles, ArrowRight, Flame, Award, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white pt-10 pb-16 sm:pt-14 sm:pb-24 lg:py-24"
    >
      {/* Background Yellow/Amber Glow Effects */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Copy & CTA Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-yellow-500/30 text-yellow-300 text-xs sm:text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>Freshly Baked Every Morning at Mielora</span>
            </div>

            {/* Main Gradient Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Golden Crusts &amp;{" "}
              <span className="block sm:inline bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Velvet Sweetness
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Handcrafted French viennoiserie, rich dark-cocoa pastries, and
              artisan sourdough loaves baked in small batches for unforgettable
              moments.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="btn btn-md sm:btn-lg w-full sm:w-auto rounded-full border-none bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-black font-bold hover:brightness-110 shadow-lg shadow-yellow-500/25 px-7 transition-all duration-300 group"
              >
                <span>Explore Today&apos;s Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#specials"
                className="btn btn-md sm:btn-lg btn-outline w-full sm:w-auto rounded-full border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/10 hover:border-yellow-400 px-7 transition-all duration-300"
              >
                Signature Bakes
              </a>
            </div>

            {/* Static Highlight Stats (No backend/cart logic) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-yellow-500/15 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-lg sm:text-xl">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>24+</span>
                </div>
                <span className="text-xs text-neutral-400">Daily Bakes</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-lg sm:text-xl">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>100%</span>
                </div>
                <span className="text-xs text-neutral-400">Pure Butter</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-lg sm:text-xl">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>07:00</span>
                </div>
                <span className="text-xs text-neutral-400">Oven Fresh AM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gradient Border Frame */}
              <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-yellow-300/70 via-amber-500/30 to-yellow-700/60 shadow-2xl shadow-yellow-500/10">
                <div className="relative rounded-3xl bg-neutral-950 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                    alt="Freshly baked artisan pastries and bread at Mielora"
                    className="w-full h-[360px] sm:h-[430px] object-cover hover:scale-105 transition-transform duration-500"
                  />

                  {/* Bottom Dark Gradient Overlay inside Card */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                    <span className="inline-block text-[11px] uppercase tracking-widest text-yellow-400 font-semibold mb-1">
                      House Favorite
                    </span>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-white">
                          Honeycomb Brioche &amp; Croissants
                        </h2>
                        <p className="text-xs sm:text-sm text-neutral-300">
                          Flaky golden layers glazed with wildflower honey
                        </p>
                      </div>
                      <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-300 to-amber-500 text-black">
                        $6.50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;