# About the SLRV Framework

## What this is

SLRV (Semantic Laundering & Responsibility Vacuum) is a **diagnostic and normative framework** for AI-assisted systems that produce decisions, requirements, or recommendations.

It defines **hard admissibility boundaries** for:
- epistemic justification (what may count as evidence),
- responsibility attribution (who can own decisions).

SLRV is not a theory of truth. It is a framework for **preventing structurally invalid decisions** in agent-driven workflows.

---

## Why this exists

Modern AI systems fail in two predictable ways:

1. **Semantic Laundering (SL)**  
   Generated or interpreted content is silently upgraded into "facts" or "evidence" simply because it passed through a trusted interface (tool, expert, document, memory).

2. **Responsibility Vacuum (RV)**  
   Decisions are formally approved, but no actor simultaneously has authority over the decision and the capacity to understand it.

These failures are not bugs, hallucinations, or alignment issues. They are **structural outcomes of scale**.

SLRV exists to make these failures **detectable, explicit, and blockable**.

---

## What SLRV is (and is not)

SLRV is:

- a **normative agent contract**,
- source-agnostic (LLMs, humans, documents are treated uniformly),
- portable across repositories and organizations,
- designed to be copied verbatim into `AGENTS.md`.

SLRV is NOT:

- a best-practices guide,
- a checklist for humans,
- a safety or alignment policy,
- a replacement for human judgment,
- a guarantee of correctness.

SLRV defines **what an agent is allowed to treat as admissible** — nothing more.

---

## How SLRV is used

### 1. As an agent-level contract

SLRV is embedded verbatim into `AGENTS.md`.

Agents operating under this contract MUST:
- classify inputs by epistemic role,
- refuse warrant upgrades without observations,
- refuse responsibility attribution without capacity,
- explain refusals explicitly in SLRV terms.

Humans do not "configure" SLRV. They either adopt it or do not.

---

### 2. As a diagnostic lens

SLRV can be used to analyze existing systems by asking:

- Where does generated content become treated as evidence?
- Where does confidence increase without new observations?
- Where do approvals exist without understanding?
- Where does "the process" replace an accountable actor?

If the answer is "everywhere", SLRV is working as intended.

---

### 3. As an enforcement boundary

SLRV does not optimize workflows. It **blocks invalid ones**.

When an instruction, role, or task violates SLRV:
- the agent must refuse,
- the agent must explain which condition failed,
- the agent may downgrade output to hypotheses only.

This is not optional behavior. It is compliance with the contract.

---

## Relationship to this repository

This repository uses SLRV to:

- prevent implicit requirement invention,
- prevent silent acceptance or approval,
- prevent default values from masquerading as facts,
- prevent agent fluency from replacing human grounding.

SLRV constrains what the agent may *claim*, not what humans may *decide*.

---

## Design principle

> **If a system requires trust to function, SLRV will break it.**

That is intentional.

SLRV favors:
- explicit confirmation over inference,
- observable grounding over plausibility,
- explicit ownership over procedural approval.

---

## Status

SLRV is intentionally minimal and closed.

If you feel the need to "extend" it, you are likely trying to bypass one of its constraints.

That is the signal it is meant to produce.