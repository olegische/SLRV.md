# Semantic Laundering

## What it is

**Semantic laundering** is an architectural failure mode in AI agent systems where **generated or injected propositions acquire the status of facts or observations purely by crossing a trusted system boundary** — a tool call, an "expert" agent, an evaluator, a pipeline stage, or memory.

In plain terms:
> the system starts *believing the model* because its output came "from a tool",
> not because it was grounded in observations.

This is not a model bug.
This is not hallucination.
This is an architectural error.

Semantic laundering is source-agnostic. It applies equally to LLM outputs, human expert opinions, articles, reports, standards, and any other injected propositions. Expert inputs are admissible as hypotheses or context, but become laundering when they are treated as observations or evidence without new grounding. When this occurs, systems substitute understanding with proxy signals, eroding human verification capacity and enabling responsibility vacuum at scale.

---

## The core mistake

Most agent frameworks implement the same pattern:

```
tool output → observation → basis for next decision
```

The fatal assumption is that **all tools are epistemically equivalent**.

In reality, tools fall into different epistemic categories:

1. **Observers**  
   Return external world state (database queries, APIs, sensors)

2. **Computations**  
   Deterministically transform existing observations (sorting, aggregation, verified algorithms)

3. **Generators**  
   Produce propositions or judgments (LLMs, "expert" agents, evaluators)

Modern agent runtimes usually treat **all three as observations**.

That is the bug.

---

## What laundering looks like

Typical example:

```
Agent: "Should we do X?"
↓
Expert input: "Yes, X is risky but necessary"
↓
System: treat tool output as observation
↓
Agent: "We should do X"
```

What actually happened:

- No new external observation was introduced
- No verified rule was applied
- A hypothesis was recycled as evidence

The **tool boundary upgraded epistemic status without justification**.

That upgrade is semantic laundering.

---

## Why model quality does not help

Better models:
- reason more clearly
- sound more confident
- produce more coherent explanations

But they **do not create observations**.

If the observation set did not change, **epistemic warrant did not increase**. Improving generation quality does not fix laundering, because the problem is not generation — it is **type confusion**.

---

## Why LLM-as-judge makes it worse

In LLM-as-judge setups:

```
Model A generates a claim
Model B evaluates the claim
System treats evaluation as evidence
```

But both outputs live in the same proposition space. One hypothesis is used to validate another.

This is **circular justification by construction**. No amount of calibration fixes it.

---

## What semantic laundering breaks

Architectures that allow semantic laundering cannot reliably provide:

- non-circular justification
- traceability from decisions to observations
- auditability of reasoning
- defensible safety or compliance claims

When asked *"why did the system decide this?"*, the chain terminates at:
> “because the tool said so”

That is not evidence.

---

## What this is *not*

Semantic laundering is **not**:

- hallucination
- prompt injection
- reward hacking
- model misalignment

Those are component-level failures.

Semantic laundering is a **system-level epistemic failure**.

---

## Architectural takeaway

A tool call is **causal by default**, not epistemic.

Crossing an interface does **not** increase warrant unless the architecture explicitly says it does.

If your system:
- treats LLM outputs as observations
- treats evaluators as evidence
- upgrades confidence based on channel, not content

then it performs semantic laundering — regardless of model quality.

Semantic laundering is not a fundamental limit of knowledge. It is a consequence of specific architectural choices.

The failure is unavoidable in systems that conflate generation and observation, but it is preventable in architectures that explicitly track epistemic roles and prohibit warrant upgrades without new observations.

---

## Minimal rule

> **Channel ≠ warrant**

Epistemic status must come from:
- observations
- verified transformations of observations

Never from generation alone.

If your architecture does not enforce this distinction, semantic laundering is inevitable.
