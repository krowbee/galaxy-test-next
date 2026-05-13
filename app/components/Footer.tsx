import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Logo } from "./logo";

const socials = [
  {
    Icon: FaXTwitter,
  },
  {
    Icon: FaLinkedin,
  },
  {
    Icon: FaInstagram,
  },
];

export function Footer() {
  return (
    <footer className="w-full flex flex-col px-8 py-2 gap-4">
      <div className="w-full flex flex-row justify-between items-center">
        <Logo />
        <nav className="flex flex-row">
          {socials.map(({ Icon }, index) => (
            <a
              className="flex cursor-pointer justify-center items-center border p-4 bg-blue-500 text-white rounded-full"
              key={index}
            >
              <Icon />
            </a>
          ))}
        </nav>
      </div>
      <p className="w-full text-center text-gray-500 text-xs">
        © 2025— Copyright
      </p>
    </footer>
  );
}
