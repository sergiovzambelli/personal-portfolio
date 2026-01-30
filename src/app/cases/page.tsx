import Shell from "@/components/Shell";
import CaseFile from "@/components/CaseFile";
import { projects } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | SVZ.SEC",
    description:
        "Casi studio e analisi di sicurezza: intrusion detection, GDPR threat modeling, security governance e ethical automation.",
    alternates: {
        canonical: "/cases",
    },
    openGraph: {
        title: "Case Studies | SVZ.SEC",
        description:
            "Esplora le investigazioni e analisi di sicurezza di Sergio Vittorio Zambelli.",
        url: "https://www.sergiovzambelli.it/cases",
    },
};

export default function Cases() {
    return (
        <Shell>
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <header className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">CASE_LOGS</h1>
                        <p className="text-muted mt-2">
                            /var/log/investigations: displaying {projects.length} records
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project) => (
                        <CaseFile key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Shell>
    );
}
