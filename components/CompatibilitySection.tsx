import React from "react";
import Section from "@/components/Section";
import MarkdownContent from "@/components/MarkdownContent";

export default function CompatibilitySection({ markdown }: { markdown: string }) {
  return (
    <Section
      id="responsibility-vacuum"
      title="Responsibility Vacuum"
      className="py-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <MarkdownContent markdown={markdown} />
    </Section>
  );
}
