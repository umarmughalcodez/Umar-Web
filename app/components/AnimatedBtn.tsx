"use client";
import { useRouter } from "next/navigation";

export default function ShinyButton({
  text,
  path,
}: {
  text: string;
  path?: string;
}) {
  const router = useRouter();

  return (
    <button
      onClick={() => path && router.push(path)}
      className="
        relative 
        px-3 py-2 text-sm 
        sm:px-4 sm:py-2 sm:text-base 
        md:px-3 md:py-3 md:text-lg 
        font-semibold text-white rounded-md cursor-pointer 
        bg-green-600 
        shadow-[0_0_8px_rgba(34,197,94,0.6),0_0_20px_rgba(34,197,94,0.4)] 
        hover:shadow-[0_0_15px_rgba(34,197,94,0.9),0_0_30px_rgba(34,197,94,0.7)] 
        transition-all duration-300 
        overflow-hidden group
      "
    >
      <span className="relative z-10">{text}</span>

      {/* Animated shine sweep */}
      <span
        className="
          absolute inset-0 rounded-md 
          bg-gradient-to-r from-transparent via-white/40 to-transparent 
          -translate-x-[200%] group-hover:translate-x-[200%] 
          transition-transform duration-1000 ease-in-out
        "
      />
    </button>
  );
}
