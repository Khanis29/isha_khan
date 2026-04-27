{/*
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Download,
  Search,
  BookOpen,
  Briefcase,
  Code2,
  BarChart3,
  Brain,
  Newspaper,
} from "lucide-react";

const sections = ["Home", "Research", "Projects", "CV", "Contact"];

const workingPapers = [
  {
    title: "Manufacturing Shares and Trade Balances",
    status: "Working Paper",
    year: "2025–2026",
    summary:
      "Cross-country empirical analysis testing whether persistent trade deficits are systematically associated with faster manufacturing decline using panel construction, threshold classification, Welch testing, and pooled regressions.",
    tags: ["International Trade", "Macroeconomics", "Econometrics"],
    link: "https://github.com/Khanis29/Trade_Deficit_Manufacturing",
  },
  {
    title: "News Language Use Around U.S.-Involved Geopolitical Events",
    status: "Research Project",
    year: "2026",
    summary:
      "Natural language processing analysis of New York Times coverage around major geopolitical events, focusing on readability, lexical rarity, and event-based pre/post regression structure with placebo testing.",
    tags: ["NLP", "Media Analysis", "Applied Data Science"],
    link: "https://github.com/Khanis29/NLP_News_Analysis",
  },
  {
    title: "State-Level Manufacturing Share and Its Drivers",
    status: "ML Project",
    year: "2026",
    summary:
      "Machine learning pipeline studying state-level manufacturing-share dynamics using panel construction, PCA, classification models, and regression-based prediction.",
    tags: ["Machine Learning", "Regional Economics", "Prediction"],
    link: "https://github.com/Khanis29/ML_Manufacturing",
  },
];

const featuredProjects = [
  {
    title: "Trade Deficit & Manufacturing Repository",
    subtitle: "Replication-first macroeconomic research pipeline",
    description:
      "Cross-country panel construction, classification rules, pooled regressions, and publication-ready outputs.",
    link: "https://github.com/Khanis29/Trade_Deficit_Manufacturing",
    icon: BarChart3,
  },
  {
    title: "NLP News Analysis",
    subtitle: "Event-based text analysis using NYT coverage",
    description:
      "A reproducible Python NLP pipeline for readability, lexical rarity, event windows, and pre/post analysis.",
    link: "https://github.com/Khanis29/NLP_News_Analysis",
    icon: Newspaper,
  },
  {
    title: "Manufacturing Share ML Pipeline",
    subtitle: "State-level predictive modeling",
    description:
      "PCA, logistic regression, decision trees, linear regression, and Lasso for manufacturing-share prediction.",
    link: "https://github.com/Khanis29/ML_Manufacturing",
    icon: Brain,
  },
];

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Badge({ className = "", children }) {
  return <span className={className}>{children}</span>;
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function TopNav({ active, setActive }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <div className="text-sm font-semibold text-zinc-900">Isha Khan</div>
          <div className="text-xs text-zinc-500">
            Economics • Mathematics • Data Science
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {sections.map((s) => {
            const isActive = active === s;
            return (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-600 hover:bg-white hover:text-zinc-900"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function HomePage({ setActive }) {
  return (
    <div className="space-y-16">
      <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/profile.jpg"
              alt="Isha Khan"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
              <GraduationCap className="h-3.5 w-3.5" />
              Quinnipiac University
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Isha Khan
            </h1>

            <p className="mt-4 text-lg text-zinc-600">
              Economics, mathematics, and data science.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600">
              I build empirical research projects in macroeconomics,
              international trade, machine learning, and computational text
              analysis.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setActive("Research")}
                className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Research
              </button>

              <button
                onClick={() => setActive("Projects")}
                className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
              >
                Projects
              </button>

              <a
                href="/Isha_Khan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
              >
                View CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Macroeconomics", "International Trade", "Machine Learning"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResearchPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return workingPapers;
    return workingPapers.filter((p) =>
      [p.title, p.status, p.summary, ...(p.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div>
      <SectionHeader
        eyebrow="Research"
        title="Working papers and research projects"
        subtitle="Current project papers and research-oriented work."
      />

      <div className="mb-8 flex max-w-md items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
        <Search className="h-4 w-4 text-zinc-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search papers or topics"
          className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
        />
      </div>

      <div className="grid gap-5">
        {filtered.map((paper) => (
          <Card
            key={paper.title}
            className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm"
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-500">
                    <BookOpen className="h-3.5 w-3.5" />
                    {paper.status}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {paper.title}
                  </h3>
                  <div className="mt-1 text-sm text-zinc-500">{paper.year}</div>
                </div>

                <a
                  href={paper.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-700"
                >
                  Related repo <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-sm leading-8 text-zinc-600">
                {paper.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("https://api.github.com/users/Khanis29/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (Array.isArray(data)) setRepos(data.filter((r) => !r.fork));
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <SectionHeader
        eyebrow="Projects"
        title="Projects and repositories"
        subtitle="Selected empirical and computational work."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <Card
              key={project.title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-semibold text-zinc-900">
                  {project.title}
                </h3>
                <div className="mt-1 text-sm text-zinc-500">
                  {project.subtitle}
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-700"
                >
                  View repository <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12">
        <SectionHeader
          eyebrow="GitHub"
          title="Recent repositories"
          subtitle="Live public repositories pulled from GitHub."
        />

        {loading ? (
          <div className="text-sm text-zinc-500">Loading repositories…</div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {repos.slice(0, 6).map((repo) => (
              <Card
                key={repo.id}
                className="rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">
                        {repo.name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">
                        {repo.description || "Public repository"}
                      </p>
                    </div>

                    <a
                      href={repo.html_url}
                      className="text-zinc-500 hover:text-zinc-900"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.language ? (
                      <Badge className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                        {repo.language}
                      </Badge>
                    ) : null}
                    <Badge className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                      Updated: {new Date(repo.updated_at).toLocaleDateString()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CVPage() {
  const cvSections = [
    {
      title: "Education",
      icon: GraduationCap,
      lines: [
        "Quinnipiac University — Quantitative Economics, Mathematics, and Data Science",
        "Advanced coursework in econometrics, machine learning, probability, linear algebra, real analysis, and macroeconomics",
      ],
    },
    {
      title: "Research and Technical Work",
      icon: BookOpen,
      lines: [
        "Cross-country macroeconomic replication package on trade deficits and manufacturing decline",
        "NLP project on event-driven language shifts in New York Times geopolitical coverage",
        "State-level machine learning pipeline for manufacturing-share prediction",
      ],
    },
    {
      title: "Experience",
      icon: Briefcase,
      lines: [
        "Investments Intern — Avangrid",
        "Senior Researcher — Quinnipiac Global Economics Team",
        "President — Quinnipiac Economics Club",
      ],
    },
    {
      title: "Technical Skills",
      icon: Code2,
      lines: [
        "Python, R, statsmodels, scikit-learn, pandas, NumPy, matplotlib",
        "GitHub, LaTeX, reproducible workflows, structured research documentation",
      ],
    },
  ];

  return (
    <div>
      <SectionHeader
        eyebrow="CV"
        title="Curriculum vitae"
        subtitle="Academic profile, technical background, and downloadable CV."
      />

      <div className="mb-8 grid gap-4 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-[0.8fr_0.2fr]">
        <div>
          <div className="text-sm text-zinc-500">Profile</div>
          <div className="mt-2 text-lg font-medium text-zinc-900">
            Economics, mathematics, and data science with a research emphasis on macro, trade, applied econometrics, and computational analysis.
          </div>
        </div>
        <div className="flex items-center justify-start md:justify-end">
          <a
            href="/Isha_Khan_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>

      <div className="grid gap-5">
        {cvSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card
              key={section.title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {section.lines.map((line) => (
                    <div
                      key={line}
                      className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm leading-7 text-zinc-700"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Contact"
        title="Contact"
        subtitle="Research opportunities, collaboration, and academic inquiries."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm">
          <CardContent className="space-y-5 p-6">
            <a
              href="mailto:toishakhan@gmail.com"
              className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-zinc-500">Email</div>
                <div className="font-medium text-zinc-900">
                  toishakhan@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Khanis29"
              className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-zinc-500">GitHub</div>
                <div className="font-medium text-zinc-900">
                  github.com/Khanis29
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/isha-khan-27a86225a/"
              className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-zinc-500">LinkedIn</div>
                <div className="font-medium text-zinc-900">
                  Professional profile
                </div>
              </div>
            </a>
          </CardContent>
        </Card>

        <Card className="rounded-[1.75rem] border border-zinc-200 bg-zinc-100 shadow-sm">
          <CardContent className="p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Current emphasis
            </div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
              Empirical structure, reproducibility, and quantitative clarity.
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-600">
              I’m especially interested in macroeconomic data, international
              trade, manufacturing structure, machine learning, and text-based
              inference.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");

  const page = useMemo(() => {
    switch (active) {
      case "Research":
        return <ResearchPage />;
      case "Projects":
        return <ProjectsPage />;
      case "CV":
        return <CVPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage setActive={setActive} />;
    }
  }, [active]);

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <TopNav active={active} setActive={setActive} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {page}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Isha Khan
      </footer>
    </div>
  );
}
*/}
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Download,
  BookOpen,
  Briefcase,
  Code2,
  BarChart3,
  Brain,
  Newspaper,
} from "lucide-react";

const sections = ["Home", "Research", "Projects", "CV", "Contact"];

function getSectionFromHash(hash) {
  const normalized = (hash || "").replace("#", "").trim().toLowerCase();
  const match = sections.find((section) => section.toLowerCase() === normalized);
  return match || "Home";
}

const workingPapers = [
  {
    title: "Manufacturing Shares and Trade Balances",
    status: "Working Paper",
    year: "2025-2026",
    summary:
      "Develops a cross-country panel framework to identify dynamic relationships between persistent trade deficits and manufacturing decline. Using threshold classification, Welch testing, and pooled regressions, the project provides structural interpretation of external imbalances and empirical evaluation of macroeconomic mechanisms.",
    tags: ["International Trade", "Macroeconomics", "Econometrics"],
    link: "https://github.com/Khanis29/Trade_Deficit_Manufacturing",
  },
  {
    title: "News Language Use Around U.S.-Involved Geopolitical Events",
    status: "Research Project",
    year: "2026",
    summary:
      "Builds an event-window time-series dataset from New York Times coverage around major geopolitical shocks and estimates pre/post shifts in readability and lexical rarity. Placebo-tested regressions isolate dynamic relationships in information responses and support interpretable identification over time.",
    tags: ["NLP", "Media Analysis", "Applied Data Science"],
    link: "https://github.com/Khanis29/NLP_News_Analysis",
  },
  {
    title: "State-Level Manufacturing Share and Its Drivers",
    status: "ML Project",
    year: "2026",
    summary:
      "Constructs a state-level panel modeling framework for manufacturing-share dynamics using PCA, classification models, and penalized regression. Comparative model evaluation recovers interpretable drivers of transitions and strengthens empirical evaluation of macroeconomic mechanisms across states and time.",
    tags: ["Machine Learning", "Regional Economics", "Prediction"],
    link: "https://github.com/Khanis29/ML_Manufacturing",
  },
];

const featuredProjects = [
  {
    title: "Trade Deficit & Manufacturing Repository",
    subtitle: "Cross-country panel framework for external imbalance dynamics",
    description:
      "Data: cross-country panel of trade balances and manufacturing shares. Model: threshold rules, Welch tests, and pooled panel regressions. Output: interpretable estimates of how persistent deficits relate to medium-run manufacturing decline.",
    link: "https://github.com/Khanis29/Trade_Deficit_Manufacturing",
    icon: BarChart3,
  },
  {
    title: "NLP News Analysis",
    subtitle: "Event-window text and time-series modeling framework",
    description:
      "Data: New York Times corpus indexed to U.S.-involved geopolitical events. Model: textual feature engineering with pre/post and placebo-tested regression design. Output: quantified dynamic shifts in information environments over event time.",
    link: "https://github.com/Khanis29/NLP_News_Analysis",
    icon: Newspaper,
  },
  {
    title: "Manufacturing Share ML Pipeline",
    subtitle: "Predictive modeling framework for manufacturing-share dynamics",
    description:
      "Data: state-level macro panel with manufacturing share and economic covariates. Model: PCA, logistic regression, tree models, linear regression, and Lasso. Output: forecasting performance and interpretable estimates of the relative importance of drivers behind manufacturing-share movements.",
    link: "https://github.com/Khanis29/ML_Manufacturing",
    icon: Brain,
  },
];

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Badge({ className = "", children }) {
  return <span className={className}>{children}</span>;
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function TopNav({ active, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-900">Isha Khan</div>
            <div className="text-xs text-zinc-500">
              Quantitative Macroeconomics | Econometrics | Computational
              Methods
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {sections.map((s) => {
              const isActive = active === s;
              return (
                <button
                  key={s}
                  onClick={() => onNavigate(s)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:bg-white hover:text-zinc-900"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {sections.map((s) => {
            const isActive = active === s;
            return (
              <button
                key={s}
                onClick={() => onNavigate(s)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-zinc-900 text-white"
                    : "bg-white text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function HomePage({ onNavigate }) {
  return (
    <div className="space-y-16">
      <section className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/profile.jpg"
              alt="Isha Khan"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
              <GraduationCap className="h-3.5 w-3.5" />
              Incoming PhD in Economics, University of Rochester
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Isha Khan
            </h1>

            <p className="mt-4 text-lg text-zinc-600">
              Quantitative macroeconomics, econometrics, and dynamic modeling.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600">
              I am an incoming Economics PhD student at the University of
              Rochester focused on quantitative macroeconomics. My work
              combines macroeconomic modeling, time-series analysis, and
              empirical and computational methods to evaluate dynamic
              real-world economic and financial relationships.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
              I am particularly interested in how macroeconomic models can be
              used to understand and forecast real-world economic and financial
              dynamics.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate("Research")}
                className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Research
              </button>

              <button
                onClick={() => onNavigate("Projects")}
                className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
              >
                Projects
              </button>

              <a
                href="/Isha_Khan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
              >
                View CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Quantitative Macroeconomics",
                "Time-Series Analysis",
                "Econometric Modeling",
                "Financial Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResearchPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Research"
        title="Working papers and quantitative research projects"
        subtitle="Current work in empirical macroeconomics, dynamic relationships, and time-series and panel methods."
      />

      <div className="grid gap-5">
        {workingPapers.map((paper) => (
          <Card
            key={paper.title}
            className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm"
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-500">
                    <BookOpen className="h-3.5 w-3.5" />
                    {paper.status}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">
                    {paper.title}
                  </h3>
                  <div className="mt-1 text-sm text-zinc-500">{paper.year}</div>
                </div>

                <a
                  href={paper.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-700"
                >
                  Related repo <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-5 text-sm leading-8 text-zinc-600">
                {paper.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("https://api.github.com/users/Khanis29/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        if (Array.isArray(data)) setRepos(data.filter((r) => !r.fork));
      })
      .catch(() => {})
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <SectionHeader
        eyebrow="Projects"
        title="Projects and repositories"
        subtitle="Selected quantitative frameworks for macroeconomic and information dynamics."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <Card
              key={project.title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-semibold text-zinc-900">
                  {project.title}
                </h3>
                <div className="mt-1 text-sm text-zinc-500">
                  {project.subtitle}
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-700"
                >
                  View repository <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12">
        <SectionHeader
          eyebrow="GitHub"
          title="Recent repositories"
          subtitle="Live public repositories pulled from GitHub."
        />

        {loading ? (
          <div className="text-sm text-zinc-500">Loading repositories…</div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {repos.slice(0, 6).map((repo) => (
              <Card
                key={repo.id}
                className="rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">
                        {repo.name}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">
                        {repo.description || "Public repository"}
                      </p>
                    </div>

                    <a
                      href={repo.html_url}
                      className="text-zinc-500 hover:text-zinc-900"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.language ? (
                      <Badge className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                        {repo.language}
                      </Badge>
                    ) : null}
                    <Badge className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                      Updated: {new Date(repo.updated_at).toLocaleDateString()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CVPage() {
  const cvSections = [
    {
      title: "Education",
      icon: GraduationCap,
      lines: [
        "Quinnipiac University — Quantitative Economics, Mathematics, and Data Science",
        "Advanced coursework in econometrics, machine learning, probability, linear algebra, real analysis, and macroeconomics",
      ],
    },
    {
      title: "Research and Technical Work",
      icon: BookOpen,
      lines: [
        "Cross-country macroeconomic replication package on trade deficits and manufacturing decline",
        "NLP project on event-driven language shifts in New York Times geopolitical coverage",
        "State-level machine learning pipeline for manufacturing-share prediction",
      ],
    },
    {
      title: "Experience",
      icon: Briefcase,
      lines: [
        "Investments Intern — Avangrid",
        "Senior Researcher — Quinnipiac Global Economics Team",
        "President — Quinnipiac Economics Club",
      ],
    },
    {
      title: "Technical Skills",
      icon: Code2,
      lines: [
        "Python, R, statsmodels, scikit-learn, pandas, NumPy, matplotlib",
        "GitHub, LaTeX, reproducible workflows, structured research documentation",
      ],
    },
  ];

  return (
    <div>
      <SectionHeader
        eyebrow="CV"
        title="Curriculum vitae"
        subtitle="Academic profile, technical background, and downloadable CV."
      />

      <div className="mb-8 grid gap-4 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-[0.8fr_0.2fr]">
        <div>
          <div className="text-sm text-zinc-500">Profile</div>
          <div className="mt-2 text-lg font-medium text-zinc-900">
            Incoming PhD student in Economics at the University of Rochester,
            with research interests in quantitative macroeconomics, dynamic
            modeling, econometrics, and financial applications.
          </div>
        </div>
        <div className="flex items-center justify-start md:justify-end">
          <a
            href="/Isha_Khan_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>

      <div className="grid gap-5">
        {cvSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card
              key={section.title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {section.lines.map((line) => (
                    <div
                      key={line}
                      className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm leading-7 text-zinc-700"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <SectionHeader
        eyebrow="Contact"
        title="Contact"
        subtitle="Research opportunities, collaboration, and academic inquiries."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm">
          <CardContent className="space-y-5 p-6">
            <a
              href="mailto:toishakhan@gmail.com"
              className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-zinc-500">Email</div>
                <div className="font-medium text-zinc-900">
                  toishakhan@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Khanis29"
              className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-zinc-500">GitHub</div>
                <div className="font-medium text-zinc-900">
                  github.com/Khanis29
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/isha-khan-27a86225a/"
              className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-zinc-500">LinkedIn</div>
                <div className="font-medium text-zinc-900">
                  Professional profile
                </div>
              </div>
            </a>
          </CardContent>
        </Card>

        <Card className="rounded-[1.75rem] border border-zinc-200 bg-zinc-100 shadow-sm">
          <CardContent className="p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Current emphasis
            </div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
              Quantitative macroeconomic modeling, time-series analysis, and
              empirical work on dynamic economic systems.
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-600">
              I focus on implementing macroeconomic models in data and
              evaluating economic and financial dynamics with transparent,
              reproducible empirical methods.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return "Home";
    return getSectionFromHash(window.location.hash);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromHash = () => {
      setActive(getSectionFromHash(window.location.hash));
    };

    if (!window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#home`
      );
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const handleNavigate = useCallback((section) => {
    if (typeof window === "undefined") {
      setActive(section);
      return;
    }

    const nextHash = `#${section.toLowerCase()}`;
    if (window.location.hash === nextHash) {
      setActive(section);
      return;
    }

    window.location.hash = nextHash;
  }, []);

  const page = useMemo(() => {
    switch (active) {
      case "Research":
        return <ResearchPage />;
      case "Projects":
        return <ProjectsPage />;
      case "CV":
        return <CVPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  }, [active, handleNavigate]);

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <TopNav active={active} onNavigate={handleNavigate} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {page}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Isha Khan
      </footer>
    </div>
  );
}

