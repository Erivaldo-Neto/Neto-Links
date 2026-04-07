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
    <div 
      className={`group relative w-[96%] mx-auto transition-all duration-300
        filter 
        drop-shadow-[0_0_2px_rgba(0,255,85,0.4)]
        drop-shadow-[0_0_12px_rgba(0,255,85,0.2)]
        hover:drop-shadow-[0_0_5px_rgba(0,255,85,0.7)]
        hover:drop-shadow-[0_0_25px_rgba(0,255,85,0.5)]
        active:scale-[0.98]
      `}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.4, delay: 0.2 + delay, ease: "easeOut" }}
        whileHover={{ y: -3 }}
        className={`relative flex items-center justify-between w-full p-4 transition-all duration-250 cursor-pointer rounded-2xl
          hover:bg-green-500/[0.02]
        `}
        style={{ 
          minHeight: hasBg ? "100px" : "80px",
          clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)"
        }}
      >
        {/* Fundo e Borda - Tudo será cortado pelo clip-path do motion.a */}
        <div 
          className={`absolute inset-0 z-0 transition-all duration-300 rounded-2xl overflow-hidden
            ${hasBg ? "bg-black" : (isFeatured ? "bg-[#fafff9]" : "bg-white")}
            ${isFeatured && !hasBg ? "border-l-[4px] border-l-neon-green" : "border border-green-500/20"}
          `}
        >
          {/* Layer 1: Imagem de Fundo (Blur) */}
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

          {/* Layer 2: Overlay Escuro */}
          {hasBg && (
            <div className="absolute inset-0 z-[1] bg-black/55" />
          )}
        </div>

        {/* Parte Dobrada (Dog-ear) */}
        <div className="absolute top-[-1px] right-[-1px] w-[25px] h-[25px] z-10">
          <div className="absolute inset-0 bg-neon-green/90 z-[10] [clip-path:polygon(0_0,100%_100%,0_100%)] shadow-[-2px_2px_4px_rgba(0,0,0,0.1)]" />
        </div>

        {/* Camada 3: Conteúdo */}
        <div className="flex items-center gap-4 z-20 w-full pr-6 text-left">
          <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#1a1a1a] text-neon-green transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg border border-white/5">
            {icon}
          </div>
          <div className="flex flex-col text-left">
            <span className={`font-poppins font-semibold text-[15px] transition-colors ${hasBg ? "text-white" : "text-[#0a0a0a]"} group-hover:text-neon-green text-left`}>
              {title}
            </span>
            <span className={`font-questrial text-[12px] ${hasBg ? "text-white/80" : "text-[#888888]"} text-left`}>
              {subtitle}
            </span>
          </div>
        </div>

        <div className={`z-20 group-hover:text-neon-green group-hover:translate-x-1 transition-all duration-300 ${hasBg ? "text-white/70" : "text-[#cccccc]"}`}>
          <ChevronRight size={18} strokeWidth={2.5} />
        </div>
      </motion.a>
    </div>
  );
};
