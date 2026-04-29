export type LevelId = "101" | "201" | "301" | "401";

export interface Module {
  id: string;
  name: string;
  isCapstone?: boolean;
}

export interface Level {
  id: LevelId;
  name: string;
  tagline: string;
  colorToken: "primary" | "sage" | "navy" | "rust";
  modules: Module[];
}

export const CURRICULUM: Level[] = [
  {
    id: "101",
    name: "Foundation",
    tagline: "Understanding the ecosystem",
    colorToken: "primary",
    modules: [
      {
        id: "101_1",
        name: "The Federal Procurement Ecosystem",
      },
      {
        id: "101_2",
        name: "Where Solicitations Come From",
      },
      {
        id: "101_3",
        name: "Types of Solicitations",
      },
      {
        id: "101_4",
        name: "The Language of Federal Contracting",
      },
      {
        id: "101_cap",
        name: "Capstone: Your First Analysis",
        isCapstone: true,
      },
    ],
  },
  {
    id: "201",
    name: "Navigation",
    tagline: "Dissecting every section",
    colorToken: "sage",
    modules: [
      {
        id: "201_1",
        name: "Section A — Solicitation Form",
      },
      {
        id: "201_2",
        name: "Section B — Supplies and Services",
      },
      {
        id: "201_3",
        name: "Section C — Specifications",
      },
      {
        id: "201_4",
        name: "Section D — Packaging and Marking",
      },
      {
        id: "201_5",
        name: "Section E — Inspection",
      },
      {
        id: "201_6",
        name: "Section F — Deliveries",
      },
      {
        id: "201_7",
        name: "Section G — Administration",
      },
      {
        id: "201_8",
        name: "Section H — Special Requirements",
      },
      {
        id: "201_9",
        name: "Section I — Contract Clauses",
      },
      {
        id: "201_10",
        name: "Section J — Attachments",
      },
      {
        id: "201_cap",
        name: "Capstone: Full Analysis",
        isCapstone: true,
      },
    ],
  },
  {
    id: "301",
    name: "Analysis",
    tagline: "Making business decisions",
    colorToken: "navy",
    modules: [
      {
        id: "301_1",
        name: "Go/No-Go Framework",
      },
      {
        id: "301_2",
        name: "Reading Procurement History",
      },
      {
        id: "301_3",
        name: "Compliance Reality Check",
      },
      {
        id: "301_4",
        name: "Technical Risk Assessment",
      },
      {
        id: "301_5",
        name: "Sourcing Strategy",
      },
      {
        id: "301_6",
        name: "Competitive Price Analysis",
      },
      {
        id: "301_7",
        name: "Contract Types and Risk",
      },
      {
        id: "301_cap",
        name: "Capstone: Three Solicitations",
        isCapstone: true,
      },
    ],
  },
  {
    id: "401",
    name: "Mastery",
    tagline: "Strategy and long-term success",
    colorToken: "rust",
    modules: [
      {
        id: "401_1",
        name: "Building a DIBBS Strategy",
      },
      {
        id: "401_2",
        name: "Advanced Pricing Strategy",
      },
      {
        id: "401_3",
        name: "Delivery Performance",
      },
      {
        id: "401_4",
        name: "Common Rejections",
      },
      {
        id: "401_5",
        name: "Scaling Up",
      },
      {
        id: "401_6",
        name: "When Things Go Wrong",
      },
      {
        id: "401_cap",
        name: "Capstone: Master Project",
        isCapstone: true,
      },
    ],
  },
];

export const ALL_MODULES = CURRICULUM.flatMap(
  (level) => level.modules.map((m) => m.id)
);

export function getLevelById(id: string) {
  return CURRICULUM.find((l) => l.id === id);
}

export function getModuleById(id: string) {
  for (const level of CURRICULUM) {
    const module = level.modules.find(
      (m) => m.id === id
    );
    if (module) {
      return { level, module };
    }
  }
  return null;
}

export function calculateLevelProgress(
  levelId: string,
  progress: Array<{
    module_id: string;
    status: string;
  }>
) {
  const level = getLevelById(levelId);
  if (!level) return { completed: 0, total: 0, percent: 0 };

  const total = level.modules.length;
  const completed = level.modules.filter((m) => {
    const p = progress.find(
      (x) => x.module_id === m.id
    );
    return p?.status === "complete";
  }).length;

  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
  };
}

export function calculateOverallProgress(
  progress: Array<{
    module_id: string;
    status: string;
  }>
) {
  const total = ALL_MODULES.length;
  const completed = progress.filter(
    (p) => p.status === "complete"
  ).length;

  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
  };
}