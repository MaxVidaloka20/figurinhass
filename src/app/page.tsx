
'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, Zap, Trophy, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { TopCountdown } from '@/components/TopCountdown';

export default function LandingPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
    }
  }, []);

  const handleScrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-body selection:bg-primary selection:text-white overflow-x-hidden">
      <TopCountdown />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-12 md:py-20 px-4 bg-dot-pattern">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10 text-center w-full">
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 w-full flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-sm font-bold uppercase tracking-wider mx-auto">
              < Zap className="w-3.5 h-3.5 md:w-4 md:h-4" /> Acesso Digital Imediato
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter uppercase max-w-5xl mx-auto px-2 text-balance text-center">
              <span className="text-primary">900</span> figurinhas da copa <span className="text-primary">2026</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 text-balance font-medium text-center">
              Pare de gastar fortunas com pacotinhos. Receba a coleção completa em HD pronta para imprimir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 w-full max-w-md sm:max-w-none mx-auto">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-16 md:h-20 px-8 md:px-12 text-lg md:text-2xl rounded-full shadow-2xl shadow-primary/30 group transition-all hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto animate-bounce-gentle">
                <a href="#oferta" onClick={handleScrollToOffer}>
                  QUERO MEU KIT COMPLETO <ArrowRight className="ml-2 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30 border-y border-border/50">
        <div className="max-w-6xl mx-auto text-center space-y-12 md:space-y-16">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase px-4 max-w-4xl mx-auto leading-tight text-balance text-center">Gaste Menos e <span className="text-primary">Colecione Mais</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-center max-w-5xl mx-auto items-stretch">
            <Card className="bg-background/80 border-destructive/20 shadow-xl rounded-[2rem] overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              <CardContent className="p-8 md:p-10 space-y-6 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-black text-destructive flex items-center gap-3 uppercase tracking-tighter text-center">
                  <XCircle className="w-6 h-6 shrink-0" /> O Problema:
                </h3>
                <ul className="space-y-4 text-base md:text-lg w-full text-center">
                  <li className="flex items-center gap-3 text-muted-foreground justify-center">
                    ❌ Pagar caro por pacotinhos aleatórios
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground justify-center">
                    ❌ Ter centenas de repetidas inúteis
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground justify-center">
                    ❌ Gastar meses para tentar completar
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20 shadow-xl rounded-[2rem] overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]">
              <CardContent className="p-8 md:p-10 space-y-6 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-black text-primary flex items-center gap-3 uppercase tracking-tighter text-center">
                  <CheckCircle2 className="w-6 h-6 shrink-0" /> A Solução:
                </h3>
                <ul className="space-y-4 font-bold text-base md:text-lg w-full text-center">
                  <li className="flex items-center gap-3 justify-center">
                    ✅ Todas as figurinhas de uma vez
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    ✅ Imprima em casa quando quiser
                  </li>
                  <li className="flex items-center gap-3 justify-center">
                    ✅ Economia de centenas de reais
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OFERTA PRINCIPAL */}
      <section id="oferta" className="py-12 md:py-24 px-4 bg-dot-pattern scroll-mt-20">
        <div className="max-w-screen-lg mx-auto w-full">
          <div className="w-full bg-card border-4 border-primary/50 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-center space-y-10 relative overflow-hidden shadow-[0_0_80px_rgba(34,197,94,0.2)] bg-gradient-to-b from-card to-background flex flex-col items-center transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_100px_rgba(34,197,94,0.5)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-white font-black text-[10px] md:text-sm rounded-b-2xl uppercase tracking-[0.2em] z-20 whitespace-nowrap shadow-xl">
              OFERTA EXCLUSIVA
            </div>
            
            <div className="space-y-4 pt-6 w-full text-center">
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-balance">
                KIT COMPLETO <span className="text-primary">FIGURINHAS</span> ÁLBUM COPA <span className="text-primary">2026</span>
              </h2>
              
              <div className="flex flex-col items-center justify-center">
                <span className="text-lg md:text-2xl font-bold text-destructive line-through">De R$ 97,00</span>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] md:text-base font-black uppercase tracking-[0.15em] text-primary/80">Por apenas</span>
                  <div className="flex items-baseline gap-1 md:gap-2">
                    <span className="text-xl md:text-4xl font-black mb-4 md:mb-12">R$</span>
                    <span className="text-7xl md:text-[10rem] lg:text-[12rem] font-black text-primary tracking-tighter leading-[0.75]">9,90</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl bg-primary/5 p-6 md:p-10 rounded-[2rem] border border-primary/10">
              {[
                "900+ Figurinhas HD",
                "Acesso Vitalício",
                "Updates Gratuitos",
                "Suporte Premium",
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 font-bold text-base md:text-xl">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="w-full max-w-xl mx-auto">
              <Button asChild size="lg" className="w-full h-16 md:h-24 bg-primary hover:bg-primary/90 text-white font-black py-4 text-xl md:text-3xl rounded-full shadow-lg group transition-all hover:scale-105 active:scale-95 cursor-pointer animate-bounce-gentle">
                <a href="https://ggcheckout.app/checkout/v5/k7wlclAs0sUNo0ft1g3Y" target="_blank" rel="noopener noreferrer">
                  COMPRAR AGORA <ArrowRight className="ml-3 w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-3 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50 w-full flex flex-col items-center">
              <div className="flex items-center gap-4 text-center bg-secondary/30 p-6 md:p-8 rounded-[1.5rem] w-full max-w-lg justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-accent shrink-0" />
                <div className="text-left">
                  <p className="font-black text-lg md:text-xl uppercase tracking-tighter text-white leading-none">Garantia Blindada</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">7 dias para testar ou seu dinheiro de volta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-20 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-black text-center mb-16 md:mb-20 tracking-tighter uppercase leading-none text-balance">Voz da <span className="text-primary">Nação</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Lucas M.", text: "Incrível! Completei o álbum em uma semana imprimindo em casa.", rating: 5 },
              { name: "Carlos R.", text: "A economia é real. Gastaria uns 400 reais em pacotinhos pra ter metade.", rating: 5 },
              { name: "Amanda T.", text: "Melhor presente pro meu filho. Qualidade surpreendente no papel adesivo.", rating: 5 },
            ].map((t, i) => (
              <Card key={i} className="bg-secondary/20 border-border/50 p-8 space-y-6 flex flex-col justify-between rounded-[2rem] hover:border-primary/50 transition-all duration-300 shadow-xl items-center text-center hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="flex gap-1 justify-center">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg font-medium italic text-muted-foreground leading-relaxed">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-border/50 justify-center w-full">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/20 text-primary font-black text-lg">{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left">
                    <p className="font-black text-primary text-sm uppercase tracking-tighter">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground font-bold">Colecionador VIP</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-16 px-4 text-center border-t border-border/50 bg-secondary/5">
        <div className="max-w-6xl mx-auto space-y-6 flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">Mito da Copa</span>
          </div>
          <div className="max-w-2xl mx-auto space-y-2 text-center opacity-60">
            <p className="text-xs md:text-sm font-medium">
              © 2025 Mito da Copa. Produto Digital de Acesso Imediato.
            </p>
            <p className="text-[10px] md:text-xs">
              Este produto não possui vínculo oficial com a FIFA ou CBF. Imagens meramente ilustrativas para fins de coleção pessoal.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
