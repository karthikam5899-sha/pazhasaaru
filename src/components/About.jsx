import { Leaf, Heart, Sparkles } from "lucide-react";

const features = [
  ["Fresh Ingredients", "Fresh fruits selected every morning.", Leaf, "green"],
  ["Made With Love", "Every blend is prepared with care.", Heart, "red"],
  ["No Artificial Flavors", "Pure ingredients and natural flavors.", Sparkles, "yellow"],
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
              alt="Fresh juice ingredients"
              className="h-72 w-full rounded-3xl object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
              alt="Healthy detox drink"
              className="mt-12 h-72 w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-5 py-4 shadow-xl dark:bg-gray-900">
            <p className="text-center text-2xl font-black">10+</p>
            <p className="text-xs text-gray-500">Years of Freshness</p>
          </div>
        </div>

        <div>
          <span className="font-bold text-green-600">ABOUT PAZHA SAARU</span>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">We believe healthy <span className="gradient-text">can be delicious.</span></h2>
          <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
            Pazha Saaru started with a simple idea — make healthy drinks exciting. Every cup is handcrafted using seasonal fruits, pure ingredients, and carefully balanced recipes for a naturally vibrant taste.
          </p>

          <div className="mt-8 space-y-5">
            {features.map(([title, text, Icon, tone]) => (
              <div key={title} className="flex gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tone === "green" ? "bg-green-100 text-green-600 dark:bg-green-950" : tone === "red" ? "bg-orange-100 text-orange-600 dark:bg-orange-950" : "bg-yellow-100 text-yellow-600 dark:bg-yellow-950"}`}>
                  <Icon />
                </div>
                <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-gray-500">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}