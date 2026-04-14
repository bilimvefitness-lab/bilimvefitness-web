import { getProductSegmentRelevance } from "@/content/personalization";
import type { ContinuationConfig } from "@/lib/continuation/types";
import type { TestSegment } from "@/lib/test/types";

type ProductHero = {
  eyebrow: string;
  title: string;
  description: string;
  panelEyebrow: string;
  panelTitle: string;
  panelDescription: string;
  primaryCommand: {
    href: string;
    label: string;
  };
  secondaryCommand?: {
    href: string;
    label: string;
  };
  hint: string;
};

type ProductSection = {
  eyebrow: string;
  title: string;
  description: string;
};

type ProductCard = {
  title: string;
  description: string;
};

type FitSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

type SystemRoute = {
  label: string;
  title: string;
  description: string;
  commandLabel: string;
  href: string;
};

type SegmentRelevance = {
  segment: TestSegment;
  label: string;
  title: string;
  description: string;
};

type ContinuationSection = ContinuationConfig & {
  eyebrow: string;
};

export const bookPageContent = {
  hero: {
    eyebrow: "Kitap Katmanı",
    title: "Kitap, dağınık bilgiyi taşınabilir bir sisteme çevirir.",
    description:
      "Bu sayfa bir ürün vitrini değil. Temeli daha sakin, daha net ve daha sıralı kurmak isteyen kullanıcı için ilk ciddi aracı tanımlar.",
    panelEyebrow: "Ana rol",
    panelTitle: "Kitap burada ilk düzen katmanıdır.",
    panelDescription:
      "Sistem sayfası çerçeveyi kurar. Test seni yerine yerleştirir. Kitap ise o çerçeveyi elde tutulur bir uygulama düzenine indirir.",
    primaryCommand: {
      href: "/test",
      label: "Ön Sipariş / Bilgi Al",
    },
    secondaryCommand: {
      href: "/sistem",
      label: "Omurgayı Oku",
    },
    hint: "Bu sayfa, kitabı herkese değil; sisteme giriş katmanı arayan kişilere açıklar.",
  } satisfies ProductHero,
  whatItIs: {
    eyebrow: "Bu Kitap Nedir",
    title: "Genel fitness tavsiyelerini yan yana dizmez; çalışan bir sıralama kurar.",
    description:
      "Kitabın rolü daha çok bilgi vermek değil, 'hangi bilgi ne zaman işe yarar' sorusunu kapatmaktır. Böylece kullanıcı neyi önce kuracağını ve neyi şimdilik dışarıda bırakacağını net görür.",
  } satisfies ProductSection,
  solvedProblems: [
    {
      title: "Netlik",
      description:
        "Ne yapman gerektiği kadar, neden şimdi onu yapman gerektiği de berraklaşır.",
    },
    {
      title: "Yapı",
      description:
        "Hedef, antrenman ve davranış aynı mantıkta toplandığı için kararlar dağılmaz.",
    },
    {
      title: "Yön",
      description:
        "İlk haftalarda neye odaklanacağını belirsiz bırakmaz; giriş hızını sakinleştirir.",
    },
  ] satisfies ProductCard[],
  gains: [
    {
      title: "İlk sıralama kapanır",
      description:
        "Hangi alanın önce düzelmesi gerektiği netleştiği için enerji yanlış yere dağılmaz.",
    },
    {
      title: "Tek kaynak hissi kurulur",
      description:
        "Parça parça tavsiyeler yerine tek omurgadan ilerlemek daha temiz karar üretir.",
    },
    {
      title: "Daha sakin uygulama başlar",
      description:
        "Hızlı ama dağınık denemeler yerine, tekrar edilebilir bir başlangıç düzeni oluşur.",
    },
    {
      title: "Sürekliliğe hazırlık doğar",
      description:
        "Kitap, ileride uygulama katmanına taşınacak davranış mantığını erken safhada kurar.",
    },
  ] satisfies ProductCard[],
  forYou: {
    eyebrow: "Kimler İçin",
    title: "Bu kitap, önce sistemi temiz kurmak isteyenler için doğrudur.",
    description:
      "Aşağıdaki profiller kitaptan en fazla faydayı alır:",
    items: [
      "Başlangıçta olup neye önce odaklanacağını netleştirmek isteyenler",
      "Yeniden başlarken eski karmaşaya geri dönmek istemeyenler",
      "Testte temel netlik veya temel kurulum profiline düşenler",
      "Daha ciddi bir sonraki adımdan önce iskeleti sakinleştirmek isteyenler",
    ],
  } satisfies FitSection,
  notForYou: {
    eyebrow: "Kimler İçin Değil",
    title: "Bu sayfa herkes için aynı cevap gibi davranmaz.",
    description:
      "Aşağıdaki durumlarda kitap ilk araç olmayabilir:",
    items: [
      "Sorunu temel kurulum değil, ileri seviye ince ayar olanlar",
      "Ana ihtiyacı günlük takip ve süreklilik sistemi olanlar",
      "Performans ya da optimizasyon tarafında daha hassas bir katman arayanlar",
      "Sadece motivasyon arayıp yapısal değişim istemeyenler",
    ],
  } satisfies FitSection,
  systemRoutes: [
    {
      label: "Sistem",
      title: "Kitap, markanın teorisini pratik düzene indirir.",
      description:
        "Buradaki iddia bağımsız değil. Kitap, /sistem sayfasında tanımlanan mantığın elde tutulan ilk formudur.",
      commandLabel: "Sistemi Oku",
      href: "/sistem",
    },
    {
      label: "Test",
      title: "Test, bu katmanın sende ilk araç olup olmadığını doğrular.",
      description:
        "Kitap herkese ilk cevap diye açılmaz. Test sonucu, kitabın sende netlik mi kurulum mu problemi çözeceğini ayırır.",
      commandLabel: "Teste Dön",
      href: "/test",
    },
    {
      label: "Süreklilik",
      title: "Uygulama, kitapla kurulan mantığı günlük tekrar katmanına taşır.",
      description:
        "Kitap bir son nokta değil; tekrar eden davranışı taşıyan daha geniş sistemin ilk sakin adımıdır.",
      commandLabel: "Uygulama Katmanını Gör",
      href: "/uygulama",
    },
  ] satisfies SystemRoute[],
  segmentRelevance: getProductSegmentRelevance("book") satisfies SegmentRelevance[],
  hesitation: {
    eyebrow: "Kararsizlik Katmani",
    title: "Kitap hemen acilmiyorsa rotani kaybetme.",
    description:
      "Buradan cikmadan once kitapla iliskili temel rotani kendine gonder. Boylece daha sonra geri dondugunde sifirdan dusunmezsin.",
    whyNow:
      "Kitap sana uygunsa bu genelde ilk netlik aninda gorunur. Simdi korursan geri donuste ayni yerden devam edersin.",
    delayCost:
      "Beklersen kitapla ilgili ilk kurulum gerekcen dagilir ve geri geldiginde yine sifirdan karsilastirma yaparsin.",
    deliverables: [
      "Kitap uygunluk notu",
      "Ilk kurulum odagi",
      "Geri donus noktasi",
    ],
    buttonLabel: "Rotami Koru",
    successMessage:
      "Kitap rotasi kaydedildi. Gercek gonderim entegrasyonu sonraki asamada baglanacak.",
    helperText:
      "Bu alan bulten icin degil; kitap katmanina ne zaman donecegini ve neden dondugunu kaybetmemen icin hazirlandi.",
    inputPlaceholder: "Kitap rotani gonderecegimiz e-posta",
    successNextStep: {
      label: "Sıradaki iş: Durumunu test ile doğrula",
      href: "/test",
    },
  } satisfies ContinuationSection,
  finalCta: {
    title: "Kitap dogruysa, bir sonraki mantikli katman budur.",
    description:
      "Eger ihtiyacin daha fazla girdi degil daha temiz bir kurulumsa, rotani simdi netlestir. Daginik baslangic sonra daha pahaliya mal olur.",
    command: {
      href: "/test",
      label: "Ön Sipariş Yoluna Gir",
    },
  },
};

export const appPageContent = {
  hero: {
    eyebrow: "Süreklilik Katmanı",
    title: "Uygulama, sistemi günlük uygulamaya indirir. İlk erişim sırası sınırlıdır.",
    description:
      "Bu rota bağımsız bir uygulama tanıtımı değil. Karar, takip ve tekrar katmanının neden var olduğunu açıklarken ilk kullanıcılar için kontrollü bir erken erişim çağrısı da kurar.",
    panelEyebrow: "Henüz tam açık değil",
    panelTitle: "Uygulama katmanı önce ilk kullanıcılarla açılacak.",
    panelDescription:
      "Test seni tanır. Kitap temeli kurar. Uygulama ise günlük tekrar, geri dönüş ve davranış sürekliliğini taşır. Bu katman herkese aynı anda açılmayacak.",
    primaryCommand: {
      href: "/uygulama#erken-erisim",
      label: "Erken Erişime Katıl",
    },
    secondaryCommand: {
      href: "/test",
      label: "Uygunluğunu Doğrula",
    },
    hint: "İlk kullanıcılar, bu katmana herkesten önce girip süreklilik hattını erken kuracak.",
  } satisfies ProductHero,
  whatItDoes: [
    {
      title: "Karar desteği",
      description:
        "Günlük akışta neye odaklanacağını sade tutar; her gün yeniden karar vermek zorunda bırakmaz.",
    },
    {
      title: "Takip",
      description:
        "Davranış ve tekrar ritmini görünür hale getirir; kopuşlar sessizce büyümez.",
    },
    {
      title: "Yönlendirme",
      description:
        "Sadece veri toplamaz; veri üzerinden bir sonraki mantıklı düzeltmeyi işaret eder.",
    },
  ] satisfies ProductCard[],
  whyItExists: {
    eyebrow: "Neden Var",
    title: "Bilgi ile davranış arasındaki kopuşu kapatmak için var.",
    description:
      "Bir sistemi okumak ile onu her gün sürdürmek aynı şey değildir. Uygulama katmanı, tam bu aralığa girer: unutulan kararları geri çağırır, ritmi takip eder ve dağılmayı görünür hale getirir.",
  } satisfies ProductSection,
  futurePositioning: [
    {
      title: "Günlük tekrar katmanı",
      description:
        "Asıl değer, davranışı her gün yeniden başlatmak yerine aynı yol üzerinde tutmaktır.",
    },
    {
      title: "İlk kullanıcılarla sertleşecek",
      description:
        "Uygulama büyüdükçe kitap, test ve gelecekteki diğer katmanlarla birlikte çalışacak şekilde ilk kullanım desenleriyle sertleşecek.",
    },
    {
      title: "Ölçülü gelişim",
      description:
        "Burada olmayan özellikler vaat edilmez. Yalnızca sistemin gerektirdiği katmanlar eklenir.",
    },
  ] satisfies ProductCard[],
  forYou: {
    eyebrow: "Kimler İçin",
    title: "Uygulama, bilgiyi hatırlamak değil uygulamak isteyenler içindir.",
    description:
      "Özellikle şu profiller için anlamlı hale gelir:",
    items: [
      "Ritmi tekrar tekrar kaybeden ve geri dönüş yolunu sabit tutmak isteyenler",
      "Performans veya optimizasyon tarafında günlük takip düzeni arayanlar",
      "Testte süreklilik, performans hassasiyeti ya da ileri seviye optimizasyon profiline düşenler",
      "Kitapla ya da sistemle kurulan mantığı günlük davranışa indirmek isteyenler",
    ],
  } satisfies FitSection,
  systemRoutes: [
    {
      label: "Sistem",
      title: "Uygulama, omurgayı tekrar eden davranışa bağlar.",
      description:
        "/sistem sayfasında kurulan mantık uygulamada her gün yeniden aktif hale gelir.",
      commandLabel: "Omurgayı Oku",
      href: "/sistem",
    },
    {
      label: "Test",
      title: "Test, uygulamanın sende erkenden mi yoksa sonra mı açılması gerektiğini ayırır.",
      description:
        "Uygulama ilk cevap olmak zorunda değildir. Bazen önce netlik, bazen önce kurulum gerekir.",
      commandLabel: "Teste Dön",
      href: "/test",
    },
    {
      label: "Kitap",
      title: "Kitap temel kurarsa, uygulama o temeli günde tutar.",
      description:
        "Uygulama bilgi deposu gibi değil; daha önce kurulan mantığı kalıcı davranışa çevirmek için gelir.",
      commandLabel: "Kitap Katmanını Gör",
      href: "/kitap",
    },
  ] satisfies SystemRoute[],
  segmentRelevance: getProductSegmentRelevance("app") satisfies SegmentRelevance[],
  waitlist: {
    eyebrow: "Erken Erişim",
    title: "Erken erişim açıldığında dışarıda kalma.",
    description:
      "Buraya e-postanı bırakırsan bir haber bültenine yazılmış olmazsın. İlk açılış notunu, sana uygun kullanım profilini ve kontrollü erken erişim sıranı korursun.",
    whyNow:
      "Bu katman tam açıldığında yeniden düşünmek zorunda kalmamak için yerini şimdi koruman gerekir.",
    delayCost:
      "Beklersen ilk kullanım dalgası açıldığında bağlamı yeniden kurman ve sisteme daha geç girmen gerekebilir.",
    deliverables: [
      "Erken erişim sırası",
      "İlk kullanım çerçevesi",
      "Sana uygun olduğunda öncelikli haber",
    ],
    buttonLabel: "Sıramı Koru",
    successMessage:
      "Erken erişim yerin kaydedildi. Gerçek gönderim bağlantısı sonraki aşamada eklenecek.",
    helperText:
      "Bu alan haber bülteni için değil; uygulama katmanı açıldığında bağlamını kaybetmeden geri dönmen için hazırlandı.",
    inputPlaceholder: "Erken erişim sıranı göndereceğimiz e-posta",
    successNextStep: {
      label: "Sıradaki iş: Sistemi ve öncelikleri oku",
      href: "/sistem",
    },
    submitEventName: "uygulama_waitlist_click",
    submitEventPayload: {
      location: "uygulama_waitlist_form",
    },
  } satisfies ContinuationSection,
};
