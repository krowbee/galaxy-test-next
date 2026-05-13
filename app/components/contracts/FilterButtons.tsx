"use client";
import {
  CalculatorIcon,
  LandmarkIcon,
  LightbulbIcon,
  MegaphoneIcon,
  MonitorIcon,
  PenToolIcon,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type ButtonType = {
  Icon: LucideIcon;
  text: string;
  isActive: boolean;
};

const buttons: ButtonType[] = [
  { Icon: MonitorIcon, text: "I.T Contractor", isActive: true },
  { Icon: PenToolIcon, text: "Content Writer", isActive: false },
  { Icon: CalculatorIcon, text: "Accountancy", isActive: false },
  { Icon: LandmarkIcon, text: "Banking", isActive: false },
  { Icon: LightbulbIcon, text: "Digital & Creative", isActive: false },
  { Icon: MegaphoneIcon, text: "Marketing & PR", isActive: false },
];

export function FilterButtons() {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="flex flex-row flex-nowrap justify-between overflow-x-auto lg:overflow-x-hidden scrollbar-none gap-2">
      {buttons.map(({ Icon, text }, index) => (
        <button
          key={text}
          className={`px-4 py-2 min-w-55 rounded-full shrink-0 flex flex-row items-center gap-2 cursor-pointer text-nowrap ${
            isActive === index
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setIsActive(index)}
        >
          <div
            className={`${isActive === index ? "bg-white" : "bg-blue-500"} rounded-full p-2`}
          >
            <Icon
              size={20}
              className={`rounded-full ${isActive === index ? "text-blue-500" : "text-white"}`}
            />
          </div>
          {text}
        </button>
      ))}
    </div>
  );
}
