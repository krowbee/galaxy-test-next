export function HeroBackground() {
  return (
    <picture className="absolute inset-0 w-full h-full z-0">
      <source srcSet="/hero/background.webp" type="image/webp" />
      <img
        src="/hero/background.jpg"
        alt=""
        width={1440}
        height={800}
        className="w-full h-full object-cover"
      />
    </picture>
  );
}
