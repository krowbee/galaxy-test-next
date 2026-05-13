import Image from "next/image";
const cards = [
  {
    type: "review",
    className: "lg:col-span-2",
    text: "I was impressed by how simple and intuitive the whole process was. Everything worked smoothly, and I felt supported at every step.",
    name: "Peter Kenyod",
    company: "Amazon",
    avatar: "/reviews/peter.png",
  },
  {
    type: "review",
    className: "lg:col-span-1",
    text: "Finally, a service I can actually trust. Clear communication, fast responses, and the result was exactly what I needed.",
    name: "Carol M.",
    company: "Microsoft Inc.",
    avatar: "/reviews/carol.png",
  },
  {
    type: "stat",
    className: "lg:col-span-1",
    value: "85%",
    label: "Hire Rate",
  },
  {
    type: "stat",
    className: "lg:col-span-1",
    value: "10,000+",
    label: "Successful contracts",
  },
  {
    type: "review",
    className: "lg:col-span-1",
    text: "I had a great experience. The onboarding was fast, and I appreciated the extra focus on security and trust.",
    name: "Martha",
    company: "Unicell Corporation",
    avatar: "/reviews/martha.png",
  },
  {
    type: "review",
    className: "lg:col-span-2",
    text: "Using this platform saved me so much time and effort. I didn’t have to worry about misunderstandings—the process was transparent and easy to follow.",
    name: "Timothy Donald Cook",
    company: "Apple",
    avatar: "/reviews/timothy.png",
  },
];

export function ReviewsContainer() {
  return (
    <div className="w-full h-full grid grid-cols-1 gap-4 lg:grid-cols-4">
      {cards.map((item, index) => (
        <article
          key={index}
          className={`relative min-h-52 overflow-hidden rounded-3xl bg-gray-200 p-8 ${item.className}`}
        >
          {item.type === "stat" ? (
            <>
              <div className="absolute -bottom-20 -right-10 size-52 rounded-full bg-blue-700 blur-xl" />
              <div className="absolute inset-0 bg-linear-to-bl from-white via-blue-300 to-blue-500" />

              <div className="relative z-10">
                <h3 className="text-4xl font-bold ">{item.value}</h3>
                <p className="mt-2 text-sm ">{item.label}</p>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 text-5xl font-bold">“</div>

                <p className="max-w-155 text-sm">{item.text}</p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Image
                  src={item.avatar!}
                  alt={item.name!}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <p className="text-xs">{item.company}</p>
                </div>
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
