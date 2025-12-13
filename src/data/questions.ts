import { Question } from '../types';

export const questions: Question[] = [
  // 工作绩效维度 (7 questions)
  {
    question: "在过去6个月中，您完成工作任务的情况如何？",
    options: [
      { text: "总是提前完成，质量超出预期", factor: "PERFORMANCE" },
      { text: "按时完成，质量符合标准", factor: "PERFORMANCE" },
      { text: "偶尔延期，但能保证质量", factor: "PERFORMANCE" },
      { text: "经常延期，质量有待提升", factor: "PERFORMANCE" }
    ]
  },
  {
    question: "您的直属上级对您工作表现的评价通常是：",
    options: [
      { text: "经常表扬，认为是团队核心成员", factor: "PERFORMANCE" },
      { text: "偶尔表扬，总体表现满意", factor: "PERFORMANCE" },
      { text: "很少表扬，但也不经常批评", factor: "PERFORMANCE" },
      { text: "经常指出问题，需要改进", factor: "PERFORMANCE" }
    ]
  },
  {
    question: "面对具有挑战性的工作任务时，您通常：",
    options: [
      { text: "主动承担，能够独立找到解决方案", factor: "PERFORMANCE" },
      { text: "愿意尝试，通常能够完成", factor: "PERFORMANCE" },
      { text: "需要一定指导才能完成", factor: "PERFORMANCE" },
      { text: "倾向于避免，担心无法胜任", factor: "PERFORMANCE" }
    ]
  },
  {
    question: "与同级别同事相比，您的工作效率如何？",
    options: [
      { text: "明显高于平均水平", factor: "PERFORMANCE" },
      { text: "略高于平均水平", factor: "PERFORMANCE" },
      { text: "基本处于平均水平", factor: "PERFORMANCE" },
      { text: "低于平均水平", factor: "PERFORMANCE" }
    ]
  },
  {
    question: "客户或内部用户对您工作成果的反馈如何？",
    options: [
      { text: "经常收到正面反馈和认可", factor: "PERFORMANCE" },
      { text: "偶尔收到正面反馈", factor: "PERFORMANCE" },
      { text: "很少收到反馈", factor: "PERFORMANCE" },
      { text: "偶尔收到改进建议", factor: "PERFORMANCE" }
    ]
  },
  {
    question: "在解决工作中遇到的问题时，您的表现如何？",
    options: [
      { text: "能够快速识别问题并提出创新解决方案", factor: "PERFORMANCE" },
      { text: "能够解决大部分遇到的问题", factor: "PERFORMANCE" },
      { text: "需要时间思考，但最终能解决", factor: "PERFORMANCE" },
      { text: "经常需要寻求他人帮助", factor: "PERFORMANCE" }
    ]
  },
  {
    question: "您在团队项目中通常承担什么角色？",
    options: [
      { text: "项目负责人或核心贡献者", factor: "PERFORMANCE" },
      { text: "重要参与者，能独立完成分配任务", factor: "PERFORMANCE" },
      { text: "一般参与者，按要求完成工作", factor: "PERFORMANCE" },
      { text: "辅助角色，主要执行简单任务", factor: "PERFORMANCE" }
    ]
  },

  // 职业态度维度 (7 questions)
  {
    question: "当工作需要加班时，您的态度是：",
    options: [
      { text: "主动承担，全力投入工作", factor: "ATTITUDE" },
      { text: "必要时愿意加班", factor: "ATTITUDE" },
      { text: "偶尔加班，但不太情愿", factor: "ATTITUDE" },
      { text: "尽量避免，更注重工作生活平衡", factor: "ATTITUDE" }
    ]
  },
  {
    question: "对于公司的政策和制度变化，您通常：",
    options: [
      { text: "积极支持，严格遵守执行", factor: "ATTITUDE" },
      { text: "基本遵守，偶有不同意见", factor: "ATTITUDE" },
      { text: "被动接受，内心有些抵触", factor: "ATTITUDE" },
      { text: "经常质疑，有时不完全遵守", factor: "ATTITUDE" }
    ]
  },
  {
    question: "在团队协作中，您的表现如何？",
    options: [
      { text: "积极配合，主动帮助团队成员", factor: "ATTITUDE" },
      { text: "配合良好，认真完成自己的部分", factor: "ATTITUDE" },
      { text: "被动配合，不太主动沟通", factor: "ATTITUDE" },
      { text: "更喜欢独立工作，不太合群", factor: "ATTITUDE" }
    ]
  },
  {
    question: "当收到上级的批评或建议时，您会：",
    options: [
      { text: "虚心接受，立即制定改进计划", factor: "ATTITUDE" },
      { text: "认真听取，努力改正", factor: "ATTITUDE" },
      { text: "表面接受，内心有些不快", factor: "ATTITUDE" },
      { text: "难以接受，容易产生负面情绪", factor: "ATTITUDE" }
    ]
  },
  {
    question: "您对学习新技能和知识的态度如何？",
    options: [
      { text: "非常积极，主动寻找学习机会", factor: "ATTITUDE" },
      { text: "比较积极，愿意跟上发展需要", factor: "ATTITUDE" },
      { text: "被动学习，有要求时才学", factor: "ATTITUDE" },
      { text: "不太愿意，认为现有技能足够", factor: "ATTITUDE" }
    ]
  },
  {
    question: "在工作中，您主动提出改进建议的频率如何？",
    options: [
      { text: "经常主动提出建设性建议", factor: "ATTITUDE" },
      { text: "偶尔提出一些想法", factor: "ATTITUDE" },
      { text: "很少主动，通常等待安排", factor: "ATTITUDE" },
      { text: "从不主动，只做分内工作", factor: "ATTITUDE" }
    ]
  },
  {
    question: "您对当前工作的投入程度如何？",
    options: [
      { text: "全身心投入，工作是重要的人生目标", factor: "ATTITUDE" },
      { text: "比较投入，认真对待工作", factor: "ATTITUDE" },
      { text: "一般投入，按要求完成即可", factor: "ATTITUDE" },
      { text: "投入度较低，更多是为了薪水", factor: "ATTITUDE" }
    ]
  },

  // 专业能力维度 (7 questions)
  {
    question: "您在所在领域的专业技能水平如何？",
    options: [
      { text: "行业专家水平，经常被咨询", factor: "SKILL" },
      { text: "高级水平，经验丰富", factor: "SKILL" },
      { text: "中级水平，能胜任当前工作", factor: "SKILL" },
      { text: "初级水平，仍在学习提升", factor: "SKILL" }
    ]
  },
  {
    question: "您掌握的技能范围如何？",
    options: [
      { text: "多技能复合型，能跨领域工作", factor: "SKILL" },
      { text: "核心技能扎实，有一些辅助技能", factor: "SKILL" },
      { text: "主要专注于一个专业领域", factor: "SKILL" },
      { text: "技能相对单一，专业面较窄", factor: "SKILL" }
    ]
  },
  {
    question: "学习新技术或新方法时，您的速度如何？",
    options: [
      { text: "学习很快，能够举一反三", factor: "SKILL" },
      { text: "学习速度正常，能够掌握", factor: "SKILL" },
      { text: "需要较长时间消化理解", factor: "SKILL" },
      { text: "学习比较困难，进展缓慢", factor: "SKILL" }
    ]
  },
  {
    question: "您的技能更新和发展情况如何？",
    options: [
      { text: "紧跟行业前沿，持续更新技能", factor: "SKILL" },
      { text: "定期学习，保持技能相关性", factor: "SKILL" },
      { text: "偶尔更新，主要依靠现有技能", factor: "SKILL" },
      { text: "很少更新，主要使用传统方法", factor: "SKILL" }
    ]
  },
  {
    question: "同事向您请教专业问题的频率如何？",
    options: [
      { text: "经常有人请教，被认为是专家", factor: "SKILL" },
      { text: "偶尔有人请教", factor: "SKILL" },
      { text: "很少有人请教", factor: "SKILL" },
      { text: "从来没人请教专业问题", factor: "SKILL" }
    ]
  },
  {
    question: "您能够独立处理的工作复杂程度如何？",
    options: [
      { text: "能够处理最复杂和关键的项目", factor: "SKILL" },
      { text: "能够处理中等复杂度的项目", factor: "SKILL" },
      { text: "主要处理标准化的工作", factor: "SKILL" },
      { text: "需要详细指导才能完成工作", factor: "SKILL" }
    ]
  },
  {
    question: "您拥有的专业认证或资质情况如何？",
    options: [
      { text: "拥有多个权威认证或高级资质", factor: "SKILL" },
      { text: "拥有一些相关的专业认证", factor: "SKILL" },
      { text: "拥有基础的行业认证", factor: "SKILL" },
      { text: "没有相关的专业认证", factor: "SKILL" }
    ]
  },

  // 成本效益维度 (6 questions)
  {
    question: "您的薪资水平在团队中的位置如何？",
    options: [
      { text: "中等偏下，性价比较高", factor: "COST" },
      { text: "处于中等水平", factor: "COST" },
      { text: "中等偏上", factor: "COST" },
      { text: "处于较高水平", factor: "COST" }
    ]
  },
  {
    question: "您为公司创造的价值与成本的关系如何？",
    options: [
      { text: "创造的价值远超过成本投入", factor: "COST" },
      { text: "价值明显高于成本", factor: "COST" },
      { text: "价值与成本基本持平", factor: "COST" },
      { text: "成本可能高于创造的价值", factor: "COST" }
    ]
  },
  {
    question: "如果您离职，公司找到合适替代者的难度如何？",
    options: [
      { text: "很难替代，需要很长时间", factor: "COST" },
      { text: "有一定难度，需要时间培养", factor: "COST" },
      { text: "不太困难，市场上有类似人才", factor: "COST" },
      { text: "比较容易，很快能找到替代者", factor: "COST" }
    ]
  },
  {
    question: "公司在您身上的培训投入如何？",
    options: [
      { text: "几乎不需要额外培训投入", factor: "COST" },
      { text: "需要少量培训投入", factor: "COST" },
      { text: "需要中等程度的培训", factor: "COST" },
      { text: "需要大量培训和时间投入", factor: "COST" }
    ]
  },
  {
    question: "您在当前岗位上的工作年限如何？",
    options: [
      { text: "1-3年，仍在成长期", factor: "COST" },
      { text: "3-5年，进入稳定期", factor: "COST" },
      { text: "5-10年，经验丰富", factor: "COST" },
      { text: "10年以上，资深员工", factor: "COST" }
    ]
  },
  {
    question: "您的技能在公司业务中的重要性如何？",
    options: [
      { text: "核心技能，对业务至关重要", factor: "COST" },
      { text: "重要技能，业务需要依赖", factor: "COST" },
      { text: "一般技能，有一定作用", factor: "COST" },
      { text: "辅助技能，可有可无", factor: "COST" }
    ]
  },

  // 人际关系维度 (6 questions)
  {
    question: "您与直属上级的工作关系如何？",
    options: [
      { text: "关系很好，深受信任和重视", factor: "RELATIONSHIP" },
      { text: "关系良好，工作配合顺畅", factor: "RELATIONSHIP" },
      { text: "关系一般，偶有工作分歧", factor: "RELATIONSHIP" },
      { text: "关系紧张，经常出现冲突", factor: "RELATIONSHIP" }
    ]
  },
  {
    question: "同事们对您的总体评价如何？",
    options: [
      { text: "人缘很好，大家都愿意合作", factor: "RELATIONSHIP" },
      { text: "关系融洽，合作愉快", factor: "RELATIONSHIP" },
      { text: "关系一般，不亲近也不疏远", factor: "RELATIONSHIP" },
      { text: "有些同事对我有意见", factor: "RELATIONSHIP" }
    ]
  },
  {
    question: "在团队冲突或争议中，您通常扮演什么角色？",
    options: [
      { text: "调解者，帮助化解矛盾", factor: "RELATIONSHIP" },
      { text: "中立者，不参与冲突", factor: "RELATIONSHIP" },
      { text: "偶尔会被卷入争议", factor: "RELATIONSHIP" },
      { text: "经常是冲突的当事方", factor: "RELATIONSHIP" }
    ]
  },
  {
    question: "您的沟通协调能力如何？",
    options: [
      { text: "沟通能力强，表达清晰有效", factor: "RELATIONSHIP" },
      { text: "沟通能力良好，基本无障碍", factor: "RELATIONSHIP" },
      { text: "沟通能力一般，偶有误解", factor: "RELATIONSHIP" },
      { text: "沟通经常出现问题", factor: "RELATIONSHIP" }
    ]
  },
  {
    question: "您在公司内部的人脉网络如何？",
    options: [
      { text: "人脉广泛，各部门都有联系", factor: "RELATIONSHIP" },
      { text: "有一定人脉，关系网较好", factor: "RELATIONSHIP" },
      { text: "人脉关系一般，主要在本部门", factor: "RELATIONSHIP" },
      { text: "几乎没有人脉关系", factor: "RELATIONSHIP" }
    ]
  },
  {
    question: "参加公司活动和团建的积极性如何？",
    options: [
      { text: "非常积极，经常组织或参与", factor: "RELATIONSHIP" },
      { text: "比较积极，愿意参加", factor: "RELATIONSHIP" },
      { text: "偶尔参加，不太主动", factor: "RELATIONSHIP" },
      { text: "很少参加，比较独立", factor: "RELATIONSHIP" }
    ]
  },

  // 适应能力维度 (6 questions)
  {
    question: "面对工作内容或流程的变化时，您的反应如何？",
    options: [
      { text: "快速适应，积极拥抱变化", factor: "ADAPTABILITY" },
      { text: "能够适应，需要一些调整时间", factor: "ADAPTABILITY" },
      { text: "适应较慢，有一定抵触情绪", factor: "ADAPTABILITY" },
      { text: "很难适应，强烈抵触变化", factor: "ADAPTABILITY" }
    ]
  },
  {
    question: "学习新的工作流程或系统时，您的表现如何？",
    options: [
      { text: "学得很快，还能提出优化建议", factor: "ADAPTABILITY" },
      { text: "学习能力强，能够快速掌握", factor: "ADAPTABILITY" },
      { text: "需要较长时间学习和适应", factor: "ADAPTABILITY" },
      { text: "学习新流程很困难", factor: "ADAPTABILITY" }
    ]
  },
  {
    question: "对于新技术或新工具的接受程度如何？",
    options: [
      { text: "积极拥抱，主动学习新技术", factor: "ADAPTABILITY" },
      { text: "愿意尝试，接受度较高", factor: "ADAPTABILITY" },
      { text: "对新技术有些犹豫和担心", factor: "ADAPTABILITY" },
      { text: "抗拒新技术，偏好传统方法", factor: "ADAPTABILITY" }
    ]
  },
  {
    question: "当工作环境发生变化时（如搬迁、重组等），您的表现如何？",
    options: [
      { text: "很快融入新环境，适应良好", factor: "ADAPTABILITY" },
      { text: "能够适应新环境", factor: "ADAPTABILITY" },
      { text: "需要较长时间适应", factor: "ADAPTABILITY" },
      { text: "很难适应环境变化", factor: "ADAPTABILITY" }
    ]
  },
  {
    question: "面对突发的紧急任务时，您通常：",
    options: [
      { text: "从容应对，灵活调整工作安排", factor: "ADAPTABILITY" },
      { text: "能够处理，虽然有些压力", factor: "ADAPTABILITY" },
      { text: "感到慌乱，但努力完成", factor: "ADAPTABILITY" },
      { text: "很难处理突发情况", factor: "ADAPTABILITY" }
    ]
  },
  {
    question: "您的持续学习和自我提升能力如何？",
    options: [
      { text: "学习能力很强，能够自主成长", factor: "ADAPTABILITY" },
      { text: "学习能力良好，跟上发展需要", factor: "ADAPTABILITY" },
      { text: "学习能力一般，需要外部推动", factor: "ADAPTABILITY" },
      { text: "学习能力较弱，进步缓慢", factor: "ADAPTABILITY" }
    ]
  },

  // 领导潜力维度 (5 questions)
  {
    question: "您在团队中的影响力如何？",
    options: [
      { text: "有很强的影响力，同事信服", factor: "LEADERSHIP" },
      { text: "有一定影响力，能够说服他人", factor: "LEADERSHIP" },
      { text: "影响力一般，主要关注自己工作", factor: "LEADERSHIP" },
      { text: "几乎没有影响力", factor: "LEADERSHIP" }
    ]
  },
  {
    question: "您带领团队或项目的经验如何？",
    options: [
      { text: "经常担任团队负责人，经验丰富", factor: "LEADERSHIP" },
      { text: "偶尔带领小团队或项目", factor: "LEADERSHIP" },
      { text: "很少有领导经验", factor: "LEADERSHIP" },
      { text: "从未担任过领导角色", factor: "LEADERSHIP" }
    ]
  },
  {
    question: "在需要做重要决策时，您的表现如何？",
    options: [
      { text: "决策果断，很少出错", factor: "LEADERSHIP" },
      { text: "能够做出合理决策", factor: "LEADERSHIP" },
      { text: "决策时比较犹豫不决", factor: "LEADERSHIP" },
      { text: "很难独立做决策", factor: "LEADERSHIP" }
    ]
  },
  {
    question: "您指导和培养他人的能力如何？",
    options: [
      { text: "经常指导新人，效果很好", factor: "LEADERSHIP" },
      { text: "偶尔指导同事，表现不错", factor: "LEADERSHIP" },
      { text: "很少指导他人", factor: "LEADERSHIP" },
      { text: "不太会指导和培养别人", factor: "LEADERSHIP" }
    ]
  },
  {
    question: "在承担更大责任方面，您的意愿如何？",
    options: [
      { text: "积极主动，渴望承担更大责任", factor: "LEADERSHIP" },
      { text: "愿意承担，但需要适当准备", factor: "LEADERSHIP" },
      { text: "对承担更大责任有些犹豫", factor: "LEADERSHIP" },
      { text: "不愿意承担额外责任", factor: "LEADERSHIP" }
    ]
  },

  // 创新贡献维度 (6 questions)
  {
    question: "您提出创新想法或改进建议的频率如何？",
    options: [
      { text: "经常提出，且多数被采纳", factor: "INNOVATION" },
      { text: "偶尔提出一些有价值的想法", factor: "INNOVATION" },
      { text: "很少提出新想法", factor: "INNOVATION" },
      { text: "从不主动提出创新建议", factor: "INNOVATION" }
    ]
  },
  {
    question: "解决工作问题时，您更倾向于：",
    options: [
      { text: "寻找创新的解决方案", factor: "INNOVATION" },
      { text: "在传统方法基础上改进", factor: "INNOVATION" },
      { text: "主要使用已验证的方法", factor: "INNOVATION" },
      { text: "严格按照既定流程执行", factor: "INNOVATION" }
    ]
  },
  {
    question: "对于行业新趋势和发展的敏感度如何？",
    options: [
      { text: "对新趋势很敏感，经常分享见解", factor: "INNOVATION" },
      { text: "能够察觉一些新变化", factor: "INNOVATION" },
      { text: "对新趋势不太敏感", factor: "INNOVATION" },
      { text: "很少关注行业发展", factor: "INNOVATION" }
    ]
  },
  {
    question: "您在改进工作流程方面的贡献如何？",
    options: [
      { text: "经常优化流程，效果显著", factor: "INNOVATION" },
      { text: "偶尔提出流程改进建议", factor: "INNOVATION" },
      { text: "很少参与流程改进", factor: "INNOVATION" },
      { text: "从不主动改进流程", factor: "INNOVATION" }
    ]
  },
  {
    question: "您的创造性思维能力如何？",
    options: [
      { text: "思维活跃，经常有创意想法", factor: "INNOVATION" },
      { text: "有一定创造性，能提出新观点", factor: "INNOVATION" },
      { text: "创造性思维一般", factor: "INNOVATION" },
      { text: "思维比较固化，缺乏创新", factor: "INNOVATION" }
    ]
  },
  {
    question: "在推动变革或新项目时，您的角色通常是：",
    options: [
      { text: "变革的推动者和领导者", factor: "INNOVATION" },
      { text: "积极的支持者和参与者", factor: "INNOVATION" },
      { text: "被动的跟随者", factor: "INNOVATION" },
      { text: "变革的阻力或反对者", factor: "INNOVATION" }
    ]
  }
];