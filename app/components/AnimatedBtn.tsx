"use client";
import { useRouter } from "next/navigation";
export default function ShinyButton({ text }: { text: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/contact")}
      className="relative px-6 py-3 font-semibold text-white rounded-xl 
                 bg-blue-600 
                 shadow-[0_0_8px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,0.6)] 
                 transition-all duration-300 
                 hover:shadow-[0_0_15px_rgba(59,130,246,1),0_0_30px_rgba(59,130,246,0.8)] 
                 overflow-hidden group"
    >
      <span className="relative z-10">{text}</span>

      {/* Animated shine sweep */}
      <span
        className="absolute inset-0 rounded-xl bg-gradient-to-r 
                       from-transparent via-white/40 to-transparent 
                       translate-x-[-200%] group-hover:translate-x-[200%] 
                       transition-transform duration-1000 ease-in-out"
      />
    </button>
  );
}
