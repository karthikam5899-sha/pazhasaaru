import { ArrowRight, Gift, Sparkles } from "lucide-react";

const offerMap = {
  All: {
    badge: "WEEKEND SPECIAL",
    title: "Buy 2 + Get 1 Free",
    description: "Choose any three fresh juices and pay for only two. Available every weekend.",
    priceLabel: "Fresh Combo",
    accent: "green",
  },
  "Fresh Juice": {
    badge: "FRESH JUICE CLUB",
    title: "2 Fresh Juices for ₹150",
    description: "Pair your favorite citrus blends and enjoy a refreshing combo at a value price.",
    priceLabel: "Value pack",
    accent: "green",
  },
  Smoothies: {
    badge: "SMOOTHIE BOOST",
    title: "Smoothie + Snack Combo",
    description: "Upgrade any smoothie with a healthy snack add-on and save on your favorite blend.",
    priceLabel: "₹299",
    accent: "orange",
  },
  Detox: {
    badge: "DETOX RESET",
    title: "Detox Cleanse Pack",
    description: "A three-day wellness boost with your best detox juices, designed for a fresh reset.",
    priceLabel: "₹499",
    accent: "orange",
  },
};

export default function Offers({ activeCategory = "Fresh Juice" }) {
  const offer = offerMap[activeCategory] ?? offerMap.All;
  const isGreen = offer.accent === "green";

  return (
    <section id="offers" className="section-padding">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <span className="font-bold text-orange-500">SPECIAL OFFERS</span>
          <h2 className="mt-3 text-4xl font-black">More Juice, More Joy</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className={`relative overflow-hidden rounded-[32px] ${isGreen ? "bg-gradient-to-br from-green-600 to-green-800" : "bg-gradient-to-br from-orange-400 to-yellow-500"} p-8 text-white sm:p-10`}>
            <div className="relative z-10 max-w-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">{isGreen ? <Gift /> : <Sparkles />}</div>
              <p className="font-bold text-green-100">{offer.badge}</p>
              <h3 className="mt-2 text-4xl font-black">{offer.title}</h3>
              <p className="mt-4 text-green-100">{offer.description}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-3xl font-black">{offer.priceLabel}</span>
                {offer.accent === "orange" && <span className="pb-1 text-sm font-semibold text-orange-100">Limited time</span>}
              </div>
              <button className="mt-7 flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-green-700">Grab Offer <ArrowRight size={17} /></button>
            </div>
            <div className="absolute -bottom-20 -right-12 text-[180px] opacity-20">{isGreen ? "🍹" : "🥭"}</div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-green-200 bg-gradient-to-br from-[#f5f8f3] to-[#e8f0e8] p-8 text-gray-800 shadow-lg dark:border-green-900/50 dark:from-[#122019] dark:to-[#1a2a20] dark:text-white sm:p-10">
            <div className="relative z-10 max-w-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300"><Sparkles /></div>
              <p className="font-bold text-orange-600 dark:text-orange-300">MENU MATCH</p>
              <h3 className="mt-2 text-4xl font-black">{activeCategory}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                Curated for the current selection so you can discover the best-value option for your preferred juice style.
              </p>
              <div className="mt-6 rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-black/20">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-300">Featured</p>
                <p className="mt-2 text-2xl font-black">{offer.title}</p>
              </div>
              <button className="mt-7 flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600">Order Now <ArrowRight size={17} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}