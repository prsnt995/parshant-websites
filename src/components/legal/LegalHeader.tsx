import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { legalConfig } from "@/config/legal";

export function LegalHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-10">
      <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft size={14} /> Back to Home
      </Link>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3">{title}</h1>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
      <p className="text-xs text-slate-500">
        Effective: {legalConfig.effectiveDate} · Last updated: {legalConfig.lastUpdated}
      </p>
    </div>
  );
}
