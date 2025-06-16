// 料金プランの型定義
export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  href: string;
  cta: string;
  features: string[];
  isFeatured?: boolean;
};

// サイト全体で使用する料金プランのデータ
export const pricingPlans: PricingPlan[] = [
  {
    name: "ライト",
    price: "¥30,000",
    description: "まずはAIの力を体験したい個人オーナー様向け",
    features: [
      "AI集客自動化ツール",
      "SNS投稿テンプレート",
      "月1回のオンライン相談",
    ],
    cta: "このプランで始める",
    href: "/contact",
    isFeatured: false,
  },
  {
    name: "プレミアム",
    price: "¥100,000",
    description: "本格的に経営改善を目指すサロン様向け",
    features: [
      "AI集客自動化ツール",
      "SNS投稿テンプレート",
      "AIによるリピート促進分析",
      "採用サポート",
      "週1回のオンライン相談",
    ],
    cta: "このプランで始める",
    href: "/contact",
    isFeatured: true,
  },
  {
    name: "ダイヤモンド",
    price: "¥300,000",
    description: "業界をリードする次世代サロンを目指す方向け",
    features: [
      "AI集客自動化ツール",
      "SNS投稿テンプレート",
      "AIによるリピート促進分析",
      "採用サポート",
      "専属コンサルタントによる伴走",
      "経営データAI分析レポート",
      "無制限のオンライン相談",
    ],
    cta: "このプランで始める",
    href: "/contact",
    isFeatured: false,
  },
];

// 機能比較表のデータ
export const featureComparison = [
  { feature: "AI集客自動化ツール", light: true, premium: true, diamond: true },
  { feature: "SNS投稿テンプレート", light: true, premium: true, diamond: true },
  { feature: "月1回のオンライン相談", light: true, premium: false, diamond: false },
  { feature: "AIによるリピート促進分析", light: false, premium: true, diamond: true },
  { feature: "採用サポート", light: false, premium: true, diamond: true },
  { feature: "週1回のオンライン相談", light: false, premium: true, diamond: false },
  { feature: "専属コンサルタントによる伴走", light: false, premium: false, diamond: true },
  { feature: "経営データAI分析レポート", light: false, premium: false, diamond: true },
  { feature: "無制限のオンライン相談", light: false, premium: false, diamond: true },
]; 