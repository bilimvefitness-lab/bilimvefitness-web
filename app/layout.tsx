import type { ReactNode } from "react";
import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ExitIntent } from "@/components/ui/exit-intent";
import { buildMetadata } from "@/lib/metadata";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "@/styles/globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Bilimsel Fitness Ekosistemi",
  description:
    "Bilim ve Fitness; bilimsel netlik, test, sistem, yazı, kitap ve uygulama katmanlarıyla kurulan premium fitness ekosistemidir.",
  path: "/",
  keywords: [
    "bilimsel fitness",
    "fitness sistemi",
    "fitness testi",
    "antrenman bilimi",
    "toparlanma",
    "süreklilik",
  ],
  category: "fitness",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const schema = [organizationSchema(), websiteSchema()];

  return (
    <html lang="tr">
      <body>
        <GoogleAnalytics id={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SiteShell>{children}</SiteShell>
        <ExitIntent />
      </body>
    </html>
  );
}
