export default function Work() {
  return (
    <div className="flex flex-col">
      {/* Hero / Perspective Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 perspective-grid z-0" style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}></div>
        <div className="relative z-10 text-center px-6">
          <p className="font-label text-sm tracking-[0.4em] uppercase text-primary mb-6">Architectural Narrative & Creative Arts</p>
          <h1 className="font-headline text-6xl md:text-8xl italic tracking-tighter text-on-surface leading-none mb-8">
            Shadows & <br />Technical Lines
          </h1>
          <div className="flex justify-center gap-12 mt-12">
            <div className="text-left max-w-xs">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">Coordinates</span>
              <p className="text-xs text-on-surface-variant mt-1">40.7128° N, 74.0060° W <br />Subsurface Studio</p>
            </div>
            <div className="text-left max-w-xs">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">Discipline</span>
              <p className="text-xs text-on-surface-variant mt-1">Gothic Architecture <br />Character Horror Art</p>
            </div>
          </div>
        </div>
      </header>

      {/* Skills: Asymmetric Grid */}
      <section className="py-32 px-12 bg-surface-container-lowest relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl mb-24 italic">Aptitudes</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
            {/* Skill 1 */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <span className="font-label text-xs text-primary">01</span>
              <h3 className="font-headline text-3xl">Creative Writing & Storytelling</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Crafting narratives that inhabit the liminal spaces. Focus on psychological horror, cosmic isolation, and the architectural history of fictional ruins.
              </p>
              <div className="mt-4 h-px w-24 bg-outline-variant"></div>
            </div>
            
            {/* Skill 2 */}
            <div className="md:col-start-8 md:col-span-5 flex flex-col gap-6">
              <span className="font-label text-xs text-primary">02</span>
              <h3 className="font-headline text-3xl">Drafting & Perspective Points</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Technical mastery of 3-point perspective. Creating structured environments that feel both mathematically precise and hauntingly vacant.
              </p>
              <div className="mt-4 h-px w-24 bg-outline-variant"></div>
            </div>
            
            {/* Skill 3 */}
            <div className="md:col-span-6 md:col-start-3 flex flex-col gap-6 mt-12">
              <span className="font-label text-xs text-primary">03</span>
              <h3 className="font-headline text-3xl">Vocal Ability (Choral Performance)</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Bass-baritone range specialized in liturgical and classical choral works. Exploring the acoustic resonance of cathedral architecture through sound.
              </p>
              <div className="mt-4 h-px w-24 bg-outline-variant"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section: Bento Gallery */}
      <section className="py-32 bg-background">
        <div className="px-12 mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-headline text-5xl italic">Manifestations</h2>
            <p className="font-label text-xs tracking-widest text-outline-variant mt-2 uppercase">Selected Works 2022-2024</p>
          </div>
          <div className="hidden md:block">
            <span className="font-label text-[10px] text-primary uppercase tracking-[0.2em]">Scroll to penetrate depth</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-outline-variant/10">
          {/* Perspective Drawing */}
          <div className="md:col-span-2 relative group overflow-hidden bg-surface-container h-[600px] border-r border-b border-outline-variant/10">
            <img 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuFNcAbXtUj1_FlA2EBcKNK8xDCE2X3sQ3v9PUPrC39zIfZJ3-24Bog50aioKwGBg0FoydjIyUyGD6OuRTKRpNQLB7-WB6fw3LzCMZTnhjzKbaGT2s9QKz3jcnSJuLfHEKfv0otBFYEuw-_tWjLClUX3xlYhrsTBBfE7MW3KCuh0ui7NXCLwdtBb4p0B2KtvO5JOaLQ2EZnkHna_-_CyQZ7K9xT2GLfIUjNT0FKO9LJW-pbBsBZoHpvBRtHyS9oSRnVOE93AMcSYI"
              alt="The Void Basilica"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8">
              <span className="font-label text-[10px] text-primary uppercase mb-2 block">Architecture</span>
              <h4 className="font-headline text-2xl">The Void Basilica</h4>
              <p className="font-body text-xs text-on-surface-variant mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Technical drafting on vellum, 2024</p>
            </div>
          </div>
          
          {/* Horror Character */}
          <div className="md:col-span-2 relative group overflow-hidden bg-surface-container h-[600px] border-b border-outline-variant/10">
            <img 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAax8gU25FhjWwikAC63Eoj3K11ZY7mo7gbCnJ_ET6avSxC_NxAPSOPpDhrFRF6GkY4k8-4w50RUTmPZRun1vBZNGO67kcuswcOY4pLAcKVeSPv5BJAaJDU3VMn15MMZP6xGh3FFy8zNM3BacEccuNT1aandgakPA1j5dkYxAyx30jaXapHuyy_5KwTKWw2D6TBxUmzGgJl6BEgd0KMFJF6ietRQTGzOpmdG-mPwKSIhQUnHzjh9Huv5Peew2fDU6wsQ7E6DUmeIAU"
              alt="The Bell-Ringer's Lament"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8">
              <span className="font-label text-[10px] text-tertiary uppercase mb-2 block">Character Study</span>
              <h4 className="font-headline text-2xl">The Bell-Ringer’s Lament</h4>
              <p className="font-body text-xs text-on-surface-variant mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Digital charcoal and ink, 2023</p>
            </div>
          </div>
          
          {/* Creative Story */}
          <div className="md:col-span-1 relative group overflow-hidden bg-surface-container-high h-[400px] border-r border-outline-variant/10 p-8 flex flex-col justify-end">
            <div className="mb-auto">
              <span className="material-symbols-outlined text-primary text-4xl">auto_stories</span>
            </div>
            <span className="font-label text-[10px] text-outline uppercase mb-2 block">Literature</span>
            <h4 className="font-headline text-xl">Concrete Echoes</h4>
            <p className="font-body text-xs text-on-surface-variant mt-4 line-clamp-3">A short story concerning a man who discovers the blueprint of his own lungs in the city's sewer system...</p>
            <a href="#" className="mt-6 text-primary text-xs font-label uppercase tracking-widest flicker-hover">Read Entry</a>
          </div>
          
          {/* Choir Performance */}
          <div className="md:col-span-3 relative group overflow-hidden bg-surface-container h-[400px]">
            <img 
              className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt2EgIEfbS132MuadEvxUvVBoFKzVLxbesFewEqP9Fkt34apgxsVMz1vGKd_gIEoiphLHLMov7ffGY4fm176J9OdV6YNjjb1GFfW6hoQbumOtwpehf2EYEdbnbRV2VRpiuJeaYo1BQcNik3UnH_GjEiCwCPIycx5Pc61oSnGuKDwNNopywiJNGocpxpf_VwG2GqKzI3psRYAHRPvoex-zZh3MzBIh4yvygetI2AUuTm5xkCosI2ucl1LTk7-_9psLvKwX5MX1gHN4"
              alt="Requiem in D Minor"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-12">
                <span className="material-symbols-outlined text-primary text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                <h4 className="font-headline text-3xl">Requiem in D Minor</h4>
                <p className="font-label text-xs tracking-widest text-on-surface-variant uppercase mt-2">Solo Performance — St. Jude’s Chapel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA / Drafting Overlay Style */}
      <section className="py-40 px-12 bg-surface-container-low flex justify-center">
        <div className="max-w-3xl w-full ghost-border p-16 relative">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-primary"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-primary"></div>
          <div className="text-center">
            <h2 className="font-headline text-4xl italic mb-8">Inquire for Commissions</h2>
            <p className="font-body text-on-surface-variant mb-12">Whether seeking technical drafting, bespoke character illustration, or narrative consulting, the studio remains open for collaboration.</p>
            <form className="space-y-12">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Identity" 
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary placeholder:text-outline/40 font-label text-sm transition-all" 
                />
              </div>
              <div className="relative">
                <textarea 
                  placeholder="The Nature of Your Request" 
                  rows={1} 
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary placeholder:text-outline/40 font-label text-sm transition-all"
                ></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-on-primary py-6 font-label uppercase tracking-[0.3em] text-xs hover:shadow-[0_0_20px_rgba(45,219,222,0.4)] transition-all flicker-hover">
                Initiate Protocol
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
