export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] text-gray-900 dark:text-gray-100 selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-300">
      {/* Ambient Background Blurs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[120px] animate-pulse [animation-delay:2s]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-emerald-500/10 dark:bg-emerald-600/5 blur-[100px] animate-pulse [animation-delay:4s]"></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="max-w-fit flex items-center gap-12 px-8 h-14 rounded-full border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl bg-white/70 dark:bg-black/40 shadow-2xl shadow-black/5 transition-all duration-300">
          <span className="text-lg font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            DC
          </span>
          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter">
              Designing Interfaces, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Engineering Intelligence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I&apos;m <span className="text-gray-900 dark:text-white font-semibold underline decoration-blue-500 underline-offset-4">David Cirstea</span>. 
              A 20-year-old Full-Stack Developer with a relentless focus on the frontend. I bridge the gap between technical precision and refined design—even if it requires staying up until the early hours to perfect every detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border border-gray-200 dark:border-gray-800 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">The Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Logic met with aesthetics.</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Currently pursuing my studies, I am a developer who values having full control over the digital stack. 
              I specialize in combining sophisticated AI implementations with pixel-perfect user interfaces, 
              driven by a commitment to high-quality code and a perfectionist&apos;s eye for detail.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-gray-50/50 dark:bg-gray-900/10 border-y border-gray-100 dark:border-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Core Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Python', 'Node.js', 'PostgreSQL', 'MongoDB', 'Express', 'LLM Integration', 'REST APIs', 'Auth/JWT'].map((skill) => (
                <div
                  key={skill}
                  className="group relative p-8 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500 transition-colors overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <p className="relative font-bold text-lg group-hover:text-blue-600 transition-colors uppercase tracking-widest">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600">Selected Projects</h2>
                <h3 className="text-4xl font-bold">Refined Solutions</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                A showcase of work exploring the intersection of modern web technologies, AI integration, and obsessive attention to detail.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group cursor-pointer space-y-4"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 border border-transparent group-hover:border-blue-500/50 transition-all">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center font-black text-4xl opacity-40">
                      0{i}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Alpha Platform {i}</h4>
                    <p className="text-gray-500 line-clamp-2">A high-performance analytics platform built for enterprise scalability.</p>
                    <div className="flex gap-4 pt-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                      <span>Case Study</span>
                      <span>Live Site</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-gray-900 text-white rounded-[3rem] mx-4 mb-4">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to start <br />something big?</h2>
              <p className="text-gray-400 text-lg">Send me a message and I&apos;ll get back to you within 24 hours.</p>
            </div>
            
            <form className="grid gap-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              <textarea
                placeholder="What are you working on?"
                rows={4}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5"
              >
                Launch Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm italic">© 2026 David Cirstea. Handcrafted in Next.js.</p>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

