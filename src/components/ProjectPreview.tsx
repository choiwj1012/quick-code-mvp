import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, User, Brain, MapPin, Star } from "lucide-react"

export default function ProjectPreview() {
  const projects = [
    {
      icon: Globe,
      title: "홍보용 랜딩페이지",
      description: "Lovable + Supabase로 제작하는 반응형 웹사이트",
      features: ["반응형 디자인", "폼 데이터 수집", "실시간 배포"],
      difficulty: "초급",
      tech: ["Lovable", "Supabase", "React"],
      useCase: "사업 홍보, 제품 소개"
    },
    {
      icon: User,
      title: "포트폴리오 사이트",
      description: "21st.dev/magic MCP를 활용한 개인 브랜딩 사이트",
      features: ["프로젝트 갤러리", "이력서 페이지", "연락처 폼"],
      difficulty: "초급",
      tech: ["21st.dev", "Magic MCP", "CSS"],
      useCase: "취업 준비, 프리랜서"
    },
    {
      icon: Brain,
      title: "카카오톡 감정분석 웹앱",
      description: "AI API 연동으로 대화 감정을 분석하는 웹 애플리케이션",
      features: ["파일 업로드", "AI 감정 분석", "시각화 차트"],
      difficulty: "중급",
      tech: ["AI API", "Chart.js", "JavaScript"],
      useCase: "데이터 분석, 인사이트 도구"
    },
    {
      icon: MapPin,
      title: "카페 입지선정 SaaS",
      description: "데이터 분석과 시각화를 통한 상권 분석 서비스",
      features: ["지도 연동", "매출 예측", "경쟁 분석"],
      difficulty: "고급",
      tech: ["Google Maps", "D3.js", "Python API"],
      useCase: "창업 컨설팅, 부동산"
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "초급": return "bg-success/10 text-success"
      case "중급": return "bg-warning/10 text-warning"
      case "고급": return "bg-destructive/10 text-destructive"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            10시간으로 이 4가지 프로젝트를 <span className="gradient-text">모두 완성</span>합니다
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            각각 실제 사업에 바로 활용할 수 있는 퀄리티의 웹 애플리케이션을 단계별로 제작합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-warning" />
                    주요 기능
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">사용 기술</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm">
                    <span className="font-medium text-primary">활용 분야:</span>{" "}
                    <span className="text-muted-foreground">{project.useCase}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">🚀 이 모든 것을 단 10시간에!</h3>
            <p className="text-muted-foreground mb-4">
              각 프로젝트를 완성하며 실무에서 바로 써먹을 수 있는 기술을 체득하세요
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="font-bold text-lg text-primary">2-3시간</div>
                <div className="text-muted-foreground">프로젝트당 소요시간</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-secondary">100%</div>
                <div className="text-muted-foreground">실무 활용도</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}