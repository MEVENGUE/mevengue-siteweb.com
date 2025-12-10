import { labDemos } from "@/data/labDemos";

export default function LabPage() {
  return (
    <div className="space-y-8 w-full">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Lab – Démos</h1>
        <p className="text-gray-300 text-sm md:text-base max-w-3xl">
          Espace d&apos;expérimentation : visualisations de données, schémas de
          supervision, prototypes IA, outils football analytics, analyses
          financières, etc.
        </p>
        <p className="text-xs md:text-sm text-teal-400/80 italic">
          ⚠️ Les projets et démos seront mis à jour continuellement.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {labDemos.map((demo) => (
          <div
            key={demo.slug}
            className="border border-white/10 rounded-xl p-4 bg-white/5 flex flex-col justify-between hover:bg-white/10 transition"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{demo.title}</h2>
              <p className="text-xs md:text-sm text-gray-300">
                {demo.description}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                {demo.type}
              </p>
              {demo.note && (
                <p className="text-[10px] text-teal-400/70 italic">
                  {demo.note}
                </p>
              )}
            </div>
            <div className="mt-4">
              <a
                href={demo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm text-teal-300 hover:text-teal-200 underline underline-offset-2 transition"
              >
                Ouvrir la démo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

