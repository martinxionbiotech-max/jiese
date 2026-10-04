import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Experience Record — 核心数据资产
const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: z.object({
    experience_id: z.string(),
    title: z.string(),
    content_type: z.literal('experience'),
    recovery_stage: z.string().optional(),
    duration: z.string().optional(),
    goal: z.string().optional(),
    reported_problem: z.string().optional(),
    triggers: z.array(z.string()).default([]),
    strategies: z.array(z.string()).default([]),
    outcome: z.string().optional(),
    relapse: z.boolean().default(false),
    reported_changes: z.array(z.string()).default([]),
    lessons: z.array(z.string()).default([]),
    uncertainties: z.array(z.string()).default([]),
    evidence_status: z.enum(['experience', 'pattern', 'research', 'clinical', 'uncertain']).default('experience'),
    privacy_status: z.enum(['deidentified', 'synthetic']).default('deidentified'),
    quality_score: z.number().min(1).max(5).default(3),
    confidence_level: z.enum(['high', 'medium', 'low']).default('medium'),
    related_questions: z.array(z.string()).default([]),
    related_research: z.array(z.string()).default([]),
    related_patterns: z.array(z.string()).default([]),
    last_updated: z.string(),
  }),
});

// Triggers
const triggers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/triggers' }),
  schema: z.object({
    trigger_id: z.string(),
    title: z.string(),
    content_type: z.literal('trigger'),
    description: z.string(),
    community_reports: z.number().default(0),
    contexts: z.array(z.string()).default([]),
    coping_strategies: z.array(z.string()).default([]),
    evidence_status: z.string().default('uncertain'),
    related_questions: z.array(z.string()).default([]),
    last_updated: z.string(),
  }),
});

// Questions
const questions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions' }),
  schema: z.object({
    question_id: z.string(),
    title: z.string(),
    content_type: z.literal('question'),
    short_answer: z.string(),
    community_experience: z.string().optional(),
    evidence: z.string().optional(),
    what_we_dont_know: z.string().optional(),
    practical_options: z.array(z.string()).default([]),
    when_to_seek_help: z.string().optional(),
    related_experiences: z.array(z.string()).default([]),
    related_research: z.array(z.string()).default([]),
    last_updated: z.string(),
  }),
});

// Patterns
const patterns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/patterns' }),
  schema: z.object({
    pattern_id: z.string(),
    title: z.string(),
    content_type: z.literal('pattern'),
    observed_pattern: z.string(),
    supporting_experiences: z.array(z.string()).default([]),
    possible_explanations: z.array(z.string()).default([]),
    scientific_evidence: z.string().optional(),
    contradictory_evidence: z.string().optional(),
    uncertainty: z.string().optional(),
    practical_strategies: z.array(z.string()).default([]),
    related_questions: z.array(z.string()).default([]),
    last_updated: z.string(),
  }),
});

// Strategies
const strategies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/strategies' }),
  schema: z.object({
    strategy_id: z.string(),
    title: z.string(),
    content_type: z.literal('strategy'),
    type: z.enum(['community-reported', 'evidence-supported', 'mixed']).default('community-reported'),
    description: z.string(),
    how_people_use_it: z.array(z.string()).default([]),
    evidence: z.string().optional(),
    limitations: z.string().optional(),
    related_triggers: z.array(z.string()).default([]),
    last_updated: z.string(),
  }),
});

export const collections = { experiences, triggers, questions, patterns, strategies };
