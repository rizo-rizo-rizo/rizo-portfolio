export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section / Data Diri */}
      <section className="relative min-h-screen flex flex-col justify-center px-12 pt-20 overflow-hidden">
        <div className="absolute inset-0 vanishing-point-lines opacity-40 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <p className="font-label text-primary uppercase tracking-[0.4em] mb-4 text-xs">Architectural Student • Kelas 12 B</p>
            <h1 className="font-headline text-7xl md:text-9xl leading-[0.85] tracking-tighter mb-8">
              RIZO<br /><span className="italic text-outline-variant">LAMARIS</span>
            </h1>
            <div className="flex items-center gap-4 border-l border-primary/30 pl-6 py-2">
              <span className="font-label text-xs text-on-surface-variant uppercase">Focus: Perspective Drafting</span>
              <span className="w-12 h-[1px] bg-outline-variant"></span>
              <span className="font-label text-xs text-on-surface-variant uppercase">Aesthetic: Noir Horror</span>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] bg-surface-container-low overflow-hidden relative group">
              <img 
                alt="Rizo Lamaris Portrait" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                src="/IMG-20260404-WA0000.jpg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none"></div>
              {/* Drafting Overlay */}
              <div className="absolute bottom-6 right-6 bg-surface-container-highest/80 backdrop-blur-md p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-label text-[10px] text-primary uppercase">Subject ID: 012-B</p>
                <p className="font-label text-[10px] text-on-surface">Dimensions: 180cm x 75cm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-32 px-12 bg-surface-container-low relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-headline text-4xl italic mb-6">The Creative<br />Philosophy</h2>
            <div className="w-16 h-1 bg-tertiary"></div>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-xl md:text-2xl leading-relaxed text-on-surface-variant mb-12">
              I am a person with a strong interest in the creative world, especially in <span className="text-primary italic">writing, watching films, and drawing</span>. My focus lies within the structure of interior spaces using <span className="text-primary">perspective techniques</span> (vanishing points), architectural buildings, and characters woven with a <span className="text-tertiary">horror theme</span>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="font-label text-xs text-outline mb-2 uppercase tracking-widest">Technique</p>
                <p className="font-body text-sm">Two-Point Perspective</p>
              </div>
              <div>
                <p className="font-label text-xs text-outline mb-2 uppercase tracking-widest">Medium</p>
                <p className="font-body text-sm">Analog Sketching & Digital Noir</p>
              </div>
              <div>
                <p className="font-label text-xs text-outline mb-2 uppercase tracking-widest">Interest</p>
                <p className="font-body text-sm">Atmospheric Cinema</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Portfolio Grid */}
      <section className="py-32 px-12 bg-background perspective-grid">
        <div className="flex justify-between items-end mb-24">
          <h2 className="font-headline text-5xl tracking-tighter">Drafting & <span className="italic">Exploration</span></h2>
          <p className="font-label text-xs text-outline uppercase tracking-widest">Selected Works / History</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-12">
          {/* Experience Item 1 */}
          <div className="group">
            <div className="aspect-square bg-surface-container-high mb-8 overflow-hidden">
              <img 
                alt="Architecture Perspective" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC82AAiaXE6eJeL-0RkaJcbOVhTiiRdz2EJLB0XPZXCeo4QrIhxvGjIfPrIVuLyIMAXOoMIsxTIgH0gLjgd2v4JFqVC8n1o9DuIIcS8KuV1N3Z4A6-ba-Ma9XVDMBqQzj6iqyLqKE6Hm8WJo6g96v8mLvzi5YGUL1dsMcEMoAuLiTprdzRSt7m3dx5P0HrNq3R97Tb-12etzaiDlcHFDuuj9HXPtRT0rJ-IFWTwmt-QR34rY6yhKauTLU3cHw7GIr_51ea--IMpp1E"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-label text-primary text-xs mb-2">01 — STRUCTURAL</p>
            <h3 className="font-headline text-2xl mb-4">Perspective Interior Spaces</h3>
            <p className="text-sm text-on-surface-variant font-body">Mastering vanishing point techniques to create depth and volume in complex interior architectural drawings.</p>
          </div>

          {/* Experience Item 2 */}
          <div className="group md:mt-24">
            <div className="aspect-square bg-surface-container-high mb-8 overflow-hidden">
              <img 
                alt="Horror Character" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWLgcK44dvOsr3iNK_M1QyDXMGymxpSTnCMhL_rQBXMbJwCBcEwE_eJB6ScP5llTIFTcjngt9ZzL_0xyk3WHEXmzz7M_oxe0Y_FtsEZBc_Xf3L6QWU3U69nGaXABarDT-ORI7DmydkeoVgFvKOgXlo2aoiSvZpMspY-w3TMJq_Srf22mdZ8bRgaboupJl7jZw2g5wCdRB31bIzE1Lvjjjc_Uzu9fxF4l0FAMU6zO7zVTqBBe5HpVbi_kuVJNcOnHuyvrWcRaFaPPU"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-label text-tertiary text-xs mb-2">02 — ORGANIC</p>
            <h3 className="font-headline text-2xl mb-4">Horror Character Concept</h3>
            <p className="text-sm text-on-surface-variant font-body">Exploring the visceral and haunting through character design, blending anatomy with atmospheric horror elements.</p>
          </div>

          {/* Experience Item 3 */}
          <div className="group">
            <div className="aspect-square bg-surface-container-high mb-8 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                <span className="material-symbols-outlined text-primary text-6xl">music_note</span>
              </div>
              <img 
                alt="Choir Participation" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-40 group-hover:opacity-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6BdMXSJxyHNKG4fjMo2BQDJSJrpzKYd3mAv9bSUO0T85jxqlqa_DIe_3tXQZbVBdmaLi28STpRwHxyeciJq3v-N68ajLN_10X7GO2q3PRXtI8PqIUaTiKRoQzFoM2zwAYgfwH26jG01WVb4IeBh45MsiPkLiRlN3RnW1KIs6eWzY1XpmA9CqECRMv7qtyfcoNfJpCb0E4YFSgsoWvi0o9tI5Ob08yOnS9j7lkxbx6gHHfmpfq2xwJD2bLCwnq9_0Pcc8CWTHxiRg"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-label text-outline text-xs mb-2">03 — COLLABORATIVE</p>
            <h3 className="font-headline text-2xl mb-4">Choir Performance</h3>
            <p className="text-sm text-on-surface-variant font-body">Extending creative expression through vocal harmony and collaborative discipline within a choir ensemble.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
