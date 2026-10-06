import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid overflow-hidden rounded-[32px] bg-green-700 lg:grid-cols-2">
          <div className="p-8 text-white sm:p-12">
            <span className="font-bold text-green-200">GET IN TOUCH</span>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Let's talk over a fresh juice.</h2>
            <p className="mt-5 max-w-md leading-7 text-green-100">Have a question, suggestion or catering request? Send us a message and we'll get back to you.</p>
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4"><MapPin /> <span>Trichy, Tamil Nadu, India</span></div>
              <div className="flex items-center gap-4"><Phone /> <span>+91 98765 43210</span></div>
              <div className="flex items-center gap-4"><Mail /> <span>hello@pazhasaaru.com</span></div>
            </div>
          </div>

          <div className="bg-white p-8 dark:bg-gray-900 sm:p-12">
            {sent && (
              <div className="mb-5 flex items-center gap-2 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-300">
                <CheckCircle2 size={18} /> Thanks! Your message has been received.
              </div>
            )}
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold">Your Name</label>
                <input required type="text" placeholder="Enter your name" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 dark:border-gray-700 dark:bg-gray-800" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Email Address</label>
                <input required type="email" placeholder="you@example.com" className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 dark:border-gray-700 dark:bg-gray-800" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-bold">Message</label>
                <textarea required rows="5" placeholder="How can we help?" className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 dark:border-gray-700 dark:bg-gray-800" />
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-bold text-white transition hover:bg-green-700">
                Send Message <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}