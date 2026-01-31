# SLRV.md

**SLRV.md** defines a **normative framework** for preventing epistemically invalid
and unowned decisions in AI-assisted systems.

The framework introduces **mandatory admissibility constraints** for how agents
may treat evidence and responsibility when producing decisions, requirements,
or recommendations.

SLRV.md is **not explanatory**.  
It is **normative** and **binding at the agent level**.

---

## What this repository contains

This repository contains:

- the canonical **SLRV declaration** intended to be copied verbatim into `AGENTS.md`,
- supporting documentation explaining the failure modes SLRV addresses,
- a minimal website at https://slrv.md that publishes the specification in a readable form.

This repository does **not** contain:
- implementation code,
- SDKs,
- configuration tooling,
- best-practices guides.

SLRV.md defines **constraints**, not solutions.

---

## How SLRV.md is used

### 1. As an agent-level contract

SLRV is designed to be embedded **verbatim** into a project’s `AGENTS.md`.

When adopted, SLRV constrains what an agent may treat as admissible by requiring it to:

- classify inputs by epistemic role,
- refuse warrant upgrades without new observations,
- refuse responsibility attribution without capacity,
- explain refusals explicitly in SLRV terms.

SLRV is not configurable.
It is either adopted or not.

---

### 2. As a diagnostic framework

SLRV can be applied to existing systems to identify structural failures by asking:

- Where does generated content become treated as evidence?
- Where does confidence increase without new observations?
- Where do approvals exist without understanding?
- Where does “the process” replace an accountable actor?

If the answer is “everywhere”, SLRV is functioning as intended.

---

## Relationship to AGENTS.md

SLRV.md is designed to operate **in conjunction with** `AGENTS.md`.

- `AGENTS.md` defines **procedural and operational instructions** for agents.
- `SLRV.md` defines **epistemic and responsibility constraints** on what agents
  may claim or act upon.

Together, they separate:
- *how agents operate*  
from
- *what agents are allowed to treat as admissible*.

---

## Failure modes addressed

SLRV formalizes two structural failure modes in AI-assisted systems:

- **Semantic Laundering (SL)**  
  When generated or injected propositions are silently upgraded into facts or evidence
  solely by crossing a trusted interface.

- **Responsibility Vacuum (RV)**  
  When decisions are approved, but no actor simultaneously has the authority to approve
  them and the capacity to understand them.

These are not bugs or alignment issues.
They are predictable outcomes of scale.

---

## Design principle

> **If a system requires trust to function, SLRV will break it.**

This is intentional.

SLRV favors:
- observable grounding over plausibility,
- explicit confirmation over inference,
- explicit ownership over procedural approval.

---

## Website

This repository includes a small Next.js site hosted at https://slrv.md
that publishes the SLRV specification and related material in a readable format.

The website is informational only.
The authoritative artifact is the **SLRV declaration itself**.

---

## Provenance

Portions of the UI and copy-to-clipboard behavior are adapted from the
`agents.md` project under the MIT License.

Upstream reference:
- Repository: https://github.com/agentsmd/agents.md
- Commit: efab70c4420be0472c6795a02be0bcf4d5ea0b2b
- Files: `components/CodeExample.tsx`, `components/icons/CopyIcon.tsx`

---

## Running the site locally

1. Install dependencies:
   ```bash
   pnpm install
   ```
2.	Start the development server:
   ```bash
   pnpm run dev
   ```
3.	Open your browser and go to:
   ```bash
   http://localhost:3000
   ```
