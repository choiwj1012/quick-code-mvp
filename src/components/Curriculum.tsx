import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function Curriculum() {
  const chapters = [
    {
      number: "1",
      title: "AI 도구 세팅 & 기본 개념",
      duration: "1시간",
      content: [
        "Cursor AI, Claude, GPT 설치 및 설정",
        "바이브 코딩 방법론 이해",
        "첫 번째 AI 프롬프트 작성"
      ],
      outcome: "AI 도구 완벽 활용 환경 구축"
    },
    {
      number: "2", 
      title: "Lovable로 랜딩페이지 제작",
      duration: "1.5시간",
      content: [
        "Lovable 플랫폼 활용법",
        "반응형 디자인 구현",
        "컴포넌트 기반 개발"
      ],
      outcome: "사업용 랜딩페이지 완성"
    },
    {
      number: "3",
      title: "Supabase 데이터베이스 연동", 
      duration: "1시간",
      content: [
        "Supabase 프로젝트 생성",
        "데이터베이스 스키마 설계",
        "실시간 데이터 연동"
      ],
      outcome: "폼 데이터 수집 시스템 구축"
    },
    {
      number: "4",
      title: "21st.dev로 포트폴리오 사이트",
      duration: "1.5시간", 
      content: [
        "Magic MCP 활용법",
        "개인 브랜딩 페이지 디자인",
        "프로젝트 갤러리 구성"
      ],
      outcome: "전문가용 포트폴리오 완성"
    },
    {
      number: "5",
      title: "AI API 연동 웹앱 개발",
      duration: "2시간",
      content: [
        "OpenAI API 키 설정",
        "카톡 대화 파일 분석 로직",
        "감정 분석 결과 시각화"
      ],
      outcome: "감정분석 웹앱 완성"
    },
    {
      number: "6",
      title: "지도 API와 데이터 시각화",
      duration: "1.5시간",
      content: [
        "Google Maps API 연동",
        "공공데이터 활용법", 
        "Chart.js로 데이터 차트 생성"
      ],
      outcome: "상권분석 대시보드 기초"
    },
    {
      number: "7",
      title: "SaaS 비즈니스 모델 구현",
      duration: "1시간",
      content: [
        "사용자 인증 시스템",
        "구독 결제 시스템 연동",
        "관리자 대시보드 구성"
      ],
      outcome: "수익화 가능한 SaaS 완성"
    },
    {
      number: "8",
      title: "배포 및 도메인 연결",
      duration: "30분",
      content: [
        "Vercel/Netlify 배포",
        "커스텀 도메인 연결",
        "SSL 인증서 적용"
      ],
      outcome: "실서비스 런칭 완료"
    },
    {
      number: "9",
      title: "운영 및 확장 전략",
      duration: "30분",
      content: [
        "구글 애널리틱스 연동",
        "사용자 피드백 수집",
        "기능 확장 계획 수립"
      ],
      outcome: "지속 성장 가능한 서비스"
    }
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">9개 챕터로 완성하는</span><br />
            실전 코딩 여정
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            체계적인 단계별 학습으로 확실한 결과물을 만들어갑니다
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {chapters.map((chapter, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"></div>
              <CardHeader className="pl-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {chapter.number}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{chapter.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{chapter.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="hidden md:block">
                    챕터 {chapter.number}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pl-8 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    학습 내용
                  </h4>
                  <ul className="space-y-2">
                    {chapter.content.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 mt-1 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-success/5 rounded-lg p-4">
                  <h4 className="font-semibold text-success mb-2">완성 결과물</h4>
                  <p className="text-sm text-muted-foreground">{chapter.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎯 이 모든 과정을 단 10시간에</h3>
            <p className="text-lg opacity-90 mb-6">
              각 챕터별 명확한 목표와 즉시 활용 가능한 결과물로<br />
              체계적이고 효율적인 학습이 가능합니다
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">9</div>
                <div className="text-sm opacity-80">체계적 챕터</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm opacity-80">완성 프로젝트</div>
              </div>
              <div>
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm opacity-80">총 학습시간</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-80">실무 활용도</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}