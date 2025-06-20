import { PageHeader } from "@/components/common/PageHeader";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHeader
                title="プライバシーポリシー"
                description="当協会の個人情報保護方針について"
                imageUrl="/images/page-header-1920x600.png"
            />
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose dark:prose-invert max-w-none">
                        <h2>1. 個人情報の定義</h2>
                        <p>
                            本プライバシーポリシーにおいて、「個人情報」とは、個人情報の保護に関する法律（平成十五年法律第五十七号、以下「個人情報保護法」といいます。）第二条第一項に定める個人情報をいいます。
                        </p>

                        <h2>2. 個人情報の取得</h2>
                        <p>
                            当協会は、適法かつ公正な手段によって個人情報を取得します。
                        </p>

                        <h2>3. 個人情報の利用目的</h2>
                        <p>
                            当協会は、取得した個人情報を以下の目的で利用します。
                        </p>
                        <ul>
                            <li>当協会のサービスの提供・運営のため</li>
                            <li>会員様からのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                            <li>上記の利用目的に付随する目的</li>
                        </ul>

                        <h2>4. 個人情報の第三者提供</h2>
                        <p>
                            当協会は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                        </p>
                        <ol>
                            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支支障を及ぼすおそれがあるとき</li>
                        </ol>

                        <h2>5. 個人情報の開示、訂正等</h2>
                        <p>
                            当協会は、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示をします。その際、ご本人であることが確認できない場合には、開示に応じません。個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応します。
                        </p>

                        <h2>6. プライバシーポリシーの変更</h2>
                        <p>
                            本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当協会が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                        </p>

                        <h2>7. お問い合わせ窓口</h2>
                        <p>
                            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                            <br />
                            <Link href="/contact">お問い合わせフォーム</Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
