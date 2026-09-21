import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rachel Yu — Data Scientist & AI/ML Engineer" },
      {
        name: "description",
        content:
          "Rachel Yu is a data scientist and AI/ML engineer building optimization, machine learning, and real-time intelligent systems.",
      },
      {
        property: "og:title",
        content: "Rachel Yu — Data Scientist & AI/ML Engineer",
      },
      {
        property: "og:description",
        content:
          "Optimization, machine learning, and real-time intelligent systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const experience = [
  {
    title: "Data Scientist · Lyft",
    date: "Sep 2025 — Present",
    summary:
      "Leading optimization and machine learning systems for real-time driver incentives, earnings prediction, and guarantee forecasting.",
  },
  {
    title: "Senior Associate Data Scientist · NTT DATA",
    date: "Feb 2023 — Sep 2025",
    summary:
      "Built edge AI, multi-agent RAG, computer vision, and full-stack 3D object detection systems for production use cases.",
  },
  {
    title: "Graduate Research Assistant · University of Calgary",
    date: "Jan 2021 — 2024",
    summary:
      "Researched real-time UAV obstacle avoidance, small-object detection, and path planning on an 11TB+ imagery dataset.",
  },
  {
    title: "Software Developer · GNO-SYS Technology",
    date: "May 2022 — Jul 2022",
    summary:
      "Deployed Pangeo on AWS and Kubernetes, orchestrating and scaling 128 Docker containers.",
  },
  {
    title: "Software & Test Engineer · BaiDu",
    date: "Jun 2020 — Dec 2020",
    summary:
      "Improved a Jetty-based signup service and its test coverage, cutting request time by up to 30%.",
  },
];

const projects: Array<{
  title: string;
  tags: string[];
  summary: string;
  href?: string;
  imageUrl?: string;
  videoUrl?: string;
  autoPlayVideo?: boolean;
  status?: "ongoing";
}> = [
  {
    title: "Daily Stock Analysis Agent",
    tags: ["LangGraph", "corrective RAG", "LightGBM", "FastAPI"],
    summary:
      "A multi-agent stock research pipeline combining technical, news, quantitative, and risk agents with a human approval checkpoint.",
    href: "https://github.com/Rae-ymr/daily_stock_agent",
    status: "ongoing",
  },
  {
    title: "Real-time driver incentive optimization",
    tags: ["quadratic optimization", "Python", "production ML"],
    summary:
      "Led a cross-functional 0-to-1 launch of low-latency incentive optimization services driving $30M+ in annual profit.",
  },
  {
    title: "Edge AI multi-agent assistant",
    tags: ["Llama", "LoRA", "RAG", "quantization"],
    summary:
      "Fine-tuned and quantized Llama for local drone inference, then built and evaluated a multi-agent RAG pipeline around it.",
  },
  {
    title: "Real-time 3D object detection",
    tags: [
      "computer vision",
      "object segmentation",
      "object detection",
      "object depth estimation",
      "Azure",
    ],
    summary:
      "Designed custom inference algorithms and modular streaming APIs for a patent-filed real-time detection system.",
    href: "https://github.com/Rae-ymr/real-time-3D-object-detection-system/tree/main",
    videoUrl:
      "https://media.githubusercontent.com/media/Rae-ymr/real-time-3D-object-detection-system/main/example.mp4",
  },
  {
    title: "UAV obstacle avoidance with Circle RRT*",
    tags: ["path planning", "deep learning", "research"],
    summary:
      "Combined object detection with classic pathfinding to reduce computation time by 20% and path length by up to 6%.",
    href: "https://www.researchgate.net/publication/409415879_Monocular_Vision_Measurement_for_Drones_Obstacle_Avoidance_and_Autonomous_Path_Planning_With_Circle_RRT",
    imageUrl: "/images/uav-pipeline-small.png",
  },
];

const publications = [
  {
    title:
      "Monocular Vision Measurement for UAV Obstacle Avoidance and Path Planning with Circle RRT*",
    date: "IEEE OJIM · 2026",
    imageUrl: "/images/uav-improved-path-small.png",
  },
  {
    title: "Shaping Tomorrow: Responsible Innovation for a Brighter Future",
    date: "World Economic Forum · 2025",
  },
  {
    title: "Two-Stage Approach to Small-Object Detection",
    date: "Systems Engineering · 2024",
  },
  {
    title: "Small-object Detection for UAV-based Images",
    date: "IEEE SysCon · 2023",
    videoUrl: "/videos/uav-result-small.mp4",
  },
  {
    title:
      "System and Method for Class-Agnostic Counting of One or More Items in a Container",
    date: "U.S. Patent App. No. 19/078,802 · Pending",
  },
];

const skills = [
  [
    "AI / ML",
    "LLM fine-tuning (LoRA), quantization, LangChain, LangGraph, RAG, PyTorch, TensorFlow, CatBoost, computer vision",
  ],
  [
    "Languages",
    "Python, TypeScript, JavaScript, Java, C/C++, SQL, NoSQL, Shell",
  ],
  [
    "Backend & Infra",
    "FastAPI, Flask, Django, Express.js, Docker, Kubernetes, AWS, Azure, Terraform, CI/CD, Spark",
  ],
  ["Frontend", "React, React Native, Next.js, Tailwind CSS"],
];

function RobotArm() {
  const svgRef = useRef<SVGSVGElement>(null);
  const shoulderRef = useRef<SVGGElement>(null);
  const elbowRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const upperArmLength = 80;
    const forearmLength = 72;
    let animationFrame = 0;

    const followPointer = (event: PointerEvent) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const svg = svgRef.current;
        const shoulder = shoulderRef.current;
        const elbow = elbowRef.current;

        if (!svg || !shoulder || !elbow) return;

        const bounds = svg.getBoundingClientRect();
        const targetX = ((event.clientX - bounds.left) / bounds.width) * 300;
        const targetY = ((event.clientY - bounds.top) / bounds.height) * 300;
        const dx = targetX - 150;
        const dy = targetY - 220;
        const distance = Math.min(
          Math.max(Math.hypot(dx, dy), 28),
          upperArmLength + forearmLength - 3,
        );
        const elbowRadians = -Math.acos(
          Math.max(
            -1,
            Math.min(
              1,
              (distance ** 2 - upperArmLength ** 2 - forearmLength ** 2) /
                (2 * upperArmLength * forearmLength),
            ),
          ),
        );
        const shoulderRadians =
          Math.atan2(dy, dx) -
          Math.atan2(
            forearmLength * Math.sin(elbowRadians),
            upperArmLength + forearmLength * Math.cos(elbowRadians),
          );
        const shoulderDegrees = (shoulderRadians * 180) / Math.PI;
        const elbowDegrees = (elbowRadians * 180) / Math.PI;

        shoulder.setAttribute(
          "transform",
          `translate(150 220) rotate(${shoulderDegrees})`,
        );
        elbow.setAttribute(
          "transform",
          `translate(80 0) rotate(${elbowDegrees})`,
        );
      });
    };

    window.addEventListener("pointermove", followPointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", followPointer);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 300"
      className="robot-arm"
      role="img"
      aria-label="A little robot arm that waves hello and follows your cursor"
    >
      <defs>
        <linearGradient id="ra-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fafafa" />
          <stop offset="0.55" stopColor="#e4e4e7" />
          <stop offset="1" stopColor="#c9c9ce" />
        </linearGradient>
        <radialGradient id="ra-joint" cx="0.35" cy="0.3" r="0.95">
          <stop offset="0" stopColor="#52525b" />
          <stop offset="1" stopColor="#18181b" />
        </radialGradient>
        <linearGradient id="ra-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3f3f46" />
          <stop offset="1" stopColor="#18181b" />
        </linearGradient>
      </defs>

      <ellipse cx="150" cy="272" rx="60" ry="8" fill="rgba(23,23,23,0.08)" />
      <rect x="116" y="263" width="68" height="10" rx="4" fill="#18181b" />
      <rect
        x="128"
        y="231"
        width="44"
        height="36"
        rx="9"
        fill="url(#ra-base)"
      />
      <rect
        x="128"
        y="231"
        width="44"
        height="9"
        rx="4.5"
        fill="#52525b"
        opacity="0.55"
      />
      <circle cx="150" cy="224" r="18" fill="url(#ra-joint)" />
      <circle
        cx="150"
        cy="224"
        r="11"
        fill="none"
        stroke="#dc2626"
        strokeWidth="1.4"
        strokeDasharray="2.5 3.5"
        opacity="0.9"
      />
      <circle cx="150" cy="224" r="4" fill="#71717a" />

      <g ref={shoulderRef} transform="translate(150 220) rotate(-75)">
        <rect
          x="8"
          y="-12"
          width="72"
          height="24"
          rx="12"
          fill="url(#ra-metal)"
          stroke="#a1a1aa"
        />
        <rect
          x="20"
          y="-4"
          width="42"
          height="8"
          rx="4"
          fill="#18181b"
          opacity="0.82"
        />
        <rect
          x="14"
          y="-8.5"
          width="10"
          height="17"
          rx="4"
          fill="#d4d4d8"
          opacity="0.7"
        />
        <circle cx="80" cy="0" r="14" fill="url(#ra-joint)" />
        <circle cx="80" cy="0" r="5" fill="#3f3f46" />
        <circle cx="80" cy="0" r="2" fill="#a1a1aa" />

        <g ref={elbowRef} transform="translate(80 0) rotate(-35)">
          <rect
            x="6"
            y="-10"
            width="64"
            height="20"
            rx="10"
            fill="url(#ra-metal)"
            stroke="#a1a1aa"
          />
          <rect
            x="16"
            y="-3.5"
            width="38"
            height="7"
            rx="3.5"
            fill="#18181b"
            opacity="0.82"
          />
          <rect x="64" y="-11" width="16" height="22" rx="5" fill="#18181b" />
          <circle cx="72" cy="0" r="3" fill="#52525b" />
          <g transform="translate(78 0)">
            <g className="robot-gripper">
              <path
                d="M0 -14 C10 -15 20 -13 27 -9 L23 -3 C17 -6 9 -6 2 -5 Z"
                fill="#27272a"
              />
              <path
                d="M0 14 C10 15 20 13 27 9 L23 3 C17 6 9 6 2 5 Z"
                fill="#27272a"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function DroneCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const previousX = useRef(0);

  useEffect(() => {
    const moveDrone = (event: PointerEvent) => {
      const cursor = cursorRef.current;
      if (!cursor || event.pointerType === "touch") return;

      const tilt = Math.max(
        -12,
        Math.min(12, (event.clientX - previousX.current) * 0.8),
      );
      previousX.current = event.clientX;
      cursor.style.opacity = "1";
      cursor.style.transform = `translate3d(${event.clientX + 12}px, ${event.clientY + 14}px, 0) rotate(${tilt}deg)`;
    };

    const hideDrone = (event: MouseEvent) => {
      if (event.relatedTarget === null && cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("pointermove", moveDrone, { passive: true });
    window.addEventListener("mouseout", hideDrone);
    return () => {
      window.removeEventListener("pointermove", moveDrone);
      window.removeEventListener("mouseout", hideDrone);
    };
  }, []);

  return (
    <div ref={cursorRef} className="drone-cursor" aria-hidden="true">
      <svg viewBox="0 0 48 36">
        <g className="drone-rotor drone-rotor-left">
          <ellipse cx="8" cy="8" rx="7" ry="2" />
        </g>
        <g className="drone-rotor drone-rotor-right">
          <ellipse cx="40" cy="8" rx="7" ry="2" />
        </g>
        <path className="drone-arm" d="M9 10 19 17M39 10 29 17" />
        <path className="drone-body" d="M15 15c2-3 5-5 9-5s7 2 9 5l-3 9H18Z" />
        <circle className="drone-eye" cx="24" cy="19" r="2.4" />
        <path className="drone-leg" d="m19 23-3 5m13-5 3 5" />
        <path className="drone-shadow" d="M18 31h12" />
      </svg>
    </div>
  );
}

function SectionHeading({
  title,
  count,
  description,
}: {
  title: string;
  count?: number;
  description: string;
}) {
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
  const [indexOpen, setIndexOpen] = useState(false);

  useEffect(() => {
    if (!indexOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndexOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [indexOpen]);

  const closeIndex = () => setIndexOpen(false);

  return (
    <div className="site-shell">
      <DroneCursor />
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Back to top">
          Rachel&apos;s Space
        </a>
        <button
          type="button"
          className="index-link"
          aria-label="Open index"
          aria-expanded={indexOpen}
          onClick={() => setIndexOpen(true)}
        >
          <span className="index-lines" aria-hidden="true">
            <span />
            <span />
          </span>
          index
        </button>
      </header>

      {indexOpen ? (
        <div
          className="index-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Site index"
        >
          <div className="index-overlay-inner">
            <div className="index-overlay-top">
              <strong>Rachel&apos;s Space</strong>
              <button
                type="button"
                onClick={closeIndex}
                aria-label="Close index"
              >
                ×
              </button>
            </div>
            <nav className="index-nav" aria-label="Page sections">
              {[
                ["01", "Introduction", "Who I am and what I build", "#top"],
                [
                  "02",
                  "Experience",
                  "Roles and production impact",
                  "#experience",
                ],
                [
                  "03",
                  "Projects",
                  "AI, optimization, and computer vision",
                  "#projects",
                ],
                [
                  "04",
                  "Publications & Patents",
                  "Research, writing, and inventions",
                  "#publications",
                ],
                [
                  "05",
                  "Technical toolkit",
                  "Languages, frameworks, and infrastructure",
                  "#toolkit",
                ],
                ["06", "Education", "Academic background", "#education"],
              ].map(([number, label, description, href]) => (
                <a href={href} onClick={closeIndex} key={href}>
                  <span className="index-number">{number}</span>
                  <span className="index-copy">
                    <strong>{label}</strong>
                    <small>{description}</small>
                  </span>
                  <span className="index-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </nav>
            <div className="index-contact">
              <span>Elsewhere</span>
              <a href="mailto:ymrrachel@gmail.com">Email</a>
              <a
                href="https://github.com/Rae-ymr"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rachel190"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=PTRM5cMAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <main id="top" className="page-wrap">
        <section className="intro" aria-labelledby="intro-title">
          <RobotArm />
          <div className="intro-copy">
            <h1 id="intro-title">Rachel Yu</h1>
            <p className="bio">
              I build optimization, machine learning, and real-time AI systems.
              <br />
              Currently a Data Scientist at{" "}
              <a href="https://www.lyft.com" target="_blank" rel="noreferrer">
                Lyft
              </a>
              .<br />
              Previously a Senior Associate Data Scientist at NTT DATA.
            </p>
          </div>
        </section>

        <nav className="socials" aria-label="Social links">
          <a href="mailto:ymrrachel@gmail.com" aria-label="Email Rachel">
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/rachel190"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Yu on LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Rae-ymr"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Yu on GitHub"
          >
            <Github />
          </a>
          <a
            href="https://scholar.google.com/citations?user=PTRM5cMAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Yu on Google Scholar"
          >
            <GraduationCap />
          </a>
        </nav>

        <div id="index" className="content-stack">
          <section id="experience">
            <SectionHeading
              title="Experience"
              count={experience.length}
              description="Building intelligent systems from research through production."
            />
            <div className="entry-list">
              {experience.map((item) => (
                <article className="entry-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <time>{item.date}</time>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects">
            <SectionHeading
              title="Projects"
              count={projects.length}
              description="High-impact systems across optimization, generative AI, and computer vision."
            />
            <div className="entry-list">
              {projects.map((project) => (
                <article
                  className="entry-card project-card"
                  key={project.title}
                >
                  <h3>
                    {project.href ? (
                      <a
                        className="project-title-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.title} <ArrowUpRight aria-hidden="true" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <div className="tags">
                    {project.status ? (
                      <span className="project-status">{project.status}</span>
                    ) : null}
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p>{project.summary}</p>
                  {project.imageUrl ? (
                    <figure className="project-demo">
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} system pipeline`}
                        loading="lazy"
                      />
                      <figcaption>System pipeline</figcaption>
                    </figure>
                  ) : null}
                  {project.videoUrl ? (
                    <div className="project-demo">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        autoPlay={project.autoPlayVideo}
                        loop={project.autoPlayVideo}
                        muted={project.autoPlayVideo}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support embedded video.
                      </video>
                      <span>Recorded project demonstration</span>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
            <a
              className="text-link"
              href="mailto:ymrrachel@gmail.com?subject=Project inquiry"
            >
              Talk about a project <ArrowUpRight />
            </a>
          </section>

          <section id="publications">
            <SectionHeading
              title="Publications & Patents"
              count={publications.length}
              description="Research in UAV perception, path planning, responsible innovation, and computer vision systems."
            />
            <div className="timeline">
              {publications.map((publication) => (
                <article className="timeline-row" key={publication.title}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <div className="publication-heading">
                    <h3>{publication.title}</h3>
                    <time>{publication.date}</time>
                  </div>
                  {publication.imageUrl ? (
                    <figure className="project-demo publication-media">
                      <img
                        src={publication.imageUrl}
                        alt="Simulation results showing the improved Circle RRT* path"
                        loading="lazy"
                      />
                      <figcaption>Circle RRT* simulation results</figcaption>
                    </figure>
                  ) : null}
                  {publication.videoUrl ? (
                    <div className="project-demo publication-media">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        autoPlay
                        loop
                        muted
                      >
                        <source src={publication.videoUrl} type="video/mp4" />
                        Your browser does not support embedded video.
                      </video>
                      <span>UAV path-planning simulation</span>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section id="toolkit">
            <SectionHeading
              title="Technical toolkit"
              description="Tools I use to build, validate, and ship."
            />
            <div className="entry-list">
              {skills.map(([category, items]) => (
                <article className="book" key={category}>
                  <BookOpen aria-hidden="true" />
                  <div>
                    <h3>{category}</h3>
                    <p>{items}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="education">
            <SectionHeading
              title="Education"
              description="A foundation in software engineering and intelligent systems."
            />
            <div className="entry-list">
              <article className="entry-card">
                <h3>Master of Science in Software Engineering</h3>
                <time>University of Calgary · 2021 — 2024</time>
                <p>GPA 4.0/4.0 with a full scholarship.</p>
              </article>
              <article className="entry-card">
                <h3>
                  Bachelor of Engineering in Electronic Information Engineering
                </h3>
                <time>Zhengzhou University · 2016 — 2020</time>
              </article>
            </div>
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <p>Rachel&apos;s Space</p>
          <nav aria-label="Site">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications & Patents</a>
            <a href="#toolkit">Toolkit</a>
            <a href="#education">Education</a>
          </nav>
        </div>
        <p className="footer-note">
          Building useful systems at the intersection of AI, optimization, and
          software. ·{" "}
          <a href="mailto:ymrrachel@gmail.com">ymrrachel@gmail.com</a> ·{" "}
          <a
            href="https://www.linkedin.com/in/rachel190"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a href="https://github.com/Rae-ymr" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
