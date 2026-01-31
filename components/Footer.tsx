import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-center text-sm text-gray-600 dark:text-gray-400 mt-24 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800">
      <p className="mt-4">
        AGENTS.md is an OpenAI project licensed under MIT. SLRV.md is a derivative, normative framework.
      </p>
      <p className="mt-4">
        Source:{" "}
        <a
          href="https://github.com/olegische/SLRV.md"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          https://github.com/olegische/SLRV.md
        </a>
      </p>
    </footer>
  );
}
