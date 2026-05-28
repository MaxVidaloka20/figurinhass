"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, User, Trophy, Download } from 'lucide-react';
import { personalizeStickerWithAI } from '@/ai/flows/personalize-sticker-with-ai';
import Image from 'next/image';

export const AIGenerator = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSticker = async () => {
    if (!photo) return;
    setLoading(true);
    try {
      const response = await personalizeStickerWithAI({
        photoDataUri: photo,
        userName: name || 'CRAQUE'
      });
      setResult(response.stickerDataUri);
    } catch (error) {
      console.error(error);
      alert('Erro ao gerar figurinha. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result;
    link.download = `figurinha-${name || 'mito'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="ai-generator" className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold mb-6">
          <Trophy className="w-3 h-3" /> NOVIDADE EXCLUSIVA COM IA
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Sua Própria <span className="text-primary">Figurinha Oficial</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Faça o upload da sua foto e deixe nossa Inteligência Artificial criar sua figurinha da Seleção Brasileira personalizada.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-card border-border gold-glow">
            <CardHeader>
              <CardTitle className="text-xl">Criar Minha Figurinha</CardTitle>
              <CardDescription>Preencha os dados e escolha sua melhor foto</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-left">
              <div className="space-y-2">
                <Label htmlFor="user-name">Seu Nome na Figurinha</Label>
                <Input
                  id="user-name"
                  placeholder="Ex: Neymar Jr."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-background border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo-upload">Sua Foto</Label>
                <div className="relative group cursor-pointer border-2 border-dashed border-border rounded-lg p-8 transition-colors hover:border-primary/50 text-center">
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {photo ? (
                    <div className="relative w-32 h-32 mx-auto">
                      <Image src={photo} alt="Preview" fill className="object-cover rounded-md" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <User className="w-12 h-12 text-muted-foreground mb-2 group-hover:text-primary transition-colors" />
                      <span className="text-sm text-muted-foreground">Clique para enviar foto</span>
                    </div>
                  )}
                </div>
              </div>
              <Button
                onClick={generateSticker}
                disabled={!photo || loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    GERANDO SUA FIGURINHA...
                  </>
                ) : (
                  'GERAR MINHA FIGURINHA AGORA'
                )}
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-center min-h-[400px]">
            {result ? (
              <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
                <div className="relative w-72 h-[400px] rounded-xl overflow-hidden shadow-2xl gold-glow border-4 border-accent">
                  <Image src={result} alt="Sua Figurinha AI" fill className="object-contain bg-background" />
                </div>
                <Button variant="outline" onClick={handleDownload} className="gap-2">
                  <Download className="w-4 h-4" /> Baixar Figurinha
                </Button>
              </div>
            ) : (
              <div className="text-center p-12 border-2 border-dashed border-border rounded-xl w-full h-[400px] flex flex-col items-center justify-center bg-secondary/20">
                <Trophy className="w-16 h-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Sua figurinha personalizada aparecerá aqui</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
