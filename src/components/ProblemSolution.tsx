import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Zap, DollarSign, Clock, CheckCircle } from "lucide-react"

export default function ProblemSolution() {
  const problems = [
    {
      icon: DollarSign,
      title: "개발자 구할 돈도 시간도 없어서...",
      description: "외주 개발비만 300만원, 수정 요청마다 추가 비용"
    },
    {
      icon: Clock,
      title: "아이디어 검증할 MVP 하나 만드는데 몇 개월?",
      description: "기획부터 개발까지 최소 3-6개월, 시장 기회 놓침"
    },
    {
      icon: AlertCircle,
      title: "코딩 학원 다닐 여유 없는데...",
      description: "6개월 과정에 수백만원, 이론만 배우고 실전 경험 부족"
    }
  ]

  const solutions = [
    {
      icon: Zap,
      title: "AI 바이브 코딩",
      old: "3-6개월",
      new: "단 10시간",
      improvement: "95% 시간 단축"
    },
    {
      icon: DollarSign,
      title: "비용 효율성",
      old: "300만원+",
      new: "10만원",
      improvement: "97% 비용 절약"
    },
    {
      icon: CheckCircle,
      title: "실전 중심",
      old: "이론 암기",
      new: "프로젝트 완성",
      improvement: "즉시 활용 가능"
    }
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            이런 고민 있으셨죠?
          </h2>
          <p className="text-xl text-muted-foreground">
            많은 예비 창업가들이 같은 문제로 고민하고 있습니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <problem.icon className="w-12 h-12 mx-auto mb-4 text-destructive" />
                <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-semibold">
            <Zap className="w-5 h-5" />
            AI 바이브 코딩이 해답입니다
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">기존 방법 vs AI 바이브 코딩</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center">
                <solution.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold text-lg mb-4">{solution.title}</h4>
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    기존: <span className="line-through">{solution.old}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    바이브 코딩: {solution.new}
                  </div>
                  <div className="bg-success/10 text-success text-sm font-medium px-3 py-1 rounded-full">
                    {solution.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}