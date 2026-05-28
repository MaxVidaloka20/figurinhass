import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mito da Copa 2026 - O Álbum Completo na Sua Mão',
  description: 'Tenha acesso instantâneo a mais de 900 figurinhas da Copa 2026 prontas para imprimir em casa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
