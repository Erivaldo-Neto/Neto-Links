"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full aspect-[3/4] overflow-hidden bg-[#f9f9f7]"
    >
      {/* 
        AJUSTE MANUAL — BACKROUND FUNDO 
        A imagem de parede que fica atrás de tudo.
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Background-Fundo.webp"
          alt="Wall Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 
        AJUSTE MANUAL — TEXTO "DESENVOLVEDOR"
        - Para mover para cima/baixo: alterar `top`
        - Para mudar tamanho: alterar `fontSize` no clamp()
        - Opacidade atualmente em 45% (0.45)
      */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 0.45, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          top: '12%',
          fontSize: 'clamp(2.8rem, 10vw, 2.9rem)'
        }}
        className="absolute left-0 right-0 text-center z-1 w-full pointer-events-none select-none font-bold tracking-tighter text-[#0a0a0a] uppercase font-poppins"
      >
        Desenvolvedor
      </motion.div>

      {/* 
        AJUSTE MANUAL — TEXTO "WEB"
        - Para mover para cima/baixo: alterar `top`
        - Para mover esquerda/direita: alterar `right`
        - Para mudar tamanho: alterar `fontSize` no clamp()
      */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          top: '24%',
          right: '5%',
          fontSize: 'clamp(2.3rem, 11vw, 2.6rem)'
        }}
        className="absolute z-1 pointer-events-none select-none font-bold tracking-tighter text-[#00FF55] uppercase font-poppins"
      >
        Web
      </motion.div>

      {/* 
        AJUSTE MANUAL — CÍRCULO VERDE
        - Para mover para cima/baixo: alterar `bottom`
        - Para aumentar/diminuir: alterar `width` (em %)
        - Para centralizar diferente: alterar `left` (sempre com o transform)
      */}
      <div
        style={{
          width: '73%',
          bottom: '0.1%',
          left: '53%',
          transform: 'translateX(-50%)'
        }}
        className="absolute aspect-square rounded-full bg-[#00FF55] z-2"
      />

      {/* 
        AJUSTE MANUAL — FOTO (tamanho da pessoa)
        - Para diminuir/aumentar a foto: alterar `width` da div abaixo (em %)
        - Como a div tem aspect-[3/4], diminuir o width cria espaço no topo automaticamente
        - Para subir/descer: alterar `bottom`
        - Valor inicial: width: 90% (deixa ~10% de respiro no topo)
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: '90%',
          bottom: '0',
          left: '6%',
          transform: 'translateX(-50%)'
        }}
        className="absolute aspect-[3/4] z-3 pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src="/assets/Neto-SemFundo.webp"
            alt="Erivaldo Neto"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </motion.div>

      {/* 
        AJUSTE MANUAL — FADE DOS BRAÇOS
        - Para cobrir mais: aumentar `height` (em %)
        - Para transição mais suave: alterar o `20%` no gradient (ex: 10% começa antes)
      */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] z-4 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #f9f9f7 20%, transparent 100%)"
        }}
      />
    </motion.section>
  );
};
