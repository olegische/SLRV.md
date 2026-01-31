import React from "react";
import CodeExample from "@/components/CodeExample";
import GitHubIcon from "@/components/icons/GitHubIcon";

interface HeroProps {
  title: string;
  intro: string[];
  code: string;
  repoUrl: string;
}

function renderInlineText(text: string): React.ReactNode[] {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`code-${index}`}
          className="rounded bg-gray-200 px-1 text-sm dark:bg-gray-800"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`bold-${index}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={`em-${index}`}>{part.slice(1, -1)}</em>;
    }
    return <React.Fragment key={`text-${index}`}>{part}</React.Fragment>;
  });
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    const start = match.index;

    if (start > lastIndex) {
      elements.push(...renderInlineText(text.slice(lastIndex, start)));
    }

    elements.push(
      <a
        key={`link-${start}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        {label}
      </a>
    );

    lastIndex = start + fullMatch.length;
  }

  if (lastIndex < text.length) {
    elements.push(...renderInlineText(text.slice(lastIndex)));
  }

  return elements;
}

export default function Hero({ title, intro, code, repoUrl }: HeroProps) {
  return (
    <header
      id="slrv-framework"
      className="px-6 py-20 bg-gray-50 dark:bg-gray-900/40 border-b border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/*
          On large screens we want the primary CTA buttons to align with the
          bottom edge of the code block rendered in the right column. Making
          the left column a full-height flex container and pushing the CTA row
          to the bottom (via `lg:justify-between`) achieves this without
          disturbing the natural flow on small screens where the layout stacks
          vertically.
        */}
        <div className="flex flex-col items-start text-left sm:items-start max-w-prose">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>

          {intro.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed text-gray-700 dark:text-gray-300 ${
                index === 0 ? "mt-2" : "mt-3"
              }`}
            >
              {renderInlineMarkdown(paragraph)}
            </p>
          ))}

          <div className="mt-6 flex gap-4 flex-col sm:flex-row w-full sm:w-auto justify-center sm:justify-start">
            <a
              href="#about"
              className="inline-block px-5 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium text-center hover:opacity-80"
            >
              About SLRV
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <GitHubIcon className="w-4 h-4 text-current" />
              View on GitHub
            </a>
          </div>

          <nav className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex flex-wrap gap-4">
              <a
                href="#semantic-laundering"
                className="underline hover:no-underline"
              >
                Semantic Laundering
              </a>
              <a
                href="#responsibility-vacuum"
                className="underline hover:no-underline"
              >
                Responsibility Vacuum
              </a>
              <a href="#arxiv" className="underline hover:no-underline">
                arXiv
              </a>
            </div>
          </nav>
        </div>
        <div className="w-full md:max-w-none">
          <CodeExample
            compact
            heightClass="min-h-[160px] max-h-[415px]"
            code={code}
            href={repoUrl}
          />
        </div>
      </div>
    </header>
  );
}
