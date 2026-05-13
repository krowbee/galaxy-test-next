import { ReviewsContainer } from "./reviews/ReviewsContainer";

export function ReviewsSection() {
  return (
    <section className="w-full flex flex-col px-8 py-8 gap-4 font-montserrat justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center">People Loved us!</h2>
        <p className="text-gray-500 text-lg text-center">
          With over 10,000 users served. Here’s what they say.{" "}
        </p>
      </div>
      <ReviewsContainer />
    </section>
  );
}
