import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Brain, Globe, Database, Star } from "lucide-react"

export default function Tools() {
  const tools = [
    {
      icon: Zap,
      name: "Cursor AI",
      category: "AI 코드 에디터",
      description: "전문 개발자처럼 코드를 자동으로 작성하고 수정해주는 AI 에디터",
      features: [
        "실시간 코드 자동완성",
        "버그 자동 수정",
        "코드 리팩토링",
        "자연어로 코드 생성"
      ],
      useCase: "복잡한 로직도 대화하듯 코딩",
      color: "text-primary"
    },
    {
      icon: Brain,
      name: "Claude & GPT",
      category: "AI 어시스턴트",
      description: "기획서 작성부터 콘텐츠 생성까지 모든 텍스트 작업을 도와주는 AI",
      features: [
        "사업 기획서 자동 작성",
        "웹사이트 콘텐츠 생성",
        "UI/UX 가이드 제공",
        "마케팅 문구 제작"
      ],
      useCase: "아이디어를 구체적인 계획으로",
      color: "text-secondary"
    },
    {
      icon: Globe,
      name: "Lovable",
      category: "노코드 웹 빌더",
      description: "코딩 없이도 전문가 수준의 웹사이트를 빠르게 제작할 수 있는 플랫폼",
      features: [
        "드래그 앤 드롭 인터페이스",
        "반응형 자동 최적화",
        "실시간 미리보기",
        "원클릭 배포"
      ],
      useCase: "몇 분만에 랜딩페이지 완성",
      color: "text-warning"
    },
    {
      icon: Database,
      name: "Supabase",
      category: "백엔드 서비스",
      description: "복잡한 서버 구축 없이 데이터베이스와 인증을 쉽게 구현하는 백엔드 플랫폼",
      features: [
        "실시간 데이터베이스",
        "사용자 인증 시스템",
        "파일 저장소",
        "API 자동 생성"
      ],
      useCase: "견고한 백엔드를 5분만에",
      color: "text-success"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">최신 AI 도구로</span><br />
            전문 개발자처럼
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            복잡한 코딩 지식 없이도 AI의 힘으로 전문가 수준의 결과물을 만들어보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-muted ${tool.color}`}>
                    <tool.icon className="w-8 h-8" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
                <p className="text-muted-foreground">{tool.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Star className="w-4 h-4 text-warning" />
                    핵심 기능
                  </h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3">
                    <div className="text-sm font-medium text-primary mb-1">실무 활용</div>
                    <div className="text-sm text-muted-foreground">{tool.useCase}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">
            기존 개발 방식 vs AI 바이브 코딩
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-destructive mb-4">😰 기존 방식의 한계</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">복잡한 문법 암기</div>
                    <div className="text-xs text-muted-foreground">HTML, CSS, JavaScript 문법을 하나하나 외워야 함</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">긴 학습 시간</div>
                    <div className="text-xs text-muted-foreground">실무 수준까지 최소 6개월~1년 소요</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">높은 진입 장벽</div>
                    <div className="text-xs text-muted-foreground">비전공자에게는 거의 불가능한 영역</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-success mb-4">🚀 AI 바이브 코딩의 혁신</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">자연어로 대화</div>
                    <div className="text-xs text-muted-foreground">"이런 기능 만들어줘"라고 말하면 AI가 코드 생성</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">압축적 학습</div>
                    <div className="text-xs text-muted-foreground">핵심만 골라 10시간에 실무 활용 가능</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">누구나 가능</div>
                    <div className="text-xs text-muted-foreground">비전공자도 첫날부터 결과물 제작</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}