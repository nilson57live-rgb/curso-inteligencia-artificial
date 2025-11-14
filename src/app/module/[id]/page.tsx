"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  CheckCircle2, 
  PlayCircle, 
  FileText,
  HelpCircle,
  ChevronRight,
  Lock
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ModulePage() {
  const params = useParams();
  const moduleId = parseInt(params.id as string);
  const [completedLessons, setCompletedLessons] = useState<number[]>([1, 2, 3]);
  const [currentLesson, setCurrentLesson] = useState(1);

  const moduleData = {
    1: {
      title: "Introdução à Lasy AI",
      description: "Aprenda os fundamentos da Lasy AI e prepare-se para criar seus primeiros aplicativos",
      lessons: [
        { id: 1, title: "O que é a Lasy AI?", duration: "8min", type: "video" },
        { id: 2, title: "Como funciona a plataforma", duration: "12min", type: "video" },
        { id: 3, title: "Criando sua conta", duration: "5min", type: "video" },
        { id: 4, title: "Interface e recursos", duration: "15min", type: "video" },
        { id: 5, title: "Primeiros passos", duration: "10min", type: "video" },
      ]
    },
    2: {
      title: "Seu Primeiro App",
      description: "Crie seu primeiro aplicativo funcional do zero",
      lessons: [
        { id: 1, title: "Planejando seu app", duration: "10min", type: "video" },
        { id: 2, title: "Estruturando o prompt", duration: "15min", type: "video" },
        { id: 3, title: "Gerando o código", duration: "12min", type: "video" },
        { id: 4, title: "Testando funcionalidades", duration: "18min", type: "video" },
        { id: 5, title: "Ajustes e melhorias", duration: "20min", type: "video" },
        { id: 6, title: "Publicando seu app", duration: "15min", type: "video" },
      ]
    }
  };

  const module = moduleData[moduleId as keyof typeof moduleData] || moduleData[1];
  const progress = Math.round((completedLessons.length / module.lessons.length) * 100);

  const toggleLessonComplete = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-[#0066FF] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Dashboard
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Lessons List */}
          <aside className="lg:col-span-1">
            <Card className="p-6 bg-white sticky top-24">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#111111] mb-2">{module.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                
                <div className="bg-[#F2F2F2] rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-700">Progresso</span>
                    <span className="text-xs font-bold text-[#0066FF]">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-gray-600 mt-2">
                    {completedLessons.length} de {module.lessons.length} aulas
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {module.lessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isCurrent = currentLesson === lesson.id;
                  const isLocked = lesson.id > 1 && !completedLessons.includes(lesson.id - 1);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => !isLocked && setCurrentLesson(lesson.id)}
                      disabled={isLocked}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        isCurrent ? "bg-[#0066FF] text-white" :
                        isCompleted ? "bg-green-50 hover:bg-green-100" :
                        isLocked ? "bg-gray-50 opacity-50 cursor-not-allowed" :
                        "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isCurrent ? "bg-white/20" :
                          isCompleted ? "bg-green-100" :
                          isLocked ? "bg-gray-200" :
                          "bg-white"
                        }`}>
                          {isLocked ? (
                            <Lock className={`w-4 h-4 ${isCurrent ? "text-white" : "text-gray-400"}`} />
                          ) : isCompleted ? (
                            <CheckCircle2 className={`w-4 h-4 ${isCurrent ? "text-white" : "text-green-600"}`} />
                          ) : (
                            <PlayCircle className={`w-4 h-4 ${isCurrent ? "text-white" : "text-[#0066FF]"}`} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold truncate ${
                            isCurrent ? "text-white" : "text-[#111111]"
                          }`}>
                            {lesson.title}
                          </p>
                          <p className={`text-xs ${
                            isCurrent ? "text-white/80" : "text-gray-600"
                          }`}>
                            {lesson.duration}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card className="p-0 bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <PlayCircle className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Vídeo da Aula</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {module.lessons.find(l => l.id === currentLesson)?.title}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-[#111111] mb-2">
                      {module.lessons.find(l => l.id === currentLesson)?.title}
                    </h1>
                    <p className="text-sm text-gray-600">
                      Aula {currentLesson} de {module.lessons.length} • {module.lessons.find(l => l.id === currentLesson)?.duration}
                    </p>
                  </div>
                  <Button
                    onClick={() => toggleLessonComplete(currentLesson)}
                    variant={completedLessons.includes(currentLesson) ? "default" : "outline"}
                    className={completedLessons.includes(currentLesson) ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {completedLessons.includes(currentLesson) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Concluída
                      </>
                    ) : (
                      "Marcar como Concluída"
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tabs - Content */}
            <Card className="p-6 bg-white">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">
                    <FileText className="w-4 h-4 mr-2" />
                    Visão Geral
                  </TabsTrigger>
                  <TabsTrigger value="materials">
                    <FileText className="w-4 h-4 mr-2" />
                    Materiais
                  </TabsTrigger>
                  <TabsTrigger value="quiz">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Quiz
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-3">Sobre esta aula</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Nesta aula você vai aprender os conceitos fundamentais sobre {module.lessons.find(l => l.id === currentLesson)?.title.toLowerCase()}. 
                      Vamos explorar na prática como aplicar esses conhecimentos para criar aplicativos incríveis com a Lasy AI.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#111111] mb-3">O que você vai aprender</h3>
                    <ul className="space-y-2">
                      {[
                        "Conceitos fundamentais e aplicações práticas",
                        "Técnicas avançadas para otimizar resultados",
                        "Exemplos reais e casos de uso",
                        "Dicas e melhores práticas"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="materials" className="mt-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#111111] mb-4">Materiais de Apoio</h3>
                    {[
                      { name: "Slides da Aula.pdf", size: "2.5 MB" },
                      { name: "Código de Exemplo.zip", size: "1.2 MB" },
                      { name: "Checklist de Boas Práticas.pdf", size: "850 KB" }
                    ].map((file, index) => (
                      <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#0066FF]/10 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-[#0066FF]" />
                            </div>
                            <div>
                              <p className="font-semibold text-[#111111]">{file.name}</p>
                              <p className="text-sm text-gray-600">{file.size}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Baixar
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="quiz" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#111111] mb-2">Quiz de Fixação</h3>
                      <p className="text-gray-600 mb-6">Teste seus conhecimentos sobre o conteúdo desta aula</p>
                    </div>

                    <Card className="p-6 bg-[#F2F2F2]">
                      <p className="font-semibold text-[#111111] mb-4">
                        1. Qual é o principal objetivo da Lasy AI?
                      </p>
                      <div className="space-y-2">
                        {[
                          "Criar aplicativos usando inteligência artificial",
                          "Ensinar programação tradicional",
                          "Vender templates prontos",
                          "Hospedar websites"
                        ].map((option, index) => (
                          <button
                            key={index}
                            className="w-full text-left p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </Card>

                    <Button className="w-full bg-[#0066FF] hover:bg-[#0052CC]">
                      Enviar Respostas
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                disabled={currentLesson === 1}
                onClick={() => setCurrentLesson(currentLesson - 1)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Aula Anterior
              </Button>
              <Button
                disabled={currentLesson === module.lessons.length}
                onClick={() => setCurrentLesson(currentLesson + 1)}
                className="bg-[#0066FF] hover:bg-[#0052CC]"
              >
                Próxima Aula
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
