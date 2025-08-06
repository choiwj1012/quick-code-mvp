import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "정말 비전공자도 가능한가요?",
      answer: "네, 가능합니다! 강의는 완전 초보자 기준으로 제작되었습니다. 복잡한 코딩 지식 없이도 AI 도구들을 활용해 결과물을 만들 수 있도록 설계했습니다. 실제로 비전공자 수강생들이 첫날부터 웹사이트를 만들어내고 있습니다.",
      category: "학습"
    },
    {
      question: "10시간 만에 퀄리티 있는 결과물이 나올까요?",
      answer: "AI 바이브 코딩의 핵심은 효율성입니다. 기존에 몇 주 걸리던 작업을 AI 도구로 몇 시간만에 완성할 수 있습니다. 강의에서 만드는 4개 프로젝트는 모두 실제 서비스 런칭이 가능한 수준입니다. 샘플 결과물을 미리 확인해보세요.",
      category: "결과물"
    },
    {
      question: "수강 후 지속적인 지원이 있나요?",
      answer: "네, 수강 후에도 계속 지원합니다. 1:1 질문 채널을 통해 무제한으로 질문할 수 있고, 새로운 AI 도구나 업데이트 정보도 지속적으로 공유드립니다. 또한 수강생 커뮤니티에서 서로 도움을 주고받을 수 있습니다.",
      category: "지원"
    },
    {
      question: "다른 코딩 강의와 뭐가 다른가요?",
      answer: "기존 강의는 문법을 외우고 이론을 배우는데 집중합니다. 저희는 AI 도구를 활용해 바로 결과물을 만들면서 필요한 지식을 체득하는 방식입니다. 암기보다는 활용, 이론보다는 실전에 초점을 맞춰 실무에서 바로 써먹을 수 있습니다.",
      category: "차별점"
    },
    {
      question: "만든 웹사이트를 실제 사업에 쓸 수 있나요?",
      answer: "물론입니다! 강의에서 만드는 모든 프로젝트는 상용 서비스 수준입니다. 실제로 수강생들이 만든 랜딩페이지로 사업을 시작하고, 포트폴리오 사이트로 프리랜서 일을 받고 있습니다. 도메인 연결, 결제 시스템 등 실서비스에 필요한 모든 내용을 다룹니다.",
      category: "활용"
    },
    {
      question: "컴퓨터 사양이나 특별한 프로그램이 필요한가요?",
      answer: "기본적인 웹브라우저만 있으면 됩니다. 사용하는 AI 도구들(Cursor, Lovable, Supabase 등)은 모두 클라우드 기반이라 별도 설치가 필요 없습니다. 윈도우, 맥, 크롬북 어떤 환경에서도 학습 가능합니다.",
      category: "기술"
    },
    {
      question: "혼자서도 따라할 수 있을까요?",
      answer: "강의는 완전 독학이 가능하도록 설계되었습니다. 단계별로 상세하게 설명하고, 막히는 부분은 1:1 질문으로 해결할 수 있습니다. 또한 각 챕터마다 체크리스트를 제공해 스스로 진도를 확인할 수 있습니다.",
      category: "학습"
    },
    {
      question: "환불 정책은 어떻게 되나요?",
      answer: "30일 무조건 환불 보장입니다. 어떤 이유든 만족하지 않으시면 전액 환불해드립니다. 또한 수강료보다 아낄 수 있는 비용(외주 개발비 등)이 훨씬 크기 때문에 실질적으로 손해볼 일이 없습니다.",
      category: "정책"
    },
    {
      question: "강의 수료 후 취업이나 창업에 도움이 될까요?",
      answer: "직접적인 도움이 됩니다. 포트폴리오 사이트는 취업 시 강력한 어필 포인트가 되고, MVP 제작 능력은 창업 시 필수 역량입니다. 또한 AI 도구 활용 능력은 모든 업무에서 생산성을 높여주는 미래 필수 스킬입니다.",
      category: "진로"
    },
    {
      question: "업데이트나 신기술 반영은 어떻게 되나요?",
      answer: "AI 기술이 빠르게 발전하는 만큼, 강의 내용도 지속적으로 업데이트됩니다. 새로운 도구나 기능이 나오면 추가 강의를 무료로 제공하고, 수강생 커뮤니티를 통해 최신 정보를 공유합니다.",
      category: "업데이트"
    }
  ]

  const categories = ["전체", "학습", "결과물", "지원", "차별점", "활용", "기술", "정책", "진로", "업데이트"]
  const [selectedCategory, setSelectedCategory] = useState("전체")

  const filteredFAQs = selectedCategory === "전체" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">자주 묻는 질문</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            수강을 고민하시는 분들이 가장 많이 묻는 질문들을 정리했습니다
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* FAQ 아이템들 */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardHeader 
                className="cursor-pointer select-none"
                onClick={() => toggleItem(index)}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {faq.category}
                    </Badge>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              
              {openItems.includes(index) && (
                <CardContent className="pt-0 animate-fade-in">
                  <div className="pl-8 pr-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* 추가 질문 유도 */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">💬 더 궁금한 것이 있으신가요?</h3>
              <p className="text-muted-foreground mb-6">
                언제든지 1:1 상담을 통해 개별 질문에 답변드립니다.<br />
                부담 없이 문의해보세요!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Badge className="bg-primary/10 text-primary px-4 py-2">
                  📞 전화 상담: 평일 10:00-18:00
                </Badge>
                <Badge className="bg-secondary/10 text-secondary px-4 py-2">
                  💬 카카오톡: 24시간 접수
                </Badge>
                <Badge className="bg-warning/10 text-warning px-4 py-2">
                  📧 이메일: 12시간 내 답변
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}