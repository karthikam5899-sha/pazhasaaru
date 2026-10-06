import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <div className="hero-orb absolute -left-32 top-36 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />
      <div className="hero-orb absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />

      <div className="container-custom grid min-h-[calc(100vh-120px)] items-center gap-12 py-16 lg:grid-cols-2">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700 dark:bg-green-950 dark:text-green-300">
            🍃 100% Fresh & Natural
          </span>

          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Freshness
            <br />
            <span className="gradient-text">in Every Sip.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover delicious fresh juices, creamy smoothies, detox blends, and tropical flavors crafted from handpicked fruits and natural ingredients.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-700">
              Explore Menu <ArrowRight size={18} />
            </a>
            <a href="#about" className="flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3.5 font-bold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
              <Play size={17} /> Our Story
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-green-600" /> No added preservatives</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-green-600" /> Freshly prepared</span>
          </div>

          <div className="mt-9 flex gap-8">
            <div><p className="text-2xl font-black">25K+</p><p className="text-sm text-gray-500">Happy Customers</p></div>
            <div><p className="text-2xl font-black">50+</p><p className="text-sm text-gray-500">Fresh Blends</p></div>
            <div><p className="text-2xl font-black">4.9★</p><p className="text-sm text-gray-500">Customer Rating</p></div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-[330px] w-[330px] rounded-full bg-orange-300/30 blur-3xl sm:h-[450px] sm:w-[450px]" />
          <div className="float relative overflow-hidden rounded-[45%_55%_50%_50%] border-8 border-white shadow-2xl dark:border-gray-800">
            <img
              src="https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1000&q=80"
              alt="Fresh tropical juice"
              className="h-[430px] w-[340px] object-cover sm:h-[540px] sm:w-[430px]"
            />
          </div>
          <div className="absolute -left-2 top-12 rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-900 sm:-left-8">
            <img
              src="https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80"
              alt="Fresh fruit"
              className="mb-2 h-16 w-16 rounded-xl object-cover"
            />
            <p className="text-xs font-bold">Fresh Fruits</p>
          </div>
          <div className="absolute -right-2 bottom-16 rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-900 sm:-right-8">
            <img
              src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=300&q=80"
              alt="Natural ingredients"
              className="mb-2 h-16 w-16 rounded-xl object-cover"
            />
            <p className="text-xs font-bold">100% Natural</p>
          </div>
        </div>
      </div>
    </section>
  );
}