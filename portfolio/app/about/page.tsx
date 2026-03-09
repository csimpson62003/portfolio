"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      {/* ── Page Content ── */}
      <div className="relative z-10">
        {/* ── Section 1: Text Left, Image Right ── */}
        <section className="section-padding bg-background pt-16">
          <div className="container-content">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1 order-2 md:order-1"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-accent-primary leading-tight">
                  About Me
                </h2>
                <span className="accent-line" />

                <p className="mt-6 text-foreground-muted leading-relaxed text-base md:text-lg">
                  I&rsquo;m a software developer and designer with a passion for
                  crafting intuitive, user-friendly digital experiences. With a
                  background in both coding and design, I bring a unique perspective
                  to every project — ensuring functionality and aesthetics go hand
                  in hand.
                </p>

                <p className="mt-4 text-foreground-muted leading-relaxed text-base md:text-lg">
                  I thrive at the intersection of creativity and technology,
                  constantly exploring new tools and frameworks to push the
                  boundaries of what&rsquo;s possible on the web and beyond.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="flex-shrink-0 order-1 md:order-2"
              >
                <div className="relative w-80 h-96 md:w-[28rem] md:h-[34rem] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/assets/about-1.jpg"
                    alt="Caleb Miller"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 2: Image Left, Text Right (flipped) ── */}
        <section className="section-padding bg-background">
          <div className="container-content">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-shrink-0 order-1"
              >
                <div className="relative w-80 h-96 md:w-[28rem] md:h-[34rem] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/assets/about-2.jpg"
                    alt="Caleb Miller working"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="flex-1 order-2"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-accent-primary leading-tight">
                  Beyond the Code
                </h2>
                <span className="accent-line" />

                <p className="mt-6 text-foreground-muted leading-relaxed text-base md:text-lg">
                  When I&rsquo;m not coding, you can find me exploring new
                  technologies, designing creative solutions, or finding the next
                  best coffee spot.
                </p>

                <p className="mt-4 text-foreground-muted leading-relaxed text-base md:text-lg">
                  I believe the best digital products come from understanding
                  people first. Every pixel and every line of code should serve a
                  purpose — making someone&rsquo;s day a little easier or a little
                  more delightful.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── My Journey ── */}
        <section className="section-padding bg-background">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-primary">
                My Journey
              </h2>
              <span className="accent-line" />
            </motion.div>

            <div className="mt-10 space-y-8">
              {[
                {
                  period: "Present",
                  title: "Software Developer & Designer",
                  description:
                    "Building modern web applications and designing seamless user experiences. Focused on React, Next.js, and the broader JavaScript ecosystem.",
                },
                {
                  period: "Education",
                  title: "Computer Science",
                  description:
                    "Studying the foundations of software engineering, algorithms, data structures, and human-computer interaction.",
                },
                {
                  period: "Origins",
                  title: "Where It All Started",
                  description:
                    "What began as curiosity about how websites worked quickly turned into a deep passion for building software and designing experiences that people love to use.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="project-row"
                >
                  <p className="text-sm font-medium text-accent-green uppercase tracking-wider">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-xl md:text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Resume ── */}
        <section className="section-padding bg-background">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-accent-primary">
                Resume
              </h2>
              <span className="accent-line" />

              <p className="mt-6 text-foreground-muted text-base md:text-lg leading-relaxed">
                Want a closer look at my experience and skills? Download my
                resume or view it below.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/assets/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-green text-white font-semibold hover:bg-accent-green-hover transition-colors duration-200"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>

                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-background-alt transition-colors duration-200"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Connect ── */}
        <section className="section-padding bg-background">
          <div className="container-content max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-accent-primary">
                Let&rsquo;s Connect
              </h2>
              <span className="accent-line mx-auto" />

              <p className="mt-6 text-foreground-muted text-base md:text-lg leading-relaxed">
                I&rsquo;m always open to new opportunities, collaborations, and
                interesting conversations. Find me on LinkedIn or shoot me a
                message.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/caleb-miller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-green text-white font-semibold hover:bg-accent-green-hover transition-colors duration-200"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-background-alt transition-colors duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
