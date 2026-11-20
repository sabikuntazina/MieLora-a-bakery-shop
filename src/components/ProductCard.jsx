import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ item }) => {
  return (
    <article className="animate-fade-up card bg-neutral-950 border border-yellow-500/20 hover:border-yellow-400/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-500/15 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
      {/* Product Image & Badge */}
      <figure className="relative h-52 overflow-hidden bg-neutral-900">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-300 to-amber-500 text-black shadow">
          {item.badge}
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-yellow-400/90 font-medium uppercase tracking-wider">
              {item.category}
            </span>
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {item.rating}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">
            {item.name}
          </h3>

          {/* Description */}
          <p className="text-neutral-400 text-xs leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Price Row */}
        <div className="pt-3 border-t border-yellow-500/15 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Price</span>
          <span className="text-lg font-extrabold bg-gradient-to-r from-yellow-200 to-amber-400 bg-clip-text text-transparent">
            ৳ {item.price}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;