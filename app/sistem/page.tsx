import { CtaCluster } from "@/components/ui/cta-cluster";
import { HeadingSystem } from "@/components/ui/heading-system";
import { RouteBlock } from "@/components/ui/route-block";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SystemLayerCard } from "@/components/ui/system-layer-card";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sistem",
  description:
    "Bilim ve Fitness sistem sayfasi; markanin kanonik sayfasi olarak metodolojiyi sabitleyen ve kullaniciyi test ile ileri iten merkezi otorite merkezidir.",
  path: "/sistem",
  keywords: [
    "fitness sistemi",
    "bilimsel fitness sistemi",
    "antrenman mantigi",
    "fitness metodolojisi",
  ],
});

export default function SystemPage() {
  return (
    <>
      <SectionWrapper className="border-none">
        <div className="grid gap-8 rounded-[2.5rem] border border-line/10 bg-white/74 px-6 py-14 shadow-panel sm:px-9 lg:grid-cols-[1.2fr,0.8fr] lg:px-14 lg:py-18">
          <HeadingSystem
            eyebrow="Sistem Omurgası"
            title="Bilim ve Fitness, fitnessı bilgi yığınından çıkarıp işleyen bir sisteme çevirir."
            description="Bu sayfa markanın merkezidir. İçerik, test, kitap ve uygulama aynı omurgaya bağlıdır: önce tanı, sonra rota, sonra araç."
            as="h1"
          >
            <CtaCluster
              primary={{ href: "/test", label: "Durumunu Tanımla" }}
              secondary={{ href: "/kitap", label: "İlk Katmana Geç", tone: "secondary" }}
              hint="Bu sistemi kabul ediyorsan bir sonraki iş okumak değil, yerini görmektir."
            />
          </HeadingSystem>
          <div className="rounded-[2rem] border border-line/10 bg-ink p-7 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-white/56">Merkezi iddia</p>
            <p className="mt-4 font-display text-3xl leading-tight">
              Fitness sorunları çoğu zaman irade değil, tanı eksikliğidir.
            </p>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Bu yüzden sistem önce durumu tanımlar. Ardından içerik, ürün ve süreklilik
              katmanını doğru sırada açar.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <HeadingSystem
            eyebrow="Neden Çoğu Yol Bozulur"
            title="Çoğu yol bozulur çünkü bilgi artarken yön kaybolur."
            description="Daha çok program ve tavsiye, kullanıcıya daha çok karar yükü bindirir. Sistem yoksa ilerleme gecikmeye döner."
            as="h2"
          />
          <div className="grid gap-4">
            <RouteBlock
              label="Parçalı bilgi"
              title="Doğru bilgi bile yanlış sırada ise bozulur."
              description="Seviyesini bilmeden ileri çözüm kopyalayan kullanıcı sistem kurmaz; sadece yük toplar."
              commandLabel="Yerini Tanımla"
              href="/test"
            />
            <RouteBlock
              label="Yanlış yorum"
              title="Çoğu kişi problemi değil, semptomu düzeltmeye çalışır."
              description="Plato, kararsızlık veya düzensizlik genelde daha derin bir tanı eksikliğinin sonucudur."
              commandLabel="Teste Geç"
              href="/test"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="panel">
        <div className="space-y-8 px-6 py-10 lg:px-10 lg:py-14">
          <HeadingSystem
            eyebrow="Temel İlkeler"
            title="Sistem üç ilke üzerine kurulur."
            description="Bu ilkeler her kararı yönlendirir."
            as="h2"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <SystemLayerCard
              index="01 / Netlik"
              title="Önce tanı"
              description="Kullanıcıya genel tavsiye verilmez. Hangi seviyede olduğu ve hangi sorunun asıl darboğaz olduğu netleştirilir."
            />
            <SystemLayerCard
              index="02 / Yapı"
              title="Sonra sıra"
              description="Bilgi tek başına değer üretmez. Doğru adımlar doğru sırada açılmadıkça kullanıcı yine dağılır."
            />
            <SystemLayerCard
              index="03 / Süreklilik"
              title="En son tekrar"
              description="Sistem tek seferlik heyecan değil, tekrar eden ve ilerlemeyi koruyan bir kullanım mantığı kurar."
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-8">
          <HeadingSystem
            eyebrow="Katmanlar"
            title="Her katman ayrı ürün değil, aynı yöntemin farklı aşamasıdır."
            description="Bu sayfa ürün vitrini değil; sistem bağlantısını sabitleyen merkezdir."
            as="h2"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SystemLayerCard
              index="01 / Yazılar"
              title="Dikkati toplar"
              description="Dar bir soruyu açıklar ve kullanıcıyı sistem mantığına yaklaştırır."
            />
            <SystemLayerCard
              index="02 / Test"
              title="Durumu netleştirir"
              description="Kullanıcıya hangi kapıdan girmesi gerektiğini söyler."
            />
            <SystemLayerCard
              index="03 / Kitap"
              title="Temeli sabitler"
              description="Güvenen ama hala dağınık olan kullanıcıyı sistemli bir zemine alır."
            />
            <SystemLayerCard
              index="04 / Uygulama"
              title="Sistemi tekrar ettirir"
              description="Geri dönüş ve günlük kullanım katmanını oluşturur."
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[1fr,1fr]">
          <HeadingSystem
            eyebrow="Kimler İçin"
            title="Bu sistem, ciddiyet arayan ama dağınık kalan kullanıcı için tasarlandı."
            description="Amaç motivasyon satmak değil; doğru sonraki adımı göstermektir."
            as="h2"
          />
          <div className="grid gap-4">
            <RouteBlock
              label="Uygun profil"
              title="Başlamak, düzene girmek veya sıkıştığı yeri görmek isteyenler."
              description="Sistem; başlangıç, orta seviye ya da karmaşa yaşayan kullanıcıda en net sonucunu verir."
              commandLabel="Yerini Göster"
              href="/test"
            />
            <RouteBlock
              label="Uygun olmayan profil"
              title="Hızlı hype ve rastgele motivasyon arayanlar."
              description="Bu site gösteri değil, yön verir. Dikkat yerine netlik isteyen kullanıcı için kuruldu."
              commandLabel="Doğru Rotaya Gir"
              href="/test"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="panel">
        <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1fr,1fr] lg:px-10 lg:py-14">
          <HeadingSystem
            eyebrow="Sıradaki Aşama"
            title="Sistemi anladıktan sonra sıradaki iş kendi durumunu tanımlamaktır."
            description="Test; içgörü, plan, araç ve sonraki komutu aynı çıkışta birleştirir."
            as="h2"
          >
            <CtaCluster
              primary={{ href: "/test", label: "Teste Geç" }}
              secondary={{ href: "/kitap", label: "İlk Katmana Gir", tone: "secondary" }}
              hint="Bu noktadan sonra beklemek sadece belirsizliği uzatır."
            />
          </HeadingSystem>
          <div className="rounded-[1.9rem] border border-line/10 bg-white/82 p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-ink/48">Test çıkışı</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/68">
              <li>Asıl problem yeniden adlandırılır.</li>
              <li>İlk odak netleşir.</li>
              <li>Doğru katman açılır.</li>
              <li>Momentum korunur.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-b border-line/10">
        <div className="rounded-[2.25rem] bg-ink px-6 py-14 text-white sm:px-10 lg:px-14">
          <HeadingSystem
            eyebrow="Son Karar"
            title="Bekleme. Başlangıç katmanını şimdi doğrula."
            description="Bu sayfanın işi ikna etmek değil, kararı kapatmaktır."
            as="h2"
            tone="light"
          >
            <CtaCluster
              primary={{ href: "/test", label: "Testi Aç", tone: "primary" }}
              secondary={{ href: "/kitap", label: "İlk Katmana Geç", tone: "secondary" }}
              hint="Önce tanı. Sonra rota."
              tone="light"
            />
          </HeadingSystem>
        </div>
      </SectionWrapper>
    </>
  );
}
