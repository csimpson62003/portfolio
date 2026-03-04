"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* ── Hero / Quote Section — stays fixed, content scrolls over it ── */}
      <section className="hero-full relative">
        <div className="fixed inset-0 flex items-center justify-center z-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-green-light via-transparent to-background" />

          <div className="relative z-10 max-w-3xl px-6 text-center">
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug tracking-tight">
              &ldquo;Sometimes in life, AI isn't always the solution. Sometimes, it's just a tool to help us find the real solution.&rdquo;
            </blockquote>

            <p className="mt-6 text-foreground-muted text-base md:text-lg font-medium">
              — Caleb Miller
            </p>

            <span className="accent-line mx-auto mt-6" />
          </div>

          {/* Scroll hint */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground-muted"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ── Everything below scrolls up over the fixed quote ── */}
      <div className="relative z-10">
        {/* Bio + Headshot Section */}
        <section className="section-padding bg-background rounded-t-3xl shadow-[0_-8px_30px_var(--shadow-color)]">
        <div className="container-content">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Bio — left side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 order-2 md:order-1"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-accent-primary leading-tight">
                Hey, I&rsquo;m Caleb.
              </h2>
              <span className="accent-line" />

              <p className="mt-6 text-foreground-muted leading-relaxed text-base md:text-lg">
                I'm a software developer and designer with a passion for developing and designing intuitive, user-friendly digital experiences. With a background in both coding and design, I bring a unique perspective to every project I work on, ensuring that functionality and aesthetics go hand in hand.
              </p>

              <p className="mt-4 text-foreground-muted leading-relaxed text-base md:text-lg">
                When I&rsquo;m not coding, you can find me exploring new
                technologies, designing creative solutions, or finding the next
                best coffee spot.
              </p>
            </motion.div>

            {/* Headshot — right side, large with soft shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="flex-shrink-0 order-1 md:order-2"
            >
              <div className="relative w-80 h-96 md:w-[30rem] md:h-[36rem] rounded-[2rem] overflow-hidden">
                <Image
                  src="/assets/headshot.jpg"
                  alt="Caleb Miller headshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills / Tech Stack ── */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-primary">
              What I Work With
            </h2>
            <span className="accent-line" />
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "JavaScript",
                  "Java",
                  "C++",
                  "Python",
                  "Tailwind CSS",
                  "Git",
                ].map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Design
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Figma",
                  "Adobe Photoshop",
                  "Adobe Illustrator",
                  "Adobe After Effects",
                  "Adobe XD",
                  "Adobe InDesign",
                  "UI/UX",
                  "Wireframing",
                  "Prototyping",
                ].map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-primary">
              Featured Projects
            </h2>
            <span className="accent-line" />
          </motion.div>

          <div className="mt-8">
            {[
              {
                title: "UpKeep",
                description:
                  "A Zillow-like mobile app for finding and renting apartments, built with React Native and Node.js.",
                tags: ["React Native", "Node.js", "Appwrite"],
              },
              {
                title: "Find my Frappé",
                description:
                  "A web app that helps users find the nearest coffee shops, as well as create and share recipes. built with Next.js and Firebase.",
                tags: ["Next.js", "JavaScript", "Figma"],
              },
               {
                title: "DeadPool Runner",
                description:
                  "A 2d pixel art game built with the Raylib library. It features fast-paced action and a variety of upgrades and enemies.",
                tags: ["C++", "Raylib", "Game Development"],
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="project-row group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent-green transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-foreground-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2 md:mt-0 flex-shrink-0">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-foreground-muted border border-border rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-accent-green font-medium hover:gap-3 transition-all duration-200"
            >
              View all projects <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="section-padding bg-background">
        <div className="container-content max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-accent-primary">
              Let&rsquo;s Work Together
            </h2>
            <span className="accent-line mx-auto" />

            <p className="mt-6 text-foreground-muted text-base md:text-lg leading-relaxed">
              Have a project in mind or just want to chat? I&rsquo;m always open
              to new opportunities and interesting conversations.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-4 rounded-full bg-accent-green text-white font-semibold hover:bg-accent-green-hover transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
