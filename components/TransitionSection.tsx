import React from "react";

export default function TransitionSection() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400"> */}
          Normative specification
        </p>
        <div className="mt-5 h-px w-full bg-gray-200 dark:bg-gray-800" />
        <p className="mt-5 text-base text-gray-700 dark:text-gray-300">
          Below this point, SLRV.md is defined as a normative framework. This
          section is not explanatory and is intended for careful reading.
        </p>
      </div>
    </section>
  );
}
