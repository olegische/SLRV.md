import Section from "@/components/Section";
import MarkdownContent from "@/components/MarkdownContent";

const AboutSection = ({ markdown }: { markdown: string }) => (
  <Section
    id="about"
    title="About the SLRV Framework"
    className="pb-0"
    center
    maxWidthClass="max-w-3xl"
  >
    <MarkdownContent markdown={markdown} />
  </Section>
);

export default AboutSection;
