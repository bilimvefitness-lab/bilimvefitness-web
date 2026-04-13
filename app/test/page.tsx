import { TestEngine } from "@/components/test/test-engine";
import { HeadingSystem } from "@/components/ui/heading-system";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SystemLayerCard } from "@/components/ui/system-layer-card";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Test",
  description:
    "Bilim ve Fitness test sayfası; kullanıcının hedefini, seviyesini, ritmini ve darboğazını yorumlayıp kişisel rota üreten ilk gerçek test motorunu sunar.",
  path: "/test",
  keywords: [
    "fitness testi",
    "bilimsel fitness testi",
    "fitness yönlendirme testi",
    "antrenman değerlendirme",
  ],
});

export default function TestPage() {
  return (
    <>
      <SectionWrapper className="border-none">
        <div className="grid gap-8 rounded-[2.5rem] border border-line/10 bg-white/74 px-6 py-14 shadow-panel sm:px-9 lg:grid-cols-[1.05fr,0.95fr] lg:px-14 lg:py-18">
          <HeadingSystem
            eyebrow="Tanı Katmanı"
            title="Bu test, seni doğru başlangıç noktasına yerleştirir."
            description="Bu yüzeysel bir test değil. Hedefini, seviyeni, ritmini ve darboğazını okuyup sana ait sonraki adımı açığa çıkarır."
            as="h1"
          />
          <div className="rounded-[2rem] border border-line/10 bg-ink p-7 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-white/56">Tamamlama süresi</p>
            <p className="mt-4 font-display text-3xl leading-tight">Yaklaşık 3 dakika.</p>
            <p className="mt-5 text-sm leading-7 text-white/72">
              Bu süre, yanlış rota üzerinde daha fazla enerji harcamamanı önlemek için ayrılır.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper surface="panel">
        <div className="space-y-8 px-6 py-10 lg:px-10 lg:py-14">
          <HeadingSystem
            eyebrow="Neden Şimdi"
            title="En büyük kayıp, yanlış yolda hızlı ilerlemektir."
            description="Bu testi ertelemek, aynı karmaşayı sürdürmek demek. Tamamladığında ise sadece sonuç değil, uygulanacak rota çıkacak."
            as="h2"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <SystemLayerCard
              index="01 / İçgörü"
              title="Asıl sorunu görürsün"
              description="Sadece hedefini değil, seni durduran esas noktayı da görürsün."
            />
            <SystemLayerCard
              index="02 / Plan"
              title="İlk odağı alırsın"
              description="Her şeyi aynı anda değil, önce neyi düzeltmen gerektiği netleşir."
            />
            <SystemLayerCard
              index="03 / Rota"
              title="Doğru yola girersin"
              description="Kitap, yazı rotası ya da süreklilik katmanı uygunluğa göre açılır."
            />
            <SystemLayerCard
              index="04 / Devam"
              title="Enerjiyi korursun"
              description="Sonuç, devam katmanına bağlanır; sadece okunup kapanmaz."
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="start">
        <TestEngine />
      </SectionWrapper>
    </>
  );
}
