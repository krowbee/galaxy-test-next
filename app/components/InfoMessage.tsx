import { FaHeartBroken } from "react-icons/fa";

export function InfoMessage({
  error = false,
  text,
}: {
  error?: boolean;
  text: string;
}) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-center items-center ${error ? "text-red-500" : "text-black"}`}
    >
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
}
