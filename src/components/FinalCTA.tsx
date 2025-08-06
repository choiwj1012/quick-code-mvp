import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Shield, Star, Zap, Gift } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">지금 시작하면</span><br />
            내일 아침에 새로운 당신
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            미루면 미룰수록 기회는 사라집니다.<br />
            오늘 결정하고 내일부터 달라진 삶을 시작하세요.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 메인 가격 카드 */}
          <Card className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white mb-8">
            <div className="absolute top-4 right-4">
              <Badge className="bg-warning text-warning-foreground animate-pulse">
                런칭 기념 특가
              </Badge>
            </div>
            
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="text-lg opacity-90 mb-2">AI 바이브 코딩 부트캠프</div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl line-through opacity-60">200,000원</span>
                  <span className="text-5xl md:text-6xl font-bold">100,000원</span>
                </div>
                <div className="text-xl opacity-90">50% 할인 (런칭 기념)</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left space-y-3">
                  <h4 className="font-bold text-lg mb-4">포함 내용</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      <span>10시간 완성 강의 (9챕터)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>실전 프로젝트 4개</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>1:1 무제한 질문 지원</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4" />
                      <span>AI 프롬프트 템플릿 제공</span>
                    </div>
                  </div>
                </div>

                <div className="text-left space-y-3">
                  <h4 className="font-bold text-lg mb-4">특별 혜택</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>30일 환불 보장</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>평생 업데이트 무료</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>수강생 커뮤니티 참여</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4" />
                      <span>추가 도구 및 자료 제공</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group">
                  지금 바로 시작하기
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                  1:1 상담 신청
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 결제 옵션 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="text-center p-6">
              <h3 className="font-bold text-lg mb-4">💳 일시불 결제</h3>
              <div className="text-3xl font-bold text-primary mb-2">100,000원</div>
              <p className="text-sm text-muted-foreground mb-4">
                50% 할인가 (정가 20만원)
              </p>
              <Button className="w-full">
                일시불로 결제하기
              </Button>
            </Card>

            <Card className="text-center p-6">
              <h3 className="font-bold text-lg mb-4">📅 분할 결제</h3>
              <div className="text-3xl font-bold text-secondary mb-2">25,000원</div>
              <p className="text-sm text-muted-foreground mb-4">
                4개월 무이자 분할
              </p>
              <Button variant="outline" className="w-full">
                분할 결제하기
              </Button>
            </Card>
          </div>

          {/* 긴급성 요소 */}
          <Card className="bg-warning/10 border-warning/20">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-warning" />
                <h3 className="text-xl font-bold">⏰ 런칭 기념 특가 마감 임박!</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                50% 할인 혜택은 <strong>이번 주까지만</strong> 제공됩니다.<br />
                다음 주부터는 정가 20만원으로 판매됩니다.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <Badge className="bg-warning/20 text-warning">
                  🎁 런칭 기념 50% 할인
                </Badge>
                <Badge className="bg-destructive/20 text-destructive">
                  📅 이번 주 마감
                </Badge>
                <Badge className="bg-primary/20 text-primary">
                  👥 선착순 100명
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* 최종 보장 */}
          <div className="text-center mt-8">
            <Card className="max-w-2xl mx-auto bg-success/5 border-success/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-success mb-4">🛡️ 100% 만족 보장</h3>
                <p className="text-muted-foreground mb-4">
                  30일 동안 수강해보시고 만족하지 않으면<br />
                  <strong>이유를 묻지 않고 100% 환불</strong>해드립니다.
                </p>
                <div className="text-sm text-muted-foreground">
                  "위험 부담은 저희가, 성과는 여러분이 가져가세요"
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 마지막 CTA */}
          <div className="text-center mt-12">
            <p className="text-2xl font-bold mb-6">
              🚀 1년 후 당신은 어디에 있을까요?
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              똑같은 자리에서 똑같은 고민을 하고 있을까요?<br />
              아니면 AI 바이브 코딩으로 새로운 가능성을 열어갈까요?
            </p>
            <Button size="lg" className="text-xl px-12 py-8 animate-pulse">
              지금 시작해서 인생을 바꾸기
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}