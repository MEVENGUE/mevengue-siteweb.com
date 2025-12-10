export function Footer() {
  return (
    <footer className="py-6 md:py-8 text-[11px] md:text-xs text-gray-500 flex items-center justify-between gap-4 border-t border-white/5 mt-10">
      <p>© {new Date().getFullYear()} FRANCK MEVENGUE. Tous droits réservés.</p>
      <p className="text-right">
        Construit avec Next.js, Tailwind et un shader 3D. Optimisé dans Cursor.
      </p>
    </footer>
  );
}
