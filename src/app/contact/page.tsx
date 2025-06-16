import { PageHeader } from "@/components/common/PageHeader";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                title="お問い合わせ"
                subtitle="サービス導入に関するご相談、ご質問など、お気軽にご連絡ください。"
                imageUrl="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
            />
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}
