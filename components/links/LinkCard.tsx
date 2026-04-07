"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface LinkCardProps {
  title: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  backgroundImage?: string | null;
  isFeatured?: boolean;
  delay?: number;
}

export const LinkCard = ({ 
  title, 
  subtitle, 
  href, 
  icon, 
  backgroundImage,
  isFeatured, 
  delay = 0 
}: LinkCardProps) => {
  const hasBg = !!backgroundImage;

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
      className={`group relative flex items-center justify-between w-full max-w-[420px] p-4 rounded-2xl transition-all duration-250 cursor-pointer overflow-hidden
        ${hasBg ? "min-h-[88px]" : "bg-white"}
        shadow-[0_0_0_1px_rgba(0,255,85,0.3),0_0_12px_rgba(0,255,85,0.12),0_0_24px_rgba(0,255,85,0.06)] 
        hover:shadow-[0_0_0_1px_rgba(0,255,85,0.5),0_0_20px_rgba(0,255,85,0.2),0_0_40px_rgba(0,255,85,0.08)]
        ${isFeatured && !hasBg ? "border-l-[3px] border-l-neon-green bg-[#fafff9]" : "border border-black/[0.07]"}
      `}
      style={{ minHeight: hasBg ? "100px" : "80px" }}
    >
      {/* Container with clip-path to cut the corner */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-300"
        style={{ 
          clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)"
        }}
      >
        {/* Layer 1: Background Image */}
        {hasBg && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              sizes="420px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ filter: "blur(3px)" }}
              loading="lazy"
            />
          </div>
        )}

        {/* Layer 2: Dark Overlay */}
        {hasBg && (
          <div className="absolute inset-0 z-[1] bg-black/55" />
        )}
        
        {/* Background color for cards without image */}
        {!hasBg && <div className={`absolute inset-0 z-0 ${isFeatured ? "bg-[#fafff9]" : "bg-white"}`} />}
      </div>

      {/* Folded Part (Dog-ear) - Outside the clip-path container */}
      <div className="absolute top-0 right-0 w-[24px] h-[24px] z-10 transition-all duration-300">
        <div className="absolute inset-0 bg-neon-green/90 z-[10] [clip-path:polygon(0_0,100%_100%,0_100%)] shadow-[-2px_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-300" />
      </div>

      {/* Layer 3: Content */}
      <div className="flex items-center gap-4 z-20 w-full pr-6">
        <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#1a1a1a] text-neon-green transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg border border-white/5">
          {icon}
        </div>
        <div className="flex flex-col text-left">
          <span className={`font-poppins font-semibold text-[15px] transition-colors ${hasBg ? "text-white" : "text-[#0a0a0a]"} group-hover:text-neon-green`}>
            {title}
          </span>
          <span className={`font-questrial text-[12px] ${hasBg ? "text-white/80" : "text-[#888888]"}`}>
            {subtitle}
          </span>
        </div>
      </div>

      <div className={`z-20 group-hover:text-neon-green group-hover:translate-x-1 transition-all duration-300 ${hasBg ? "text-white/70" : "text-[#cccccc]"}`}>
        <ChevronRight size={18} strokeWidth={2.5} />
      </div>
    </motion.a>
  );
};
