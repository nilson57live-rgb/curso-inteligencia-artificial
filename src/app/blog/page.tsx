"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, TrendingUp, Lightbulb, Rocket } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Como a Inteligência Artificial Está Revolucionando o Desenvolvimento de Apps",
      excerpt: "Descubra como a IA está democratizando a criação de aplicativos e permitindo que qualquer pessoa transforme ideias em realidade.",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      category: "Tendências",
      icon: TrendingUp,
    },
    {
      id: 2,
      title: "5 Dicas Essenciais para Criar Prompts Eficientes",
      excerpt: "Aprenda técnicas práticas para se comunicar melhor com IAs e obter resultados profissionais em seus projetos.",
      date: "10 de Janeiro, 2024",
      readTime: "7 min",
      category: "Tutorial",
      icon: Lightbulb,
    },
    {
      id: 3,
      title: "Do Zero à Primeira Venda: Como Monetizar Seus Apps de IA",
      excerpt: "Estratégias comprovadas para transformar seus aplicativos em fontes de renda recorrente.",
      date: "5 de Janeiro, 2024",
      readTime: "8 min",
      category: "Monetização",
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#0066FF] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Voltar para página inicial
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#F2F2F2] to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            Blog LASY AI na Prática
          </h1>
          <p className="text-xl text-gray-600">
            Dicas, tutoriais e insights sobre desenvolvimento de apps com inteligência artificial
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-100">
                <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <article.icon className="w-6 h-6 text-[#0066FF]" />
                </div>
                
                <div className="text-sm text-[#0066FF] font-semibold mb-2">
                  {article.category}
                </div>
                
                <h2 className="text-xl font-bold text-[#111111] mb-3">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white">
                  Ler Artigo
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#F2F2F2]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#111111] mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Aprenda na prática com nosso curso completo
          </p>
          <Link href="/">
            <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052CC] text-white">
              Ver Curso Completo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#111111] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 text-sm">
            © 2024 LASY AI na Prática. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
