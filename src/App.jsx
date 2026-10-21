import { useEffect, useRef, useState } from "react";

const PERFIL = {
  nombre: "Leonardo Mora",
  rol: "Analista Programador & Desarrollador Full Stack",
  descripcion:
    "Formado en desarrollo de software con enfoque en código limpio, programación segura y arquitectura modular. Construyo desde interfaces web y aplicaciones móviles para IoT hasta herramientas nativas de escritorio y backends conectados a bases de datos.",
  pais: "Chile",
  github: "https://github.com/notinlovv",
  linkedin: "https://www.linkedin.com/in/leonardo-mora",
  email: "leonicolas855@gmail.com",
};

const PROYECTOS = [
  {
    titulo: "Sistema de Líneas de Fondeo",
    descripcion:
      "Plataforma Full Stack para registrar y monitorear en tiempo real el avance de líneas de fondeo, reemplazando planillas manuales por captura digital. Incluye dashboard de gestión, backend centralizado y app móvil. Proyecto académico desarrollado en equipo (INACAP).",
    tecnologias: ["Python", "React", "TypeScript", "Full Stack"],
    enlace: "https://github.com/notinlovv/ingsoftwareinacap",
  },
  {
    titulo: "NerdNotes",
    descripcion:
      "Aplicación de escritorio para toma de notas con interfaz gráfica nativa, soporte de modo oscuro y arquitectura modular para la gestión de archivos.",
    tecnologias: ["Python", "PyQt6", "Desktop App"],
    enlace: "https://github.com/notinlovv/nerdnotes",
  },
  {
    titulo: "Proto-PasswordGen",
    descripcion:
      "Generador de contraseñas seguras de escritorio con interfaz gráfica dedicada, diseñado separando la lógica principal de la capa visual.",
    tecnologias: ["Python", "GUI", "Seguridad"],
    enlace: "https://github.com/notinlovv/proto-passwordgen",
  },
];

const HABILIDADES = [
  { nombre: "Python & POO", emoji: "🐍", nivel: 90 },
  { nombre: "Front End (React, JS, Tailwind)", emoji: "⚛️", nivel: 85 },
  { nombre: "Back End & APIs REST", emoji: "⚙️", nivel: 85 },
  { nombre: "Bases de Datos (SQL / NoSQL)", emoji: "🗄️", nivel: 85 },
  { nombre: "Sistemas Operativos (Linux & Bash)", emoji: "🐧", nivel: 90 },
  { nombre: "Seguridad de la Información", emoji: "🔒", nivel: 80 },
  { nombre: "Apps Móviles & IoT", emoji: "📡", nivel: 80 },
  { nombre: "Ingeniería de Software & Ágil", emoji: "📐", nivel: 85 },
  { nombre: "Git y Control de Versiones", emoji: "🔀", nivel: 85 },
];

const ENLACES = [
  { id: "inicio", texto: "Inicio" },
  { id: "proyectos", texto: "Proyectos" },
  { id: "habilidades", texto: "Habilidades" },
  { id: "contacto", texto: "Contacto" },
];

/* ==================== ICONOS SVG ==================== */

const IconoGithub = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconoLinkedin = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5m0 2.5c0-1.4 1-2.5 2.3-2.5S16.5 12 16.5 13.5V16" />
  </svg>
);

const IconoCorreo = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const IconoMapPin = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconoFlechaArriba = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

/* ==================== ESTILOS DE ANIMACIÓN ==================== */

const revealStyles = `
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
`;

/* ==================== HOOKS Y COMPONENTES AUX ==================== */

function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...props }) {
  const ref = useScrollReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Volver arriba"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 text-slate-950 shadow-lg shadow-sky-400/30 transition-all duration-300 ease-out hover:scale-105 hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {IconoFlechaArriba}
    </button>
  );
}

/* ==================== APP ==================== */

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const irA = (id) => {
    setMenuAbierto(false);
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: revealStyles }} />

      <div className="min-h-screen bg-slate-950 text-slate-200 antialiased">
        {/* ---------- NAVBAR ---------- */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <button
              onClick={() => irA("inicio")}
              className="flex items-center gap-2 text-lg font-bold text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-sky-400 text-sm font-extrabold text-slate-950">
                {PERFIL.nombre.charAt(0)}
              </span>
              {PERFIL.nombre}
            </button>

            <ul className="hidden gap-8 md:flex">
              {ENLACES.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => irA(l.id)}
                    className="text-sm font-medium text-slate-300 transition hover:text-sky-400 focus:outline-none focus-visible:text-sky-400"
                  >
                    {l.texto}
                  </button>
                </li>
              ))}
            </ul>

            <button
              className="rounded-md p-2 text-slate-300 hover:bg-slate-800 md:hidden"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuAbierto}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
                {menuAbierto ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </nav>

          {menuAbierto && (
            <ul className="border-t border-slate-800 bg-slate-950 px-5 py-3 md:hidden">
              {ENLACES.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => irA(l.id)}
                    className="w-full py-3 text-left font-medium text-slate-300 hover:text-sky-400"
                  >
                    {l.texto}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </header>

        <main>
          {/* ---------- HERO ---------- */}
          <section id="inicio" className="scroll-mt-20 px-5 pb-20 pt-36 sm:pt-44">
            <div className="mx-auto max-w-4xl">
              <Reveal as="p" delay={0} className="text-base font-medium text-sky-400">
                Hola, soy
              </Reveal>
              <Reveal as="h1" delay={100} className="mt-2 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                {PERFIL.nombre}
              </Reveal>
              <Reveal as="h2" delay={200} className="mt-3 text-2xl font-semibold text-slate-400 sm:text-3xl">
                {PERFIL.rol}
              </Reveal>
              <Reveal as="p" delay={300} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                {PERFIL.descripcion}
              </Reveal>
              <Reveal delay={400} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => irA("proyectos")}
                  className="rounded-lg bg-sky-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Ver proyectos
                </button>
                <button
                  onClick={() => irA("contacto")}
                  className="rounded-lg border border-slate-600 px-7 py-3 font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Contacto
                </button>
              </Reveal>
            </div>
          </section>

          {/* ---------- PROYECTOS ---------- */}
          <section id="proyectos" className="scroll-mt-20 px-5 py-20">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Proyectos</h2>
                <p className="mt-3 max-w-xl text-slate-400">
                  Una selección de herramientas y aplicaciones que he construido. Cada una cuenta con su código fuente en GitHub.
                </p>
              </Reveal>

              {/* Cambiado a lg:grid-cols-3 para que las 3 tarjetas queden bien alineadas */}
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROYECTOS.map((p, i) => (
                  <Reveal key={p.titulo} delay={i * 120} className="h-full">
                    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-400/60">
                      <h3 className="text-xl font-semibold text-white">{p.titulo}</h3>
                      <p className="mt-3 flex-1 leading-relaxed text-slate-400">{p.descripcion}</p>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.tecnologias.map((t) => (
                          <li
                            key={t}
                            className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-sky-300"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={p.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                      >
                        {IconoGithub}
                        Ver en GitHub
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- HABILIDADES ---------- */}
          <section id="habilidades" className="scroll-mt-20 px-5 py-20">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Habilidades</h2>
                <p className="mt-3 max-w-xl text-slate-400">
                  Competencias técnicas y tecnologías que domino como Analista Programador.
                </p>
              </Reveal>

              <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {HABILIDADES.map((h, i) => (
                  <Reveal
                    as="li"
                    key={h.nombre}
                    delay={i * 70}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-3 font-semibold text-white">
                        <span className="text-2xl" aria-hidden="true">{h.emoji}</span>
                        {h.nombre}
                      </span>
                      <span className="text-sm text-slate-400">{h.nivel}%</span>
                    </div>
                    <div
                      className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800"
                      role="progressbar"
                      aria-valuenow={h.nivel}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Nivel de ${h.nombre}`}
                    >
                      <div
                        className="h-full rounded-full bg-sky-400"
                        style={{ width: `${h.nivel}%` }}
                      />
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- CONTACTO ---------- */}
          <section id="contacto" className="scroll-mt-20 px-5 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Contacto</h2>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-400">
                  ¿Tienes un proyecto o una oferta de trabajo? Escríbeme y te respondo lo antes posible.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={PERFIL.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
                  >
                    {IconoGithub} GitHub
                  </a>
                  <a
                    href={PERFIL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
                  >
                    {IconoLinkedin} LinkedIn
                  </a>
                  <a
                    href={`mailto:${PERFIL.email}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
                  >
                    {IconoCorreo} Correo
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        {/* ---------- FOOTER ---------- */}
        <Reveal as="footer" className="border-t border-slate-800 px-5 py-10 text-sm text-slate-500">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <span className="inline-flex items-center gap-2">
                {IconoMapPin}
                {PERFIL.pais}
              </span>
              <span aria-hidden="true" className="hidden text-slate-700 sm:inline">•</span>
              <span className="inline-flex items-center gap-1">
                Hecho con
                <span className="font-semibold text-sky-400">React</span>
                <span className="text-slate-600">+</span>
                <span className="font-semibold text-sky-400">Tailwind CSS</span>
              </span>
            </div>
            <div className="mt-5 border-t border-slate-800/60 pt-5 text-center text-xs text-slate-600">
              © {new Date().getFullYear()} {PERFIL.nombre}. Analista Programador.
            </div>
          </div>
        </Reveal>

        {/* ---------- BOTÓN VOLVER ARRIBA ---------- */}
        <BackToTop />
      </div>
    </>
  );
}