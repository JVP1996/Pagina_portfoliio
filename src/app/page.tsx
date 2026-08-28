import IceBackground from "@/components/IceBackground";
import ProjectCard from "@/components/ProjectCard";
import { Terminal, Shield, Sparkles, User, Code2 } from "lucide-react";

const sampleProjects = [
  {
    title: "Hyōrinmaru Engine",
    description:
      "Servidor de alta performance em Node.js com clusterização e cache em memória para processamento concorrente.",
    tags: ["Node.js", "Express", "MongoDB", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Glacier UI Analytics",
    description:
      "Dashboard interativo em tempo real para monitoramento de fluxos de dados com gráficos reativos e visual dark.",
    tags: ["React", "TypeScript", "Tailwind", "Next.js"],
    githubUrl: "https://github.com",
  },
  {
    title: "Bankai Task Automation",
    description:
      "Scripts de automação e orquestração de workflows para integração contínua e análise de métricas de rede.",
    tags: ["Python", "Pandas", "GitHub Actions"],
    githubUrl: "https://github.com",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-hyorin-cyan selection:text-black">
      <IceBackground />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2 font-mono text-sm tracking-widest text-hyorin-ice">
          <Shield className="h-4 w-4" /> 10th SQUAD // CAPTAIN
        </div>
        <nav className="flex gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-hyorin-cyan transition-colors">
            Sobre
          </a>
          <a
            href="#projects"
            className="hover:text-hyorin-cyan transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="hover:text-hyorin-cyan transition-colors"
          >
            Contato
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-hyorin-ice/30 bg-hyorin-ice/10 px-3 py-1 text-xs font-mono text-hyorin-cyan mb-6">
          <Sparkles className="h-3.5 w-3.5" /> Sit Upon the Frozen Heavens
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white">
          Desenvolvedor{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hyorin-ice to-hyorin-cyan">
            Full Stack
          </span>
        </h1>
        <p className="mt-6 text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto">
          Construindo arquiteturas resilientes, interfaces afiadas e soluções
          eficientes inspiradas no rigor e precisão do gelo.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-hyorin-ice px-6 py-3 font-semibold text-black hover:bg-hyorin-cyan transition-all shadow-ice"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-hyorin-border bg-hyorin-card px-6 py-3 font-semibold text-white hover:border-hyorin-ice transition-all"
          >
            Entrar em Contato
          </a>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <Terminal className="h-6 w-6 text-hyorin-cyan" />
          <h2 className="text-2xl font-bold tracking-wide">
            Projetos Destacados
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* About / Bio Section */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-3 mb-8">
          <User className="h-6 w-6 text-hyorin-cyan" />
          <h2 className="text-2xl font-bold tracking-wide text-white">Sobre Mim</h2>
        </div>

        <div
          className="group relative rounded-2xl border border-hyorin-border bg-hyorin-card p-8 sm:p-10 backdrop-blur-md transition-all duration-300 hover:border-hyorin-cyan hover:shadow-ice-hover"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
          }}
        >
          <div className="absolute top-0 right-0 -mr-10 -mt-10 h-36 w-36 rounded-full bg-hyorin-cyan/10 blur-2xl group-hover:bg-hyorin-cyan/20 transition-all pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-hyorin-ice/30 bg-hyorin-ice/10 px-3 py-1 text-xs font-mono text-hyorin-cyan">
              <Code2 className="h-3.5 w-3.5" /> Full Stack Developer
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">
              Precisão técnica e arquitetura inspirada no rigor do gelo.
            </h3>
            <p className="text-slate-300/85 leading-relaxed text-base">
              Desenvolvedor full stack focado em produtos confiáveis, interfaces
              claras e automações que simplificam operações complexas. Especializado em
              criar soluções escaláveis que unem performance de ponta a ponta com uma
              experiência de usuário fluida e intuitiva.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="h-6 w-6 text-hyorin-cyan" />
          <h2 className="text-2xl font-bold tracking-wide text-white">Contato</h2>
        </div>
        <p className="text-slate-300/80 mb-8 max-w-xl text-sm leading-relaxed">
          Disponível para novos projetos, colaborações e oportunidades. Conecte-se comigo:
        </p>

        {/* Icons side by side */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          {/* Gmail */}
          <a
            href="mailto:contato@example.com"
            title="Gmail"
            aria-label="Gmail"
            className="group relative flex h-13 w-13 items-center justify-center rounded-xl border border-hyorin-border/60 bg-hyorin-card/50 text-hyorin-ice backdrop-blur-md transition-all duration-300 hover:border-hyorin-cyan hover:bg-hyorin-ice/15 hover:text-hyorin-cyan hover:shadow-ice-hover hover:-translate-y-1"
          >
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="group relative flex h-13 w-13 items-center justify-center rounded-xl border border-hyorin-border/60 bg-hyorin-card/50 text-hyorin-ice backdrop-blur-md transition-all duration-300 hover:border-hyorin-cyan hover:bg-hyorin-ice/15 hover:text-hyorin-cyan hover:shadow-ice-hover hover:-translate-y-1"
          >
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.64 1.64 0 0 0-1.66 1.64c0 .91.74 1.64 1.66 1.64s1.65-.73 1.65-1.64c-.01-.9-.74-1.64-1.65-1.64z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
            className="group relative flex h-13 w-13 items-center justify-center rounded-xl border border-hyorin-border/60 bg-hyorin-card/50 text-hyorin-ice backdrop-blur-md transition-all duration-300 hover:border-hyorin-cyan hover:bg-hyorin-ice/15 hover:text-hyorin-cyan hover:shadow-ice-hover hover:-translate-y-1"
          >
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            aria-label="Instagram"
            className="group relative flex h-13 w-13 items-center justify-center rounded-xl border border-hyorin-border/60 bg-hyorin-card/50 text-hyorin-ice backdrop-blur-md transition-all duration-300 hover:border-hyorin-cyan hover:bg-hyorin-ice/15 hover:text-hyorin-cyan hover:shadow-ice-hover hover:-translate-y-1"
          >
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            aria-label="WhatsApp"
            className="group relative flex h-13 w-13 items-center justify-center rounded-xl border border-hyorin-border/60 bg-hyorin-card/50 text-hyorin-ice backdrop-blur-md transition-all duration-300 hover:border-hyorin-cyan hover:bg-hyorin-ice/15 hover:text-hyorin-cyan hover:shadow-ice-hover hover:-translate-y-1"
          >
            <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.832.819 2.796.819 3.18 0 5.766-2.587 5.767-5.767.001-3.181-2.585-5.767-5.767-5.767zm3.385 8.163c-.144.405-.837.774-1.17.822-.312.043-.683.072-2.148-.535-1.745-.724-2.885-2.502-2.973-2.618-.088-.116-.708-.941-.708-1.794 0-.853.447-1.272.607-1.446.16-.175.349-.219.465-.219s.233 0 .335.005c.107.005.25.04.392.378.145.349.494 1.206.537 1.294.044.088.073.19.015.305-.058.117-.087.19-.174.292-.087.102-.184.227-.263.305-.088.087-.18.182-.078.357.102.175.454.748.974 1.211.67.595 1.233.78 1.408.867.175.088.277.073.379-.044.102-.116.437-.509.553-.684.117-.175.233-.146.393-.088.16.059 1.018.48 1.193.568.175.087.291.131.335.204.043.073.043.422-.102.827zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.954-1.399C8.399 21.492 10.143 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.636 0-3.153-.473-4.444-1.292l-.319-.203-2.946.832.846-2.871-.223-.332A8.147 8.147 0 0 1 3.818 12C3.818 7.489 7.489 3.818 12 3.818c4.51 0 8.182 3.671 8.182 8.182 0 4.511-3.672 8.182-8.182 8.182z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-hyorin-border/40 py-8 text-center text-xs text-slate-500 font-mono">
        <p>© {new Date().getFullYear()} Hitsugaya // Sit Upon the Frozen Heavens, Hyōrinmaru</p>
      </footer>
    </main>
  );
}
