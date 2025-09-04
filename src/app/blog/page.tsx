import Link from "next/link";
import { listPosts } from "@/lib/posts";

export const metadata = { title: "블로그" };

export default async function BlogIndex() {
  const posts = await listPosts();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">블로그</h2>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="underline">{p.title}</Link>
            <span className="ml-2 text-xs opacity-70">{p.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
