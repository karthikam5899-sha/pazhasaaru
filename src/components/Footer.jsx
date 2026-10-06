import { Instagram, Facebook, Twitter, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-[#09140e]">
      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/images/Pazha-Saaru.png" alt="Pazha Saaru logo" className="h-11 w-11 rounded-full object-contain" />
              <div><h2 className="text-xl font-black">Pazha<span className="text-green-600"> Saaru</span></h2><p className="text-xs text-gray-500">Fresh juice. Natural taste.</p></div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-gray-500">Fresh juices, smoothies and healthy blends crafted with love using the freshest ingredients.</p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                <a href="#" key={index} className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 transition hover:-translate-y-1 hover:bg-green-600 hover:text-white dark:bg-gray-800" aria-label="Social media">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black">Quick Links</h3>
            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <a className="block hover:text-green-600" href="#home">Home</a>
              <a className="block hover:text-green-600" href="#menu">Menu</a>
              <a className="block hover:text-green-600" href="#about">About</a>
              <a className="block hover:text-green-600" href="#offers">Offers</a>
              <a className="block hover:text-green-600" href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-black">Opening Hours</h3>
            <div className="mt-5 space-y-3 text-sm text-gray-500">
              <p>Monday - Friday</p>
              <p className="font-bold text-gray-800 dark:text-gray-200">9:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday</p>
              <p className="font-bold text-gray-800 dark:text-gray-200">8:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row dark:border-gray-800">
          <p>© 2026 Pazha Saaru. All rights reserved.</p>
          <a href="#home" className="flex items-center gap-2 font-bold hover:text-green-600">Back to top <ArrowUp size={15} /></a>
        </div>
      </div>
    </footer>
  );
}