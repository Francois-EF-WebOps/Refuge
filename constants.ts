
import { ContentCategory } from './types';

export const HYPOTHESIS_DATA: ContentCategory[] = [
  {
    id: 'root',
    name: 'Repository Root',
    files: [
      {
        path: 'README.md',
        name: 'README',
        content: `# Mascarene Refuge Hypothesis — Stage 01 (S01)\n\n## Abstract\nThis repository documents Stage 01 of the Mascarene Refuge Hypothesis: a systems-level proposition that the Mascarene region may function as a viable ecological–human refuge under conditions of global systemic stress. The hypothesis integrates ecological refuge theory with constraints from energy availability, financial continuity, human adaptation, and AI-assisted modeling. Stage 01 defines scope, assumptions, and falsifiability. It does not present proof, deployment plans, or policy prescriptions.\n\n## Why this exists\nModern systems prioritize efficiency over resilience. This work explores whether specific geographic regions—under realistic constraints—can sustain long-term human and ecological continuity without reliance on fragile global dependencies.\n\n## What S01 covers\n- Core hypothesis and assumptions\n- Ecological, energy, financial, human, and AI system layers\n- AI-assisted orchestration for analysis and stress-testing\n- Explicit falsifiability criteria\n\n## What S01 does NOT claim\n- No confirmation or proof\n- No implementation blueprint\n- No claims of exclusivity or inevitability`
      },
      {
        path: 'CHANGELOG.md',
        name: 'CHANGELOG',
        content: `## [S01] – Initial Public Hypothesis\n- Defined system scope and limits\n- Documented core hypothesis and assumptions\n- Integrated AI-assisted modeling framework\n- Established falsifiability and validation paths`
      }
    ]
  },
  {
    id: 'context',
    name: '00 Context',
    files: [
      {
        path: '00_context/problem_statement.md',
        name: 'Problem Statement',
        content: `Global human systems depend on tightly coupled supply chains, centralized energy production, and abstract financial instruments. These dependencies increase fragility under environmental, geopolitical, and climatic stress.\n\nThis project asks whether certain regions possess structural characteristics that allow partial decoupling while maintaining ecological and human viability.`
      },
      {
        path: '00_context/scope_and_limits.md',
        name: 'Scope and Limits',
        content: `This hypothesis is limited to conceptual modeling and comparative analysis.\n\nExcluded:\n- Political advocacy\n- Emergency response planning\n- Speculative or unverified technologies\n\nTemporal scope is generational (20–100 years), not immediate crisis response.`
      },
      {
        path: '00_context/terminology.md',
        name: 'Terminology',
        content: `Refuge: A region capable of sustaining continuity under stress.\n\nContinuity: Persistence of ecological and human systems above minimum viability thresholds.\n\nConstraint-first modeling: Designing systems from limits rather than abundance assumptions.`
      }
    ]
  },
  {
    id: 'hypothesis',
    name: '01 Hypothesis',
    files: [
      {
        path: '01_hypothesis/core_hypothesis.md',
        name: 'Core Hypothesis',
        content: `The Mascarene region possesses a combination of ecological stability, geographic isolation, and manageable scale that may allow it to function as a partial refuge for human and non-human systems under global stress conditions, provided strict constraints on energy, finance, and population dynamics are respected.`
      },
      {
        path: '01_hypothesis/assumptions.md',
        name: 'Assumptions',
        content: `- Climate volatility increases globally\n- Global trade reliability decreases\n- Technological complexity becomes harder to maintain\n- Local adaptation becomes more valuable than global optimization`
      },
      {
        path: '01_hypothesis/falsifiability.md',
        name: 'Falsifiability',
        content: `This hypothesis is false if:\n- Ecological productivity collapses under modeled stress\n- Minimum energy needs cannot be met without external dependency\n- Financial isolation leads to rapid systemic failure\n- Comparable regions consistently outperform the Mascarene region`
      }
    ]
  },
  {
    id: 'layers',
    name: '02 System Layers',
    files: [
      {
        path: '02_system_layers/ecological_layer.md',
        name: 'Ecological Layer',
        content: `Evaluates biodiversity, soil resilience, freshwater availability, and marine productivity. Emphasis is placed on regenerative capacity rather than peak yield.`
      },
      {
        path: '02_system_layers/energy_layer.md',
        name: 'Energy Layer',
        content: `Energy is treated strictly as a limiting factor.\n\nOnly systems that are:\n- Local\n- Distributed\n- Low-complexity\n- Repairable\n\nare considered. No surplus or "free energy" assumptions are permitted.`
      },
      {
        path: '02_system_layers/financial_layer.md',
        name: 'Financial Layer',
        content: `Focuses on minimal viable economic loops, local exchange mechanisms, and reduced exposure to global financial shocks. Growth-driven or speculative models are excluded.`
      },
      {
        path: '02_system_layers/human_layer.md',
        name: 'Human Layer',
        content: `Human viability includes population scale, skill diversity, cultural adaptability, governance capacity, and social cohesion. Psychological resilience is treated as a core resource.`
      },
      {
        path: '02_system_layers/ai_layer.md',
        name: 'AI Layer',
        content: `AI is used exclusively for modeling, synthesis, and stress-testing. It does not make normative decisions or override human judgment.`
      }
    ]
  },
  {
    id: 'ai',
    name: '03 AI Orchestration',
    files: [
      {
        path: '03_ai_orchestration/agent_archetypes.md',
        name: 'Agent Archetypes',
        content: `- Ecologist Agent: evaluates environmental constraints\n- Systems Engineer Agent: models infrastructure viability\n- Economics Agent: tests financial continuity\n- Historian Agent: compares historical refuges\n- Auditor Agent: identifies bias and failure modes`
      },
      {
        path: '03_ai_orchestration/orchestration_prompt.md',
        name: 'Orchestration Prompt',
        content: `You are an AI system assisting in Stage 01 hypothesis evaluation.\n\nRules:\n- Respect all stated constraints\n- Surface weaknesses before strengths\n- Separate data, inference, and uncertainty\n- Avoid speculative or unverified claims\n- Do not propose implementation\n- Do not optimize for optimism`
      },
      {
        path: '03_ai_orchestration/evaluation_metrics.md',
        name: 'Evaluation Metrics',
        content: `- Ecological load tolerance\n- Energy self-sufficiency ratio\n- Financial isolation survivability\n- Human cohesion stress indicators`
      }
    ]
  },
  {
    id: 'validation',
    name: '04 Validation',
    files: [
      {
        path: '04_validation/data_sources.md',
        name: 'Data Sources',
        content: `Potential sources include climate records, ecological surveys, trade data, and historical case studies. No proprietary data is required at Stage 01.`
      },
      {
        path: '04_validation/experiments_stage01.md',
        name: 'Experiments Stage 01',
        content: `Stage 01 experiments are limited to conceptual simulations and comparative analysis. No field interventions are performed.`
      },
      {
        path: '04_validation/failure_modes.md',
        name: 'Failure Modes',
        content: `Primary failure modes include ecological overshoot, energy dependency re-emergence, financial isolation collapse, and governance breakdown.`
      }
    ]
  }
];
