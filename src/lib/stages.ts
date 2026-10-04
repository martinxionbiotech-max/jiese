// Recovery stages as reported by community members.
// IMPORTANT: observational language only — no timeline promises.
export interface Stage {
  id: string;
  label: string;
  title: string;
  reported: string[];
  note: string;
}
export const STAGES: Stage[] = [
  { id: "day-1", label: "Day 1", title: "Day 1: Starting",
    reported: [
      "Some community members report a strong initial commitment and relief after deciding to stop.",
      "Some describe urges arriving within the first day, often tied to familiar situations.",
    ],
    note: "Starting points differ. Day 1 is a decision point, not a prediction of what follows." },
  { id: "day-3", label: "Day 3", title: "Day 3: Early urges",
    reported: [
      "Several community members describe the first few days as the hardest part of their attempts.",
      "Some report using distraction and environment changes during early urges.",
    ],
    note: "No specific change is guaranteed on any day." },
  { id: "day-7", label: "Day 7", title: "Day 7: First week",
    reported: [
      "Some community members report a sense of achievement after the first week.",
      "Several describe urges that came in waves rather than continuously.",
    ],
    note: "Reports vary widely between individuals." },
  { id: "day-14", label: "Day 14", title: "Day 14: Two weeks",
    reported: [
      "Some report that recognizing their personal triggers became easier around this point.",
      "Several describe a reduction in how often urges interrupted their day.",
    ],
    note: "These are community observations, not measured outcomes." },
  { id: "day-21", label: "Day 21", title: "Day 21: Three weeks",
    reported: [
      "Some community members describe new habits starting to feel more natural.",
      "Others report that urges returned in specific high-risk situations.",
    ],
    note: "Setbacks at any stage are commonly described and are not failure." },
  { id: "day-30", label: "Day 30", title: "Day 30: One month",
    reported: [
      "Several community members describe the one-month mark as meaningful for confidence.",
      "Some report that sleep and mood improved; others report no noticeable change.",
    ],
    note: "No fixed timeline applies; experiences differ." },
  { id: "day-45", label: "Day 45", title: "Day 45: Six weeks",
    reported: [
      "Some report urges becoming less frequent but still present.",
      "Several describe keeping structured schedules as helpful at this stage.",
    ],
    note: "Presence or absence of urges is not a measure of worth or progress for everyone." },
  { id: "day-60", label: "Day 60", title: "Day 60: Two months",
    reported: [
      "Some community members describe feeling more control over their responses to triggers.",
      "Others report a period where urges temporarily increased.",
    ],
    note: "Non-linear patterns are common in community reports." },
  { id: "day-90", label: "Day 90", title: "Day 90: Three months",
    reported: [
      "Several community members describe three months as a commonly discussed milestone.",
      "Some report meaningful changes in their relationship with urges; others report relapse around this point.",
    ],
    note: "This platform does not endorse any '90-day cure' claim. There is no evidence that a fixed number of days produces a specific outcome." },
  { id: "6-months", label: "6 Months", title: "6 Months: Longer-term",
    reported: [
      "Some longer-term reports describe recovery as an ongoing practice rather than a finished state.",
      "Several describe confidence growing with sustained practice.",
    ],
    note: "Long-term reports are fewer and self-selected; they do not represent all outcomes." },
  { id: "1-year", label: "1 Year", title: "1 Year and beyond",
    reported: [
      "Some one-year reports describe significantly reduced distress around pornography use.",
      "Several emphasize that occasional urges can still occur and are managed rather than eliminated.",
    ],
    note: "Community long-term reports are anecdotal and cannot be generalized." },
];
