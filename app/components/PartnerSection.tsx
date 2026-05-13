export function PartnerSection() {
  const src = [
    "/marquee/marquee.webp",
    "/marquee/marquee.webp",
    "/marquee/marquee.webp",
  ];
  return (
    <section className="w-full flex flex-col items-center p-10 gap-10 overflow-x-hidden">
      <h2 className="text-center text-4xl font-montserrat font-bold">
        Trusted by top data-driven teams
      </h2>
      <div className="marquee flex flex-row overflow-hidden w-max">
        {src.map((src, index) => (
          <picture key={index}>
            <source src={src} type="image/webp" />
            <img
              src="/marquee/marquee.png"
              alt=""
              className="h-14 w-auto shrink-0 opacity-50"
            />
          </picture>
        ))}
      </div>
    </section>
  );
}
