import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neto Websites | Links",
  description: "Conecte-se com Erivaldo Neto e descubra sites profissionais que convertem.",
  openGraph: {
    title: "Neto Websites | Links",
    description: "Sites profissionais que convertem.",
    images: ["/assets/Neto-SemFundo.png"],
  },
};

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
