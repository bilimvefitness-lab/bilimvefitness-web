import { CtaCluster } from "@/components/ui/cta-cluster";
import { HeadingSystem } from "@/components/ui/heading-system";
import { RouteBlock } from "@/components/ui/route-block";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SystemLayerCard } from "@/components/ui/system-layer-card";
import { TrustBlock } from "@/components/ui/trust-block";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Bilimsel Fitness Ekosistemi",
  description:
    "Bilim ve Fitness ana sayfası; markayı net tanımlayan, sıradan fitness algısını kıran ve kullanıcıyı doğrudan test akışına iten kontrollü giriş merkezidir.",
  path: "/",
  keywords: [
    "bilimsel fitness",
    "fitness ekosistemi",
    "fitness testi",
    "fitness sistemi",
  ],
});

export default function HomePage() {
  return (
    <>
      <SectionWrapper className="border-none">
        <div className="surface-grid grid gap-8 rounded-[2.5rem] border border-line/10 bg-white/72 px-6 py-14 shadow-panel sm:px-9 lg:grid-cols-[1.35fr,0.78fr] lg:px-14 lg:py-18">
          <HeadingSystem
            eyebrow="Bilim ve Fitness"
            title="Bilimsel fitness için kurulan net yön merkezi."
            description="Bu marka yalnızca fitness içeriği yayınlamaz. Durumu tanımlar, sonraki adımı belirler ve tüm ekosistemi aynı sistem mantığında kurar."
            as="h1"
          >
            <CtaCluster
              primary={{ href: "/test", label: "Teste Gir" }}
              secondary={{ href: "/sistem", label: "Sistemi Oku", tone: "secondary" }}
              hint="İlk adım tek: durumunu tanımla."
            />
          </HeadingSystem>
          <div className="rounded-[2rem] border border-line/10 bg-ink p-7 text-white">
            <p className="text-xs uppercase tracking-[0.24em] text-white/56">İlk komut</p>
            <p className="mt-4 font-display text-3xl leading-tight">
              Sıradan fitness anlatısını bırak. Önce yerini gör.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/72">
              <li>Bilgi değil, netlik önceliklenir.</li>
              <li>Test, kitap ve uygulama tek sistemde konumlanır.</li>
              <li>Karar yükünü sistem taşır.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.05fr]">
          <HeadingSystem
            eyebrow="Problem"
            title="Asıl eksik bilgi değil, sistemdir."
            description="İlerleme durur çünkü kullanıcı önce hangi sorunu çözmesi gerektiğini bilmez."
            as="h2"
          />
          <div className="grid gap-4">
            <RouteBlock
              label="Dağınık bilgi"
              title="Rastgele tavsiye ilerleme üretmez."
              description="Parça parça bilgi, uygulanabilir bir rota kurmaz. Bu yüzden hazırlık artar, hareket gecikir."
              commandLabel="Durumunu Tanımla"
              href="/test"
            />
            <RouteBlock
              label="Yanlış odak"
              title="Motivasyon aramak tanıyı geciktirir."
              description="Ne yapman gerektiğini bilmeden daha fazla motivasyon istemek yalnızca süreyi uzatır."
              commandLabel="Sistemi Oku"
              href="/sistem"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-8">
          <HeadingSystem
            eyebrow="Ekosistem"
            title="İçerik, test, kitap ve uygulama tek ilerleme zinciridir."
            description="Her katman farklı hazırlık seviyesine cevap verir ve bir sonrakini açar."
            as="h2"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SystemLayerCard
              index="01 / İçerik"
              title="Dikkati toplar"
              description="Arama niyetini ve ilgiyi doğru ciddiyetle karşılar."
            />
            <SystemLayerCard
              index="02 / Test"
              title="Durumu tanımlar"
              description="Hedefi, seviyeyi ve engeli tek girişte netleştirir."
            />
            <SystemLayerCard
              index="03 / Kitap"
              title="Temeli kurar"
              description="Dağınık bilgiyi taşınabilir bir sisteme çevirir."
            />
            <SystemLayerCard
              index="04 / Uygulama"
              title="Sürekliliği kurar"
              description="Takip ve tekrar katmanını kalıcı hale getirir."
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="panel">
        <div className="space-y-10 px-6 py-10 lg:px-10 lg:py-14">
          <HeadingSystem
            eyebrow="Yöntem"
            title="Bilim ve Fitness, tavsiye vermez; sırayı kurar."
            description="Yöntemin işi daha çok bilgi eklemek değil, önce neyin öncelikli olduğunu belirlemektir."
            as="h2"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <RouteBlock
              label="Netlik"
              title="Öncelik ayıklanır"
              description="Her kullanıcıya aynı komut verilmez. Sistem önce asıl sorunu seçer."
              commandLabel="Sistemi Oku"
              href="/sistem"
            />
            <RouteBlock
              label="Sadelik"
              title="Karar yükü azalır"
              description="Kullanıcıdan tüm çözümleri karşılaştırması beklenmez. Sonraki adım atanır."
              commandLabel="Teste Gir"
              href="/test"
            />
            <RouteBlock
              label="Süreklilik"
              title="Tekrar korunur"
              description="Sistem ilk hareketi değil, kalıcı ilerlemeyi hedefler."
              commandLabel="Uygulama Katmanını Gör"
              href="/uygulama"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-[1.02fr,0.98fr]">
          <HeadingSystem
            eyebrow="Test"
            title="Genel tavsiye alma. Yerini doğrula."
            description="Test, hedefini ve darboğazını yorumlayıp sana tek bir sonraki adım verir. Bu yüzden test ek özellik değil, sistemin ana girişidir."
            as="h2"
          >
            <CtaCluster
              primary={{ href: "/test", label: "Teste Gir ve İlerle" }}
              secondary={{ href: "/sistem", label: "Test Mantığını Oku", tone: "secondary" }}
              hint="Hazır hissetmek yetmez. Doğru katmanda olman gerekir."
            />
          </HeadingSystem>
          <div className="rounded-[2rem] border border-line/10 bg-white/85 p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-ink/48">Test sonucu</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/68">
              <li>Asıl darboğaz adlandırılır.</li>
              <li>İlk odak netleşir.</li>
              <li>Doğru araç seçilir.</li>
              <li>Sonraki hareket kapanır.</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="space-y-8">
          <HeadingSystem
            eyebrow="Ürün Yolları"
            title="Ürünler vitrin gibi değil, durumuna göre açılan katmanlar gibi çalışır."
            description="Her şey aynı anda açılmaz. Doğru anda doğru araç devreye girer."
            as="h2"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <RouteBlock
              label="İlk giriş"
              title="Kitap, temiz ilk katmandır."
              description="Güveni oluşan ama hala dağınık olan kullanıcıya temel kurar."
              commandLabel="Kitap Katmanına Geç"
              href="/kitap"
            />
            <RouteBlock
              label="Seçim"
              title="Test, uygun aracı belirler."
              description="Seçim yoruma bırakılmaz. Sistem uygunluğu önce netleştirir."
              commandLabel="Uygunluğu Tanımla"
              href="/test"
            />
            <RouteBlock
              label="Süreklilik"
              title="Uygulama, tekrar katmanıdır."
              description="Uzun vadeli kullanım mantığını günlük ritme taşır."
              commandLabel="Uygulama Katmanını Gör"
              href="/uygulama"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="panel">
        <div className="space-y-8 px-6 py-10 lg:px-10 lg:py-14">
          <HeadingSystem
            eyebrow="Güven"
            title="Bu sistem daha çok konuştuğu için değil, daha net kurulduğu için güven verir."
            description="Ton, yapı ve bağlantı mantığı aynı ciddiyeti korur."
            as="h2"
          />
          <TrustBlock
            items={[
              {
                title: "Bilimsel ciddiyet",
                description: "Yöntem, hype yerine açık ilke ve yorum mantığıyla kurulur.",
              },
              {
                title: "Premium sadelik",
                description: "Fazla seçenek yerine kontrollü açıklık sunulur.",
              },
              {
                title: "Bütün sistem",
                description: "İçerik, test, kitap ve uygulama aynı omurgadan beslenir.",
              },
            ]}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-b border-line/10">
        <div className="rounded-[2.25rem] bg-ink px-6 py-14 text-white sm:px-10 lg:px-14">
          <HeadingSystem
            eyebrow="Son komut"
            title="Bekleme. Yerini şimdi tanımla."
            description="Bu noktadan sonra doğru hareket tek: testi aç ve sonraki adımı netleştir."
            as="h2"
            tone="light"
          >
            <CtaCluster
              primary={{ href: "/test", label: "Testi Aç", tone: "primary" }}
              secondary={{ href: "/sistem", label: "Sistemi Oku", tone: "secondary" }}
              hint="Belirsizliği uzatma."
              tone="light"
            />
          </HeadingSystem>
        </div>
      </SectionWrapper>
    </>
  );
}
