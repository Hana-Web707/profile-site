export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="m-6 text-3xl font-bold">自己紹介</h1>
      <p className="mx-6">AIを活用しながら、Webサイト制作を学んでいます。</p>
     <section className="mx-6 mt-8 rounded-xl border border-gray-300 p-5">
  <h2 className="text-xl font-bold">経歴</h2>
  <p className="mt-2">
    架空の美容室「hair salon LUXE」のWebサイトを制作し、公開しました。
  </p>
</section>
      <section className="mx-6 mt-8 rounded-xl border border-gray-300 p-5">
  <h2 className="text-xl font-bold">スキル</h2>
  <p className="mt-2">
    Next.jsとTailwind CSSを学びながら、ページの見出しや余白、文字サイズを調整しています。
  </p>
</section>
    </main>
  );
}