import React from "react";

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "code"; text: string }
  | { type: "hr" };

function parseMarkdown(md: string): Block[] {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let quoteLines: string[] = [];
  let codeLines: string[] = [];
  let inCode = false;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  const flushQuote = () => {
    if (quoteLines.length > 0) {
      blocks.push({ type: "blockquote", text: quoteLines.join("\n") });
      quoteLines = [];
    }
  };

  const flushCode = () => {
    if (codeLines.length > 0) {
      blocks.push({ type: "code", text: codeLines.join("\n") });
      codeLines = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith("```")) {
      if (inCode) {
        flushCode();
        inCode = false;
      } else {
        flushParagraph();
        flushList();
        flushQuote();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    if (line.trim() === "---" || line.trim() === "***") {
      flushParagraph();
      flushList();
      flushQuote();
      blocks.push({ type: "hr" });
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      flushList();
      quoteLines.push(line.replace(/^>\s?/, ""));
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      flushQuote();
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2],
      });
      continue;
    }

    const listMatch = line.match(/^[-*]\s+(.*)$/);
    if (listMatch) {
      flushParagraph();
      flushQuote();
      listItems.push(listMatch[1]);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushQuote();
  flushCode();

  return blocks;
}

function renderInline(text: string): React.ReactNode[] {
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

function Heading({
  level,
  text,
}: {
  level: number;
  text: string;
}): JSX.Element {
  const Tag = level <= 2 ? "h3" : level === 3 ? "h4" : "h5";
  const className =
    level <= 2
      ? "text-xl font-semibold tracking-tight"
      : "text-lg font-semibold tracking-tight";
  return <Tag className={className}>{renderInline(text)}</Tag>;
}

export default function MarkdownContent({ markdown }: { markdown: string }) {
  const blocks = React.useMemo(() => parseMarkdown(markdown), [markdown]);

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return <Heading key={index} level={block.level} text={block.text} />;
        }
        if (block.type === "paragraph") {
          return <p key={index}>{renderInline(block.text)}</p>;
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc list-inside space-y-1">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "blockquote") {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-gray-300 pl-4 italic text-gray-700 dark:border-gray-700 dark:text-gray-300"
            >
              {block.text.split("\n").map((line, lineIndex) => (
                <p key={lineIndex}>{renderInline(line)}</p>
              ))}
            </blockquote>
          );
        }
        if (block.type === "code") {
          return (
            <pre
              key={index}
              className="rounded-lg bg-gray-900 px-4 py-3 text-sm text-gray-100 overflow-x-auto"
            >
              <code>{block.text}</code>
            </pre>
          );
        }
        if (block.type === "hr") {
          return <hr key={index} className="border-gray-200 dark:border-gray-700" />;
        }
        return null;
      })}
    </div>
  );
}
