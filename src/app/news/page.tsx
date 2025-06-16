import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSortedPostsData, PostData } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";

function PostCard({ post }: { post: PostData }) {
    return (
        <Link href={`/news/${post.slug}`}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                    <div className="relative w-full h-52">
                        <Image
                            src={post.coverImage || '/images/placeholder-1920x600.png'}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <CardTitle className="text-xl font-bold font-serif leading-tight">
                        {post.title}
                    </CardTitle>
                    <p className="mt-2 text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
            </Card>
        </Link>
    )
}


export default function NewsPage() {
    const allPosts = getSortedPostsData();

    return (
        <div>
            <PageHeader
                title="お知らせ"
                subtitle="協会からの最新情報をお届けします。"
                imageUrl="/images/placeholder-1920x600.png"
            />
             <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
             </section>
        </div>
    )
}
