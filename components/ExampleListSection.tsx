import React from "react";

export type ReferenceItem = {
  title: string;
  description: string;
  href: string;
};

interface ExampleListSectionProps {
  items: ReferenceItem[];
}

export default function ExampleListSection({ items }: ExampleListSectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col gap-2 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="font-semibold text-lg leading-snug">{item.title}</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  );
}
