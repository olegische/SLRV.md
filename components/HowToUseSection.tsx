import Section from "@/components/Section";
import React from "react";

export default function HowToUseSection() {
  return (
    <Section
      title="Navigation"
      className="py-12"
      maxWidthClass="max-w-3xl"
      >
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          <a href="#top" className="underline hover:no-underline">
            SLRV.md
          </a>
        </li>
        <li>
          <a href="#arxiv" className="underline hover:no-underline">
            Papers & Preprints
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="underline hover:no-underline"
          >
            About SLRV
          </a>
        </li>
        <li>
          <a
            href="#semantic-laundering"
            className="underline hover:no-underline"
          >
            Semantic Laundering
          </a>
        </li>
        <li>
          <a
            href="#responsibility-vacuum"
            className="underline hover:no-underline"
          >
            Responsibility Vacuum
          </a>
        </li>
      </ul>
    </Section>
  );
}
