import { ArrowLeft, Leaf, Star } from "lucide-react";

export default function ProductDetailPage({ product, onClose }) {
  if (!product) return null;

  const highlights = [
    "Fresh ingredients",
    "No artificial flavors",
    "Prepared daily",
  ];

  return (
    <main className="min-h-screen bg-[var(--page-surface)] text-gray-900 dark:bg-[var(--page-dark)] dark:text-white">
      <div className="container-custom py-8 md:py-12">
        <button
          type="button"
          onClick={onClose}
          className="mb-8 flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 font-bold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          <ArrowLeft size={17} /> Back to menu
        </button>

        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-[#0d1a12] md:grid-cols-2">
          <div className="bg-gradient-to-br from-green-100 via-white to-orange-100 p-6 dark:from-green-950/70 dark:via-[#0d1a12] dark:to-orange-950/60">
            <div className="overflow-hidden rounded-2xl">
              <img src={product.image} alt={product.name} className="h-full min-h-[320px] w-full object-cover" />
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-green-700 dark:bg-green-950 dark:text-green-300">
              {product.category}
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl">{product.name}</h2>

            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-amber-500">
              <Star size={18} fill="currentColor" />
              <span>{product.rating}</span>
              <span className="text-gray-500 dark:text-gray-400">Premium fresh blend</span>
            </div>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <div className="mt-7 flex items-end gap-3">
              <span className="text-4xl font-black">₹{product.price}</span>
              <span className="mb-1 text-sm font-semibold text-gray-500 dark:text-gray-400">Freshly prepared</span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl bg-gray-50 px-3 py-3 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                  <Leaf size={15} className="text-green-600" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
              <h3 className="text-lg font-black">Product information</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Category</dt>
                  <dd className="mt-1 font-bold">{product.category}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Customer rating</dt>
                  <dd className="mt-1 font-bold">{product.rating} / 5</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
