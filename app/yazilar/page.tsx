import { ArticleCard } from "@/components/article/article-card";
import { CommandButton } from "@/components/ui/command-button";
import { HeadingSystem } from "@/components/ui/heading-system";
import { RouteBlock } from "@/components/ui/route-block";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  articleClusters,
  authorityArticles,
  featuredAuthorityArticle,
  getLeadArticleByCluster,
} from "@/content/articles";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Yazılar",
  description:
    "Bilim ve Fitness yazılar sayfası; dağınık bir blog akışı değil, dar soruları sistem ve test katmanına bağlayan kontrollü otorite dizinidir.",
  path: "/yazilar",
  keywords: [
    "antrenman bilimi",
    "fitness yazıları",
    "beslenme ve vücut kompozisyonu",
    "fitness mitleri",
  ],
});

const secondaryArticles = authorityArticles.filter(
  (article) => article.slug !== featuredAuthorityArticle.slug,
);

const authorityRoutes = [
  {
    label: "Sistem",
    title: "Sorun dar görünüyor ama çerçeve eksikse, önce omurgayı oku.",
    description:
      "Yazılar dar soruyu çözer. /sistem ise o sorunun daha büyük mantıkta nereye oturduğunu gösterir.",
    commandLabel: "Omurgayı Şimdi Oku",
    href: "/sistem",
  },
  {
    label: "Test",
    title: "Soru genel ama karar kişiselse, bir sonraki durak tanı katmanıdır.",
    description:
      "Yazıdan sonra kendin için hangi rotanın açılması gerektiğini netleştirmek istiyorsan teste geç.",
    commandLabel: "Teste Gir",
    href: "/test",
  },
];

export default function ArticlesPage() {
  return (
    <>
      <SectionWrapper className="border-none">
        <div className="grid gap-8 rounded-[2.5rem] border border-line/10 bg-white/74 px-6 py-14 shadow-panel sm:px-9 lg:grid-cols-[1fr,0.95fr] lg:px-14 lg:py-18">
          <HeadingSystem
            eyebrow="Bilgi Katmanı"
            title="Yazılar, bir akış değil; dar soruları sırayla temizleyen bilgi katmanı."
            description="Buradaki her yazı belirli bir arama niyetini hızlı şekilde karşılar, sonra konuyu Bilim ve Fitness omurgasına bağlar. Okuma yönü basittir: sorudan gir, sistemi gör, gerekiyorsa tanıya geç."
            as="h1"
          >
            <div className="flex flex-wrap gap-3">
              <CommandButton href={`/yazilar/${featuredAuthorityArticle.slug}`}>
                Seçili Yazıyı Oku
              </CommandButton>
              <CommandButton href="/test" tone="secondary">
                Teste Gir
              </CommandButton>
            </div>
          </HeadingSystem>

          <ArticleCard article={featuredAuthorityArticle} featured />
        </div>
      </SectionWrapper>

      <SectionWrapper surface="panel">
        <div className="space-y-8 px-6 py-10 lg:px-10 lg:py-14">
          <HeadingSystem
            eyebrow="Konu Omurgası"
            title="İçerik duvar gibi büyümez; konu mantığına göre açılır."
            description="Aşağıdaki cluster'lar yazıları kategori olsun diye değil, kullanıcının hangi soru tipinden girdiğini anlasın diye sabitlenir."
            as="h2"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articleClusters.map((cluster) => {
              const count = authorityArticles.filter(
                (article) => article.cluster === cluster.key,
              ).length;
              const leadArticle = getLeadArticleByCluster(cluster.key);

              return (
                <article
                  key={cluster.key}
                  id={cluster.key}
                  className="rounded-[1.6rem] border border-line/10 bg-white/82 p-6 sm:p-7"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/46">
                    {cluster.label}
                  </p>
                  <h2 className="mt-3 font-display text-[1.45rem] leading-tight text-ink">
                    {count} yazı ile aynı soruyu farklı açılardan toplar.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-ink/68">{cluster.description}</p>
                  {leadArticle ? (
                    <div className="mt-5">
                      <CommandButton href={`/yazilar/${leadArticle.slug}`} tone="secondary">
                        Cluster'dan Başla
                      </CommandButton>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.88fr,1.12fr]">
          <HeadingSystem
            eyebrow="Okuma Yönü"
            title="İlk olarak soruya en yakın yazıdan gir. Sonra konuyu daha büyük sistemde yerine koy."
            description="Liste bilerek sınırlıdır. Buradaki her kart, cluster mantığı görünür kalsın ve her bir yazı seni bir sonraki doğru durağa itsin diye seçildi."
            as="h2"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {secondaryArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-none">
        <div className="rounded-[2.5rem] border border-line/10 bg-ink px-6 py-12 text-white shadow-panel sm:px-9 lg:px-14 lg:py-16">
          <HeadingSystem
            eyebrow="Sonraki Ayrım"
            title="Yazı dar soruyu kapatır. Sonraki hamle, sistem mi tanı mı gerektiğine göre açılır."
            description="Eğer okudukların sende tekrarlayan daha büyük bir yapısal soruna işaret ediyorsa omurgaya geç. Eğer konu artık kişisel rotana dönüşüyorsa tanı katmanına ilerle."
            as="h2"
            tone="light"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {authorityRoutes.map((route) => (
              <RouteBlock
                key={route.title}
                label={route.label}
                title={route.title}
                description={route.description}
                commandLabel={route.commandLabel}
                href={route.href}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
