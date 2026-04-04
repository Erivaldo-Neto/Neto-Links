"use client";

import { motion } from "framer-motion";
import { ChevronRight, Globe2, LucideIcon } from "lucide-react";

interface LinkCardProps {
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
  delay?: number;
}

export const LinkCard = ({ title, subtitle, href, icon, isFeatured, delay = 0 }: LinkCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: 0.2 + delay, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex items-center justify-between w-full max-w-[420px] p-4 rounded-2xl bg-white border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,255,85,0.12)] hover:border-green-500/25 transition-all duration-250 cursor-pointer overflow-hidden ${
        isFeatured ? "border-l-[3px] border-l-neon-green bg-[#fafff9]" : ""
      }`}
    >
      {/* Dog-ear effect */}
      <div className="absolute top-0 right-0 w-[18px] h-[18px] z-10 group-hover:w-[22px] group-hover:h-[22px] transition-all duration-300">
        <div className="absolute inset-0 bg-[#f5f5f3] z-[5]" /> {/* The "hole" - matches the phone background */}
        <div className="absolute inset-0 bg-neon-green/90 z-[10] [clip-path:polygon(0_0,100%_100%,0_100%)] shadow-[-2px_2px_4px_rgba(0,0,0,0.05)]" /> {/* The folded part */}
      </div>

      <div className="flex items-center gap-4 z-20">
        <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#1a1a1a] text-neon-green transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg border border-white/5">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="font-poppins font-semibold text-[15px] text-[#0a0a0a] group-hover:text-neon-green transition-colors">
            {title}
          </span>
          <span className="font-questrial text-[12px] text-[#888888]">
            {subtitle}
          </span>
        </div>
      </div>

      <div className="z-20 text-[#cccccc] group-hover:text-neon-green group-hover:translate-x-1 transition-all duration-300">
        <ChevronRight size={18} strokeWidth={2.5} />
      </div>
    </motion.a>
  );
};
