import { products, categories } from "../data/products";
import ProductCard from "./ProductCard";

export default function Menu({ activeCategory, setActiveCategory, onSelectProduct }) {
  const filtered = activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-gray-50 dark:bg-[#101b14]">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-bold text-green-600">OUR MENU</span>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Pick Your Perfect <span className="gradient-text">Blend</span></h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">From refreshing juices to healthy detox drinks, there is something delicious for everyone.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${activeCategory === category ? "bg-green-600 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-green-50 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-green-950"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  );
}