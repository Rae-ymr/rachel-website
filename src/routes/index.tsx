import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  Menu,
  Rss,
} from "lucide-react";
import profileRobot from "../assets/profile-robot.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Designer & Builder" },
      {
        name: "description",
        content: "Personal notes, selected projects, milestones, and current reading.",
      },
      { property: "og:title", content: "Your Name — Designer & Builder" },
      {
        property: "og:description",
        content: "Personal notes, selected projects, milestones, and current reading.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const writings = [
  {
    title: "Learning to make fewer, better things",
    date: "September 12, 2026",
    summary: "A note on attention, craft, and knowing when an idea is finished.",
  },
  {
    title: "Notes from building in public",
    date: "August 28, 2026",
    summary: "What sharing unfinished work taught me about momentum.",
  },
  {
    title: "The tools I keep coming back to",
    date: "July 19, 2026",
    summary: "A short list of software that quietly earns its place.",
  },
];

const projects = [
  {
    title: "A small studio for useful software",
    tags: ["design", "development", "systems"],
    summary: "A collection of focused digital products made for people who care about their tools.",
  },
  {
    title: "An ambient reading companion",
    tags: ["prototype", "ai", "reading"],
    summary: "A calm experiment for collecting passages, questions, and connections while reading.",
  },
  {
    title: "A personal knowledge atlas",
    tags: ["research", "interface"],
    summary: "A visual way to revisit ideas and see how they change over time.",
  },
];

const milestones = [
  ["Started an independent studio", "Sep 2026"],
  ["Published my first long-form essay", "Aug 2026"],
  ["Spoke at a local design meetup", "Jun 2026"],
  ["Released my first public project", "Mar 2026"],
];

function SectionHeading({ title, count, description }: { title: string; count?: number; description: string }) {
  return (
    <div className="section-heading">
      <div className="flex items-baseline gap-2">
        <h2>{title}</h2>
        {count ? <span className="section-count">({count})</span> : null}
      </div>
      <p>{description}</p>
    </div>
  );
}

function Index() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Back to top">Your Name</a>
        <a href="#index" className="index-link"><Menu size={14} aria-hidden="true" /> index</a>
      </header>

      <main id="top" className="page-wrap">
        <section className="intro" aria-labelledby="intro-title">
          <img src={profileRobot} alt="A robot arm tending a small plant" width={816} height={816} />
          <div>
            <p className="eyebrow">Hello, I’m</p>
            <h1 id="intro-title">Your Name</h1>
            <p className="bio">
              I design and build thoughtful digital products.<br />
              Currently exploring the space between <a href="mailto:hello@example.com">technology and culture</a>.<br />
              Based in Toronto, working everywhere.
            </p>
          </div>
        </section>

        <nav className="socials" aria-label="Social links">
          <a href="mailto:hello@example.com" aria-label="Email"><Mail /></a>
          <a href="https://github.com" aria-label="GitHub"><Github /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
          <a href="#writing" aria-label="Writing"><Rss /></a>
        </nav>

        <div id="index" className="content-stack">
          <section id="writing">
            <SectionHeading title="Selected writing" count={12} description="Essays, notes, and ideas I’m still working through." />
            <div className="entry-list">
              {writings.map((item) => (
                <article className="entry-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <time>{item.date}</time>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
            <a className="text-link" href="mailto:hello@example.com?subject=Writing archive">Ask for the full archive <ArrowUpRight /></a>
          </section>

          <section>
            <SectionHeading title="Projects" count={8} description="Experiments, collaborations, and things I’ve shipped." />
            <div className="entry-list">
              {projects.map((project) => (
                <article className="entry-card project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <p>{project.summary}</p>
                </article>
              ))}
            </div>
            <a className="text-link" href="mailto:hello@example.com?subject=Project inquiry">Talk about a project <ArrowUpRight /></a>
          </section>

          <section>
            <SectionHeading title="Recently on the timeline" description="Little proofs of progress." />
            <div className="timeline">
              {milestones.map(([title, date]) => (
                <div className="timeline-row" key={title}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <h3>{title}</h3>
                  <time>{date}</time>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading title="On the nightstand" description="What I’m reading right now." />
            <div className="books">
              <article className="book"><BookOpen aria-hidden="true" /><div><h3>The Creative Act</h3><p>Rick Rubin</p></div></article>
              <article className="book"><BookOpen aria-hidden="true" /><div><h3>Ways of Seeing</h3><p>John Berger</p></div></article>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <span>© 2026 Your Name</span>
        <a href="mailto:hello@example.com">Say hello <ArrowUpRight /></a>
      </footer>
    </div>
  );
}