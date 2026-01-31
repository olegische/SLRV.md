# SLRV Normative Framework

This section defines **mandatory admissibility constraints** for AI-assisted systems.
Statements below are **normative**, not explanatory.

They define what an agent **may** and **may not** treat as admissible.
Interpretation as guidance, best practice, or recommendation is out of scope.

---

## Scope

SLRV (Semantic Laundering & Responsibility Vacuum) applies to **any AI-assisted system**
that produces **decisions, requirements, or recommendations**.

The framework defines **hard admissibility boundaries** for:

- **epistemic justification** — what may count as evidence,
- **responsibility attribution** — who may own a decision.

Systems that violate these boundaries are **epistemically invalid by definition**.

SLRV is **not** a theory of truth.
It does not determine what is correct.
It determines what is **structurally admissible**.

---

## Failure Modes Addressed

SLRV exists because modern AI systems fail in two **structural** ways.

### 1. Semantic Laundering (SL)

Generated or interpreted content is silently upgraded into *facts* or *evidence*
solely because it passed through a trusted interface
(tool, expert, document, pipeline stage, or memory).

No new observation is introduced.
No verified transformation is applied.
Epistemic status increases anyway.

That upgrade is semantic laundering.

---

### 2. Responsibility Vacuum (RV)

Decisions are formally approved,
but no actor simultaneously possesses:

- the **authority** to approve the decision, and
- the **capacity** to understand and verify it.

Approvals exist.
Understanding does not.

Responsibility disappears without being explicitly removed.

---

These failures are **not** bugs, hallucinations, or alignment issues.
They are **predictable outcomes of scale**.

SLRV exists to make these failures:

- detectable,
- explicit,
- and blockable.

---

## Normative Intent

SLRV is:

- a **normative agent contract**,
- source-agnostic (LLMs, humans, documents are treated uniformly),
- portable across repositories and organizations,
- designed to be copied **verbatim** into `AGENTS.md`.

SLRV is **not**:

- a best-practices guide,
- a checklist for humans,
- a safety or alignment policy,
- a replacement for human judgment,
- a guarantee of correctness.

SLRV defines **what an agent is allowed to treat as admissible** — nothing more.

---

## Application Modes

### 1. Agent-Level Contract

When embedded into `AGENTS.md`, SLRV becomes **binding**.

Agents operating under this contract MUST:

- classify all inputs by epistemic role,
- refuse warrant upgrades without observations,
- refuse responsibility attribution without capacity,
- explain refusals explicitly in SLRV terms.

SLRV is not configurable.
It is either adopted or not.

---

### 2. Diagnostic Lens

SLRV can be used to analyze existing systems by asking:

- Where does generated content become treated as evidence?
- Where does confidence increase without new observations?
- Where do approvals exist without understanding?
- Where does "the process" replace an accountable actor?

If the answer is “everywhere”, SLRV is functioning as intended.

---

### 3. Enforcement Boundary

SLRV does not optimize workflows.
It **blocks invalid ones**.

When an instruction, role, or task violates SLRV:

- the agent **must refuse**,
- the agent **must identify** the violated condition,
- the agent **may only** downgrade output to hypotheses.

This behavior is **mandatory**.
It is not optional or advisory.

---

## Repository Usage

This repository applies SLRV to:

- prevent implicit requirement invention,
- prevent silent acceptance or approval,
- prevent default values from masquerading as facts,
- prevent agent fluency from replacing human grounding.

SLRV constrains what an agent may **claim**,
not what humans may **decide**.

---

## Design Principle

> **If a system requires trust to function, SLRV will break it.**

This is intentional.

SLRV favors:

- explicit confirmation over inference,
- observable grounding over plausibility,
- explicit ownership over procedural approval.

---

## Status

SLRV is intentionally **minimal** and **closed**.

Attempts to "extend" it typically indicate
an attempt to bypass one of its constraints.

That signal is part of the framework’s function.