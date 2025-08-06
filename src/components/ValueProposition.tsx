import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, X, Calculator, TrendingUp, Clock, DollarSign } from "lucide-react"

export default function ValueProposition() {
  const comparison = [
    {
      feature: "학습 기간",
      traditional: "3-6개월",
      aivibe: "단 10시간",
      advantage: "95% 시간 단축"
    },
    {
      feature: "총 비용",
      traditional: "300만원+",
      aivibe: "10만원",
      advantage: "97% 비용 절약"
    },
    {
      feature: "학습 방식",
      traditional: "이론 중심",
      aivibe: "실전 프로젝트",
      advantage: "즉시 활용 가능"
    },
    {
      feature: "결과물",
      traditional: "포트폴리오용",
      aivibe: "실서비스 런칭",
      advantage: "수익화 가능"
    },
    {
      feature: "사후 지원",
      traditional: "없음",
      aivibe: "1:1 무제한 질문",
      advantage: "지속 성장"
    }
  ]

  const roiItems = [
    {
      category: "외주 개발비 절약",
      before: "300만원",
      after: "10만원",
      savings: "290만원"
    },
    {
      category: "시간 비용 절약",
      before: "6개월 (180시간)",
      after: "10시간",
      savings: "170시간"
    },
    {
      category: "기회비용 절약",
      before: "아이디어만 있음",
      after: "검증된 MVP",
      savings: "무한대"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            다른 강의와 <span className="gradient-text">뭐가 다른가요?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            기존 코딩 교육의 한계를 뛰어넘는 혁신적인 접근법
          </p>
        </div>

        {/* 비교표 */}
        <Card className="mb-12 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="text-center text-2xl">상세 비교 분석</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">구분</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">기존 코딩 교육</th>
                    <th className="text-center p-4 font-semibold text-primary">AI 바이브 코딩</th>
                    <th className="text-center p-4 font-semibold text-success">개선 효과</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{item.feature}</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <X className="w-4 h-4 text-destructive" />
                          <span className="text-muted-foreground">{item.traditional}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-4 h-4 text-success" />
                          <span className="font-semibold text-primary">{item.aivibe}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <Badge className="bg-success/10 text-success">
                          {item.advantage}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ROI 계산기 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                투자 수익률 (ROI) 계산
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {roiItems.map((item, index) => (
                <div key={index} className="p-4 bg-card rounded-lg">
                  <h4 className="font-semibold mb-2">{item.category}</h4>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-muted-foreground">기존: </span>
                      <span className="line-through text-destructive">{item.before}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">바이브: </span>
                      <span className="font-bold text-primary">{item.after}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <Badge className="bg-success/10 text-success">
                      절약: {item.savings}
                    </Badge>
                  </div>
                </div>
              ))}
              <div className="text-center pt-4 border-t">
                <div className="text-2xl font-bold text-success mb-2">2900% ROI</div>
                <p className="text-sm text-muted-foreground">
                  10만원 투자로 최소 290만원 절약 효과
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-success" />
                장기적 가치 창출
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-success/5 rounded-lg">
                <h4 className="font-semibold text-success mb-2">즉시 효과</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-success" />
                    아이디어를 즉시 MVP로 구현
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-success" />
                    외주 개발비 300만원 절약
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-success" />
                    시장 검증 시간 6개월 → 1주일
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">지속적 효과</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-primary" />
                    새로운 아이디어마다 재활용
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-primary" />
                    팀원들과의 소통 능력 향상
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-primary" />
                    AI 시대 필수 역량 습득
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-warning/5 rounded-lg">
                <h4 className="font-semibold text-warning mb-2">미래 가치</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-warning" />
                    부업/사이드 프로젝트 수익 창출
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-warning" />
                    커리어 전환 기회 확보
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-warning" />
                    창업 성공 확률 대폭 향상
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 보장 정책 */}
        <Card className="bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">🛡️ 안심 보장 정책</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Clock className="w-12 h-12 mx-auto mb-3 text-success" />
                <h4 className="font-bold mb-2">30일 환불 보장</h4>
                <p className="text-sm text-muted-foreground">
                  만족하지 않으면<br />100% 환불해드립니다
                </p>
              </div>
              <div>
                <TrendingUp className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-2">무제한 질문 지원</h4>
                <p className="text-sm text-muted-foreground">
                  수강 후에도 계속<br />1:1 질문 답변 제공
                </p>
              </div>
              <div>
                <DollarSign className="w-12 h-12 mx-auto mb-3 text-warning" />
                <h4 className="font-bold mb-2">추가 비용 없음</h4>
                <p className="text-sm text-muted-foreground">
                  모든 도구와 자료<br />영구 무료 제공
                </p>
              </div>
            </div>
            <Button size="lg" className="mt-8">
              지금 시작하고 290만원 절약하기
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}