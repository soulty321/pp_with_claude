import project1Cover from "../assets/img/project1_cover.png";
import project6Cover from "../assets/img/project6_cover.svg";
import project7Cover from "../assets/img/project7_cover.svg";
import project2Cover from "../assets/img/project2_cover.png";
import project3Cover from "../assets/img/project3_cover.png";
import project4Cover from "../assets/img/project4_cover.png";
import project5Cover from "../assets/img/project5_cover.png";


export const projectData = [
    {
      id: "project-1",
      // Page 1: Overview
      overview: {
        headline: "myKeyword_project_HEADLINE",
        summary: "myKeyword_project_SUMMARY",
        keyMetrics: ["myKeyword_project_KEY_METRIC_1", "myKeyword_project_KEY_METRIC_2", "myKeyword_project_KEY_METRIC_3"],
        role: "myKeyword_project_ROLE",
        contribution: "myKeyword_project_CONTRIBUTION",
        period: "myKeyword_project_PERIOD",
        team: "myKeyword_project_TEAM",
        coverImage: project1Cover,
        tags: ["myKeyword_project_TAG_1", "myKeyword_project_TAG_2", "myKeyword_project_TAG_3"]
      },
      // Page 2: Problem Definition
      problem: {
        title: "myKeyword_project_PROBLEM_TITLE",
        background: "myKeyword_project_PROBLEM_BACKGROUND",
        quantitative: "myKeyword_project_PROBLEM_QUANT",
        qualitative: "myKeyword_project_PROBLEM_QUAL",
        image: "/stitch_source/myKeyword_projectProblem.svg"
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "myKeyword_project_STRATEGY_TITLE",
        description: "myKeyword_project_STRATEGY_DESC",
        cause: "myKeyword_project_STRATEGY_CAUSE",
        causeDesc: "myKeyword_project_STRATEGY_CAUSE_DESC",
        hypothesis: "myKeyword_project_STRATEGY_HYPO",
        image: "/stitch_source/myKeyword_projectStrategy.svg"
      },
      // Page 4: Solution A (Core Feature)
      solutionA: {
        title: "myKeyword_project_SOL_A_TITLE",
        summary: "myKeyword_project_SOL_A_SUMMARY",
        description: [
          { title: "myKeyword_project_SOL_A_DESC_1_TITLE", desc: "myKeyword_project_SOL_A_DESC_1_DESC" },
          { title: "myKeyword_project_SOL_A_DESC_2_TITLE", desc: "myKeyword_project_SOL_A_DESC_2_DESC" }
        ],
        image: "/stitch_source/myKeyword_projectSolutionA.svg"
      },
      // Page 5: Solution B (Detail & Deep Dive)
      solutionB: {
        title: "myKeyword_project_SOL_B_TITLE",
        summary: "myKeyword_project_SOL_B_SUMMARY",
        description: [
            { title: "myKeyword_project_SOL_B_DESC_1_TITLE", desc: "myKeyword_project_SOL_B_DESC_1_DESC" },
            { title: "myKeyword_project_SOL_B_DESC_2_TITLE", desc: "myKeyword_project_SOL_B_DESC_2_DESC" },
            { title: "myKeyword_project_SOL_B_DESC_3_TITLE", desc: "myKeyword_project_SOL_B_DESC_3_DESC" }
        ],
        image: "/stitch_source/myKeyword_projectSolutionB.svg",
        asIs: {
            image: "project1_asis.png",
            desc: "myKeyword_project_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project1_tobe.png",
            desc: "myKeyword_project_SOL_B_TOBE_DESC"
        }
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: [
            { title: "myKeyword_project_IMPACT_OUTCOME_1_TITLE", desc: "myKeyword_project_IMPACT_OUTCOME_1_DESC", image: "/stitch_source/myKeyword_projectImpact1.svg" },
            { title: "myKeyword_project_IMPACT_OUTCOME_2_TITLE", desc: "myKeyword_project_IMPACT_OUTCOME_2_DESC", image: "/stitch_source/myKeyword_projectImpact2.svg" },
            { title: "myKeyword_project_IMPACT_OUTCOME_3_TITLE", desc: "myKeyword_project_IMPACT_OUTCOME_3_DESC", image: "/stitch_source/myKeyword_projectImpact3.svg" }
        ],
        lesson: "myKeyword_project_IMPACT_LESSON"
      },
      isdangen_projectProject: false
    },
    {
      id: "project-2",
      // Page 1: Overview
      overview: {
        headline: "myKeywordFilter_project_HEADLINE",
        summary: "myKeywordFilter_project_SUMMARY",
        keyMetrics: ["myKeywordFilter_project_KEY_METRIC_1", "myKeywordFilter_project_KEY_METRIC_2", "myKeywordFilter_project_KEY_METRIC_3"],
        role: "myKeywordFilter_project_ROLE",
        contribution: "myKeywordFilter_project_CONTRIBUTION",
        period: "myKeywordFilter_project_PERIOD",
        team: "myKeywordFilter_project_TEAM",
        coverImage: project2Cover,
        tags: ["myKeywordFilter_project_TAG_1", "myKeywordFilter_project_TAG_2", "myKeywordFilter_project_TAG_3"]
      },
      // Page 2: Problem Definition
      problem: {
        title: "myKeywordFilter_project_PROBLEM_TITLE",
        background: "myKeywordFilter_project_PROBLEM_BACKGROUND",
        quantitative: "myKeywordFilter_project_PROBLEM_QUANT",
        qualitative: "myKeywordFilter_project_PROBLEM_QUAL",
        image: "/stitch_source/myKeywordFilter_projectProblem.svg"
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "myKeywordFilter_project_STRATEGY_TITLE",
        description: "myKeywordFilter_project_STRATEGY_DESC",
        cause: "myKeywordFilter_project_STRATEGY_CAUSE",
        causeDesc: "myKeywordFilter_project_STRATEGY_CAUSE_DESC",
        hypothesis: "myKeywordFilter_project_STRATEGY_HYPO",
        image: "/stitch_source/myKeywordFilter_projectStrategy.svg"
      },
      // Page 4: Solution A (Core Feature)
      solutionA: {
        title: "myKeywordFilter_project_SOL_A_TITLE",
        summary: "myKeywordFilter_project_SOL_A_SUMMARY",
        description: [
          { title: "myKeywordFilter_project_SOL_A_DESC_1_TITLE", desc: "myKeywordFilter_project_SOL_A_DESC_1_DESC" },
          { title: "myKeywordFilter_project_SOL_A_DESC_2_TITLE", desc: "myKeywordFilter_project_SOL_A_DESC_2_DESC" }
        ],
        image: "/stitch_source/myKeywordFilter_projectSolutionA.svg"
      },
      // Page 5: Solution B (Detail & Deep Dive)
      solutionB: {
        title: "myKeywordFilter_project_SOL_B_TITLE",
        summary: "myKeywordFilter_project_SOL_B_SUMMARY",
        description: [
          { title: "myKeywordFilter_project_SOL_B_DESC_1_TITLE", desc: "myKeywordFilter_project_SOL_B_DESC_1_DESC" },
          { title: "myKeywordFilter_project_SOL_B_DESC_2_TITLE", desc: "myKeywordFilter_project_SOL_B_DESC_2_DESC" },
          { title: "myKeywordFilter_project_SOL_B_DESC_3_TITLE", desc: "myKeywordFilter_project_SOL_B_DESC_3_DESC" }
        ],
        image: "/stitch_source/myKeywordFilter_projectSolutionB.svg",
        asIs: {
            image: "project2_asis.png",
            desc: "myKeywordFilter_project_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project2_tobe.png",
            desc: "myKeywordFilter_project_SOL_B_TOBE_DESC"
        }
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: [
            { title: "myKeywordFilter_project_IMPACT_OUTCOME_1_TITLE", desc: "myKeywordFilter_project_IMPACT_OUTCOME_1_DESC", image: "/stitch_source/myKeywordFilter_projectImpact1.svg" },
            { title: "myKeywordFilter_project_IMPACT_OUTCOME_2_TITLE", desc: "myKeywordFilter_project_IMPACT_OUTCOME_2_DESC", image: "/stitch_source/myKeywordFilter_projectImpact2.svg" }
        ],
        lesson: "myKeywordFilter_project_IMPACT_LESSON"
      },
      isdangen_projectProject: false
    },
    {
      id: "project-3",
      overview: {
        headline: "pathDual_project_HEADLINE",
        summary: "pathDual_project_SUMMARY",
        keyMetrics: ["pathDual_project_KEY_METRIC_1", "pathDual_project_KEY_METRIC_2", "pathDual_project_KEY_METRIC_3"],
        role: "pathDual_project_ROLE",
        contribution: "pathDual_project_CONTRIBUTION",
        period: "pathDual_project_PERIOD",
        team: "pathDual_project_TEAM",
        coverImage: project3Cover,
        tags: ["pathDual_project_TAG_1", "pathDual_project_TAG_2", "pathDual_project_TAG_3"]
      },
      problem: {
        title: "pathDual_project_PROBLEM_TITLE",
        background: "pathDual_project_PROBLEM_BACKGROUND",
        quantitative: "pathDual_project_PROBLEM_QUANT",
        qualitative: "pathDual_project_PROBLEM_QUAL",
        image: "/stitch_source/pathDual_projectProblem.svg"
      },
      strategy: {
        title: "pathDual_project_STRATEGY_TITLE",
        description: "pathDual_project_STRATEGY_DESC",
        cause: "pathDual_project_STRATEGY_CAUSE",
        causeDesc: "pathDual_project_STRATEGY_CAUSE_DESC",
        hypothesis: "pathDual_project_STRATEGY_HYPO",
        image: "/stitch_source/pathDual_projectStrategy.svg"
      },
      solutionA: {
        title: "pathDual_project_SOL_A_TITLE",
        summary: "pathDual_project_SOL_A_SUMMARY",
        description: [
          { title: "pathDual_project_SOL_A_DESC_1_TITLE", desc: "pathDual_project_SOL_A_DESC_1_DESC" },
          { title: "pathDual_project_SOL_A_DESC_2_TITLE", desc: "pathDual_project_SOL_A_DESC_2_DESC" },
          { title: "pathDual_project_SOL_A_DESC_3_TITLE", desc: "pathDual_project_SOL_A_DESC_3_DESC" }
        ],
        image: "/stitch_source/pathDual_projectSolutionA.svg"
      },
      solutionB: {
        title: "pathDual_project_SOL_B_TITLE",
        summary: "pathDual_project_SOL_B_SUMMARY",
        description: [
            { title: "pathDual_project_SOL_B_DESC_1_TITLE", desc: "pathDual_project_SOL_B_DESC_1_DESC" },
            { title: "pathDual_project_SOL_B_DESC_2_TITLE", desc: "pathDual_project_SOL_B_DESC_2_DESC" },
            { title: "pathDual_project_SOL_B_DESC_3_TITLE", desc: "pathDual_project_SOL_B_DESC_3_DESC" }
        ],
        image: "/stitch_source/pathDual_projectSolutionB.svg",
        asIs: {
            image: "project3_asis.png",
            desc: "pathDual_project_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project3_tobe.png",
            desc: "pathDual_project_SOL_B_TOBE_DESC"
        }
      },
      impact: {
        outcome: [
            { title: "pathDual_project_IMPACT_OUTCOME_1_TITLE", desc: "pathDual_project_IMPACT_OUTCOME_1_DESC", image: "/stitch_source/pathDual_projectImpact1.svg" },
            { title: "pathDual_project_IMPACT_OUTCOME_2_TITLE", desc: "pathDual_project_IMPACT_OUTCOME_2_DESC", image: "/stitch_source/pathDual_projectImpact2.svg" }
        ],
        lesson: "pathDual_project_IMPACT_LESSON"
      },
      isdangen_projectProject: false
    },
    {
      id: "project-4",
      overview: {
        headline: "designSystem_project_HEADLINE",
        summary: "designSystem_project_SUMMARY",
        keyMetrics: ["designSystem_project_KEY_METRIC_1", "designSystem_project_KEY_METRIC_2", "designSystem_project_KEY_METRIC_3"],
        role: "designSystem_project_ROLE",
        contribution: "designSystem_project_CONTRIBUTION",
        period: "designSystem_project_PERIOD",
        team: "designSystem_project_TEAM",
        coverImage: project4Cover,
        tags: ["designSystem_project_TAG_1", "designSystem_project_TAG_2", "designSystem_project_TAG_3"]
      },
      problem: {
        title: "designSystem_project_PROBLEM_TITLE",
        background: "designSystem_project_PROBLEM_BACKGROUND",
        quantitative: "designSystem_project_PROBLEM_QUANT",
        qualitative: "designSystem_project_PROBLEM_QUAL",
        image: "/stitch_source/designSystem_projectProblem.svg"
      },
      strategy: {
        title: "designSystem_project_STRATEGY_TITLE",
        description: "designSystem_project_STRATEGY_DESC",
        cause: "designSystem_project_STRATEGY_CAUSE",
        causeDesc: "designSystem_project_STRATEGY_CAUSE_DESC",
        hypothesis: "designSystem_project_STRATEGY_HYPO",
        image: "/stitch_source/designSystem_projectStrategy.svg"
      },
      solutionA: {
        title: "designSystem_project_SOL_A_TITLE",
        summary: "designSystem_project_SOL_A_SUMMARY",
        description: [
          { title: "designSystem_project_SOL_A_DESC_1_TITLE", desc: "designSystem_project_SOL_A_DESC_1_DESC" },
          { title: "designSystem_project_SOL_A_DESC_2_TITLE", desc: "designSystem_project_SOL_A_DESC_2_DESC" },
          { title: "designSystem_project_SOL_A_DESC_3_TITLE", desc: "designSystem_project_SOL_A_DESC_3_DESC" }
        ],
        image: "/stitch_source/designSystem_projectSolution-A.svg"
      },
      solutionB: {
        title: "designSystem_project_SOL_B_TITLE",
        summary: "designSystem_project_SOL_B_SUMMARY",
        description: [
          { title: "designSystem_project_SOL_B_DESC_1_TITLE", desc: "designSystem_project_SOL_B_DESC_1_DESC" },
          { title: "designSystem_project_SOL_B_DESC_2_TITLE", desc: "designSystem_project_SOL_B_DESC_2_DESC" },
          { title: "designSystem_project_SOL_B_DESC_3_TITLE", desc: "designSystem_project_SOL_B_DESC_3_DESC" }
        ],
        image: "/stitch_source/designSystem_projectSolution-B.svg",
        asIs: {
            image: "project4_asis.png",
            desc: "designSystem_project_SOL_B_ASIS_DESC"
        },
        toBe: {
            image: "project4_tobe.png",
            desc: "designSystem_project_SOL_B_TOBE_DESC"
        }
      },
      impact: {
        outcome: [
            { title: "designSystem_project_IMPACT_OUTCOME_1_TITLE", desc: "designSystem_project_IMPACT_OUTCOME_1_DESC", image: "/stitch_source/designSystem_projectImpact-1.svg" },
            { title: "designSystem_project_IMPACT_OUTCOME_2_TITLE", desc: "designSystem_project_IMPACT_OUTCOME_2_DESC", image: "/stitch_source/designSystem_projectImpact-2.svg" },
            { title: "designSystem_project_IMPACT_OUTCOME_3_TITLE", desc: "designSystem_project_IMPACT_OUTCOME_3_DESC", image: "/stitch_source/designSystem_projectImpact-3.svg" }
        ],
        lesson: "designSystem_project_IMPACT_LESSON"
      },
      isdangen_projectProject: false
    },
    {
      id: "project-7",
      // Page 1: Overview
      overview: {
        headline: "aiAgent_project_HEADLINE",
        summary: "aiAgent_project_SUMMARY",
        keyMetrics: ["aiAgent_project_KEY_METRIC_1", "aiAgent_project_KEY_METRIC_2", "aiAgent_project_KEY_METRIC_3"],
        role: "aiAgent_project_ROLE",
        contribution: "aiAgent_project_CONTRIBUTION",
        period: "aiAgent_project_PERIOD",
        team: "aiAgent_project_TEAM",
        coverImage: project7Cover,
        tags: ["aiAgent_project_TAG_1", "aiAgent_project_TAG_2", "aiAgent_project_TAG_3"]
      },
      // Page 2: Problem Definition
      problem: {
        title: "aiAgent_project_PROBLEM_TITLE",
        background: "aiAgent_project_PROBLEM_BACKGROUND",
        quantitative: "aiAgent_project_PROBLEM_QUANT",
        qualitative: "aiAgent_project_PROBLEM_QUAL",
        image: "/stitch_source/aiAgent_projectProblem.svg"
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "aiAgent_project_STRATEGY_TITLE",
        description: "aiAgent_project_STRATEGY_DESC",
        cause: "aiAgent_project_STRATEGY_CAUSE",
        causeDesc: "aiAgent_project_STRATEGY_CAUSE_DESC",
        hypothesis: "aiAgent_project_STRATEGY_HYPO",
        image: "/stitch_source/aiAgent_projectStrategy.svg"
      },
      // Page 4: Solution A
      solutionA: {
        title: "aiAgent_project_SOL_A_TITLE",
        summary: "aiAgent_project_SOL_A_SUMMARY",
        description: [
          { title: "aiAgent_project_SOL_A_DESC_1_TITLE", desc: "aiAgent_project_SOL_A_DESC_1_DESC" },
          { title: "aiAgent_project_SOL_A_DESC_2_TITLE", desc: "aiAgent_project_SOL_A_DESC_2_DESC" }
        ],
        image: "/stitch_source/aiAgent_projectSolutionA.svg"
      },
      // Page 5: Solution B
      solutionB: {
        title: "aiAgent_project_SOL_B_TITLE",
        summary: "aiAgent_project_SOL_B_SUMMARY",
        description: [
          { title: "aiAgent_project_SOL_B_DESC_1_TITLE", desc: "aiAgent_project_SOL_B_DESC_1_DESC" },
          { title: "aiAgent_project_SOL_B_DESC_2_TITLE", desc: "aiAgent_project_SOL_B_DESC_2_DESC" }
        ],
        image: "/stitch_source/aiAgent_projectSolutionB.svg"
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: [
          { title: "aiAgent_project_IMPACT_OUTCOME_1_TITLE", desc: "aiAgent_project_IMPACT_OUTCOME_1_DESC", image: "/stitch_source/aiAgent_projectImpact1.svg" },
          { title: "aiAgent_project_IMPACT_OUTCOME_2_TITLE", desc: "aiAgent_project_IMPACT_OUTCOME_2_DESC", image: "/stitch_source/aiAgent_projectImpact2.svg" },
          { title: "aiAgent_project_IMPACT_OUTCOME_3_TITLE", desc: "aiAgent_project_IMPACT_OUTCOME_3_DESC", image: "/stitch_source/aiAgent_projectImpact3.svg" }
        ],
        lesson: "aiAgent_project_IMPACT_LESSON"
      },
      isdangen_projectProject: false
    },
    {
      id: "project-8",
      // Page 1: Overview
      overview: {
        headline: "journeyFinder_project_HEADLINE",
        summary: "journeyFinder_project_SUMMARY",
        keyMetrics: ["journeyFinder_project_KEY_METRIC_1", "journeyFinder_project_KEY_METRIC_2", "journeyFinder_project_KEY_METRIC_3"],
        role: "journeyFinder_project_ROLE",
        contribution: "journeyFinder_project_CONTRIBUTION",
        period: "journeyFinder_project_PERIOD",
        team: "journeyFinder_project_TEAM",
        coverImage: null,
        tags: ["journeyFinder_project_TAG_1", "journeyFinder_project_TAG_2", "journeyFinder_project_TAG_3"]
      },
      // Page 2: Problem Definition
      problem: {
        title: "journeyFinder_project_PROBLEM_TITLE",
        background: "journeyFinder_project_PROBLEM_BACKGROUND",
        quantitative: "journeyFinder_project_PROBLEM_QUANT",
        qualitative: "journeyFinder_project_PROBLEM_QUAL",
        image: "/stitch_source/journeyFinder_projectProblem.svg"
      },
      // Page 3: Strategy & Hypothesis
      strategy: {
        title: "journeyFinder_project_STRATEGY_TITLE",
        description: "journeyFinder_project_STRATEGY_DESC",
        cause: "journeyFinder_project_STRATEGY_CAUSE",
        causeDesc: "journeyFinder_project_STRATEGY_CAUSE_DESC",
        hypothesis: "journeyFinder_project_STRATEGY_HYPO",
        image: "/stitch_source/journeyFinder_projectStrategy.svg"
      },
      // Page 4: Solution A
      solutionA: {
        title: "journeyFinder_project_SOL_A_TITLE",
        summary: "journeyFinder_project_SOL_A_SUMMARY",
        description: [
          { title: "journeyFinder_project_SOL_A_DESC_1_TITLE", desc: "journeyFinder_project_SOL_A_DESC_1_DESC" },
          { title: "journeyFinder_project_SOL_A_DESC_2_TITLE", desc: "journeyFinder_project_SOL_A_DESC_2_DESC" }
        ],
        image: "/stitch_source/journeyFinder_projectSolutionA.svg"
      },
      // Page 5: Solution B
      solutionB: {
        title: "journeyFinder_project_SOL_B_TITLE",
        summary: "journeyFinder_project_SOL_B_SUMMARY",
        description: [
          { title: "journeyFinder_project_SOL_B_DESC_1_TITLE", desc: "journeyFinder_project_SOL_B_DESC_1_DESC" },
          { title: "journeyFinder_project_SOL_B_DESC_2_TITLE", desc: "journeyFinder_project_SOL_B_DESC_2_DESC" },
          { title: "journeyFinder_project_SOL_B_DESC_3_TITLE", desc: "journeyFinder_project_SOL_B_DESC_3_DESC" }
        ],
        image: "/stitch_source/journeyFinder_projectSolutionB.svg",
        asIs: {
          image: "project8_asis.png",
          desc: "journeyFinder_project_SOL_B_ASIS_DESC"
        },
        toBe: {
          image: "project8_tobe.png",
          desc: "journeyFinder_project_SOL_B_TOBE_DESC"
        }
      },
      // Page 6: Impact & Lesson
      impact: {
        outcome: [
          { title: "journeyFinder_project_IMPACT_OUTCOME_1_TITLE", desc: "journeyFinder_project_IMPACT_OUTCOME_1_DESC", image: "/stitch_source/journeyFinder_projectImpact1.svg" },
          { title: "journeyFinder_project_IMPACT_OUTCOME_2_TITLE", desc: "journeyFinder_project_IMPACT_OUTCOME_2_DESC", image: "/stitch_source/journeyFinder_projectImpact2.svg" },
          { title: "journeyFinder_project_IMPACT_OUTCOME_3_TITLE", desc: "journeyFinder_project_IMPACT_OUTCOME_3_DESC", image: "/stitch_source/journeyFinder_projectImpact3.svg" }
        ],
        lesson: "journeyFinder_project_IMPACT_LESSON"
      },
      isdangen_projectProject: false
    },
    {
      id: "project-dangen_project",
      overview: {
        headline: "dangen_project_HEADLINE",
        summary: "dangen_project_SUMMARY",
        keyMetrics: ["dangen_project_KEY_METRIC_1", "dangen_project_KEY_METRIC_2", "dangen_project_KEY_METRIC_3"],
        role: "dangen_project_ROLE",
        contribution: "dangen_project_CONTRIBUTION",
        period: "dangen_project_PERIOD",
        team: "dangen_project_TEAM",
        coverImage: project5Cover,
        tags: ["dangen_project_TAG_1", "dangen_project_TAG_2", "dangen_project_TAG_3"]
      },
      // Page 1: 문제 발굴
      problem: {
        title: "dangen_project_PROBLEM_TITLE",
        background: "dangen_project_PROBLEM_BACKGROUND",
        quantitative: "dangen_project_PROBLEM_QUANT",
        qualitative: "dangen_project_PROBLEM_QUAL",
        image: "/stitch_source/dangen_projectProblem.svg"
      },
      // Page 2: 사용자 리서치
      strategy: {
        sectionLabel: "dangen_project_SECTION_RESEARCH",
        title: "dangen_project_STRATEGY_TITLE",
        description: "dangen_project_STRATEGY_DESC",
        cause: "dangen_project_STRATEGY_CAUSE",
        causeDesc: "dangen_project_STRATEGY_CAUSE_DESC",
        hypothesis: "dangen_project_STRATEGY_HYPO",
        image: "/stitch_source/dangen_projectStrategy.svg"
      },
      // Page 3: 개선 제안
      solutionA: {
        sectionLabel: "dangen_project_SECTION_PROPOSAL",
        title: "dangen_project_SOL_A_TITLE",
        summary: "dangen_project_SOL_A_SUMMARY",
        description: [
          { title: "dangen_project_SOL_A_DESC_1_TITLE", desc: "dangen_project_SOL_A_DESC_1_DESC" },
          { title: "dangen_project_SOL_A_DESC_2_TITLE", desc: "dangen_project_SOL_A_DESC_2_DESC" },
          { title: "dangen_project_SOL_A_DESC_3_TITLE", desc: "dangen_project_SOL_A_DESC_3_DESC" }
        ],
        image: "/stitch_source/dangen_projectSolution.svg"
      },
      solutionB: null,
      impact: null,
      isdangen_projectProject: true
    },
    {
      id: "project-6",
      // Page 1: Overview
      overview: {
        headline: "munoArt_project_HEADLINE",
        summary: "munoArt_project_SUMMARY",
        keyMetrics: ["munoArt_project_KEY_METRIC_1", "munoArt_project_KEY_METRIC_2", "munoArt_project_KEY_METRIC_3"],
        role: "munoArt_project_ROLE",
        contribution: "munoArt_project_CONTRIBUTION",
        period: "munoArt_project_PERIOD",
        team: "munoArt_project_TEAM",
        coverImage: project6Cover,
        tags: ["munoArt_project_TAG_1", "munoArt_project_TAG_2", "munoArt_project_TAG_3"]
      },
      problem: null,
      strategy: null,
      solutionA: null,
      solutionB: null,
      // Page 2: 데이터 기반 성과
      impact: {
        outcome: [
          { title: "munoArt_project_IMPACT_OUTCOME_1_TITLE", desc: "munoArt_project_IMPACT_OUTCOME_1_DESC", image: "/stitch_source/munoArt_projectImpact1.svg" },
          { title: "munoArt_project_IMPACT_OUTCOME_2_TITLE", desc: "munoArt_project_IMPACT_OUTCOME_2_DESC", image: "/stitch_source/munoArt_projectImpact2.svg" },
          { title: "munoArt_project_IMPACT_OUTCOME_3_TITLE", desc: "munoArt_project_IMPACT_OUTCOME_3_DESC", image: "/stitch_source/munoArt_projectImpact3.svg" }
        ],
        lesson: "munoArt_project_IMPACT_LESSON"
      },
      isdangen_projectProject: false
    },
  ];
