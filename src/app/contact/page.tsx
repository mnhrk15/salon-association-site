import { PageHeader } from "@/components/common/PageHeader";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                title="お問い合わせ"
                subtitle="サービスに関するご質問、ご相談など、お気軽にお問い合わせください。"
                imageUrl="/images/placeholder-1920x600.png"
            />
            <section className="py-24 bg-background">
                <div className="container mx-auto max-w-4xl">
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}
