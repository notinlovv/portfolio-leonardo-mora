import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Layers,
  Server,
  Database,
  Terminal,
  ShieldCheck,
  Smartphone,
  Workflow,
  GitBranch,
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  Mail,
  Copy,
  Check,
  MapPin,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

/* ==================== DATOS DEL PERFIL ==================== */

const PERFIL = {
  nombre: "Leonardo Mora",
  rol: "Analista Programador & Desarrollador Full Stack",
  descripcion:
    "Formado en desarrollo de software con enfoque en código limpio, programación segura y arquitectura modular. Construyo desde interfaces web y aplicaciones móviles para IoT hasta herramientas nativas de escritorio y backends conectados a bases de datos.",
  pais: "Chile",
  disponibilidad: "Disponible para proyectos & empleo",
  github: "https://github.com/notinlovv",
  githubUsuario: "@notinlovv",
  linkedin: "https://www.linkedin.com/in/leonardo-mora",
  linkedinUsuario: "in/leonardo-mora",
  email: "leonicolas855@gmail.com",
};

const PROYECTOS = [
  {
    titulo: "Sistema de Líneas de Fondeo",
    tipo: "Plataforma Web & Móvil",
    destacado: true,
    descripcion:
      "Plataforma Full Stack para registrar y monitorear en tiempo real el avance de líneas de fondeo, reemplazando planillas manuales por captura digital. Incluye dashboard de gestión, backend centralizado y app móvil. Proyecto desarrollado en equipo (INACAP).",
    tecnologias: ["Python", "React", "TypeScript", "Full Stack", "IoT"],
    enlace: "https://github.com/notinlovv/ingsoftwareinacap",
  },
  {
    titulo: "NerdNotes",
    tipo: "Aplicación de Escritorio",
    destacado: false,
    descripcion:
      "Aplicación nativa de escritorio para toma de notas con interfaz gráfica moderna, soporte de modo oscuro y arquitectura modular orientada a la gestión eficiente de archivos.",
    tecnologias: ["Python", "PyQt6", "Desktop GUI", "Modular"],
    enlace: "https://github.com/notinlovv/nerdnotes",
  },
  {
    titulo: "Proto-PasswordGen",
    tipo: "Herramienta de Seguridad",
    destacado: false,
    descripcion:
      "Generador de contraseñas robustas con interfaz gráfica dedicada, implementado bajo el principio de separación estricta entre la lógica criptográfica y la capa visual.",
    tecnologias: ["Python", "GUI", "Seguridad", "Algoritmos"],
    enlace: "https://github.com/notinlovv/proto-passwordgen",
  },
];

const HABILIDADES = [
  {
    titulo: "Python & Programación Modular",
    icono: Code2,
    descripcion:
      "Arquitectura limpia orientada a objetos (POO), automatización de tareas, lógica de negocio y desarrollo de herramientas de escritorio con PyQt6.",
    tags: ["Python", "POO", "PyQt6", "Scripts & CLI"],
  },
  {
    titulo: "Front End & UI React",
    icono: Layers,
    descripcion:
      "Construcción de interfaces interactivas, responsivas y accesibles con React, JavaScript moderno y estilos utilitarios con Tailwind CSS.",
    tags: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    titulo: "Back End & APIs REST",
    icono: Server,
    descripcion:
      "Diseño de servicios web, gestión de endpoints RESTful, serialización de datos y arquitectura modular cliente-servidor.",
    tags: ["APIs REST", "Servicios Web", "JSON", "Endpoints"],
  },
  {
    titulo: "Bases de Datos & Persistencia",
    icono: Database,
    descripcion:
      "Modelado de datos relacionales y no relacionales, diseño de esquemas normalizados, integridad de datos y consultas estructuradas.",
    tags: ["SQL", "PostgreSQL / MySQL", "NoSQL", "Modelado ER"],
  },
  {
    titulo: "Sistemas & Entorno Linux",
    icono: Terminal,
    descripcion:
      "Administración y navegación en distribuciones Linux, desarrollo ágil en terminal y automatización de flujos con scripts en Bash.",
    tags: ["Linux", "Bash Scripting", "Terminal", "Automatización"],
  },
  {
    titulo: "Seguridad de la Información",
    icono: ShieldCheck,
    descripcion:
      "Aplicación de principios de desarrollo seguro, sanitización y validación estricta de datos, autenticación y manejo responsable de credenciales.",
    tags: ["Desarrollo Seguro", "Sanitización", "Autenticación", "Criptografía"],
  },
  {
    titulo: "Apps Móviles & IoT",
    icono: Smartphone,
    descripcion:
      "Integración de hardware y sensores telemétricos, captura de datos en terreno y sincronización en tiempo real hacia plataformas centrales.",
    tags: ["IoT", "Apps Móviles", "Telemetría", "Captura Digital"],
  },
  {
    titulo: "Ingeniería de Software & Ágil",
    icono: Workflow,
    descripcion:
      "Ciclo de vida del software (SDLC), metodología Scrum, especificación de requerimientos, patrones de diseño y estándares de Clean Code.",
    tags: ["Scrum / Ágil", "Clean Code", "Arquitectura", "UML"],
  },
  {
    titulo: "Git & Control de Versiones",
    icono: GitBranch,
    descripcion:
      "Flujos de trabajo colaborativos con Git y GitHub, estrategias de ramas (branching), resolución de conflictos y revisión de código.",
    tags: ["Git", "GitHub", "Branching", "Code Review"],
  },
];

const ANIO_ACTUAL = new Date().getFullYear();

const ENLACES = [
  { id: "inicio", texto: "Inicio" },
  { id: "proyectos", texto: "Proyectos" },
  { id: "habilidades", texto: "Habilidades" },
  { id: "contacto", texto: "Contacto" },
];

/* ==================== ICONOS SVG DE REDES ==================== */

function IconoGithub({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconoLinkedin({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

/* ==================== ESTILOS DE ANIMACIÓN ==================== */

const revealStyles = `
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 650ms cubic-bezier(0.16, 1, 0.3, 1), transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
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
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/30 bg-slate-900/90 text-sky-400 shadow-lg shadow-sky-500/10 backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

/* ==================== APP PRINCIPAL ==================== */

export default function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const irA = (id) => {
    setMenuAbierto(false);
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  const copiarCorreo = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(PERFIL.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2400);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: revealStyles }} />

      <div className="relative min-h-screen bg-slate-950 text-slate-200 antialiased selection:bg-sky-500/25 selection:text-white">
        {/* Iluminación ambiental sutil de fondo */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[520px] w-full max-w-5xl -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-500/15 via-sky-600/5 to-transparent blur-3xl opacity-75" />
          <div className="absolute top-1/3 -right-48 h-[450px] w-[450px] rounded-full bg-sky-950/25 blur-3xl" />
          <div className="absolute bottom-1/4 -left-48 h-[450px] w-[450px] rounded-full bg-sky-900/15 blur-3xl" />
        </div>

        {/* ---------- NAVBAR ---------- */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md transition-all">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
            <button
              onClick={() => irA("inicio")}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/40 bg-gradient-to-br from-sky-400 to-sky-600 text-sm font-extrabold text-slate-950 shadow-md shadow-sky-500/20 transition-transform group-hover:scale-105">
                {PERFIL.nombre.charAt(0)}
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white transition-colors group-hover:text-sky-300">
                  {PERFIL.nombre}
                </span>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:block">
                  Analista Programador
                </span>
              </div>
            </button>

            {/* Enlaces de escritorio */}
            <ul className="hidden items-center gap-1 md:flex">
              {ENLACES.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => irA(l.id)}
                    className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800/60 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {l.texto}
                  </button>
                </li>
              ))}
            </ul>

            {/* Botón de acción rápido escritorio */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={PERFIL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub"
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-300 transition-colors hover:border-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <IconoGithub className="h-4 w-4" />
              </a>
              <button
                onClick={() => irA("contacto")}
                className="rounded-lg border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-all hover:bg-sky-500/20 hover:border-sky-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Hablemos
              </button>
            </div>

            {/* Botón menú móvil */}
            <button
              className="rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-300 transition hover:bg-slate-800 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuAbierto}
            >
              {menuAbierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {/* Menú desplegable móvil */}
          {menuAbierto && (
            <div className="border-t border-slate-800/80 bg-slate-950/95 px-5 py-4 backdrop-blur-md md:hidden">
              <ul className="flex flex-col gap-1">
                {ENLACES.map((l) => (
                  <li key={l.id}>
                    <button
                      onClick={() => irA(l.id)}
                      className="w-full rounded-lg px-3 py-2.5 text-left font-medium text-slate-300 hover:bg-slate-800/50 hover:text-sky-300"
                    >
                      {l.texto}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-800 flex gap-2">
                <a
                  href={PERFIL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 py-2 text-xs font-medium text-slate-300"
                >
                  <IconoGithub className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={PERFIL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 py-2 text-xs font-medium text-slate-300"
                >
                  <IconoLinkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* ---------- HERO ---------- */}
          <section id="inicio" className="relative scroll-mt-20 px-5 pb-20 pt-36 sm:px-8 sm:pt-44 lg:pt-48">
            <div className="mx-auto max-w-4xl">
              {/* Badge de disponibilidad */}
              <Reveal delay={0}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  <span>{PERFIL.disponibilidad}</span>
                </div>
              </Reveal>

              {/* Título principal */}
              <Reveal as="h1" delay={100} className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {PERFIL.nombre}
              </Reveal>

              {/* Rol profesional */}
              <Reveal as="h2" delay={200} className="mt-3 text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-slate-200 sm:text-3xl">
                {PERFIL.rol}
              </Reveal>

              {/* Resumen */}
              <Reveal as="p" delay={300} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {PERFIL.descripcion}
              </Reveal>

              {/* Botones de llamada a la acción */}
              <Reveal delay={400} className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => irA("proyectos")}
                  className="group inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 font-semibold text-slate-950 shadow-md shadow-sky-500/20 transition-all duration-200 hover:bg-sky-300 hover:shadow-sky-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Ver proyectos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => irA("contacto")}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition-all duration-200 hover:border-sky-400/60 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <Mail className="h-4 w-4 text-sky-400" />
                  Contacto
                </button>
              </Reveal>

              {/* Puntos destacados / Credenciales */}
              <Reveal delay={500} className="mt-14 border-t border-slate-800/70 pt-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/40 p-3.5 backdrop-blur-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Código Limpio</p>
                      <p className="text-sm font-semibold text-white">Arquitectura Modular</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/40 p-3.5 backdrop-blur-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400">
                      <Layers className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Desarrollo</p>
                      <p className="text-sm font-semibold text-white">Web, Desktop & IoT</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/40 p-3.5 backdrop-blur-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Ubicación</p>
                      <p className="text-sm font-semibold text-white">Chile • Remoto / Híbrido</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ---------- PROYECTOS ---------- */}
          <section id="proyectos" className="scroll-mt-20 px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                      Portafolio de Software
                    </span>
                    <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      Proyectos
                    </h2>
                  </div>
                  <p className="max-w-md text-sm text-slate-400">
                    Herramientas y aplicaciones construidas con foco en utilidad real, arquitectura limpia y código disponible en GitHub.
                  </p>
                </div>
              </Reveal>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROYECTOS.map((p, i) => (
                  <Reveal key={p.titulo} delay={i * 120} className="h-full">
                    <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-sky-500/5">
                      <div>
                        {/* Cabecera de la tarjeta */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-xs font-mono font-medium text-sky-300">
                            {p.tipo}
                          </span>
                          <a
                            href={p.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver código de ${p.titulo} en GitHub`}
                            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>

                        {/* Título y descripción */}
                        <h3 className="mt-4 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-sky-300">
                          {p.titulo}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                          {p.descripcion}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-800/70">
                        {/* Tags de tecnologías */}
                        <div className="flex flex-wrap gap-1.5">
                          {p.tecnologias.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-xs font-mono text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Botón de enlace a GitHub */}
                        <a
                          href={p.enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn mt-5 inline-flex w-full items-center justify-between rounded-xl border border-slate-700/80 bg-slate-800/50 px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:border-sky-400/60 hover:bg-sky-500/10 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                          <span className="inline-flex items-center gap-2">
                            <IconoGithub className="h-4 w-4" />
                            Ver en GitHub
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ---------- HABILIDADES (LIMPIO, SIN EMOJIS, SIN PORCENTAJES) ---------- */}
          <section id="habilidades" className="scroll-mt-20 px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                      Competencias Técnicas
                    </span>
                    <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                      Habilidades
                    </h2>
                  </div>
                  <p className="max-w-md text-sm text-slate-400">
                    Conjunto de tecnologías, metodologías y herramientas que domino como Analista Programador.
                  </p>
                </div>
              </Reveal>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {HABILIDADES.map((h, i) => {
                  const Icono = h.icono;
                  return (
                    <Reveal
                      key={h.titulo}
                      delay={i * 60}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-sky-500/5"
                    >
                      <div>
                        {/* Cabecera con icono técnico */}
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-400/40 group-hover:bg-sky-400 group-hover:text-slate-950">
                            <Icono className="h-5 w-5" />
                          </div>
                          <h3 className="font-semibold text-white transition-colors group-hover:text-sky-300">
                            {h.titulo}
                          </h3>
                        </div>

                        {/* Descripción clara de aplicación real */}
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                          {h.descripcion}
                        </p>
                      </div>

                      {/* Chips de tecnologías asociadas */}
                      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800/60 pt-4">
                        {h.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-slate-800 bg-slate-950/70 px-2 py-0.5 text-xs font-mono text-slate-300 transition-colors group-hover:border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ---------- CONTACTO ---------- */}
          <section id="contacto" className="scroll-mt-20 px-5 py-20 sm:px-8">
            <div className="mx-auto max-w-4xl">
              <Reveal className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-8 text-center sm:p-14 shadow-2xl backdrop-blur-sm">
                {/* Destello de fondo en la tarjeta */}
                <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono font-medium text-sky-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  ¿Iniciamos una colaboración?
                </span>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ponte en contacto
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-slate-400">
                  ¿Tienes una propuesta laboral, un proyecto en desarrollo o deseas conversar sobre software? Puedes escribirme directamente por correo o a través de mis redes.
                </p>

                {/* Caja de correo con botón de copiar */}
                <div className="mx-auto mt-8 flex max-w-md flex-col items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:flex-row sm:gap-2">
                  <span className="px-3 font-mono text-sm text-slate-200 select-all">
                    {PERFIL.email}
                  </span>
                  <div className="flex w-full sm:w-auto items-center gap-2">
                    <button
                      type="button"
                      onClick={copiarCorreo}
                      className={`inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                        copiado
                          ? "bg-emerald-500 text-slate-950"
                          : "border border-slate-700 bg-slate-800 text-slate-200 hover:border-slate-600 hover:bg-slate-700"
                      }`}
                    >
                      {copiado ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          ¡Copiado!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copiar
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${PERFIL.email}`}
                      className="inline-flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-xl bg-sky-400 px-3.5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Escribir
                    </a>
                  </div>
                </div>

                {/* Tarjetas directas de redes */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={PERFIL.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-xs font-medium text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                  >
                    <IconoGithub className="h-4 w-4 text-slate-400 transition-colors group-hover:text-white" />
                    <span>GitHub <span className="font-mono text-slate-500 group-hover:text-slate-400">({PERFIL.githubUsuario})</span></span>
                    <ArrowUpRight className="h-3 w-3 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={PERFIL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-xs font-medium text-slate-300 transition-all hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                  >
                    <IconoLinkedin className="h-4 w-4 text-slate-400 transition-colors group-hover:text-sky-400" />
                    <span>LinkedIn <span className="font-mono text-slate-500 group-hover:text-slate-400">({PERFIL.linkedinUsuario})</span></span>
                    <ArrowUpRight className="h-3 w-3 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        {/* ---------- FOOTER ---------- */}
        <Reveal as="footer" className="border-t border-slate-800/80 px-5 py-10 text-sm text-slate-500 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>Santiago, {PERFIL.pais}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span>Desarrollado con</span>
                <span className="font-medium text-slate-200">React</span>
                <span className="text-slate-600">•</span>
                <span className="font-medium text-slate-200">Tailwind CSS</span>
                <span className="text-slate-600">•</span>
                <span className="font-medium text-slate-200">Vite</span>
              </div>

              <div className="text-xs text-slate-500">
                © {ANIO_ACTUAL} {PERFIL.nombre}. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </Reveal>

        {/* ---------- BOTÓN VOLVER ARRIBA ---------- */}
        <BackToTop />
      </div>
    </>
  );
}
