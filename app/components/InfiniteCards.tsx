import { motion } from "framer-motion";
import Image from "next/image";

export default function InfiniteCards() {
  const cards = Array(6).fill({
    image: "/your-image.jpg",
    text: "Card Text",
  });

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient edges for blur/fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/60 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/60 to-transparent z-10" />

      {/* Infinite scroll container */}
      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="relative min-w-[250px] h-[300px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={card.image}
              alt={card.text}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black/70 text-white text-center p-2 text-sm">
              {card.text}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
