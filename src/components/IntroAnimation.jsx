import { useEffect, useState } from "react";

const fruits = [
  { image: "/images/Watermelon-Juice.jpg", name: "Watermelon", style: "intro-fruit--one" },
  { image: "/images/Pineapple-Juice.jpg", name: "Pineapple", style: "intro-fruit--two" },
  { image: "/images/Mango-Passion-Blend.jpg", name: "Mango", style: "intro-fruit--three" },
  { image: "/images/Dragon-Fruit-Juice.jpg", name: "Dragon fruit", style: "intro-fruit--four" },
];

export default function IntroAnimation({ onFinish }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setLeaving(true), reducedMotion ? 200 : 2650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      className={`intro-screen${leaving ? " intro-screen--leaving" : ""}`}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === "introExit") {
          onFinish();
        }
      }}
    >
      <button
        type="button"
        className="intro-skip"
        onClick={() => setLeaving(true)}
        disabled={leaving}
      >
        Skip intro
      </button>

      {fruits.map((fruit) => (
        <img
          key={fruit.name}
          className={`intro-fruit ${fruit.style}`}
          src={fruit.image}
          alt=""
          aria-hidden="true"
        />
      ))}

      <div className="intro-brand">
        <img className="intro-logo" src="/images/Pazha-Saaru.png" alt="" />
        <h1>Pazha Saaru</h1>
        <p>Fresh juice. Natural taste.</p>
      </div>
    </div>
  );
}