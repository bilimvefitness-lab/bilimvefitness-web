"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { InterestEntry } from "@/components/product/interest-entry";

export function ExitIntent() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if shown in this session
    const shown = sessionStorage.getItem("exit_intent_shown");
    if (shown) {
      setHasShown(true);
    }
  }, []);

  useEffect(() => {
    if (hasShown) return;

    function handleMouseLeave(event: MouseEvent) {
      if (event.clientY <= 0) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exit_intent_shown", "true");
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm sm:p-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-[#F8F9FA] shadow-2xl transition-all">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 z-10 rounded-full bg-white/50 p-2 text-ink/60 backdrop-blur-md transition hover:bg-white hover:text-ink"
        >
          <X size={20} />
        </button>
        
        <div className="p-1 sm:p-2">
          <InterestEntry
            id="exit-intent-form"
            eyebrow="Gitmene İzin Yok"
            title="Sistem özetini almadan ayrılma."
            description="Bilim ve Fitness omurgasını, temel antrenman yüklerini ve beslenme kontrol listesini içeren dijital özeti sana gönderelim."
            deliverables={[
              "Yük yönetimi kontrol listesi",
              "Beslenme tanısı kılavuzu",
              "Sistem özet şablonu"
            ]}
            whyNow="Bu bilgiler platform dışındaki karmaşada kaybolmanı engellemek için tasarlandı."
            buttonLabel="Sistemi Bana Gönder"
            successMessage="Sistem özeti sıran kaydedildi. Bir sonraki aşamada iletilecek."
            helperText="Bu mail bülten için değil, sadece sistem özetini kaybetmemen içindir."
            inputPlaceholder="Özetin gideceği e-posta"
          />
        </div>
      </div>
    </div>
  );
}
