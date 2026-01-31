import React from "react";
import fs from "node:fs";
import path from "node:path";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import HowToUseSection from "@/components/HowToUseSection";
import ExamplesSection from "@/components/ExamplesSection";
import CompatibilitySection from "@/components/CompatibilitySection";
import { GetStaticProps } from "next";
import WhySection from "@/components/WhySection";
import AboutSection from "@/components/AboutSection";
import { ReferenceItem } from "@/components/ExampleListSection";
import TransitionSection from "@/components/TransitionSection";

interface LandingPageProps {
  slrvTitle: string;
  slrvIntro: string[];
  slrvMarkdown: string;
  slMarkdown: string;
  rvMarkdown: string;
  aboutMarkdown: string;
  whyMarkdown: string;
  references: ReferenceItem[];
}

export default function LandingPage({
  slrvTitle,
  slrvIntro,
  slrvMarkdown,
  slMarkdown,
  rvMarkdown,
  aboutMarkdown,
  whyMarkdown,
  references,
}: LandingPageProps) {
  const repoUrl = "https://github.com/olegische/SLRV.md";

  return (
    <div className="flex flex-col min-h-screen items-stretch font-sans">
      <main id="top">
        <Hero title={slrvTitle} intro={slrvIntro} code={slrvMarkdown} repoUrl={repoUrl} />
        <FAQSection markdown={whyMarkdown} />
        <ExamplesSection
          references={references}
          intro="The concepts formalized in SLRV.md are grounded in prior work on semantic laundering and responsibility vacuum."
        />
        <TransitionSection />
        <AboutSection markdown={aboutMarkdown} />
        <WhySection markdown={slMarkdown} />
        <CompatibilitySection markdown={rvMarkdown} />
        <HowToUseSection />
        <div className="flex-1 flex flex-col gap-4 mt-16">
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const readFile = (filename: string) =>
    fs.readFileSync(path.join(process.cwd(), filename), "utf8");

  const slrvMarkdown = readFile("SLRV.md");
  const slMarkdownRaw = readFile("SL.md");
  const rvMarkdownRaw = readFile("RV.md");
  const aboutMarkdownRaw = readFile("ABOUT.md");

  const stripTopHeading = (markdown: string) =>
    markdown.replace(/^#\s+.*\n+/, "");
  const extractSection = (markdown: string, heading: string) => {
    const regex = new RegExp(
      `^##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=^##\\s+|\\Z)`,
      "m"
    );
    const match = markdown.match(regex);
    return match ? match[1].trim() : "";
  };

  const slrvTitle = "SLRV.md";
  const slrvBody = slrvMarkdown.replace(/^#\s+.*\n+/, "");
  const slrvParagraphs = slrvBody.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
  const slrvIntroBase = slrvParagraphs
    .slice(0, 2)
    .map((p) => p.replace(/\n/g, " ").trim());
  const slrvAction =
    "Copy the block below into your project's [AGENTS.md](https://agents.md/) to adopt the declaration.";
  const slrvIntro = [...slrvIntroBase, slrvAction];

  const references: ReferenceItem[] = [
    {
      title: "Semantic Laundering (arXiv)",
      description: "Research paper on semantic laundering.",
      href: "https://arxiv.org/abs/2601.08333",
    },
    {
      title: "Responsibility Vacuum (arXiv)",
      description: "Research paper on responsibility vacuum.",
      href: "https://arxiv.org/abs/2601.15059",
    },
    {
      title: "SLRV.md Repository",
      description: "",
      href: "https://github.com/olegische/SLRV.md",
    },
  ];

  return {
    props: {
      slrvTitle,
      slrvIntro,
      slrvMarkdown,
      slMarkdown: stripTopHeading(slMarkdownRaw),
      rvMarkdown: stripTopHeading(rvMarkdownRaw),
      aboutMarkdown: stripTopHeading(aboutMarkdownRaw),
      whyMarkdown: extractSection(aboutMarkdownRaw, "Why this exists"),
      references,
    },
  };
};
