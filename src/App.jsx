import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Sun,
  Moon,
  CalendarRange,
  GraduationCap,
  Briefcase,
  BookOpen,
  FolderKanban,
  ScrollText,
  Home,
  Download,
  Search,
  Code2,
  BarChart3,
  Brain,
  Newspaper,
  ChevronRight,
  Library,
} from "lucide-react";

const sections = ["Home", "Research", "Projects", "CV", "Contact"];

const workingPapers = [
  {
    title: "Manufacturing Shares and Trade Balances",
    status: "Working Paper",
    year: "2025–2026",
    summary:
      "Cross-country empirical analysis testing whether persistent trade deficits are systematically associated with faster manufacturing decline, using panel construction, threshold classification, Welch testing, and pooled regressions.",
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
    link: "#",
  },
];

const researchAgenda = [
  {
    title: "Trade deficits and industrial structure",
    body:
      "Empirical work on whether trade imbalance patterns are meaningfully connected to manufacturing decline, industrial composition, and long-run productive structure.",
  },
  {
    title: "International capital flows and domestic production",
    body:
      "Research on outward investment, production reallocation, and the domestic consequences of international capital mobility.",
  },
  {
    title: "Language, media, and policy salience",
    body:
      "Computational analysis of how news language shifts around political and geopolitical events, with attention to readability, framing, and public support.",
  },
];

const featuredProjects = [
  {
    title: "Trade Deficit & Manufacturing Repository",
    subtitle: "Replication-first macroeconomic research pipeline",
    description:
      "A structured empirical repository that builds a cross-country panel, engineers manufacturing and trade classifications, runs threshold-based tests, pooled regressions, and generates publication-ready outputs.",
    category: "Economics",
    link: "https://github.com/Khanis29/Trade_Deficit_Manufacturing",
    icon: BarChart3,
  },
  {
    title: "NLP News Analysis",
    subtitle: "Event-based text analysis using NYT coverage",
    description:
      "A Python NLP pipeline that collects event-window article data, scrapes text, engineers readability and lexical-rarity features, estimates pre/post models, and produces reproducible figures and tables.",
    category: "NLP",
    link: "https://github.com/Khanis29/NLP_News_Analysis",
    icon: Newspaper,
  },
  {
    title: "Manufacturing Share ML Pipeline",
    subtitle: "State-level predictive modeling",
    description:
      "Machine learning workflow for manufacturing-share forecasting using PCA, logistic regression, decision trees, linear regression, and Lasso-based feature selection.",
    category: "Machine Learning",
    link: "#",
    icon: Brain,
  },
];

const timeline = [
  {
    date: "2025",
    title: "Trade and manufacturing research pipeline built",
    body:
      "Constructed a public replication repository around cross-country trade deficits and manufacturing outcomes using R-based empirical workflow design.",
  },
  {
    date: "2025–2026",
    title: "Investments internship and applied modeling work",
    body:
      "Applied quantitative analysis in a finance setting while building faster budgeting and reporting workflows and expanding applied empirical research experience.",
  },
  {
    date: "2026",
    title: "NLP and machine learning portfolio expansion",
    body:
      "Built public repositories in NLP and state-level predictive modeling to complement macroeconomic and econometric research work.",
  },
];

const courseClusters = [
  "Quantitative Economics",
  "Mathematics",
  "Data Science",
  "Econometrics",
  "Machine Learning",
  "International Trade",
  "Dynamic Macroeconomics",
  "Probability & Statistics",
];

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", variant = "default", children, ...props }) {
  const variantClasses =
    variant === "outline"
      ? "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
      : variant === "ghost"
      ? "bg-transparent text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
      : "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200";

  return (
    <button
      className={`${variantClasses} inline-flex items-center justify-center transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Badge({ className = "", children }) {
  return <span className={className}>{children}</span>;
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}

function TopNav({ active, setActive, dark, setDark }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-sm dark:bg-white dark:text-zinc-950">
            <span className="text-sm font-semibold">IK</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Isha Khan</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Economics • Mathematics • Data Science</div>
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
                    ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                }`}
              >
                {s}
              </button>
            );
          })}
          <button
            onClick={() => setDark((v) => !v)}
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

function HomePage({ setActive, dark }) {
  return (
    <div className="space-y-16">

      <section className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">

        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_35%)]"
              : "bg-[radial-gradient(circle_at_top_right,rgba(24,24,27,0.07),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.05),transparent_35%)]"
          }`}
        />

        <div className="relative grid gap-8">

          {/* HERO BANNER */}
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* PHOTO */}
              <div className="relative min-h-[520px] sm:min-h-[620px]">
                <img
                  src="/profile.jpg"
                  alt="Isha Khan"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
              </div>


              {/* TEXT SIDE */}
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-zinc-100 backdrop-blur-sm">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Quinnipiac University • Quantitative Economics, Mathematics, and Data Science
                </div>

                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Empirical research and quantitative analysis across economics, machine learning, and computational text methods.
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-200 sm:text-lg">
                  I’m Isha Khan, a quantitatively oriented student focused on macroeconomics, international trade, applied econometrics, and data-driven research. My work emphasizes reproducible pipelines, strong empirical structure, and turning complex questions into interpretable evidence.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <Button
                    className="rounded-full px-5 py-6 text-sm"
                    onClick={() => setActive("Research")}
                  >
                    Explore Research
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full px-5 py-6 text-sm"
                    onClick={() => setActive("Projects")}
                  >
                    View Projects
                  </Button>

                  <Button
                    variant="ghost"
                    className="rounded-full px-5 py-6 text-sm"
                    onClick={() => setActive("CV")}
                  >
                    Open CV
                  </Button>

                  <a
                    href="/Isha_Khan_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-6 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    View CV PDF
                  </a>

                </div>
              </div>
            </div>
          </div>


          {/* PROFILE SNAPSHOT CARD */}
          <Card className="rounded-[2rem] border border-zinc-200 bg-zinc-50/80 shadow-none dark:border-zinc-700 dark:bg-zinc-800/80">
            <CardContent className="p-6">

              <div className="mb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Profile snapshot
              </div>

              <div className="grid gap-4 sm:grid-cols-3">

                <Metric
                  label="Flagship public projects"
                  value="3"
                />

                <Metric
                  label="Core themes"
                  value="Macro • Trade • NLP • ML"
                />

                <Metric
                  label="Approach"
                  value="Replication-first, structured, and research-driven"
                />

              </div>

            </CardContent>
          </Card>

        </div>
      </section>


      {/* AREAS OF FOCUS */}
      <section>
        <SectionHeader
          eyebrow="Fields"
          title="Primary areas of focus"
          subtitle="A portfolio built around quantitative rigor, reproducible workflows, and policy-relevant empirical questions."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {courseClusters.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>


      {/* RESEARCH AGENDA */}
      <section>
        <SectionHeader
          eyebrow="Research Agenda"
          title="Current research direction"
          subtitle="Questions that sit at the center of my recent project work and future academic interests."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {researchAgenda.map((item) => (
            <Card
              key={item.title}
              className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <CardContent className="p-6">

                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                  <Library className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {item.body}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section>
        <SectionHeader
          eyebrow="Featured"
          title="Selected projects"
          subtitle="Public repositories designed around clear empirical pipelines and reproducible outputs."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const Icon = project.icon;

            return (
              <Card
                key={project.title}
                className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <CardContent className="p-6">

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {project.title}
                  </div>

                  <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {project.subtitle}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <div className="mt-5 inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {project.category}
                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300"
                      onClick={() => setActive("Projects")}
                    >
                      Learn more
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      Repo
                      <ExternalLink className="h-4 w-4" />
                    </a>

                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>


      {/* TIMELINE */}
      <section>
        <SectionHeader
          eyebrow="Timeline"
          title="Research and project timeline"
          subtitle="A compact view of how the portfolio has developed across research, applied work, and public repositories."
        />

        <div className="space-y-4">
          {timeline.map((item) => (
            <Card
              key={item.title}
              className="rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <CardContent className="grid gap-4 p-6 md:grid-cols-[0.18fr_0.82fr]">

                <div className="flex items-start gap-3 text-zinc-500 dark:text-zinc-400">
                  <CalendarRange className="mt-1 h-4 w-4" />
                  <span className="text-sm font-medium">{item.date}</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    {item.body}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}
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
      [p.title, p.status, p.summary, ...(p.tags || [])].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <SectionHeader
        eyebrow="Research"
        title="Working papers and research projects"
        subtitle="Current project papers and research-oriented work across macroeconomics, trade, NLP, and predictive modeling."
      />

      <div className="mb-8 flex max-w-md items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Search className="h-4 w-4 text-zinc-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search papers or topics"
          className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:text-zinc-100"
        />
      </div>

      <div className="grid gap-5">
        {filtered.map((paper) => (
          <Card key={paper.title} className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    <ScrollText className="h-3.5 w-3.5" />
                    {paper.status}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{paper.title}</h3>
                  <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{paper.year}</div>
                </div>
                <a href={paper.link} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300">
                  Related repo <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 text-sm leading-8 text-zinc-600 dark:text-zinc-300">{paper.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <Badge key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">{tag}</Badge>
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
        title="Technical portfolio and repositories"
        subtitle="Featured empirical and computational projects, plus live GitHub repository cards pulled directly from the public profile."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.title} className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">{project.title}</h3>
                <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{project.subtitle}</div>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
                <a href={project.link} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-zinc-950 hover:text-zinc-700 dark:text-zinc-50 dark:hover:text-zinc-300">
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
          title="Live repository feed"
          subtitle="Recent public repositories pulled dynamically from GitHub."
        />
        {loading ? (
          <div className="text-sm text-zinc-500 dark:text-zinc-400">Loading repositories…</div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {repos.slice(0, 6).map((repo) => (
              <Card key={repo.id} className="rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{repo.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{repo.description || "Public repository"}</p>
                    </div>
                    <a href={repo.html_url} className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {repo.language ? <Badge className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">{repo.language}</Badge> : null}
                    <Badge className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">Updated: {new Date(repo.updated_at).toLocaleDateString()}</Badge>
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
        subtitle="Academic profile, technical skills, research direction, and downloadable materials."
      />

      <div className="mb-8 grid gap-4 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-[0.8fr_0.2fr] dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">Profile</div>
          <div className="mt-2 text-lg font-medium text-zinc-950 dark:text-zinc-50">Economics, mathematics, and data science with a research emphasis on macro, trade, applied econometrics, and computational analysis.</div>
        </div>
        <div className="flex items-center justify-start md:justify-end">
          <a
  href="/Isha_Khan_CV.pdf"
  download
  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
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
            <Card key={section.title} className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.lines.map((line) => (
                    <div key={line} className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm leading-7 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
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
        title="Connect and collaborate"
        subtitle="For research opportunities, project discussions, collaboration, or academic inquiries."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <CardContent className="space-y-5 p-6">
            <a href="mailto:toishakhan@gmail.com" className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Email</div>
                <div className="font-medium text-zinc-950 dark:text-zinc-50">toishakhan@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/Khanis29" className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"><Github className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">GitHub</div>
                <div className="font-medium text-zinc-950 dark:text-zinc-50">github.com/Khanis29</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/isha-khan-27a86225a/" className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"><Linkedin className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">LinkedIn</div>
                <div className="font-medium text-zinc-950 dark:text-zinc-50">Professional profile</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"><FileText className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Google Scholar / SSRN</div>
                <div className="font-medium text-zinc-950 dark:text-zinc-50">Add once available</div>
              </div>
            </a>
          </CardContent>
        </Card>

        <Card className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 text-white shadow-sm dark:border-zinc-800 dark:bg-white dark:text-zinc-950">
          <CardContent className="p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">Current emphasis</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Empirical structure, reproducibility, and quantitative clarity.</h3>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-300 dark:text-zinc-700">
              I’m particularly interested in research and analytical work involving macroeconomic data, international trade, manufacturing structure, applied machine learning, and text-based inference. I care most about building clean pipelines that make difficult questions empirically legible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">{value}</div>
      <div className="text-sm text-zinc-600 dark:text-zinc-300">{label}</div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

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
        return <HomePage setActive={setActive} dark={dark} />;
    }
  }, [active, dark]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <TopNav active={active} setActive={setActive} dark={dark} setDark={setDark} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {page}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} Isha Khan • Research portfolio
      </footer>
    </div>
  );
}
