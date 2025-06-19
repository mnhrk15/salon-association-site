import { PageHeader } from "@/components/common/PageHeader";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { pricingPlans } from "@/lib/plans";
import { AlertTriangle } from "lucide-react";

// 通常プランからダイヤモンド会員を除外し、特別プランの対象を定義
const specialPlans = pricingPlans.filter(plan => plan.name !== '賛助会員' && plan.name !== 'ダイヤモンド会員');
const diamondPlan = pricingPlans.find(plan => plan.name === 'ダイヤモンド会員');

export default function SpecialPlanPage() {
    return (
        <>
            <PageHeader
                title="特別プランのご案内"
                description="活動協力店舗様・サイバーアクセルご契約店舗様向けの特別なご案内です。"
                imageUrl="/images/page-header-1920x600.png"
            />
             <section className="py-24 bg-background">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-center font-serif text-3xl font-bold mb-12">会員プラン特別価格</h2>
                    <Card className="overflow-x-auto mb-12">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[30%]">プラン名</TableHead>
                                    <TableHead>月額</TableHead>
                                    <TableHead>特別条件</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {specialPlans.map((plan) => (
                                <TableRow key={plan.name}>
                                    <TableCell className="font-medium">{plan.name}</TableCell>
                                    <TableCell>{parseInt(plan.price).toLocaleString()}円</TableCell>
                                    <TableCell>
                                        サイバーアクセル契約店舗は <span className="font-bold text-primary">50% OFF</span>
                                        <br/>
                                        または活動協力店舗は毎月 <span className="font-bold text-primary">50%バック</span>
                                    </TableCell>
                                </TableRow>
                                ))}
                                {diamondPlan && (
                                     <TableRow>
                                        <TableCell className="font-medium">{diamondPlan.name}</TableCell>
                                        <TableCell>{parseInt(diamondPlan.price).toLocaleString()}円</TableCell>
                                        <TableCell>
                                            サイバーアクセル契約店舗は <span className="font-bold text-primary">50% OFF</span>
                                            <br />
                                            または活動協力店舗は毎月 <span className="font-bold text-primary">50%バック</span>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Card>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg dark:bg-blue-900/20 dark:border-blue-500">
                        <div className="flex">
                        <div className="flex-shrink-0">
                            <AlertTriangle className="h-5 w-5 text-blue-400 dark:text-blue-500" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200">注意事項</h3>
                            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                            <ul className="list-disc space-y-2 pl-5">
                                <li>表示価格はすべて税抜き価格です。別途消費税がかかります。</li>
                                <li>1店舗あたりスタッフ10名までを「1店舗」としてカウントします。</li>
                                <li>スタッフが11名以上になる場合、超過10名ごとに「＋1店舗」として追加計算されます。</li>
                                <li>契約外での不正活用が発覚した場合、契約開始から1店舗または1名ごとに月額50,000円を請求致します。</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
