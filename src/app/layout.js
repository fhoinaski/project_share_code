import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Exemplos de Código - Meus Projetos",
  description: "Explore exemplos de código dos meus projetos apresentados nos meus vídeos. Aprenda e implemente funcionalidades variadas com tutoriais detalhados.",
  keywords: "exemplos de código, projetos de programação, tutoriais, desenvolvimento, vídeos de programação",
  author: "Seu Nome",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  og: {
    title: "Exemplos de Código - Meus Projetos",
    description: "Explore exemplos de código dos meus projetos apresentados nos meus vídeos. Aprenda e implemente funcionalidades variadas com tutoriais detalhados.",
    type: "website",
    url: "https://www.seusite.com",
    image: "https://www.seusite.com/imagem.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
