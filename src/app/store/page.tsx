export const metadata = { title: "스토어" };

export default function StorePage() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">스토어</h2>
      <p className="opacity-80">
        초기엔 Gumroad/토스 송금 링크 등 <b>외부 결제 임베드</b>로 시작하세요.
      </p>
      <div className="rounded border border-black/10 dark:border-white/10 p-4">
        <p className="mb-2 text-sm">Gumroad 임베드 예시</p>
        <iframe className="w-full h-44 rounded" title="Gumroad"
                src="https://gumroad.com/your_product_embed" />
      </div>
    </section>
  );
}
