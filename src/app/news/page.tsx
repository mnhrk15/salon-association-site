import { getSortedPostsData, PostData } from "@/lib/news";
import { PageHeader } from "@/components/common/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { FullWidthCta } from "@/components/home/FullWidthCta";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PostCard({ post }: { post: PostData }) {
    return (
        <Link href={`/news/${post.slug}`}>
            <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="p-0">
                    <div className="relative h-52 w-full">
                        <Image
                            src={post.coverImage || "/images/page-header-1920x600.png"}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="mb-2 text-sm text-muted-foreground">{post.date}</p>
                    <CardTitle className="font-serif text-xl font-bold leading-tight">
                        {post.title}
                    </CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </CardContent>
            </Card>
        </Link>
    );
}

export default function NewsPage() {
    const allPosts = getSortedPostsData();

    return (
        <>
            <PageHeader
                title="お知らせ"
                description="協会からの最新情報をお届けします。"
                imageUrl="/images/page-header-1920x600.png"
            />
            <section className="bg-background py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {allPosts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
             </section>
            <FullWidthCta />
        </>
    );
}
