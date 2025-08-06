import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Briefcase, Users, Star, ArrowRight } from "lucide-react"

export default function Instructor() {
  const achievements = [
    {
      icon: Briefcase,
      title: "15년차 제품 기획 전문가",
      description: "대기업부터 스타트업까지 다양한 프로젝트 경험"
    },
    {
      icon: Users,
      title: "500+ 프로젝트 런칭",
      description: "웹서비스, 모바일앱, SaaS 등 다양한 디지털 제품 기획"
    },
    {
      icon: Award,
      title: "AI 도구 얼리어답터",
      description: "GPT-3 출시 초기부터 실무에 AI 도구 적극 활용"
    },
    {
      icon: Star,
      title: "교육 경험 1000시간+",
      description: "기업 강의, 온라인 교육, 1:1 멘토링 다수"
    }
  ]

  const projects = [
    {
      title: "이커머스 플랫폼",
      company: "대형 리테일 기업",
      result: "월 거래액 100억원 달성",
      tech: "React, Node.js, AWS"
    },
    {
      title: "핀테크 SaaS",
      company: "금융 스타트업",
      result: "시리즈 A 투자 유치",
      tech: "Vue.js, Python, GCP"
    },
    {
      title: "에듀테크 플랫폼",
      company: "교육 기업",
      result: "사용자 10만명 돌파",
      tech: "Next.js, Supabase"
    }
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">15년차 제품 기획자가</span><br />
            직접 알려드립니다
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            이론보다 실전, 암기보다 활용<br />
            현직에서 바로 써먹는 실무 노하우를 전수합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* 강사 프로필 */}
          <div className="lg:col-span-1">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  김
                </div>
                <h3 className="text-2xl font-bold mb-2">김민성</h3>
                <p className="text-muted-foreground mb-4">Product Manager & AI Educator</p>
                <div className="space-y-2 mb-6">
                  <Badge variant="outline" className="mx-1">15년차 PM</Badge>
                  <Badge variant="outline" className="mx-1">AI 전문가</Badge>
                  <Badge variant="outline" className="mx-1">교육자</Badge>
                </div>
                <Button className="w-full">
                  1:1 상담 신청하기
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 경력 및 성과 */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">전문성 & 경험</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <achievement.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">대표 프로젝트 성과</h3>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <Card key={index} className="p-4">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div>
                          <h4 className="font-semibold">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-success">{project.result}</div>
                          <div className="text-xs text-muted-foreground">{project.tech}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 교육 철학 */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-none">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">💡 강사의 교육 철학</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                "기술은 도구일 뿐, 중요한 건 문제를 해결하는 사고력입니다"
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-card rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">실전 중심</h4>
                <p className="text-sm text-muted-foreground">
                  이론보다는 바로 써먹을 수 있는<br />실무 스킬에 집중
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold mb-2">문제 해결</h4>
                <p className="text-sm text-muted-foreground">
                  단순 기능 구현이 아닌<br />비즈니스 문제 해결 관점
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">즉시 활용</h4>
                <p className="text-sm text-muted-foreground">
                  수강 당일부터<br />실제 프로젝트에 적용 가능
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
                "15년간 수백 개의 프로젝트를 진행하며 깨달은 것은, 
                기술의 깊이보다 적절한 도구의 활용이 더 중요하다는 것입니다. 
                AI 바이브 코딩은 비전공자도 전문가처럼 일할 수 있게 해주는 
                가장 효율적인 방법입니다."
              </blockquote>
              <div className="mt-4 font-semibold">- 김민성 강사</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}