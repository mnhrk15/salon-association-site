import { PageHeader } from "@/components/common/PageHeader";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                title="お問い合わせ"
                subtitle="ご相談、ご質問など、お気軽にお問い合わせください。"
                imageUrl="/images/page-header-1920x600.png"
            />
            <section className="py-24 bg-background">
                <div className="container mx-auto max-w-4xl">
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}
