import React from "react";
import Section from "@/components/Section";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import UserIcon from "@/components/icons/UserIcon";
import LinkIcon from "@/components/icons/LinkIcon";

export default function FAQ() {
  return (
    <Section
      id="why-slrv"
      title="Why SLRV.md?"
      className="pt-24 pb-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-4">
        <p className="mb-">
          AI-assisted systems fail in two structural ways.
        </p>
        <p className="mb-4">
          First, generated content is routinely treated as evidence despite the
          absence of new observations.
        </p>
        <p className="mb-4">
          Second, decisions are approved without any actor simultaneously
          having both the authority to approve them and the capacity to
          understand them.
        </p>
        <p className="mb-4">
          SLRV.md exists to make these failure modes explicit and blockable.
        </p>
        <p className="mb-4">
          It is a declarative agent-level contract that defines hard
          admissibility boundaries around evidence and responsibility, so
          decisions cannot drift away from observable grounding.
        </p>
        <p className="mb-4">We use SLRV.md to:</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ClipboardIcon />
            <p>
              <span className="font-semibold block">
                Prevent generated outputs from being treated as observations.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <UserIcon />
            <p>
              <span className="font-semibold block">
                Require that responsibility is assigned only where approval and
                understanding coexist.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <LinkIcon />
            <p>
              <span className="font-semibold block">
                Expose and block workflows that rely on proxy signals instead
                of grounding.
              </span>
            </p>
          </div>
        </div>
        <p>
          If a system depends on trust-by-proxy, SLRV.md will surface that
          dependency. That is the intended effect.
        </p>
      </div>
    </Section>
  );
}
