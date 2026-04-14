import type { ContinuationConfig } from "@/lib/continuation/types";

export type ArticleClusterKey =
  | "training_science"
  | "nutrition_body_composition"
  | "recovery_sleep"
  | "habits_consistency"
  | "performance_optimization"
  | "myths_clarifications";

export type ArticleIntent = "question" | "decision" | "clarification";

export type ArticleNextBestStep = "sistem" | "test" | "continuation";

export type ArticleCommand = {
  href: string;
  label: string;
};

export type ArticleRoute = {
  label: string;
  title: string;
  description: string;
  href: string;
  commandLabel: string;
};

export type AuthorityArticle = {
  title: string;
  slug: string;
  cluster: ArticleClusterKey;
  summary: string;
  intent: ArticleIntent;
  readingTime: string;
  featured?: boolean;
  continuationTarget: ArticleNextBestStep;
  opening: {
    eyebrow: string;
    title: string;
    description: string;
    answerTitle: string;
    answer: string;
  };
  clarification: {
    title: string;
    description: string;
    points: string[];
  };
  explanation: {
    title: string;
    paragraphs: string[];
  };
  practical: {
    title: string;
    description: string;
    actions: string[];
  };
  systemBridge: {
    title: string;
    description: string;
    primaryCommand: ArticleCommand;
    secondaryCommand: ArticleCommand;
  };
  stateNextStep: {
    title: string;
    description: string;
    routes: ArticleRoute[];
  };
  continuation: {
    title: string;
    description: string;
    deliverables: string[];
    buttonLabel: string;
    successMessage: string;
  };
};

export const articleClusters = [
  {
    key: "training_science",
    label: "Antrenman Bilimi",
    description:
      "Hacim, yoğunluk, hareket seçimi ve ilerleme mantığını gösterişsiz ama net biçimde ayırır.",
  },
  {
    key: "nutrition_body_composition",
    label: "Beslenme ve Vücut Kompozisyonu",
    description:
      "Kalori, protein, ağırlık değişimi ve sürdürülebilir beslenme kararlarını aynı çerçevede toplar.",
  },
  {
    key: "recovery_sleep",
    label: "Toparlanma ve Uyku",
    description:
      "Toparlanma sinyallerini performans ve davranış sürekliliğiyle birlikte yorumlar.",
  },
  {
    key: "habits_consistency",
    label: "Alışkanlıklar ve Süreklilik",
    description:
      "Kopuşu sadece irade sorunu gibi görmez; ritim, ortam ve karar yorgunluğu üzerinden okur.",
  },
  {
    key: "performance_optimization",
    label: "Performans ve Optimizasyon",
    description:
      "Plato, performans sinyalleri ve ileri seviye düzeltmeleri tek tek değil sistem halinde ele alır.",
  },
  {
    key: "myths_clarifications",
    label: "Fitness Mitleri ve Netleştirmeler",
    description:
      "Popüler ama zayıf tavsiyeleri ayırır; gösteriş yerine uygulanabilir netlik sunar.",
  },
] as const satisfies {
  key: ArticleClusterKey;
  label: string;
  description: string;
}[];

export const authorityArticles: AuthorityArticle[] = [
  {
    title: "Düzen neden üç günde bozuluyor?",
    slug: "duzen-neden-uc-gunde-bozuluyor",
    cluster: "habits_consistency",
    summary:
      "Problem genelde motivasyon eksiği değil; ilk kurulumun fazla yüklü, fazla dağınık ve geri dönüş kuralsız olmasıdır.",
    intent: "decision",
    readingTime: "6 dk",
    featured: true,
    continuationTarget: "test",
    opening: {
      eyebrow: "Süreklilik Sorusu",
      title: "Ritmin üç günde bozuluyorsa sorun karakter değil, kurulum olabilir.",
      description:
        "Çoğu kişi düzenin bozulmasını irade zayıflığı sanır. Aslında ilk plan kaldırabileceğinden büyük kurulduğunda kopuş neredeyse kaçınılmaz olur.",
      answerTitle: "Kısa cevap",
      answer:
        "Düzenin erken bozulması, sistemin taşınabilir olmadığını gösterir. İlk düzeltilmesi gereken şey hedefin kendisi değil, ritmi taşıyan en küçük tekrar birimidir.",
    },
    clarification: {
      title: "Kopuşu ne büyütür?",
      description:
        "Kopuşu büyüten ana hatalar birbirine benzer. Sorunlar farklı görünse de yapısal desen aynıdır:",
      points: [
        "Bir anda fazla şeyi değiştirmek ve plana giriş maliyetini yüksek tutmak",
        "Başlangıç ritmini güçlendirmeden sonuç beklentisini yukarıda tutmak",
        "Kopuştan sonra nereye döneceğini belirlememiş olmak",
      ],
    },
    explanation: {
      title: "Bilimsel taraf",
      paragraphs: [
        "Davranış sürekliliğini bozan şey, sadece disiplin eksiği değil; tekrar sinyalinin belirsiz olmasıdır. Sistem her gün yeniden karar istediğinde zihinsel maliyet artar ve tekrar oranı düşer.",
        "Bu nedenle iyi kurulan bir fitness sistemi her gün daha çok şey yapmayı değil, aynı kritik davranışı daha az sürtünmeyle tekrar etmeyi hedefler. Önce ritim oturur, sonra yük artar.",
      ],
    },
    practical: {
      title: "Pratik yorum",
      description:
        "Düzenin erken dağılıyorsa ilk düzeltme daha fazla sertlik değil daha düşük giriş maliyetidir.",
      actions: [
        "Tek bir antrenman veya davranış kalıbını ilk hafta boyunca sabit tut.",
        "Kopuştan sonra geri döneceğin minimum versiyonunu önceden tanımla.",
        "İlk on günü sonuç değil tekrar sayısı ile takip et.",
      ],
    },
    systemBridge: {
      title: "Bu soru aslında daha geniş bir sistem sorusu.",
      description:
        "Süreklilik problemi tek başına alışkanlık meselesi değildir. Bilim ve Fitness sisteminde ritim; hedef, karar maliyeti ve toparlanma ile birlikte kurulur. Bu nedenle dar soru ancak daha büyük omurga içinde tam cevap bulur.",
      primaryCommand: {
        href: "/sistem",
        label: "Omurgayı Oku",
      },
      secondaryCommand: {
        href: "/test",
        label: "Durumunu Ayır",
      },
    },
    stateNextStep: {
      title: "Sıradaki adımı durumuna göre seç.",
      description:
        "Aynı yazıdan çıkan iki kullanıcının sonraki adımı aynı olmak zorunda değil. Aşağıdaki ayrım bu yüzden var:",
      routes: [
        {
          label: "Çerçeve Eksiği",
          title: "Sorunun nerede başladığını daha geniş sistemde görmek istiyorsan omurgaya git.",
          description:
            "Bu konu sende hep tekrar ediyorsa yalnızca taktik değil, daha büyük kurulum mantığı eksik olabilir.",
          href: "/sistem",
          commandLabel: "Omurgayı Şimdi Oku",
        },
        {
          label: "Kişisel Rota",
          title: "Bu kopuşun sende tam olarak hangi profile girdiğini ayırmak istiyorsan teste geç.",
          description:
            "Test, süreklilik probleminin bilgi, ritim ya da darboğaz kaynaklı olup olmadığını netleştirir.",
          href: "/test",
          commandLabel: "Teste Geç",
        },
        {
          label: "Devam Katmanı",
          title: "Şimdi çıkman gerekiyorsa rotanı kaybetmeden ayrıl.",
          description:
            "Yazını ve ilk odağını kendine gönderirsen geri dönüş noktan açık kalır.",
          href: "#article-continuation",
          commandLabel: "Rotamı Koru",
        },
      ],
    },
    continuation: {
      title: "Bu rotayı kendine gönder.",
      description:
        "Buraya e-postanı bıraktığında bülten listesine düşmezsin. Bu yazının ana sonucunu, ilk ritim odağını ve uygun sonraki adımı korursun.",
      deliverables: ["Yazının kısa özeti", "İlk ritim odağı", "Sana uygun sonraki adım"],
      buttonLabel: "Rotamı Gönder",
      successMessage:
        "Yazı rotası kaydedildi. Gerçek gönderim entegrasyonu sonraki aşamada bağlanacak.",
    },
  },
  {
    title: "Kalori açığı ne kadar olmalı?",
    slug: "kalori-acigi-ne-kadar-olmali",
    cluster: "nutrition_body_composition",
    summary:
      "Kalori açığı ne kadar büyürse o kadar iyi değildir; fazla açık daha hızlı değil, daha kırılgan bir süreç üretir.",
    intent: "question",
    readingTime: "7 dk",
    continuationTarget: "continuation",
    opening: {
      eyebrow: "Beslenme Kararı",
      title: "Kalori açığı, sonucu hızlandırmak için değil sürdürmek için ayarlanır.",
      description:
        "Yağ kaybı hedefinde en yaygın hata, açığı gereksiz büyütüp performansı ve sürekliliği bozmaktır.",
      answerTitle: "Kısa cevap",
      answer:
        "İyi kalori açığı agresif görünen değil, birkaç hafta korunabilen açıktır. Hızlı kayıp arayışı, toparlanma ve davranış kalitesini zayıflatıyorsa sistem bozulur.",
    },
    clarification: {
      title: "Neden bu konu yanlış anlaşılıyor?",
      description:
        "Kalori açığı çoğu zaman matematik problemi gibi görülür. Oysa davranış tarafı hesaba katılmadığında tablo bozulur:",
      points: [
        "Fazla açık kısa sürede daha çok yorgunluk ve terk riski üretir",
        "Antrenman kalitesi düşünce yağ kaybı dışındaki kayıplar da büyüyebilir",
        "Sadece tartı hızına bakmak, sürecin korunabilirliğini görmezden gelir",
      ],
    },
    explanation: {
      title: "Bilimsel taraf",
      paragraphs: [
        "Enerji açığı teorik olarak yağ kaybı için gerekir; ancak pratikte açığın büyüklüğü tek başına iyi sonuç anlamına gelmez. İştah, yorgunluk, toparlanma ve antrenman kalitesi de denklemde yer alır.",
        "Bu nedenle vücut kompozisyonu tarafında iyi karar, kağıt üstünde maksimum açığı değil davranış ve performansla beraber taşınabilen açığı seçmektir. Uzun vadede sürdürülebilen strateji genelde daha iyi toplam sonuç verir.",
      ],
    },
    practical: {
      title: "Pratik yorum",
      description:
        "Doğru açık, seni her gün yeniden savaş moduna sokmaz; ritmi korumana izin verir.",
      actions: [
        "Açığı sonuca değil, iki-üç haftalık korunabilirliğine göre değerlendir.",
        "Ağır yorgunluk ve antrenman düşüşü varsa önce sisteme geri bak.",
        "Tartı değişimi kadar günlük istek, uyku ve toparlanma hissini de izle.",
      ],
    },
    systemBridge: {
      title: "Bu soru sadece beslenme sorusu değil.",
      description:
        "Kalori açığı tek başına karar verdirmez. Bilim ve Fitness sisteminde beslenme kararı, antrenman yükü, toparlanma ve davranış sürekliliğiyle birlikte kurulur. Bu yüzden net cevap daha büyük sistemin içinde anlam kazanır.",
      primaryCommand: {
        href: "/sistem",
        label: "Beslenme Mantığını Sistemde Gör",
      },
      secondaryCommand: {
        href: "/test",
        label: "Kendi Durumunu Ayır",
      },
    },
    stateNextStep: {
      title: "Sonraki adım duruma göre değişir.",
      description:
        "Aynı kalori açığı tavsiyesi herkes için aynı sonucu vermez. Kendi profilini aşağıdaki mantıkla ayır:",
      routes: [
        {
          label: "Çerçeve",
          title: "Yağ kaybını hep sadece kalori açığı diye görüyorsan önce sistemi oku.",
          description:
            "Sorunu tek değişkende aramak, daha büyük bağlantı hatalarını saklayabilir.",
          href: "/sistem",
          commandLabel: "Sistemi Oku",
        },
        {
          label: "Tanı",
          title: "Açık mı, süreklilik mi, toparlanma mı sorunu büyütüyor bilmiyorsan teste geç.",
          description:
            "Test, yağ kaybı hedefinde hangi darboğazın esas olduğunu daha net ayırır.",
          href: "/test",
          commandLabel: "Teste Geç",
        },
        {
          label: "Devam",
          title: "Bu kararı daha sonra uygulayacaksan notu kendine gönder.",
          description:
            "Böylece yazıdan çıktıktan sonra karar mantığın kaybolmaz.",
          href: "#article-continuation",
          commandLabel: "Notu Koru",
        },
      ],
    },
    continuation: {
      title: "Beslenme kararını kaybetme.",
      description:
        "Yazının kısa sonucunu, kalori açığı için ilk kontrol noktasını ve uygun sonraki rotayı kendine gönder.",
      deliverables: ["Kalori açığı özeti", "İlk kontrol noktası", "Sonraki rota notu"],
      buttonLabel: "Notu Gönder",
      successMessage:
        "Beslenme notu kaydedildi. Gerçek e-posta teslimi sonraki aşamada bağlanacak.",
    },
  },
  {
    title: "Uyku düzelmeden performans neden artmaz?",
    slug: "uyku-duzelmeden-performans-neden-artmaz",
    cluster: "recovery_sleep",
    summary:
      "Performans düşüşü her zaman program problemi değildir; uyku bozuksa yüklenme kararı da doğru okunmaz.",
    intent: "question",
    readingTime: "6 dk",
    continuationTarget: "test",
    opening: {
      eyebrow: "Toparlanma Sorusu",
      title: "Uyku zayıfsa performans sinyalleri gürültülü hale gelir.",
      description:
        "Bir çok kullanıcı performans düşüşünü daha az efor sanır. Oysa uyku bozuk olduğunda beden doğru sinyal vermez.",
      answerTitle: "Kısa cevap",
      answer:
        "Uyku düzelmeden performansın artmaması normaldir. Çünkü toparlanma sinyali zayıfken antrenman kalitesi, algılanan efor ve tekrar kapasitesi aynı anda bozulur.",
    },
    clarification: {
      title: "Sorun neden saklanır?",
      description:
        "Uyku sorunu doğrudan görülmeyebilir. Çoğu zaman şu şekillerde kendini gizler:",
      points: [
        "Programı sürekli yetersiz sanmak",
        "Yüksek efor hissini performans gelişimiyle karıştırmak",
        "Toparlanma düşüşünü motivasyon eksiği zannetmek",
      ],
    },
    explanation: {
      title: "Bilimsel taraf",
      paragraphs: [
        "Uyku; performans, toparlanma ve karar kalitesi için temel sinyal katmanıdır. Yetersiz uyku durumda antrenman verimi kadar açlık hissi, stres toleransı ve tekrar kabiliyeti de etkilenir.",
        "Bu nedenle performansı yorumlarken sadece program değişkenine bakmak eksik olur. Uyku zayıfsa daha fazla yük eklemek bazen ilerleme değil birikmiş yorgunluğu büyütür.",
      ],
    },
    practical: {
      title: "Pratik yorum",
      description:
        "Bu durumda ilk hamle daha sert program değil, sinyali temizleyecek toparlanma düzeltmesidir.",
      actions: [
        "Bir hafta boyunca uyku süresi ve uyandığındaki his ile antrenman hissini birlikte kaydet.",
        "Toparlanma zayıfsa yük artırmak yerine karar değişkenlerini sadeleştir.",
        "Uyku düzelmeden performans yorumunu nihai karar gibi kullanma.",
      ],
    },
    systemBridge: {
      title: "Bu konu performans sisteminin içinde anlam kazanır.",
      description:
        "Bilim ve Fitness sisteminde uyku, ayrık bir wellness başlığı değil; yüklenme, toparlanma ve davranış sürekliliğiyle aynı karar zincirinin parçasıdır.",
      primaryCommand: {
        href: "/sistem",
        label: "Toparlanma Mantığını Oku",
      },
      secondaryCommand: {
        href: "/test",
        label: "Darboğazını Ayır",
      },
    },
    stateNextStep: {
      title: "Sıradaki hareketin ihtiyacına göre değişir.",
      description:
        "Uyku sorunu bazen bilgi, bazen ritim, bazen de performans hassasiyeti problemi olarak görünür:",
      routes: [
        {
          label: "Çerçeve",
          title: "Uykuyu hala ikincil detay gibi görüyorsan önce sistem bağlantısını oku.",
          description:
            "Toparlanma, sistemde ayrı bölüm değil tüm yük kararlarının sessiz belirleyicisidir.",
          href: "/sistem",
          commandLabel: "Bağlantıyı Oku",
        },
        {
          label: "Tanı",
          title: "Uyku mu, yük mü, süreklilik mi seni geride tutuyor bilmiyorsan teste geç.",
          description:
            "Test, toparlanma sinyalini daha büyük profil içinde yerleştirir.",
          href: "/test",
          commandLabel: "Teste Geç",
        },
        {
          label: "Devam",
          title: "Yorumu sonra kullanacaksan ana notları şimdi kaydet.",
          description:
            "Böylece toparlanma sinyalini tekrar gördüğünde aynı noktadan devam edebilirsin.",
          href: "#article-continuation",
          commandLabel: "Notu Koru",
        },
      ],
    },
    continuation: {
      title: "Toparlanma notunu kendine gönder.",
      description:
        "Bu yazının özetini, ilk kontrol edeceğin toparlanma sinyalini ve sana uygun sonraki adımı kendine gönder.",
      deliverables: ["Toparlanma özeti", "İlk kontrol sinyali", "Sonraki rota"],
      buttonLabel: "Notu Gönder",
      successMessage:
        "Toparlanma notu kaydedildi. Gerçek gönderim entegrasyonu sonraki aşamada bağlanacak.",
    },
  },
  {
    title: "Antrenman hacmi ne zaman artırılmalı?",
    slug: "antrenman-hacmi-ne-zaman-artirilmali",
    cluster: "training_science",
    summary:
      "Hacim, her tıkanmada artırılmaz. Hareket kalitesi ve toparlanma taşımıyorsa daha çok set, daha çok ilerleme anlamına gelmez.",
    intent: "decision",
    readingTime: "7 dk",
    continuationTarget: "sistem",
    opening: {
      eyebrow: "Antrenman Kararı",
      title: "Hacim artışı karar değil sonuç olmalıdır.",
      description:
        "Bir çok kişi plateau gördüğünde ilk refleks olarak daha fazla set ekler. Oysa hacim artışı ancak mevcut sistem taşıyorsa işe yarar.",
      answerTitle: "Kısa cevap",
      answer:
        "Hacim, tekrar kalitesi korunuyor ve toparlanma sinyalleri sağlamsa artırılır. Tıkanma varken otomatik hacim eklemek genelde sorunu gizler.",
    },
    clarification: {
      title: "Nerede hata yapılıyor?",
      description:
        "Hacim kararının yanlış kullanıldığı üç tipik desen vardır:",
      points: [
        "Hareket seçimi zayıfken daha fazla tekrar eklemek",
        "Toparlanma düzeyi düşükken yüklenmeyi büyütmek",
        "Plateau gördüğünde önce teşhis yapmadan sadece miktarı artırmak",
      ],
    },
    explanation: {
      title: "Bilimsel taraf",
      paragraphs: [
        "Hacim artışı gelişim için güçlü bir araç olabilir; ancak tek başına iyi bir araç değildir. Uyaranın kalitesi, toparlanma kapasitesi ve teknik tekrar kalitesiyle birlikte değer kazanır.",
        "Bu nedenle iyi antrenman planlaması, hacmi varsayılan çözüm olarak kullanmaz. Önce hangi değişkenin tıkandığını ayırır; sonra gerekiyorsa hacmi artırır.",
      ],
    },
    practical: {
      title: "Pratik yorum",
      description:
        "Hacim kararı vermeden önce taşıyıcı sinyalleri temizlemek daha doğru başlangıçtır.",
      actions: [
        "Mevcut tekrar kalitesini ve toparlanma hissini bir hafta gözlemle.",
        "Plateau varsa önce hareket seçimi ve yorgunluk tarafını ayır.",
        "Hacim artışına ancak mevcut sistemin bunu kaldırdığını gördüğünde geç.",
      ],
    },
    systemBridge: {
      title: "Bu karar, sadece set sayısı kararı değildir.",
      description:
        "Bilim ve Fitness sisteminde antrenman bilimi, beslenme ve toparlanmadan bağımsız okunmaz. Hacim kararı da bu yüzden daha büyük yük yönetimi içinde değerlendirilir.",
      primaryCommand: {
        href: "/sistem",
        label: "Yük Mantığını Oku",
      },
      secondaryCommand: {
        href: "/test",
        label: "Profilini Ayır",
      },
    },
    stateNextStep: {
      title: "Sonraki adım her profil için aynı değil.",
      description:
        "Bazı kullanıcıda sorun bilgi eksiği, bazısında toparlanma, bazısında ise plateau teşhisidir:",
      routes: [
        {
          label: "Çerçeve",
          title: "Hacim konusunu hala yalnızca sayı olarak görüyorsan önce sistemi oku.",
          description:
            "Hacim, daha büyük yük yönetimi mantığı içinde yerini bulur.",
          href: "/sistem",
          commandLabel: "Sistemi Oku",
        },
        {
          label: "Tanı",
          title: "Hacim artışı mı, toparlanma mı, teknik mi sorun bilmiyorsan teste geç.",
          description:
            "Test, plateau ve yük kararlarını daha net profile ayırır.",
          href: "/test",
          commandLabel: "Teste Geç",
        },
        {
          label: "Devam",
          title: "Kararı daha sonra uygulayacaksan çıktını kendine gönder.",
          description:
            "Böylece sonraki antrenman planına dağılmadan dönersin.",
          href: "#article-continuation",
          commandLabel: "Notu Koru",
        },
      ],
    },
    continuation: {
      title: "Antrenman kararını kaydet.",
      description:
        "Yazının kısa sonucunu, hacim artışı öncesi kontrol edeceğin noktayı ve sonraki rotayı kendine gönder.",
      deliverables: ["Hacim özeti", "Kontrol listesi", "Sonraki rota"],
      buttonLabel: "Kararı Gönder",
      successMessage:
        "Antrenman notu kaydedildi. Gerçek gönderim entegrasyonu sonraki aşamada bağlanacak.",
    },
  },
  {
    title: "Performans ilerlemiyorsa ilk neyi kontrol etmeli?",
    slug: "performans-ilerlemiyorsa-ilk-neyi-kontrol-etmeli",
    cluster: "performance_optimization",
    summary:
      "Performans düşüşü tek bir nedene bağlanmaz; ilk kontrol, yükü değil sinyalin kendisini doğru okumaktır.",
    intent: "decision",
    readingTime: "7 dk",
    continuationTarget: "test",
    opening: {
      eyebrow: "Optimizasyon Sorusu",
      title: "Performans durduğunda ilk bakış noktası daha sert antrenman değildir.",
      description:
        "Performans düşüşünü görür görmez daha fazla yük eklemek ya da sistemi değiştirmek, problemi daha da bulanık hale getirebilir.",
      answerTitle: "Kısa cevap",
      answer:
        "İlk kontrol edilmesi gereken şey, sinyalin hangi katmanda bozulduğudur: toparlanma, yüklenme, ritim ya da hedef uyumu. Doğru teşhis olmadan yapılan değişiklik, genelde daha fazla gürültü üretir.",
    },
    clarification: {
      title: "Yanlış ilk tepkiler",
      description:
        "Performans düşüşünde en sık görülen üç yanlış tepki şunlardır:",
      points: [
        "Tek seferde fazla değişkeni değiştirmek",
        "Yükü hemen artırıp aşağıdaki sorunu gizlemek",
        "Toparlanma ve davranış tarafını yok saymak",
      ],
    },
    explanation: {
      title: "Bilimsel taraf",
      paragraphs: [
        "Performans yalnızca kas ya da kondisyon çıktısı değildir; sinyal kalitesiyle ilgilidir. Uykudan yüklenmeye, hedef seçiminden tekrar ritmine kadar birçok katman bu sinyali etkiler.",
        "Bu nedenle iyi optimizasyon, anlık agresyon değil karar sırasıdır. İlk adım daha çok değil daha net okumaktır. Aksi halde doğru sorunu yanlış yerde ararsın.",
      ],
    },
    practical: {
      title: "Pratik yorum",
      description:
        "Bir anda her şeyi değiştirmek yerine aşağıdaki sıra daha temiz sonuç verir:",
      actions: [
        "Son bir haftadaki uyku, yorgunluk ve tekrar kalitesini yan yana koy.",
        "Hedefe hizmet etmeyen yükleri geçici olarak azalt.",
        "Tek bir performans göstergesini seç ve yalnızca onu izle.",
      ],
    },
    systemBridge: {
      title: "Optimizasyon, temelden kopuk çalışmaz.",
      description:
        "Bilim ve Fitness sisteminde performans, temel düzen kurulmadan ayrı bir katman olarak ele alınmaz. Bu konu ancak sistemin önceki katmanlarıyla birlikte netleşir.",
      primaryCommand: {
        href: "/sistem",
        label: "Sistemin Sırasını Oku",
      },
      secondaryCommand: {
        href: "/test",
        label: "Profilini Doğrula",
      },
    },
    stateNextStep: {
      title: "İlerleme durduğunda sonraki adım açık olmalı.",
      description:
        "Aşağıdaki üç yol, performans düşüşünü daha az gürültü ile ayırmana yardım eder:",
      routes: [
        {
          label: "Çerçeve",
          title: "Optimizasyona erken geçtiğinden şüpheleniyorsan önce sistemi oku.",
          description:
            "Bazen sorun ileri seviye detay değil, önceki katmanların zayıflığıdır.",
          href: "/sistem",
          commandLabel: "Sırayı Oku",
        },
        {
          label: "Tanı",
          title: "Hangi darboğazın baskın olduğunu ayırmak için teste geç.",
          description:
            "Test, performans düşüşünün hangi profil içinde anlam kazandığını ayırır.",
          href: "/test",
          commandLabel: "Teste Geç",
        },
        {
          label: "Devam",
          title: "Yorumu kaybetmeden sonra dönmek istiyorsan notu koru.",
          description:
            "Böylece optimizasyon rotasına aynı netlikle geri gelirsin.",
          href: "#article-continuation",
          commandLabel: "Rotamı Koru",
        },
      ],
    },
    continuation: {
      title: "Optimizasyon notunu sakla.",
      description:
        "Yazının kısa yorumunu, önce kontrol edeceğin sinyali ve uygun sonraki rotayı kendine gönder.",
      deliverables: ["Optimizasyon özeti", "İlk sinyal kontrolü", "Sonraki rota"],
      buttonLabel: "Notu Gönder",
      successMessage:
        "Optimizasyon notu kaydedildi. Gerçek gönderim entegrasyonu sonraki aşamada bağlanacak.",
    },
  },
  {
    title: "Aç karnına kardiyo yağ yakımını gerçekten artırır mı?",
    slug: "ac-karnina-kardiyo-yag-yakimini-gercekten-artirir-mi",
    cluster: "myths_clarifications",
    summary:
      "Aç karnına kardiyo, tek başına daha iyi yağ kaybı garantisi vermez; toplam sistem bozuksa bu detay anlamını kaybeder.",
    intent: "clarification",
    readingTime: "5 dk",
    continuationTarget: "sistem",
    opening: {
      eyebrow: "Mit Kontrolü",
      title: "Aç karnına kardiyo, sonucu tek başına üst düzeye taşıyan gizli araç değil.",
      description:
        "Bu konu uzun süre büyütüldü; ancak pratikte asıl belirleyici olan toplam enerji dengesi, sürdürülebilirlik ve uygulama kalitesidir.",
      answerTitle: "Kısa cevap",
      answer:
        "Aç karnına kardiyo otomatik olarak daha iyi yağ kaybı üretmez. Toplam sistem zayıfsa zamanlama detayı, büyük resmi düzeltmez.",
    },
    clarification: {
      title: "Miti neden çekici geliyor?",
      description:
        "Çünkü teknik gibi görünen detaylar kontrol hissi verir. Oysa şu hatalar devrede kalır:",
      points: [
        "Toplam enerji ve davranış sürekliliğini ikinci plana itmek",
        "Detay değişkene büyük neden rolü yüklemek",
        "Yöntemi gösterişli ama uygulanması zor hale getirmek",
      ],
    },
    explanation: {
      title: "Bilimsel taraf",
      paragraphs: [
        "Yağ kaybı sonucunda belirleyici olan ana tablo toplam enerji dengesi ve sürecin korunabilirliğidir. Kardiyonun zamanlaması bazı kişiler için tolere edilebilir olabilir; ancak bu, sistemi tek başına taşıyan faktör değildir.",
        "Bu nedenle detay değişkenler ancak temel katmanlar sağlamken anlam kazanır. Temel sorun ritim, kalori açığı ya da toparlanmayken miti merkez yapmak yanlış öncelik üretir.",
      ],
    },
    practical: {
      title: "Pratik yorum",
      description:
        "Burada ilk soru 'aç mı tok mu' değil, 'bu stratejiyi koruyabiliyor muyum' sorusudur.",
      actions: [
        "Kardiyo zamanlamasını toplam planın taşınabilirliğine göre seç.",
        "Asıl sonucu belirleyen ana katmanları önce sabitle.",
        "Detayları ancak sistem çalışıyorsa büyüt.",
      ],
    },
    systemBridge: {
      title: "Dar detaylar sistemi ikame etmez.",
      description:
        "Bilim ve Fitness sistemi, mitleri tek tek çürütmek için değil; kullanıcının öncelik sırasını düzeltmek için vardır. Bu soru da daha büyük öncelik zincirinin içinde anlam kazanır.",
      primaryCommand: {
        href: "/sistem",
        label: "Öncelik Sırasını Oku",
      },
      secondaryCommand: {
        href: "/test",
        label: "Profilini Ayır",
      },
    },
    stateNextStep: {
      title: "Sıradaki adım, nerede karıştığına bağlı.",
      description:
        "Mit temizlendiğinde bile herkesin sonraki adımı aynı olmaz:",
      routes: [
        {
          label: "Çerçeve",
          title: "Detayları ana strateji yerine koyuyorsan önce sistemi oku.",
          description:
            "Bazen ihtiyaç duyduğun şey daha fazla ipucu değil, daha doğru öncelik sırasıdır.",
          href: "/sistem",
          commandLabel: "Önceliği Oku",
        },
        {
          label: "Tanı",
          title: "Asıl darboğazın nerede olduğunu ayırmak için teste geç.",
          description:
            "Test, mitin altındaki gerçek ihtiyacı daha net gösterir.",
          href: "/test",
          commandLabel: "Teste Geç",
        },
        {
          label: "Devam",
          title: "Sonucu sonra kullanacaksan yazıyı kendine gönder.",
          description:
            "Böylece detay ile temel arasındaki ayrımı kaybetmezsin.",
          href: "#article-continuation",
          commandLabel: "Notu Koru",
        },
      ],
    },
    continuation: {
      title: "Mit notunu kendine gönder.",
      description:
        "Bu yazının özetini, ilk bakman gereken temel katmanı ve sonraki rotayı e-postana kaydet.",
      deliverables: ["Mit özeti", "İlk temel kontrol", "Sonraki rota"],
      buttonLabel: "Notu Gönder",
      successMessage:
        "Mit notu kaydedildi. Gerçek gönderim entegrasyonu sonraki aşamada bağlanacak.",
    },
  },
];

export function getIntentLabel(intent: ArticleIntent) {
  switch (intent) {
    case "question":
      return "Soru";
    case "decision":
      return "Karar";
    case "clarification":
      return "Netlestirme";
  }
}

export function getClusterDefinition(cluster: ArticleClusterKey) {
  return articleClusters.find((item) => item.key === cluster);
}

export function getClusterHref(cluster: ArticleClusterKey) {
  return `/yazilar#${cluster}`;
}

export function getLeadArticleByCluster(cluster: ArticleClusterKey) {
  return authorityArticles.find((article) => article.cluster === cluster);
}

export const featuredAuthorityArticle =
  authorityArticles.find((article) => article.featured) ?? authorityArticles[0];

export function getArticleBySlug(slug: string) {
  return authorityArticles.find((article) => article.slug === slug);
}

export function buildArticleContinuationConfig(article: AuthorityArticle): ContinuationConfig {
  const cluster = getClusterDefinition(article.cluster);
  const intent = getIntentLabel(article.intent).toLowerCase();

  const targetMessage =
    article.continuationTarget === "sistem"
      ? "Kaydı açtığında seni önce /sistem omurgasına geri getirecek net bir not da içinde olacak."
      : article.continuationTarget === "test"
        ? "Kaydı açtığında seni tanı katmanına geri taşıyacak en net not da içinde olacak."
        : "Kaydı açtığında yazıdan çıkan ana rota ve uygulama notu aynı yerde seni bekleyecek.";

  return {
    title: article.continuation.title,
    description: `${article.continuation.description} ${cluster?.label ?? "Bu cluster"} içinde bu yazı ${intent} tipi bir kararı kapatır. ${targetMessage}`,
    whyNow:
      article.continuationTarget === "test"
        ? "Çünkü bu yazı sende bir şey açmışsa sonraki en doğru hamle tanıya hemen geçmek olur."
        : article.continuationTarget === "sistem"
          ? "Çünkü dar soru büyük omurgaya bağlanmaya hazırken beklemek konuyu yeniden parçalı hale getirir."
          : "Çünkü karar netleşirken notu şimdi korumak daha sonra aynı netliğe dönmeyi kolaylaştırır.",
    delayCost:
      article.continuationTarget === "test"
        ? "Beklersen konu sende yine teori olarak kalır ve kendi durumuna geçmez."
        : article.continuationTarget === "sistem"
          ? "Beklersen aynı soruyu yine dar bir problem gibi okuyup daha büyük deseni kaçırabilirsin."
          : "Beklersen bu yazıdan çıkan karar notu dağılır ve geri dönüşte sıfırdan düşünürsün.",
    deliverables: article.continuation.deliverables,
    buttonLabel: article.continuation.buttonLabel,
    successMessage: article.continuation.successMessage,
    helperText:
      article.continuationTarget === "test"
        ? "Bu alan bülten için değil; sorudan tanıya geçiş enerjisini kaybetmemen için hazırlandı."
        : article.continuationTarget === "sistem"
          ? "Bu alan bülten için değil; dar sorudan büyük omurgaya dönerken notunu koruman için hazırlandı."
          : "Bu alan bülten için değil; yazıdan çıkan karar notunu sonra aynı netlikle açabilmen için hazırlandı.",
    inputPlaceholder:
      article.continuationTarget === "test"
        ? "Teste dönüş yolunu göndereceğimiz e-posta"
        : article.continuationTarget === "sistem"
          ? "Sistem notunu göndereceğimiz e-posta"
          : "Karar notunu göndereceğimiz e-posta",
    successNextStep:
      article.continuationTarget === "test"
        ? { label: "Sıradaki iş: Tanı katmanına (Test) git", href: "/test" }
        : article.continuationTarget === "sistem"
          ? { label: "Sıradaki iş: Sistem omurgasını oku", href: "/sistem" }
          : { label: "Diğer yazıları incele", href: "/yazilar" },
  };
}
