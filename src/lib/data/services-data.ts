// --- Type Definitions for Service Sections ---
type TextImageSection = {
  type: 'text-image';
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
};

type FullImageSection = {
    type: 'full-image';
    imageUrl: string;
    imageAlt: string;
};

type BenefitsSection = {
    type: 'benefits';
    title: string;
    items: string[];
};

type ServiceSection = TextImageSection | FullImageSection | BenefitsSection;

export type Service = {
  id: string;
  name: string;
  title: string;
  catchphrase: string;
  heroImageUrl: string;
  relatedAppIds: string[];
  sections: ServiceSection[];
};

// --- Data ---
export const services: Service[] = [
  {
    id: "集客支援",
    name: "集客支援",
    title: "集客の自動化と最適化で、理想のお客様を呼び込む",
    catchphrase: "月10時間の作業が、たった1時間に。",
    heroImageUrl: "/images/1200x600/feature-card-1200x600-1.png",
    relatedAppIds: ["google-post-app", "hpb-review-ai", "style-repost-app", "blog-automation-app"],
    sections: [
      {
        type: 'text-image',
        title: "月10時間の作業が、たった1時間に。",
        content: "「集客に時間をかけられない」「広告の費用対効果が悪い」そんな悩みを、協会が提供する集客自動化ツールが解決。ホットペッパービューティーを主軸に、各種集客ツールと連携し、これまで月間10時間以上かかっていた作業をわずか1時間に短縮。しかも、成果はこれまで以上を目指せます。",
        imageUrl: "/images/feature-item-600x400-1.png",
        imageAlt: "集客作業の効率化イメージ"
      },
      {
        type: 'text-image',
        title: "プロのノウハウを、あなたの手に。",
        content: "美容室集客支援のプロフェッショナル「サイバーアクセル・アドバイザーズ」が全面監修。最新のアルゴリズムに対応したホットペッパービューティー攻略講座や、ローカル検索で優位に立つためのGoogleマップ対策講座など、実践的なノウハウを提供します。",
        imageUrl: "/images/feature-item-600x400-2.png",
        imageAlt: "講座・セミナーのイメージ",
        imageLeft: true,
      },
      {
        type: 'benefits',
        title: "主なサポート内容",
        items: [
          "集客自動化ツールの提供",
          "ホットペッパービューティー攻略講座",
          "Googleマップ(MEO)対策講座",
          "Webマーケティング全般の相談",
        ],
      }
    ]
  },
  {
    id: "リピート-ltv向上",
    name: "リピート・LTV向上",
    title: "顧客との絆を深め、生涯価値を最大化する",
    catchphrase: "AIが実現する、次世代の顧客管理",
    heroImageUrl: "/images/1200x600/feature-card-1200x600-2.png",
    relatedAppIds: ["repeat-analysis-app", "review-support-ai", "counseling-analysis-app"],
    sections: [
        {
            type: 'text-image',
            title: "なぜお客様は再来店しないのか？",
            content: "サービスの質だけでは、お客様は戻ってきません。大切なのは、一人ひとりに寄り添った継続的なコミュニケーション。協会が独自開発した「生成AI×独自プログラム」ツールが、顧客とのエンゲージメントを劇的に高めます。",
            imageUrl: "/images/feature-item-600x400-3.png",
            imageAlt: "顧客とのコミュニケーションイメージ"
        },
        {
            type: 'text-image',
            title: "AIが実現する、次世代の顧客管理",
            content: "カウンセリング内容、施術履歴、さらには口コミまでAIが多角的に分析。顧客一人ひとりのニーズを深く理解し、最適なタイミングでの再来店促進や、パーソナライズされた情報提供を自動化。動画で学べるサポート環境も充実しており、店舗のレベルに合わせた活用が可能です。",
            imageUrl: "/images/feature-item-600x400-4.png",
            imageAlt: "AIによる顧客分析イメージ",
            imageLeft: true,
        },
        {
            type: 'benefits',
            title: "主なサポート内容",
            items: [
              "生成AI活用リピート対策ツール",
              "カウンセリング・入客分析サポート",
              "口コミ分析サポート",
              "動画学習コンテンツと個別相談",
            ],
          }
    ]
  },
  {
    id: "採用-組織力強化",
    name: "採用・組織力強化",
    title: "「辞めない組織」をつくり、事業成長を加速させる",
    catchphrase: "「採用してもすぐ辞めてしまう」を解決",
    heroImageUrl: "/images/1200x600/feature-card-1200x600-3.png",
    relatedAppIds: ["style-title-generator", "style-image-ai-app"],
    sections: [
        {
            type: 'text-image',
            title: "「採用してもすぐ辞めてしまう」を解決",
            content: "人材不足とオーバーストア化が進む中、「良い人材の採用」と「定着」は経営の最重要課題。協会は、数々の求人成功事例から逆算して開発した時短ツールと、従業員のエンゲージメントを高める仕組みを提供します。",
            imageUrl: "/images/feature-item-600x400-5.png",
            imageAlt: "チームのエンゲージメントイメージ"
        },
        {
            type: 'text-image',
            title: "AIが採用と定着を科学する",
            content: "生成AIを活用した求人票作成ツールで、魅力的な募集要項を瞬時に作成。さらに、従業員エンゲージメントツールで、スタッフ一人ひとりの満足度やモチベーションを可視化。問題が深刻化する前に、的確な対策を打つことが可能になります。",
            imageUrl: "/images/feature-item-600x400-6.png",
            imageAlt: "エンゲージメントツールのダッシュボードイメージ",
            imageLeft: true,
        },
        {
            type: 'benefits',
            title: "主なサポート内容",
            items: [
              "生成AI活用 求人対策ツール",
              "求人成功事例の共有と学習講座",
              "従業員エンゲージメントツール",
              "「辞めない組織」作りのコンサルティング",
            ],
          }
    ]
  },
]; 