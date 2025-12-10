import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-8 w-full">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Projets</h1>
        <p className="text-gray-300 text-sm md:text-base max-w-3xl">
          Une sélection de projets en Kubernetes, monitoring, IA, automatisation
          et football analytics. Chaque projet est lié à un dépôt GitHub ou à
          une démonstration lorsque c&apos;est possible.
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-white/10 rounded-xl p-4 md:p-5 bg-white/5 flex flex-col gap-3"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg md:text-xl font-semibold">
                {project.title}
              </h2>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                {project.year}
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-300">{project.short}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-[11px] px-2 py-1 rounded-full bg-black/40 border border-white/10 text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs md:text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 underline underline-offset-2"
                >
                  Voir sur GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 underline underline-offset-2"
                >
                  Démo en ligne
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

