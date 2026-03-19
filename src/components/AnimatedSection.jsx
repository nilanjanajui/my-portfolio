import useScrollAnimation from "../hooks/useScrollAnimation";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const { ref, inView } = useScrollAnimation(0.1);

  const directions = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directions[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
