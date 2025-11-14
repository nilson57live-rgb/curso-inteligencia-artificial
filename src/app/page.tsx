"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Rocket, TrendingUp, Shield, BookOpen, Video, Award } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#111111]">LASY AI na Prática</span>
          </div>
          <Button 
            onClick={scrollToCheckout}
            className="bg-[#0066FF] hover:bg-[#0052CC] text-white"
          >
            Garantir Vaga
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#F2F2F2] to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-[#0066FF]/10 text-[#0066FF] px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">LASY READY v2 — STARTER EDITION</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
            LASY AI na Prática — Do Zero à Renda com Apps de Inteligência Artificial
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda a criar aplicativos completos usando inteligência artificial, mesmo sem programar.
          </p>
          
          <Button 
            onClick={scrollToCheckout}
            size="lg"
            className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg px-8 py-6 h-auto"
          >
            Garantir Minha Vaga — R$49,90
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Garantia 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Certificado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Curso - Legal */}
      <section className="py-16 px-4 bg-[#F2F2F2]">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-white border-2 border-gray-200">
            <h2 className="text-2xl font-bold text-[#111111] mb-4">Sobre Este Curso</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Este é um curso <strong>independente</strong> com objetivo puramente <strong>educacional</strong>, 
                criado para ensinar o uso prático da plataforma Lasy AI.
              </p>
              <p>
                A Lasy AI foi criada por <strong>Ruyter Poubel</strong>. Este curso não possui vínculo oficial, 
                patrocínio ou endosso da Lasy AI ou de seus criadores.
              </p>
              <p>
                O conteúdo é baseado em experiência prática e conhecimento público disponível sobre a plataforma.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] text-center mb-12">
            O Que Você Vai Aprender
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: "Criar Apps do Zero",
                description: "Aprenda a criar aplicativos completos sem precisar programar"
              },
              {
                icon: Sparkles,
                title: "Dominar Prompts",
                description: "Técnicas avançadas para comunicar com IA de forma eficiente"
              },
              {
                icon: TrendingUp,
                title: "Monetizar Apps",
                description: "Estratégias práticas para transformar apps em renda"
              },
              {
                icon: Award,
                title: "Criar Profissionalmente",
                description: "Desenvolva apps com qualidade profissional e escalável"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-100">
                <div className="w-12 h-12 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo do Curso */}
      <section className="py-20 px-4 bg-[#F2F2F2]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] text-center mb-4">
            Conteúdo Completo do Curso
          </h2>
          <p className="text-center text-gray-600 mb-12">10 módulos + bônus exclusivo</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Introdução à Lasy AI", desc: "Fundamentos e primeiros passos" },
              { num: "02", title: "Seu Primeiro App", desc: "Crie seu primeiro aplicativo funcional" },
              { num: "03", title: "Estrutura Avançada de Prompts", desc: "Domine a comunicação com IA" },
              { num: "04", title: "Personalização", desc: "Customize apps para suas necessidades" },
              { num: "05", title: "Publicação", desc: "Coloque seus apps no ar" },
              { num: "06", title: "Monetização", desc: "Transforme apps em renda" },
              { num: "07", title: "Casos Reais", desc: "Exemplos práticos do mercado" },
              { num: "08", title: "Escalabilidade", desc: "Cresça seu negócio de apps" },
              { num: "09", title: "Vendas", desc: "Estratégias para vender seus apps" },
              { num: "10", title: "Dicas Avançadas", desc: "Técnicas profissionais" }
            ].map((module, index) => (
              <Card key={index} className="p-6 bg-white border-2 border-gray-200 hover:border-[#0066FF] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0066FF] text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    {module.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-1">{module.title}</h3>
                    <p className="text-gray-600">{module.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bônus */}
          <Card className="mt-8 p-8 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white border-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <div className="text-sm font-semibold mb-1">BÔNUS EXCLUSIVO</div>
                <h3 className="text-2xl font-bold">App Lista de Tarefas com IA Completo</h3>
              </div>
            </div>
            <p className="text-white/90">
              Receba um aplicativo completo e funcional de lista de tarefas com inteligência artificial, 
              pronto para usar e aprender na prática.
            </p>
          </Card>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experimente o curso por 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento. 
            Sem perguntas, sem burocracia.
          </p>
        </div>
      </section>

      {/* CTA Final + Checkout */}
      <section id="checkout" className="py-20 px-4 bg-gradient-to-b from-[#F2F2F2] to-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-white border-2 border-[#0066FF] shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
                Comece Sua Jornada Agora
              </h2>
              <p className="text-xl text-gray-600">
                Acesso imediato a todo conteúdo + bônus exclusivo
              </p>
            </div>

            <div className="bg-[#F2F2F2] rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-gray-700">LASY AI na Prática — Curso Completo</span>
                <span className="text-2xl font-bold text-[#0066FF]">R$ 49,90</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>10 módulos completos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Bônus: App completo de Lista de Tarefas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Certificado de conclusão</span>
                </div>
              </div>
            </div>

            <Link href="/checkout">
              <Button 
                size="lg"
                className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white text-xl py-6 h-auto"
              >
                Garantir Minha Vaga Agora — R$49,90
              </Button>
            </Link>

            <p className="text-center text-sm text-gray-500 mt-4">
              Pagamento seguro • Acesso imediato • Garantia de 7 dias
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#111111] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">LASY AI na Prática</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 LASY AI na Prática. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Curso independente sem vínculo oficial com Lasy AI
          </p>
        </div>
      </footer>
    </div>
  );
}
