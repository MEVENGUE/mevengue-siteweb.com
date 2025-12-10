import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-4xl w-full mx-auto">
      {/* En-tête avec photo de profil */}
      <header className="space-y-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <Image
              src="/images/profil.jpg"
              alt="FRANCK MEVENGUE"
              width={160}
              height={160}
              className="rounded-full object-cover border-2 border-teal-400/30"
              priority
            />
          </div>
          <div className="flex-1 space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              FRANCK MEVENGUE
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              Étudiant en Architecture Cloud, Systèmes & Réseaux – SUPINFO PARIS
            </p>
            <div className="space-y-2 text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
              <p>
                Parcours académique combinant SUPINFO (Master Architecture Cloud, Systèmes & Réseaux) 
                et ECAM-EPMI (Systèmes des Réseaux Intelligents). Spécialisation en cloud computing, 
                systèmes & réseaux, architectures distribuées, DevOps à SUPINFO.
              </p>
              <p>
                Intérêts portés sur l&apos;IA appliquée (football analytics, automatisation), 
                l&apos;architecture cloud, le monitoring, l&apos;observabilité et l&apos;automatisation 
                de systèmes en production.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section Formation & Parcours */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Formation & Parcours
        </h2>
        <div className="space-y-6">
          {/* Timeline item 1 */}
          <div className="relative pl-8 border-l-2 border-teal-400/30 space-y-1">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-400 border-2 border-black"></div>
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Master Architecture Cloud, Systèmes & Réseaux
            </h3>
            <p className="text-sm md:text-base text-teal-400">
              SUPINFO – 2025–2027 (en cours)
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Formation approfondie en cloud computing, systèmes distribués, virtualisation, 
              sécurité réseau et architectures scalables. Focus sur Kubernetes, Docker, 
              sécurité réseau et DevOps.
            </p>
          </div>

          {/* Timeline item 2 */}
          <div className="relative pl-8 border-l-2 border-teal-400/30 space-y-1">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-teal-400 border-2 border-black"></div>
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Diplôme ECAM-EPMI – Systèmes des Réseaux Intelligents
            </h3>
            <p className="text-sm md:text-base text-teal-400">
              ECAM-EPMI – 2021–2024
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Formation d&apos;ingénieur en systèmes intelligents, réseaux, notions de base en data, IA, Cybersécurité,
              Gestion de projet, Agile, SCRUM, Lean, DevOps et informatique industrielle. Approche pluridisciplinaire couvrant 
              l&apos;électronique, les réseaux, l&apos;IA et les systèmes embarqués.
            </p>
          </div>
        </div>
      </section>

      {/* Section Centres d'intérêt techniques */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Centres d&apos;intérêt techniques
        </h2>
        <ul className="space-y-2 text-sm md:text-base text-gray-300 list-none">
          <li className="flex items-start gap-2">
            <span className="text-teal-400 mt-1">•</span>
            <span>Cloud & architectures distribuées</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400 mt-1">•</span>
            <span>Kubernetes, conteneurs, DevOps & CI/CD</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400 mt-1">•</span>
            <span>Monitoring, observabilité, SRE mindset</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-400 mt-1">•</span>
            <span>IA appliquée (football, data, automatisation)</span>
          </li>
        </ul>
      </section>

      {/* Section Projets académiques */}
      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white border-b border-gray-700 pb-2">
          Projets académiques – Ingénierie & Sciences
        </h2>
        <div className="space-y-5">
          {/* Projet 1 */}
          <div className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold text-white">
              Projet électronique
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Projet d&apos;ingénierie électronique de début de cycle : modélisation et 
              réalisation d&apos;un système électronique complet, incluant la conception, 
              la simulation et la mise en œuvre pratique.
            </p>
            <a
              href="https://github.com/MEVENGUE/Projet_ING/blob/main/PROJET%20ELECTRONIQUE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base text-teal-400 hover:text-teal-300 underline underline-offset-2 transition"
            >
              Voir le PDF
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

          {/* Projet 2 */}
          <div className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold text-white">
              Projet de physique – Mesure de la constante de Boltzmann
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Projet de physique expérimentale combinant sciences physiques et informatique : 
              création d&apos;une page web interactive pour la mesure de la constante de Boltzmann, 
              intégrant visualisation de données et calculs en temps réel.
            </p>
            <a
              href="https://github.com/MEVENGUE/Projet_ING/blob/main/PROJET%20PHYSIQUE%20page%20web%20Mesure%20de%20la%20constante%20de%20Boltzmann.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base text-teal-400 hover:text-teal-300 underline underline-offset-2 transition"
            >
              Voir le PDF
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

          {/* Projet 3 */}
          <div className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold text-white">
              Projet scientifique TIPE – Mobilité autonome
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Travail d&apos;Initiative Personnelle Encadrée (TIPE) sur la mobilité autonome : 
              modélisation et réflexion scientifique approfondie sur les systèmes intelligents, 
              l&apos;automatisation et les défis techniques de la mobilité autonome.
            </p>
            <a
              href="https://github.com/MEVENGUE/Projet_ING/blob/main/Projet%20Scientifique%20TIPE-Mobilit%C3%A9%20Autonome.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base text-teal-400 hover:text-teal-300 underline underline-offset-2 transition"
            >
              Voir le document
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

          {/* Projet 4 */}
          <div className="space-y-2 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="text-lg font-semibold text-white">
              Projet TP Réseaux Virtuels & Cloud
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Travaux pratiques approfondis sur les réseaux virtuels et le cloud computing : 
              mise en place d&apos;environnements virtualisés, configuration d&apos;adressage IP, 
              routage, interconnexion de réseaux et déploiement d&apos;infrastructures cloud.
            </p>
            <a
              href="https://github.com/MEVENGUE/Projet_ING/blob/main/4_5828119601031943459.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base text-teal-400 hover:text-teal-300 underline underline-offset-2 transition"
            >
              Voir le PDF
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
      </section>

      {/* Section Contact rapide */}
      <section className="pt-8 border-t border-gray-700">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Pour en savoir plus ou discuter d&apos;une alternance / stage, vous pouvez consulter la{" "}
          <Link
            href="/contact"
            className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition"
          >
            page Contact
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
