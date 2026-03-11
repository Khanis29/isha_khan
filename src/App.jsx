import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ExternalLink, ChevronRight, GraduationCap, BarChart3, Brain, Newspaper, Briefcase, BookOpen, Award, Code2, Home, FolderKanban, ScrollText, UserCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "cv", label: "CV", icon: UserCircle2 },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "papers", label: "Papers", icon: ScrollText },
  { id: "contact", label: "Contact", icon: Mail },
];

const projects = [
  {
    title: "Trade Deficits and Manufacturing",
    subtitle: "Cross-country macroeconomics and replication repository",
    blurb:
      "A structured empirical pipeline studying whether persistent trade deficits are associated with faster manufacturing decline across countries, using panel construction, threshold classification, Welch tests, pooled regressions, and publication-ready outputs.",
    tags: ["Econometrics", "International Trade", "Macroeconomics", "R", "Replication"],
    link: "https://github.com/Khanis29/Trade_Deficit_Manufacturing",
    icon: BarChart3,
    highlight: "Research-focused replication package with full empirical workflow.",
  },
  {
    title: "NLP News Analysis",
    subtitle: "Event-based readability and lexical-rarity analysis of NYT coverage",
    blurb:
      "A natural language processing project that collects and cleans New York Times coverage around major geopolitical events, constructs readability and lexical-rarity features, and estimates event-based pre/post models with placebo testing and figure generation.",
    tags: ["NLP", "Python", "Causal Inference", "API Pipeline", "Text Analysis"],
    link: "https://github.com/Khanis29/NLP_News_Analysis",
    icon: Newspaper,
    highlight: "Combines scraping, feature engineering, regression, and reproducible outputs.",
  },
  {
    title: "Manufacturing Share ML Pipeline",
    subtitle: "State-level machine learning and prediction",
    blurb:
      "A state-level machine learning pipeline that builds a panel dataset from multiple economic sources, engineers forward manufacturing-share outcomes, performs PCA, and compares classifiers and regression models for predicting manufacturing dynamics.",
    tags: ["Machine Learning", "Python", "PCA", "Prediction", "Manufacturing"],
    link: "#",
    icon: Brain,
    highlight: "Bridges economic structure with predictive modeling.",
  },
];

const papers = [
  {
    title: "Manufacturing Shares and Trade Balances",
    status: "Co-authored research paper",
    summary:
      "Investigates whether trade deficits systematically predict deindustrialization using cross-country panel analysis, robustness testing, and multiple classification thresholds.",
    fields: ["International Trade", "Macroeconomics", "Empirical Research"],
  },
  {
    title: "News Language Use Around U.S.-Involved Geopolitical Events",
    status: "Empirical NLP project",
    summary:
      "Studies shifts in news readability and lexical complexity around major geopolitical events using NYT coverage, event windows, pre/post regressions, and placebo tests.",
    fields: ["NLP", "Media Analysis", "Applied Data Science"],
  },
  {
    title: "State-Level Manufacturing Share and Its Drivers",
    status: "Machine learning project",
    summary:
      "Uses dimension reduction, classification, and regression methods to analyze state-level manufacturing shares and their short-run predictive dynamics.",
    fields: ["Machine Learning", "Regional Economics", "Prediction"],
  },
];

const experience = [
  {
    role: "Investments Intern",
    org: "Avangrid",
    detail:
      "Improved revised budget input efficiency from roughly 14 minutes to under 5 minutes through an integrated Excel-based workflow and supported capital budgeting and scenario analysis.",
  },
  {
    role: "Senior Researcher",
    org: "Quinnipiac Global Economics Team",
    detail:
      "Produced concise economic reports, contributed data visualizations, and restructured reporting workflow to improve consistency and output.",
  },
  {
    role: "Economics Club President",
    org: "Quinnipiac University",
    detail:
      "Led programming and student engagement around economics, game theory, and applied quantitative thinking.",
  },
];

const coursePillars = [
  "Quantitative Economics",
  "Mathematics",
  "Data Science",
  "Econometrics",
  "Machine Learning",
  "International Trade",
  "Dynamic Macroeconomics",
  "Statistical Modeling",
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}

function TopNav({ active, setActive }) {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-sm">
            <span className="text-sm font-semibold">IK</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-950">Isha Khan</div>
            <div className="text-xs text-zinc-500">Economics • Math • Data Science</div>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HomePage({ setActive }) {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,24,27,0.07),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(24,24,27,0.05),transparent_35%)]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
              <GraduationCap className="h-3.5 w-3.5" />
              Quinnipiac University • Quantitative Economics, Mathematics, Data Science
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              Research-driven quantitative work across economics, machine learning, and NLP.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 sm:text-lg">
              I’m Isha Khan, a quantitatively focused student building empirical research projects in macroeconomics, international trade, applied machine learning, and text analysis. My work centers on structured pipelines, reproducible analysis, and translating complex questions into clean empirical evidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-full bg-zinc-950 px-5 py-6 text-sm hover:bg-zinc-800" onClick={() => setActive("projects")}>View Projects</Button>
              <Button variant="outline" className="rounded-full px-5 py-6 text-sm" onClick={() => setActive("cv")}>Open CV</Button>
              <Button variant="ghost" className="rounded-full px-5 py-6 text-sm" onClick={() => setActive("papers")}>Browse Papers</Button>
            </div>
          </div>

          <Card className="rounded-[2rem] border-zinc-200 bg-zinc-50/80 shadow-none">
            <CardContent className="p-6">
              <div className="mb-4 text-sm font-medium text-zinc-500">At a glance</div>
              <div className="grid gap-4">
                <div>
                  <div className="text-2xl font-semibold text-zinc-950">3</div>
                  <div className="text-sm text-zinc-600">Flagship public projects</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-zinc-950">Research</div>
                  <div className="text-sm text-zinc-600">Macro, trade, text analysis, and predictive modeling</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-zinc-950">Applied</div>
                  <div className="text-sm text-zinc-600">Replication pipelines, ML workflows, and publication-ready outputs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Focus"
          title="Core areas"
          subtitle="A portfolio built around empirical structure, reproducibility, and strong quantitative framing."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coursePillars.map((item) => (
            <div key={item} className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm text-zinc-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Featured Work"
          title="Selected projects"
          subtitle="A few representative projects spanning macroeconomics, NLP, and predictive modeling."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} className="rounded-[1.75rem] border-zinc-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-semibold text-zinc-950">{project.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">{project.subtitle}</div>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{project.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl bg-zinc-50 px-4 py-3 text-sm text-zinc-600">{project.highlight}</div>
                  <div className="mt-6 flex items-center justify-between">
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 hover:text-zinc-700" onClick={() => setActive("projects")}>
                      See details <ChevronRight className="h-4 w-4" />
                    </button>
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900">
                      Repo <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Experience"
          title="Applied and research experience"
          subtitle="Quantitative work across finance, student research, and applied economic writing."
        />
        <div className="grid gap-4">
          {experience.map((item) => (
            <Card key={item.role} className="rounded-[1.5rem] border-zinc-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-zinc-950">{item.role}</div>
                    <div className="text-sm text-zinc-500">{item.org}</div>
                  </div>
                  <Briefcase className="h-5 w-5 text-zinc-400" />
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function CVPage() {
  const sections = useMemo(
    () => [
      {
        title: "Education",
        icon: GraduationCap,
        items: [
          "Quinnipiac University — Quantitative Economics, Mathematics, and Data Science",
          "Strong coursework in econometrics, machine learning, advanced mathematics, and macroeconomics",
          "Research interests: dynamic macroeconomics, inflation dynamics, international trade, and applied data science",
        ],
      },
      {
        title: "Research & Quantitative Work",
        icon: BookOpen,
        items: [
          "Trade Deficits and Manufacturing: structured replication repository with panel construction, Welch testing, pooled regressions, and paper tables",
          "NYT NLP project: event-based readability, lexical rarity, and placebo-tested regressions on geopolitical-event coverage",
          "Manufacturing-share ML project: state-level panel construction, PCA, classification, and regression modeling",
        ],
      },
      {
        title: "Technical Skills",
        icon: Code2,
        items: [
          "Python: pandas, NumPy, scikit-learn, statsmodels, matplotlib",
          "R: panel-data workflows, empirical replication, reproducible analysis",
          "GitHub, LaTeX, Excel modeling, structured research documentation",
        ],
      },
      {
        title: "Leadership & Experience",
        icon: Award,
        items: [
          "President, Quinnipiac Economics Club",
          "Senior Researcher, Quinnipiac Global Economics Team",
          "Investments Intern, Avangrid",
        ],
      },
    ],
    []
  );

  return (
    <div>
      <SectionTitle
        eyebrow="Curriculum Vitae"
        title="Academic and professional profile"
        subtitle="A concise overview of education, technical work, research interests, and experience."
      />

      <div className="mb-8 grid gap-4 rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm md:grid-cols-3">
        <div>
          <div className="text-sm text-zinc-500">Name</div>
          <div className="mt-1 font-semibold text-zinc-950">Isha Khan</div>
        </div>
        <div>
          <div className="text-sm text-zinc-500">Focus</div>
          <div className="mt-1 font-semibold text-zinc-950">Economics, Data Science, Mathematics</div>
        </div>
        <div>
          <div className="text-sm text-zinc-500">Interests</div>
          <div className="mt-1 font-semibold text-zinc-950">Macro, trade, econometrics, machine learning</div>
        </div>
      </div>

      <div className="grid gap-5">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.title} className="rounded-[1.75rem] border-zinc-200 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-950">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item} className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm leading-7 text-zinc-700">
                      {item}
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

function ProjectsPage() {
  return (
    <div>
      <SectionTitle
        eyebrow="Projects"
        title="Research and technical portfolio"
        subtitle="Public projects emphasizing structured pipelines, empirical rigor, and reproducible outputs."
      />
      <div className="grid gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.title} className="rounded-[1.75rem] border-zinc-200 shadow-sm">
              <CardContent className="grid gap-6 p-6 lg:grid-cols-[0.18fr_0.82fr]">
                <div className="flex items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{project.title}</h3>
                      <div className="mt-1 text-sm text-zinc-500">{project.subtitle}</div>
                    </div>
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 hover:text-zinc-700">
                      View repository <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-zinc-600">{project.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function PapersPage() {
  return (
    <div>
      <SectionTitle
        eyebrow="Papers & Writing"
        title="Research themes and project papers"
        subtitle="A snapshot of current writing and research directions across macroeconomics, trade, and applied computational analysis."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {papers.map((paper) => (
          <Card key={paper.title} className="rounded-[1.75rem] border-zinc-200 shadow-sm">
            <CardContent className="p-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-500">
                <FileText className="h-3.5 w-3.5" />
                {paper.status}
              </div>
              <h3 className="text-xl font-semibold text-zinc-950">{paper.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{paper.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {paper.fields.map((field) => (
                  <Badge key={field} variant="secondary" className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">{field}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <SectionTitle
        eyebrow="Contact"
        title="Get in touch"
        subtitle="For research opportunities, collaboration, or project discussions."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-[1.75rem] border-zinc-200 shadow-sm">
          <CardContent className="space-y-5 p-6">
            <a href="mailto:toishakhan@gmail.com" className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-zinc-500">Email</div>
                <div className="font-medium text-zinc-950">toishakhan@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/Khanis29" className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white"><Github className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-zinc-500">GitHub</div>
                <div className="font-medium text-zinc-950">github.com/Khanis29</div>
              </div>
            </a>
            <a href="https://www.linkedin.com" className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white"><Linkedin className="h-5 w-5" /></div>
              <div>
                <div className="text-sm text-zinc-500">LinkedIn</div>
                <div className="font-medium text-zinc-950">Professional profile</div>
              </div>
            </a>
          </CardContent>
        </Card>

        <Card className="rounded-[1.75rem] border-zinc-200 bg-zinc-950 text-white shadow-sm">
          <CardContent className="p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">Current emphasis</div>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Empirical research, reproducible pipelines, and quantitative storytelling.</h3>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-300">
              My work sits at the intersection of economics, data science, and computational analysis. I’m especially interested in projects involving macroeconomic data, trade and industrial structure, predictive modeling, and text-based empirical workflows.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function PortfolioSiteApp() {
  const [active, setActive] = useState("home");

  const page = useMemo(() => {
    switch (active) {
      case "cv":
        return <CVPage />;
      case "projects":
        return <ProjectsPage />;
      case "papers":
        return <PapersPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setActive={setActive} />;
    }
  }, [active]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <TopNav active={active} setActive={setActive} />

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
    </div>
  );
}

