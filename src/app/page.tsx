"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Command,
  Moon,
  Palette,
  Sun,
} from "lucide-react";
import styles from "./page.module.css";

const visualStyles = [
  { id: "brutalist", name: "Brutalist", number: "01" },
  { id: "swiss", name: "Swiss Grid", number: "02" },
  { id: "luxury", name: "Luxury Editorial", number: "03" },
  { id: "experimental", name: "Experimental", number: "04" },
  { id: "futuristic", name: "Dark Futuristic", number: "05" },
] as const;

const projects = [
  {
    number: "01",
    category: "ART DIRECTION / BRANDING",
    title: "Visual identities",
    description: "Building distinctive visual worlds for ambitious ideas.",
    className: "identity",
    tag: "DESIGN",
  },
  {
    number: "02",
    category: "DIGITAL PRODUCT / UX/UI",
    title: "Digital experiences",
    description: "Interfaces where clarity meets character.",
    className: "digital",
    tag: "UX / UI",
  },
  {
    number: "03",
    category: "GENERATIVE AI / CREATIVE TECH",
    title: "AI playground",
    description:
      "Exploring new creative possibilities with artificial intelligence.",
    className: "ai",
    tag: "AI LAB",
  },
  {
    number: "04",
    category: "FRONTEND / DESIGN SYSTEMS",
    title: "Design engineering",
    description: "Turning visual ideas into thoughtful, working products.",
    className: "engineering",
    tag: "CODE",
  },
];

export default function Home() {
  const [activeStyle, setActiveStyle] = useState("brutalist");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [styleMenuOpen, setStyleMenuOpen] = useState(false);

  const isDark = theme === "dark";

  function selectStyle(styleId: string) {
    setActiveStyle(styleId);
    setStyleMenuOpen(false);

    if (styleId === "futuristic") {
      setTheme("dark");
    }
  }

  return (
    <main className={styles.site} data-style={activeStyle} data-theme={theme}>
      <header className={styles.header}>
        <a href="#home" className={styles.wordmark} aria-label="XHUKO, inicio">
          XHUKO<span>®</span>
        </a>

        <nav className={styles.navigation} aria-label="Navegación principal">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.styleControl}>
            <button
              type="button"
              className={styles.styleTrigger}
              aria-expanded={styleMenuOpen}
              aria-controls="style-menu"
              onClick={() => setStyleMenuOpen((open) => !open)}
            >
              <Palette size={16} strokeWidth={1.8} />
              <span>Art direction</span>
              <span className={styles.activeDot} />
            </button>

            {styleMenuOpen && (
              <div
                className={styles.styleMenu}
                id="style-menu"
                aria-label="Seleccionar estilo visual"
              >
                <span className={styles.menuEyebrow}>
                  CHOOSE YOUR EXPERIENCE
                </span>

                {visualStyles.map((visualStyle) => {
                  const isActive = activeStyle === visualStyle.id;

                  return (
                    <button
                      key={visualStyle.id}
                      type="button"
                      className={styles.styleOption}
                      aria-pressed={isActive}
                      onClick={() => selectStyle(visualStyle.id)}
                    >
                      <span className={styles.styleNumber}>
                        {visualStyle.number}
                      </span>
                      <span>{visualStyle.name}</span>
                      {isActive && <Check size={15} />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            className={styles.themeToggle}
            aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
            onClick={() =>
              setTheme((current) => (current === "light" ? "dark" : "light"))
            }
          >
            {isDark ? (
              <Sun size={17} strokeWidth={1.8} />
            ) : (
              <Moon size={17} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </header>

      <section className={styles.hero} id="home">
        <div className={styles.heroTopline}>
          <span>INDEPENDENT CREATIVE PRACTICE</span>
          <span className={styles.availability}>
            <span className={styles.statusDot} />
            DESIGN × TECHNOLOGY × AI
          </span>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroHeading}>
            <h1>
              Making
              <br />
              <span className={styles.headingSecond}>ideas</span>{" "}
              <span className={styles.headingItalic}>matter.</span>
            </h1>

            <div className={styles.heroIndex} aria-hidden="true">
              <span>CREATIVE</span>
              <span>DEVELOPER</span>
              <ArrowDownRight size={26} strokeWidth={1.2} />
            </div>
          </div>

          <div className={styles.heroBottom}>
            <p className={styles.heroDescription}>
              I explore the space between <strong>design, code and AI</strong>{" "}
              to create meaningful digital experiences.
            </p>

            <a href="#work" className={styles.primaryLink}>
              Explore my practice
              <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <div className={styles.heroFooter}>
          <span>INDEPENDENT BY NATURE.</span>
          <span>CURIOUS BY DESIGN.</span>
          <span>BUILT WITH INTENTION.</span>
        </div>
      </section>

      <section className={styles.intro} id="about">
        <div className={styles.sectionLabel}>
          <span>01 / THE PRACTICE</span>
          <span>A MULTIDISCIPLINARY APPROACH</span>
        </div>

        <div className={styles.introContent}>
          <h2>
            One mind.
            <br />
            <span>Multiple ways</span>
            <br />
            to create.
          </h2>

          <div className={styles.introAside}>
            <span className={styles.asideMark}>↘</span>
            <p>
              Good ideas deserve more than one way of being expressed. I combine
              visual thinking, emerging technology and frontend engineering to
              turn concepts into experiences.
            </p>
            <span className={styles.asideCaption}>
              DESIGN IS HOW IT FEELS.
              <br />
              CODE IS HOW IT WORKS.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionLabel}>
          <span>02 / AREAS OF EXPLORATION</span>
          <span>FOUR FIELDS. ONE PRACTICE.</span>
        </div>

        <div className={styles.workHeading}>
          <h2>
            Creative territory<span>.</span>
          </h2>
          <p>
            A growing collection of ideas, experiments and digital explorations.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article
              className={`${styles.projectCard} ${styles[project.className]}`}
              key={project.number}
            >
              <div className={styles.projectVisual}>
                <span className={styles.projectNumber}>
                  {project.number} / 04
                </span>

                {project.className === "identity" && (
                  <div className={styles.identityVisual}>
                    <span>FORM</span>
                    <span className={styles.identitySymbol}>✳</span>
                    <span>FOLLOWS</span>
                    <span>FEELING.</span>
                  </div>
                )}

                {project.className === "digital" && (
                  <div className={styles.digitalVisual}>
                    <div className={styles.digitalWindow}>
                      <div className={styles.windowDots}>
                        <i />
                        <i />
                        <i />
                      </div>
                      <span className={styles.windowLabel}>OBJECT / 001</span>
                      <div className={styles.windowShape} />
                      <span className={styles.windowText}>
                        Less, but better.
                      </span>
                    </div>
                  </div>
                )}

                {project.className === "ai" && (
                  <div className={styles.aiVisual}>
                    <div className={styles.aiOrb} />
                    <span className={styles.aiLabel}>IMAGINATION ENGINE</span>
                    <span className={styles.aiCoordinates}>
                      X 034.9 / Y 091.2
                    </span>
                  </div>
                )}

                {project.className === "engineering" && (
                  <div className={styles.codeVisual}>
                    <span>
                      <i>01</i> const vision = {"{"}
                    </span>
                    <span>
                      <i>02</i> &nbsp;design: true,
                    </span>
                    <span>
                      <i>03</i> &nbsp;function: true,
                    </span>
                    <span>
                      <i>04</i> &nbsp;magic: "intent"
                    </span>
                    <span>
                      <i>05</i> {"}"};
                    </span>
                    <div className={styles.codeCursor} />
                  </div>
                )}

                <span className={styles.projectTag}>{project.tag}</span>
              </div>

              <div className={styles.projectInfo}>
                <div>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <span className={styles.projectArrow} aria-hidden="true">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.manifesto}>
        <span className={styles.manifestoLabel}>03 / A WORK IN PROGRESS</span>
        <p>
          Not here to follow
          <br />
          <span>the obvious.</span>
          <br />
          Here to find what&apos;s next.
        </p>
        <span className={styles.manifestoFoot}>STAY CURIOUS. KEEP MAKING.</span>
      </section>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerTop}>
          <span className={styles.footerLabel}>HAVE SOMETHING IN MIND?</span>
          <a className={styles.footerCta} href="mailto:hello@xhuko.com">
            Let&apos;s make it happen.
            <ArrowUpRight size={24} />
          </a>
        </div>

        <div className={styles.footerBottom}>
          <a href="#home" className={styles.wordmark}>
            XHUKO<span>®</span>
          </a>
          <span>DESIGNED WITH INTENTION. BUILT WITH CURIOSITY.</span>
          <a href="#home" className={styles.backToTop}>
            BACK TO TOP <ArrowRight size={14} />
          </a>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} XHUKO
          </span>
        </div>
      </footer>

      <div className={styles.commandHint} aria-hidden="true">
        <Command size={12} />
        <span>CREATIVE DEVELOPER</span>
      </div>
    </main>
  );
}
