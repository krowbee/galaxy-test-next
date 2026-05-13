const cards = [
  {
    step: "Step 1",
    title: "Search Contracts",
    text: "Search for other Business owners or individuals looking to create a contract or agreement.",
    imageWebp: "/how-it-works/search_contracts.webp",
    imageFallback: "/how-it-works/search_contracts.png",
  },
  {
    step: "Step 2",
    title: "Apply For Agreement",
    text: "Establish what you and your party want to get out of this agreement.",
    imageWebp: "/how-it-works/apply_for.webp",
    imageFallback: "/how-it-works/apply_for.png",
  },
  {
    step: "Step 3",
    title: "Agreement period",
    text: "Determine the length of your contract. All contracts can be saved to be reused.",
    imageWebp: "/how-it-works/agreement.webp",
    imageFallback: "/how-it-works/agreement.png",
  },
];

export function CardsContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-max gap-8">
      {cards.map((card) => (
        <article
          key={card.step}
          className="relative h-70 w-sm overflow-hidden rounded-xl bg-black"
        >
          <picture>
            <source srcSet={card.imageWebp} type="image/webp" />
            <img
              src={card.imageFallback}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-linear-to-tr from-black/45 via-black/35 to-black/45"></div>
          <div className="absolute bottom-6 left-6 z-10 text-white">
            <span className="mb-3 inline-flex rounded-full bg-[#4B22FF] px-6 py-2 text-sm">
              {card.step}
            </span>

            <h3 className="mb-2 text-lg font-medium">{card.title}</h3>

            <p className="max-w-52 text-xs leading-relaxed text-white/75">
              {card.text}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
