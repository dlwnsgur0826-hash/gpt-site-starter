import { notFound } from "next/navigation";
import { getPostBySlug, listPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = await listPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <article className="max-w-none">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="opacity-70 text-sm mb-6">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
