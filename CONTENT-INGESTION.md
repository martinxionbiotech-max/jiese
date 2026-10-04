# CONTENT-INGESTION.md — Community Experience Extraction Pipeline

How to feed raw community material (e.g., public Jiese Ba posts) into this platform.

## Pipeline Overview

```
Raw Community Experience
        ↓
1. Topic Recognition (is this recovery-related?)
        ↓
2. Content Filtering (drop meaningless/irrelevant)
        ↓
3. Privacy Filtering (remove all PII)
        ↓
4. Sensitive Content Redaction (reduce sexual detail)
        ↓
5. Structured Extraction (experience/trigger/strategy/outcome/stage)
        ↓
6. Question Extraction
        ↓
7. De-duplication Check
        ↓
8. Database Insert (Experience Record)
        ↓
9. Pattern Update (does this shift a Community Pattern?)
        ↓
10. Trigger Database Update
        ↓
11. Question Database Update
        ↓
12. Evidence Matching (find related research)
        ↓
13. Editorial Review Queue
        ↓
14. English Publication
        ↓
15. Internal Linking
        ↓
Knowledge Graph
```

## Input Formats Accepted

- Public community posts (Baidu Tieba / Jiese Ba, or any legally accessible public community material)
- Manually provided text files
- Structured notes from researchers

Place raw material in `pipeline/inbox/` (one file per item). Never commit raw
material to the public repo — the inbox is gitignored. Raw material is
**source material only** and is never published.

## Hard Rules (violation = reject, no exceptions)

1. **No PII.** Strip usernames, UIDs, avatars, phone numbers, WeChat/QQ IDs,
   emails, geolocations, and anything that can identify a person.
2. **No verbatim copying.** Long posts are condensed into structured records.
   Short quotes (≤1 sentence) may be kept only if fully de-identified.
3. **No sexual detail.** Reduce sexual content to the minimum needed to
   understand the experience ("sexual content" → removed; "used porn at night"
   → kept).
4. **No medical claims.** If a post claims a treatment effect, keep the claim as
   "reported" — never as fact.
5. **Always label.** Every record carries `content_type: experience` and the
   PERSONAL EXPERIENCE badge. Never merge experiences into "we" statements.

## Extraction Fields (see Experience Schema)

Fill from the source; leave unknown fields absent. `evidence_status` is always
`experience` at ingestion. `privacy_status` is `deidentified` after processing
(use `synthetic` only for demonstration records that are not derived from a
real source).

## De-duplication

Before inserting, compare against existing records on: reported_problem +
trigger + strategy + outcome similarity. If ≥80% similar to an existing record,
skip (or merge as a supporting count if the data model later adds counts).

## Pattern Update Rules

- A Pattern may be created only when **at least 3 independent experiences**
  report the same observation.
- A Pattern page is **never** created from a single post.
- Pattern language stays observational: "appears repeatedly in reports" —
  never "causes".

## Evidence Matching

After extraction, search for related research (Tier 1–4, see
`docs/EVIDENCE-TIERS.md`). If no direct research exists, mark
`Evidence unavailable / uncertain` — do not stretch a study to fit.

## Editorial Review Queue

Nothing is auto-published. Each record needs:
- [ ] Privacy Check passed
- [ ] Sexual Content Check passed
- [ ] Medical Claim Check passed
- [ ] Duplicate Check passed
- [ ] Evidence Check (labeled correctly)
- [ ] Source Check (source fields filled)
- [ ] AI Hallucination Check (no invented specifics)
- [ ] Language Quality Check (natural English)
- [ ] SEO Check (unique title/description)
- [ ] Internal Linking Check (≥3 related links)

## Running an Ingestion

1. Put raw files in `pipeline/inbox/`.
2. For each file, produce an extraction note in `pipeline/notes/`.
3. Write the structured record into `apps/main/src/content/experiences/`.
4. Update trigger/strategy/question/pattern files if the thresholds are met.
5. Rebuild: `npm run build` in `apps/main`.
6. Review the record page locally before pushing.

## Agent Operating Instructions

See `docs/AGENT-OPERATING.md` for the complete agent workflow, quality gates,
and medical-safety rules that govern all automated updates.
