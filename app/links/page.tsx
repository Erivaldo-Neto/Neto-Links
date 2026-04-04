"use client";

import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { HeroSection } from "@/components/links/HeroSection";
import { LinkCard } from "@/components/links/LinkCard";
import { useEffect, useState, useRef } from "react";

export default function LinksPage() {
  const name = "Erivaldo Neto";
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView && displayText.length < name.length) {
      const timeout = setTimeout(() => {
        setDisplayText(name.slice(0, displayText.length + 1));
      }, 140); // Ajustado para ~0.15-0.2s conforme solicitado pelo usuário
      return () => clearTimeout(timeout);
    } else if (displayText.length === name.length) {
      setIsDone(true);
    }
  }, [displayText, isInView, name]);

  return (
    <main className="min-h-screen bg-[#e8e8e6] flex items-start justify-center desktop:p-8">
      {/* 
        SITE CONTAINER / PHONE MOCKUP
        - No mobile: width 100%
        - No desktop: width 390px fixa, com bordas arredondadas e sombra
      */}
      <div className="w-full desktop:w-[390px] min-h-screen desktop:min-h-0 bg-neutral-bg desktop:rounded-[32px] desktop:shadow-[0_24px_64px_rgba(0,0,0,0.12)] relative overflow-y-auto overflow-x-hidden flex flex-col no-scrollbar desktop:my-4">
        
        <HeroSection />

        <div className="flex flex-col items-center px-6 py-8 text-center" ref={containerRef}>
          <h1 className="font-poppins font-bold text-3xl text-primary-text mb-1 flex items-center h-[36px]">
            {displayText}
            <motion.span
              animate={isDone ? { opacity: [0, 1, 0] } : { opacity: 1 }}
              transition={isDone ? { repeat: Infinity, duration: 0.8 } : { duration: 0 }}
              className="inline-block w-[3px] h-[30px] bg-[#00FF55] ml-1"
            />
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-questrial text-neon-green text-[14px]"
          >
            - sites profissionais que convertem -
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[80%] h-[1px] bg-neon-green/30 my-8 origin-center" 
          />

          {/* LINKS STACK */}
          <div className="flex flex-col gap-3 w-full">
            <LinkCard 
              href="https://netowebsites.vercel.app/"
              title="Neto Websites"
              subtitle="Veja meus projetos e serviços de criação de sites."
              icon={<FontAwesomeIcon icon={faGlobe} className="text-xl" />}
              isFeatured={true}
              delay={0.40}
            />
            <LinkCard 
              href="https://tiktok.com/@netowebsites"
              title="TikTok"
              subtitle="Dicas de desenvolvimento e bastidores dos projetos."
              icon={<FontAwesomeIcon icon={faTiktok} className="text-xl" />}
              isFeatured={true}
              delay={0.50}
            />
            <LinkCard 
              href="https://instagram.com/neto.websites"
              title="Instagram"
              subtitle="Projetos, processo criativo e novidades."
              icon={<FontAwesomeIcon icon={faInstagram} className="text-xl" />}
              isFeatured={true}
              delay={0.60}
            />
            <LinkCard 
              href="https://linkedin.com/in/erivaldo-neto0122"
              title="LinkedIn"
              subtitle="Trajetória profissional e conexões na área de tech."
              icon={<FontAwesomeIcon icon={faLinkedin} className="text-xl" />}
              isFeatured={true}
              delay={0.70}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
