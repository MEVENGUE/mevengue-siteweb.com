export default function ContactPage() {
  return (
    <div className="space-y-8 max-w-xl w-full">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <p className="text-gray-300 text-sm md:text-base">
          Pour une alternance, un stage, un projet freelance ou une
          collaboration technique.
        </p>
      </header>

      <section className="space-y-4 text-sm md:text-base text-gray-200">
        <p>
          Le moyen le plus simple de me contacter est par e-mail ou via
          LinkedIn. Je suis ouvert aux opportunités en cloud, DevOps, systèmes
          &amp; réseaux, IA et data.
        </p>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Email
          </p>
          <a
            href="mailto:mevengueengofranck@gmail.com"
            className="text-teal-300 hover:text-teal-200 underline underline-offset-2 text-sm md:text-base"
          >
            mevengueengofranck@gmail.com
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/franck-mevengue-839028207/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-200 underline underline-offset-2 text-sm md:text-base"
          >
            https://www.linkedin.com/in/franck-mevengue/
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            GitHub
          </p>
          <a
            href="https://github.com/MEVENGUE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-200 underline underline-offset-2 text-sm md:text-base"
          >
            github.com/MEVENGUE
          </a>
        </div>
      </section>
    </div>
  );
}

