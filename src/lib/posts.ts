import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import gfm from 'remark-gfm';
import html from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

export async function listPosts() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  const files = await fs.readdir(CONTENT_DIR);
  const md = files.filter(f => f.endsWith('.md'));
  const posts = await Promise.all(md.map(async (file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = await fs.readFile(path.join(CONTENT_DIR, file), 'utf8');
    const fm = matter(raw);
    return { slug, title: (fm.data.title as string) || slug, date: (fm.data.date as string) || '' };
  }));
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string) {
  const fp = path.join(CONTENT_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(fp, 'utf8');
    const fm = matter(raw);
    const processed = await remark().use(gfm).use(html).process(fm.content);
    return { slug, title: (fm.data.title as string) || slug, date: (fm.data.date as string) || '', html: processed.toString() };
  } catch { return null; }
}
