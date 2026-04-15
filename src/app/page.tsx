"use client";

import { motion } from "framer-motion";
import homepageContent from "@/content/homepage.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="eyebrow">{label}</p>
      <h2 className="section-title text-[color:var(--foreground)]">{title}</h2>
      <p className="text-base leading-7 text-[color:var(--muted)] sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

function ExternalLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-[color:var(--accent)] text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-[color:var(--accent-strong)]"
      : "border border-[color:var(--border)] bg-white/5 text-[color:var(--foreground)] hover:border-[color:var(--accent)] hover:bg-white/10";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${className}`}
    >
      {children}
    </a>
  );
}

function getLinkVariant(value: string | undefined): "primary" | "secondary" {
  return value === "secondary" ? "secondary" : "primary";
}

export default function Home() {
  const {
    about,
    contact,
    hero,
    navigation,
    profile,
    projects,
    projectsSection,
    skillsSection,
    snapshot,
    strengths,
  } = homepageContent;

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(51,209,255,0.18),transparent_58%)]" />
      <div className="absolute left-[-8rem] top-40 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-5 sm:px-8 lg:px-10">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass-panel sticky top-4 z-20 rounded-full px-5 py-3"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#top"
              className="font-display text-lg font-bold tracking-tight text-[color:var(--foreground)]"
            >
              IZ.
            </a>
            <nav className="flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </motion.header>

        <section
          id="top"
          className="grid min-h-[82vh] items-center gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-14"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 className="font-display max-w-4xl text-5xl font-bold leading-none tracking-[-0.06em] text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
                {hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                {profile.intro}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ExternalLink href={hero.primaryCtaHref}>
                {hero.primaryCtaLabel}
              </ExternalLink>
              <ExternalLink href={hero.secondaryCtaHref} variant="secondary">
                {hero.secondaryCtaLabel}
              </ExternalLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {hero.stats.map((item) => (
                <div
                  key={item.label}
                  className="soft-ring rounded-3xl border border-white/8 bg-white/6 p-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="glass-panel rounded-[2rem] p-5 sm:p-7"
          >
            <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(160deg,rgba(13,26,46,0.96),rgba(8,17,31,0.88))] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    {snapshot.label}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[color:var(--foreground)]">
                    {profile.name}
                  </h2>
                </div>
                <div className="rounded-full border border-cyan-300/10 bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                  {snapshot.badge}
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-[color:var(--muted)]">
                {profile.role}
              </p>
              <div className="mt-8 space-y-4">
                {snapshot.values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-[color:var(--border)] bg-white/5 p-4"
                  >
                    <p className="font-display text-lg font-semibold text-[color:var(--foreground)]">
                      {value.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-8 py-10"
        >
          <SectionHeading
            label={projectsSection.label}
            title={projectsSection.title}
            copy={projectsSection.copy}
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="glass-panel rounded-[2rem] p-5 sm:p-6"
              >
                <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,24,44,0.96),rgba(8,18,34,0.9))] p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow">{project.type}</p>
                      <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-[color:var(--foreground)]">
                        {project.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[color:var(--border)] bg-white/6 px-3 py-1 text-sm font-medium text-[color:var(--muted)]">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[color:var(--muted)]">
                    {project.summary}
                  </p>
                  <p className="mt-4 rounded-2xl bg-[color:var(--accent-soft)] p-4 text-sm leading-6 text-[color:var(--accent-strong)]">
                    {project.impact}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[color:var(--border)] bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 py-3 text-sm leading-6 text-[color:var(--muted)]"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <ExternalLink href={project.live}>Live demo</ExternalLink>
                    <ExternalLink href={project.source} variant="secondary">
                      Source code
                    </ExternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <section className="grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <SectionHeading
              label={about.label}
              title={about.title}
              copy={about.copy}
            />
            <div className="mt-8 grid gap-4">
              {about.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[color:var(--border)] bg-white/5 p-4 text-sm leading-6 text-[color:var(--muted)]"
                >
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="skills"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <SectionHeading
              label={skillsSection.label}
              title={skillsSection.title}
              copy={skillsSection.copy}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-[color:var(--border)] bg-white/6 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  {strength}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="py-10"
        >
          <div className="glass-panel rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-2xl space-y-5">
                <p className="eyebrow">{contact.label}</p>
                <h2 className="font-display text-4xl font-bold tracking-[-0.05em] text-[color:var(--foreground)] sm:text-5xl">
                  {contact.title}
                </h2>
                <p className="text-lg leading-8 text-[color:var(--muted)]">{contact.copy}</p>
                <div className="rounded-2xl border border-[color:var(--border)] bg-white/5 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-strong)]">
                    {contact.emailLabel}
                  </p>
                  <p className="mt-2 text-base font-medium text-[color:var(--foreground)] sm:text-lg">
                    {contact.emailValue}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {contact.actions.map((action) => (
                  <ExternalLink
                    key={action.href}
                    href={action.href}
                    variant={getLinkVariant(action.variant)}
                  >
                    {action.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
