import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "무자본 위키 | GPT Site Starter",
  description: "Next.js + Tailwind 블로그/스토어 스타터",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">
        <div className="mx-auto max-w-3xl px-4 py-8">
          <header className="mb-8">
            <h1 className="text-2xl font-bold">무자본 위키</h1>
            <nav className="mt-4 flex gap-4 text-sm">
  <Link href="/" className="hover:opacity-80">홈</Link>
  <Link href="/blog" className="hover:opacity-80">블로그</Link>
  <Link href="/store" className="hover:opacity-80">스토어</Link>
</nav>
          </header>
          <main>{children}</main>
          <footer className="mt-16 border-t border-black/10 dark:border-white/10 pt-8 text-xs opacity-70">
            <p>© {new Date().getFullYear()} GPT Site Starter</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
