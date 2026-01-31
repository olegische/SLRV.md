import React from "react";
import Section from "@/components/Section";
import ExampleListSection, {
  ReferenceItem,
} from "@/components/ExampleListSection";

interface ExamplesSectionProps {
  references: ReferenceItem[];
  intro?: string;
}

export default function ExamplesSection({ references, intro }: ExamplesSectionProps) {
  const primaryLinks = references.slice(0, 2);
  const repoLink = references[2];

  return (
    <Section
      id="arxiv"
      title="Papers & Preprints"
      className="py-12"
      center
      maxWidthClass="max-w-4xl"
    >
      <div className="flex flex-col gap-8 text-center">
        <div>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            {intro ??
              "Your SLRV.md declaration stays aligned with the original ideas."}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Primary sources are provided below for independent inspection.
          </p>
        </div>

        <ExampleListSection items={primaryLinks} />

        {repoLink ? (
          <div className="max-w-3xl mx-auto">
            <a
              href={repoLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-semibold"
            >
              {repoLink.title}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {repoLink.description}
            </p>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
