import { PageHeader } from "@/components/common/PageHeader";
import { ServiceTabs } from "./ServiceTabs";
import { Suspense } from "react";
import { services } from "@/lib/data/services-data";

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="事業内容"
                description="私たちの提供するサービスは、単なるツール導入に留まりません。"
                imageUrl="/images/page-header-1920x600.png"
            />
            <Suspense fallback={<div>Loading...</div>}>
                <ServiceTabs services={services} />
            </Suspense>
        </>
    );
}
