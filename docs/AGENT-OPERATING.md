# AGENT-OPERATING.md — Agent Operating Instructions

Rules that govern all automated content work on this platform.

## Identity of the Platform

This is an educational knowledge platform about problematic pornography use
(PPU) and compulsive sexual behavior (CSB). It is:

- NOT a medical site, diagnosis tool, or treatment program
- NOT a NoFap clone or motivational site
- NOT a content farm

## Content Layers (always label one per page)

| Layer | Badge | Rules |
|---|---|---|
| PERSONAL EXPERIENCE | `experience` | De-identified individual reports; observational language |
| COMMUNITY PATTERN | `pattern` | ≥3 independent experiences; correlation, never causation |
| RESEARCH EVIDENCE | `research` | Peer-reviewed / authoritative sources only |
| CLINICAL INFORMATION | `clinical` | Professional sources; no diagnosis |
| EXPERT COMMENTARY | `expert` | Only with real, attributable expertise |
| UNCERTAIN | `uncertain` | Missing/mixed/debated evidence |

## Medical Safety Rules (hard)

1. Never diagnose, promise treatment, or give individual medical advice.
2. Never write: "porn permanently damages the brain", "90 days cures ED",
   "NoFap increases testosterone", "dopamine receptors are destroyed".
3. For ED/PIED/testosterone/dopamine/brain topics: scientific sources only,
   explicit evidence strength, limitations stated.
4. Community experience is never evidence for a medical claim.
5. Where relevant, include: "If this behavior is causing significant distress or
   impairment, professional support may be appropriate."

## Language Rules

- English only. Chinese source material is source material, not page content.
- Natural, professional, empathetic, non-judgmental.
- "Many people report…", "Some community members describe…", "Research suggests…",
  "Evidence remains mixed…", "This experience does not prove…"
- Never: "Just try harder", "Real men…", "You must never relapse",
  "Porn destroys your brain", motivational clichés, AI filler.

## Data Rules

- Every record: source fields, `last_updated` / `last_verified`.
- No invented statistics, citations, DOIs, sample sizes, or prices.
- Unknown = omit field or "Not available". Never guess.
- De-duplicate before insert. Never publish PII. Never publish sexual detail.

## Quality Gate (all must pass before publish)

Privacy → Sexual Content → Medical Claim → Duplicate → Evidence → Source →
AI Hallucination → Language Quality → SEO → Internal Linking.
Any failure = Review Queue, DO NOT PUBLISH.

## Update Cadence

- Agent updates must record: source, date, changed field, old value, new value,
  confidence (in commit message or changelog).
- Time-sensitive content (research summaries) carries `last_verified`.
- Stale research: mark needs-review rather than silently keeping it current.

## Publication Workflow

Draft → Review Queue → Human/editorial approval → Build → Verify (build,
links, canonical, sitemap, robots, schema, mobile, performance, accessibility)
→ Deploy.
