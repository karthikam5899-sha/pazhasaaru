import { Star, ShoppingBag, Plus } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="card-image h-64 w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-green-700 backdrop-blur dark:bg-gray-900/90 dark:text-green-300">
          {product.category}
        </span>
        <button type="button" className="absolute right-4 top-4 rounded-full bg-white p-3 text-gray-800 opacity-0 shadow-lg transition group-hover:opacity-100 dark:bg-gray-900 dark:text-white" aria-label={`Save ${product.name}`}>
          <ShoppingBag size={17} />
        </button>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-lg font-black">{product.name}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-bold">
            <Star size={15} fill="currentColor" className="text-yellow-500" /> {product.rating}
          </span>
        </div>

        <p className="min-h-12 text-sm leading-6 text-gray-500 dark:text-gray-400">{product.description}</p>

        <div className="mt-5 flex items-center justify-between gap-2">
          <span className="text-2xl font-black">₹{product.price}</span>
          <button
            type="button"
            onClick={() => onAdd?.(product)}
            className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
          >
            <Plus size={17} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}