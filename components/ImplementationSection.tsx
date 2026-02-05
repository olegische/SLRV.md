import Section from "@/components/Section";
import MarkdownContent from "@/components/MarkdownContent";

export default function ImplementationSection({ markdown }: { markdown: string }) {
  return (
    <Section
      id="implementation"
      title="Implementation"
      className="py-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <MarkdownContent markdown={markdown} />
    </Section>
  );
}
