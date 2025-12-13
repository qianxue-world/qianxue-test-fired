export interface Question {
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  factor: LayoffFactor;
}

// 裁员风险因子
export type LayoffFactor = 
  | 'PERFORMANCE'    // 工作表现
  | 'ATTITUDE'       // 工作态度  
  | 'SKILL'          // 技能水平
  | 'COST'           // 成本考量
  | 'RELATIONSHIP'   // 人际关系
  | 'ADAPTABILITY'   // 适应能力
  | 'LEADERSHIP'     // 领导力
  | 'INNOVATION';    // 创新能力

// 裁员风险等级
export type LayoffRisk = 
  | 'SAFE'           // 安全 (0-20%)
  | 'LOW'            // 低风险 (21-40%)
  | 'MEDIUM'         // 中等风险 (41-60%)
  | 'HIGH'           // 高风险 (61-80%)
  | 'CRITICAL';      // 极高风险 (81-100%)

export interface LayoffResult {
  risk: LayoffRisk;
  probability: number;
  title: string;
  description: string;
  suggestions: string[];
  factors: {
    performance: number;
    attitude: number;
    skill: number;
    cost: number;
    relationship: number;
    adaptability: number;
    leadership: number;
    innovation: number;
  };
}

export interface Answers {
  PERFORMANCE: number;
  ATTITUDE: number;
  SKILL: number;
  COST: number;
  RELATIONSHIP: number;
  ADAPTABILITY: number;
  LEADERSHIP: number;
  INNOVATION: number;
}
