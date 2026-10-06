const links = {
  email: "mailto:toishakhan@gmail.com",
  github: "https://github.com/Khanis29",
  linkedin: "https://www.linkedin.com/in/isha-khan-27a86225a/",
  christopherBall: "https://www.qu.edu/faculty-and-staff/christopher-ball/",
  tradeRepo: "https://github.com/Khanis29/Trade_Deficit_Manufacturing",
  nlpRepo: "https://github.com/Khanis29/NLP_News_Analysis",
  manufacturingRepo: "https://github.com/Khanis29/ML_Manufacturing",
};

function ExternalTextLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-link">
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <a className="name-mark" href="#home" aria-label="Isha Khan home">
          Isha Khan
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero page-width">
      <div className="hero-copy">
        <p className="eyebrow">University of Rochester</p>
        <h1>Isha Khan</h1>
        <p className="role">Ph.D. Student in Economics</p>

        <p className="intro">
          I am a PhD student in Economics at the University of Rochester. My
          interests are in dynamic macroeconomics, monetary economics, inflation
          dynamics, international macroeconomics, and structural and
          computational macroeconomics.
        </p>

        <p className="intro secondary-intro">
          My current work uses econometrics, computational economics, and
          quantitative methods to study how economic mechanisms show up in
          long-run and cross-country data.
        </p>

        <div className="hero-links" aria-label="Quick links">
          <a href="#research">Research</a>
          <a href="/Isha_Khan_CV.pdf" target="_blank" rel="noreferrer">
            CV
          </a>
          <a href={links.email}>Email</a>
        </div>
      </div>

      <figure className="portrait-wrap">
        <img className="portrait" src="/profile.jpg" alt="Portrait of Isha Khan" />
        <figcaption>Department of Economics · University of Rochester</figcaption>
      </figure>
    </section>
  );
}

function SectionHeading({ number, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-number">{number}</div>
      <div>
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}

function Research() {
  return (
    <section id="research" className="section page-width">
      <SectionHeading
        number="01"
        title="Research"
        description="Current and completed work in macroeconomics, international trade, and empirical methods."
      />

      <div className="research-group">
        <div className="research-label">Forthcoming</div>
        <article className="research-entry">
          <h3>
            Do Trade Deficits Really De-Industrialize? Manufacturing Shares and
            Trade Balances
          </h3>

          <p className="byline">
            with{" "}
            <ExternalTextLink href={links.christopherBall}>
              Christopher Ball
            </ExternalTextLink>
          </p>

          <p className="venue">Forthcoming, Economics Letters</p>

          <p className="research-summary">
            We study whether persistent trade deficits are systematically
            associated with declines in manufacturing share across countries.
            The analysis combines a cross-country panel with alternative deficit
            classifications, group comparisons, and panel regressions. The
            results challenge the view that trade deficits alone systematically
            predict manufacturing decline.
          </p>

          <p className="methods">
            International trade · panel econometrics · cross-country data
          </p>


        </article>
      </div>

      <div className="research-group">
        <div className="research-label">Research in progress</div>
        <article className="research-entry">
          <h3>
            150 Years of Inflation: Monetary, New Keynesian, and Fiscal Theory
            Conceptualizations
          </h3>

          <p className="byline">
            Research Assistant to{" "}
            <ExternalTextLink href={links.christopherBall}>
              Christopher Ball
            </ExternalTextLink>
          </p>

          <p className="research-summary">
            This project compares long-run inflation patterns with predictions
            from Monetarist, New Keynesian, and Fiscal Theory frameworks. The
            empirical work uses more than a century of international data,
            time-series and panel analysis, and Markov-chain transition models
            to study inflation regimes and their persistence.
          </p>

          <p className="methods">
            Inflation · monetary economics · time series · regime persistence
          </p>
        </article>
      </div>

      <div className="research-group">
        <div className="research-label">Selected computational work</div>

        <div className="stacked-entries">
          <article className="compact-entry">
            <h3>News Language Use Around U.S.-Involved Geopolitical Events</h3>
            <p>
              Event-window analysis of New York Times coverage around major
              geopolitical events, using readability, lexical rarity, pre/post
              regressions, and placebo tests.
            </p>
            <ExternalTextLink href={links.nlpRepo}>GitHub</ExternalTextLink>
          </article>

          <article className="compact-entry">
            <h3>State-Level Manufacturing Share and Its Drivers</h3>
            <p>
              State-level panel and machine-learning project using PCA,
              classification methods, linear regression, and penalized regression
              to study manufacturing-share dynamics.
            </p>
            <ExternalTextLink href={links.manufacturingRepo}>
              GitHub
            </ExternalTextLink>
          </article>
        </div>
      </div>
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className="section page-width">
      <SectionHeading
        number="02"
        title="Curriculum Vitae"
        description="A short overview is included below. The full academic CV is available as a PDF."
      />

      <div className="cv-layout">
        <div className="cv-column">
          <h3>Education</h3>

          <div className="cv-item">
            <div>
              <strong>University of Rochester</strong>
              <span>Ph.D. in Economics</span>
            </div>
            <time>2026–present</time>
          </div>

          <div className="cv-item">
            <div>
              <strong>Quinnipiac University</strong>
              <span>
                B.S. Economics, B.A. Mathematics, B.S. Data Science (Honors)
              </span>
            </div>
            <time>2026</time>
          </div>
        </div>

        <div className="cv-column">
          <h3>Research interests</h3>
          <p className="cv-text">
            Dynamic macroeconomics; monetary economics; inflation dynamics;
            international macroeconomics; structural and computational
            macroeconomics.
          </p>

          <h3 className="subsection-title">Methods and computing</h3>
          <p className="cv-text">
            Python, R, SQL, Stata, and LaTeX. Panel and time-series econometrics,
            dynamic programming, statistical learning, and reproducible
            empirical workflows.
          </p>
        </div>
      </div>

      <div className="cv-download">
        <a
          className="plain-button"
          href="/Isha_Khan_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View full CV (PDF)
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section page-width contact-section">
      <SectionHeading
        number="03"
        title="Contact"
        description="For research, academic, or professional inquiries."
      />

      <div className="contact-grid">
        <div>
          <p className="contact-label">Email</p>
          <a className="contact-value" href={links.email}>
            toishakhan@gmail.com
          </a>
        </div>

        <div>
          <p className="contact-label">Elsewhere</p>
          <div className="contact-links">
            <ExternalTextLink href={links.github}>GitHub</ExternalTextLink>
            <ExternalTextLink href={links.linkedin}>LinkedIn</ExternalTextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <span>© {new Date().getFullYear()} Isha Khan</span>
        <span>Economics · University of Rochester</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Research />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
