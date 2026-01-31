import Section from "@/components/Section";
import React from "react";
import MarkdownContent from "@/components/MarkdownContent";

export default function WhySection({ markdown }: { markdown: string }) {
  return (
    <Section
      id="semantic-laundering"
      title="Semantic Laundering"
      className="pt-24 pb-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <MarkdownContent markdown={markdown} />
    </Section>
  );
}
