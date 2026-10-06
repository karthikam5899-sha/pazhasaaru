import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    role: "Regular Customer",
    text: "The mango smoothie is absolutely amazing. Fresh, creamy and perfectly balanced.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Arun K.",
    role: "Food Lover",
    text: "Beautiful ambience, friendly service and some of the freshest juices I’ve tried.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Meera R.",
    role: "Fitness Enthusiast",
    text: "Their detox range is perfect after my workouts. Green Detox is my favorite!",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rohan V.",
    role: "Gym Enthusiast",
    text: "The fruit blends taste premium and the service feels boutique and polished every time.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Nisha P.",
    role: "Cafe Reviewer",
    text: "You can taste the freshness instantly. It feels like a luxury wellness drink brand.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

const duplicatedReviews = [...reviews, ...reviews];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-[#101b14]">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-bold text-green-600">TESTIMONIALS</span>
          <h2 className="mt-3 text-4xl font-black">Loved by Juice Lovers</h2>
        </div>

        <div className="testimonial-viewport mt-12 overflow-hidden">
          <div className="testimonial-track flex w-max gap-6">
            {duplicatedReviews.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="testimonial-card min-w-[300px] rounded-[28px] border border-white/60 bg-white p-7 shadow-[0_25px_60px_rgba(15,40,28,0.08)] backdrop-blur dark:border-white/5 dark:bg-gray-900 md:min-w-[360px]"
              >
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => <Star key={star} size={17} fill="currentColor" className="text-yellow-500" />)}
                </div>
                <p className="mt-5 min-h-[96px] leading-7 text-gray-600 dark:text-gray-300">"{review.text}"</p>
                <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                  <img src={review.avatar} alt={review.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}