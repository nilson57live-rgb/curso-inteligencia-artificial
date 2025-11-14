"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Award, 
  PlayCircle,
  LogOut,
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const modules = [
    { id: 1, title: "Introdução à Lasy AI", lessons: 5, completed: 5, duration: "45min" },
    { id: 2, title: "Seu Primeiro App", lessons: 6, completed: 3, duration: "1h 20min" },
    { id: 3, title: "Estrutura Avançada de Prompts", lessons: 8, completed: 0, duration: "1h 45min" },
    { id: 4, title: "Personalização", lessons: 7, completed: 0, duration: "1h 30min" },
    { id: 5, title: "Publicação", lessons: 5, completed: 0, duration: "50min" },
    { id: 6, title: "Monetização", lessons: 6, completed: 0, duration: "1h 15min" },
    { id: 7, title: "Casos Reais", lessons: 9, completed: 0, duration: "2h" },
    { id: 8, title: "Escalabilidade", lessons: 7, completed: 0, duration: "1h 40min" },
    { id: 9, title: "Vendas", lessons: 6, completed: 0, duration: "1h 10min" },
    { id: 10, title: "Dicas Avançadas", lessons: 8, completed: 0, duration: "1h 50min" },
  ];

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons, 0);
  const completedLessons = modules.reduce((acc, m) => acc + m.completed, 0);
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-[#111111]">LASY AI na Prática</span>
            </Link>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Mobile */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setSidebarOpen(false)}>
              <div className="bg-white w-80 h-full p-6" onClick={(e) => e.stopPropagation()}>
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Meus Cursos
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Certificados
                  </Button>
                </nav>
              </div>
            </div>
          )}

          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block lg:col-span-1">
            <Card className="p-6 bg-white sticky top-24">
              <nav className="space-y-2">
                <Button variant="default" className="w-full justify-start bg-[#0066FF] hover:bg-[#0052CC]">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Meus Cursos
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-2" />
                  Certificados
                </Button>
              </nav>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Welcome Card */}
            <Card className="p-8 bg-gradient-to-br from-[#0066FF] to-[#0052CC] text-white">
              <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta! 👋</h1>
              <p className="text-white/90 mb-6">Continue de onde parou e complete sua jornada</p>
              
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Progresso Geral</span>
                  <span className="text-sm font-bold">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2 bg-white/30" />
                <p className="text-xs text-white/80 mt-2">
                  {completedLessons} de {totalLessons} aulas concluídas
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-6 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#111111]">{completedLessons}</p>
                    <p className="text-sm text-gray-600">Aulas Concluídas</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#111111]">{totalLessons - completedLessons}</p>
                    <p className="text-sm text-gray-600">Aulas Restantes</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#111111]">0</p>
                    <p className="text-sm text-gray-600">Certificados</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Modules List */}
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Módulos do Curso</h2>
              <div className="space-y-4">
                {modules.map((module) => {
                  const moduleProgress = Math.round((module.completed / module.lessons) * 100);
                  const isCompleted = module.completed === module.lessons;
                  const isInProgress = module.completed > 0 && !isCompleted;
                  const isLocked = module.id > 1 && modules[module.id - 2].completed === 0;

                  return (
                    <Card key={module.id} className="p-6 bg-white hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                              isCompleted ? "bg-green-100 text-green-600" :
                              isInProgress ? "bg-blue-100 text-blue-600" :
                              "bg-gray-100 text-gray-600"
                            }`}>
                              {module.id < 10 ? `0${module.id}` : module.id}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-[#111111]">{module.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>{module.lessons} aulas</span>
                                <span>•</span>
                                <span>{module.duration}</span>
                              </div>
                            </div>
                          </div>

                          {module.completed > 0 && (
                            <div className="mt-4">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-600">Progresso</span>
                                <span className="text-xs font-semibold text-[#0066FF]">{moduleProgress}%</span>
                              </div>
                              <Progress value={moduleProgress} className="h-1.5" />
                            </div>
                          )}
                        </div>

                        <Link href={`/module/${module.id}`}>
                          <Button 
                            disabled={isLocked}
                            className={
                              isCompleted ? "bg-green-600 hover:bg-green-700" :
                              isInProgress ? "bg-[#0066FF] hover:bg-[#0052CC]" :
                              "bg-gray-600 hover:bg-gray-700"
                            }
                          >
                            {isCompleted ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                Revisar
                              </>
                            ) : isInProgress ? (
                              <>
                                <PlayCircle className="w-4 h-4 mr-2" />
                                Continuar
                              </>
                            ) : isLocked ? (
                              "Bloqueado"
                            ) : (
                              <>
                                <PlayCircle className="w-4 h-4 mr-2" />
                                Começar
                              </>
                            )}
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Bonus */}
            <Card className="p-8 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">BÔNUS EXCLUSIVO</div>
                  <h3 className="text-2xl font-bold">App Lista de Tarefas com IA Completo</h3>
                </div>
              </div>
              <p className="text-white/90 mb-4">
                Acesse seu app bônus completo e funcional para aprender na prática.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Acessar Bônus
              </Button>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
