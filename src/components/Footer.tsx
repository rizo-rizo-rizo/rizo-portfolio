export default function Footer() {
  return (
    <footer className="bg-[#0c0e11] w-full py-16 px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-outline-variant/10">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="font-headline italic text-xl text-on-surface">RIZO LAMARIS</p>
        <p className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e2e2e6]/40">
          © 2026 RIZO LAMARIS. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 text-center md:text-right">
        <div>
          <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-2">Contact</p>
          <p className="font-label text-sm text-on-surface">+62 812-5398-2355</p>
        </div>
        <div>
          <p className="font-label text-[10px] text-tertiary uppercase tracking-widest mb-2">Social</p>
          <a className="font-label text-sm text-on-surface hover:text-tertiary transition-colors" href="https://instagram.com/swuuoliii">
            @swuuoliii
          </a>
        </div>
      </div>
      <div className="flex gap-8">
        <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e2e2e6]/40 hover:text-[#2ddbde] transition-all" href="#">
          Architecture
        </a>
        <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e2e2e6]/40 hover:text-[#2ddbde] transition-all" href="#">
          Technical Specs
        </a>
        <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e2e2e6]/40 hover:text-[#2ddbde] transition-all" href="#">
          Imprint
        </a>
      </div>
    </footer>
  );
}
