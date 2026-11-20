import React from "react";
import { Wheat, Sparkles, HeartHandshake, ChefHat } from "lucide-react";

const OurStory = () => {
  const pillars = [
    {
      icon: Wheat,
      title: "Stone-Milled Flour",
      desc: "Unbleached organic grains sourced for deep aroma and airy crumb.",
    },
    {
      icon: ChefHat,
      title: "Slow 48-Hr Ferment",
      desc: "Patient cold fermentation for flaky layers and rich natural flavor.",
    },
    {
      icon: HeartHandshake,
      title: "Small-Batch Craft",
      desc: "Hand-shaped every dawn—never mass-produced or frozen.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-black text-white border-t border-yellow-500/15 overflow-hidden"
    >
      {/* Subtle Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 -left-32 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 right-0 w-72 h-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Layered Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Gradient Border */}
              <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-yellow-300/70 via-amber-500/30 to-yellow-700/60 shadow-2xl shadow-yellow-500/10">
                <div className="rounded-3xl overflow-hidden bg-neutral-950">
                  <img
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80"
                    alt="Mielora master baker dusting fresh artisan bread with flour"
                    className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Experience Card */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 rounded-2xl p-[1px] bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 shadow-xl shadow-black/80">
                <div className="bg-neutral-950/95 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-300 to-amber-500 text-black flex items-center justify-center font-extrabold text-lg shrink-0">
                    10+
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Years of Baking Art
                    </p>
                    <p className="text-xs text-yellow-400/90">
                      Crafted fresh every single dawn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Content & Craft Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-yellow-500/30 text-yellow-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>Our Story</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Born From a Love for{" "}
              <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                Warm, Honest Bakes
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              <p>
                <span className="text-yellow-300 font-semibold">Mielora</span>{" "}
                began in a quiet kitchen with a single deck oven, cultured Normandy
                butter, and a simple belief: great baking cannot be rushed. Every
                morning before sunrise, our bakers laminate dough by hand and
                tend to wild-yeast starters nurtured over years.
              </p>
              <p>
                From crackly golden croissants to dark-cocoa celebration cakes,
                each recipe balances classic French technique with bold, comforting
                flavors made to be shared.
              </p>
            </div>

            {/* 3 Craft Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-neutral-950 border border-yellow-500/20 hover:border-yellow-400/50 transition-colors duration-300 space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-300/20 to-amber-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Baker Signature Quote */}
            <div className="pt-4 border-t border-yellow-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <blockquote className="text-xs sm:text-sm italic text-neutral-300 border-l-2 border-yellow-400 pl-3">
                &ldquo;A truly memorable pastry speaks in crisp layers, warm
                butter, and a golden finish.&rdquo;
              </blockquote>
              <div className="shrink-0">
                <p className="text-sm font-bold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
                  Chef Adrien Moreau
                </p>
                <p className="text-[11px] text-neutral-500">
                  Founder &amp; Head Patissier
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;