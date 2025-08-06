import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Clock, User } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative z-10 text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            런칭 기념 특가
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="gradient-text">아이디어만 있다면,</span><br />
            <span className="text-foreground">10시간 후 당신만의</span><br />
            <span className="text-foreground">웹사이트가 완성됩니다</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            비전공자도 AI와 함께하는 바이브 코딩으로<br />
            MVP부터 포트폴리오까지 완성하세요
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-sm">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-semibold">단 10시간</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-sm">
            <User className="w-5 h-5 text-secondary" />
            <span className="font-semibold">비전공자 OK</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-3 rounded-lg shadow-sm">
            <Sparkles className="w-5 h-5 text-warning" />
            <span className="font-semibold">실전 프로젝트 4개</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 group">
            무료 학습자료 받기
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            지금 바로 시작하기
          </Button>
        </div>

        <div className="mt-12 relative">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto shadow-lg border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">10시간</div>
                <div className="text-sm text-muted-foreground">총 학습시간</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">4개</div>
                <div className="text-sm text-muted-foreground">실전 프로젝트</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning">10만원</div>
                <div className="text-sm text-muted-foreground">강의 가격</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15년차</div>
                <div className="text-sm text-muted-foreground">강사 경력</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}