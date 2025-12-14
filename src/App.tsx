import { useState, useEffect } from 'react';
import { StartScreen } from './components/StartScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultScreen } from './components/ResultScreen';
import { ActivationError } from './components/ActivationError';
import { ActivationService } from './services/activationService';
import { Answers, LayoffResult, LayoffFactor, LayoffRisk } from './types';
import './App.css';

type Screen = 'start' | 'question' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    PERFORMANCE: 0, ATTITUDE: 0, SKILL: 0, COST: 0, 
    RELATIONSHIP: 0, ADAPTABILITY: 0, LEADERSHIP: 0, INNOVATION: 0
  });
  const [layoffResult, setLayoffResult] = useState<LayoffResult | null>(null);
  
  // 激活码验证状态
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [activationError, setActivationError] = useState<string | null>(null);
  const [activationCode, setActivationCode] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState<boolean>(true);

  const totalQuestions = 50;

  // 初始化：检查激活码
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get('test') === 'true';
    const testRisk = urlParams.get('risk') as LayoffRisk;

    // 安全检查：只在localhost环境下允许测试模式
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '';

    if (isTestMode && testRisk && isLocalhost) {
      // 测试模式：直接跳转到结果页
      console.log('🧪 测试模式激活:', testRisk);
      const mockResult = generateMockResult(testRisk);
      setLayoffResult(mockResult);
      setScreen('result');
      setIsActivated(true);
      setIsValidating(false);
      
      // 生成模拟答案数据
      const mockAnswers = generateMockAnswers(testRisk);
      setAnswers(mockAnswers);
      return;
    }

    // 正常模式：验证激活码
    validateActivation();
  }, []);

  // 验证激活码
  const validateActivation = async () => {
    setIsValidating(true);

    // 开发环境跳过验证
    if (ActivationService.isDevelopmentMode()) {
      console.log('🔧 开发环境 - 跳过激活码验证');
      setIsActivated(true);
      setActivationCode('DEV-MODE');
      setIsValidating(false);
      return;
    }

    // 检查本地存储的激活码
    const savedActivation = ActivationService.getSavedActivationCode();
    if (savedActivation) {
      console.log('✅ 使用已保存的激活码:', savedActivation.code);
      setIsActivated(true);
      setActivationCode(savedActivation.code);
      setIsValidating(false);
      return;
    }

    // 从URL路径获取激活码
    const codeFromURL = ActivationService.getActivationCodeFromURL();
    if (!codeFromURL) {
      setActivationError('请使用有效的激活码访问此页面');
      setIsActivated(false);
      setIsValidating(false);
      return;
    }

    setActivationCode(codeFromURL);

    // 向后端验证激活码
    try {
      const result = await ActivationService.validateActivationCode(codeFromURL);
      
      if (result.isValid && result.expiresAt) {
        // 验证成功，保存到本地存储
        ActivationService.saveActivationCode(codeFromURL, result.expiresAt);
        setIsActivated(true);
        setActivationError(null);
        console.log('✅ 激活码验证成功:', codeFromURL);
      } else {
        // 验证失败
        setIsActivated(false);
        setActivationError(result.message || '激活码无效');
        console.log('❌ 激活码验证失败:', result.message);
      }
    } catch (error) {
      console.error('激活码验证错误:', error);
      setIsActivated(false);
      setActivationError('激活码验证失败，请稍后重试');
    }

    setIsValidating(false);
  };

  // 生成模拟答案数据
  const generateMockAnswers = (risk: LayoffRisk): Answers => {
    const answers: Answers = {
      PERFORMANCE: 0, ATTITUDE: 0, SKILL: 0, COST: 0,
      RELATIONSHIP: 0, ADAPTABILITY: 0, LEADERSHIP: 0, INNOVATION: 0
    };

    // 根据风险等级生成合理的分数
    const baseScore = risk === 'SAFE' ? 6 : risk === 'LOW' ? 5 : risk === 'MEDIUM' ? 4 : risk === 'HIGH' ? 3 : 2;
    
    Object.keys(answers).forEach(key => {
      answers[key as keyof Answers] = baseScore + Math.floor(Math.random() * 3);
    });

    return answers;
  };

  // 生成模拟结果数据
  const generateMockResult = (risk: LayoffRisk): LayoffResult => {
    const riskData = {
      SAFE: { probability: 15, title: "安全区域", description: "你的工作非常稳定" },
      LOW: { probability: 35, title: "低风险", description: "你的工作相对安全" },
      MEDIUM: { probability: 55, title: "中等风险", description: "需要注意一些方面" },
      HIGH: { probability: 75, title: "高风险", description: "需要积极改进" },
      CRITICAL: { probability: 90, title: "极高风险", description: "情况比较危险" }
    };

    return {
      risk,
      probability: riskData[risk].probability,
      title: riskData[risk].title,
      description: riskData[risk].description,
      suggestions: ["提升工作表现", "改善人际关系", "学习新技能"],
      factors: {
        performance: Math.floor(Math.random() * 10),
        attitude: Math.floor(Math.random() * 10),
        skill: Math.floor(Math.random() * 10),
        cost: Math.floor(Math.random() * 10),
        relationship: Math.floor(Math.random() * 10),
        adaptability: Math.floor(Math.random() * 10),
        leadership: Math.floor(Math.random() * 10),
        innovation: Math.floor(Math.random() * 10)
      }
    };
  };



  const handleStart = () => {
    setScreen('question');
  };

  const handleAnswer = (factor: LayoffFactor) => {
    const newAnswers = { ...answers, [factor]: answers[factor] + 1 };
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateLayoffRisk(newAnswers);
      setLayoffResult(result);
      setScreen('result');
    }
  };

  const calculateLayoffRisk = (ans: Answers): LayoffResult => {
    // 计算各个因子的得分
    const factors = {
      performance: ans.PERFORMANCE,
      attitude: ans.ATTITUDE,
      skill: ans.SKILL,
      cost: ans.COST,
      relationship: ans.RELATIONSHIP,
      adaptability: ans.ADAPTABILITY,
      leadership: ans.LEADERSHIP,
      innovation: ans.INNOVATION
    };

    // 计算总分 (最高分为各因子问题数 * 4，这里简化为总分)
    const totalScore = Object.values(factors).reduce((sum, score) => sum + score, 0);
    const maxScore = 50 * 4; // 假设50个问题，每个最高4分
    const percentage = (totalScore / maxScore) * 100;

    // 根据得分确定风险等级和概率
    let risk: LayoffRisk;
    let probability: number;
    let title: string;
    let description: string;
    let suggestions: string[];

    if (percentage >= 75) {
      risk = 'SAFE';
      probability = Math.floor(Math.random() * 15) + 5; // 5-20%
      title = '职业稳定性优秀';
      description = '评估结果显示您在当前职位具有很高的稳定性。您的综合表现优秀，是组织的核心人才，具有较强的不可替代性。';
      suggestions = [
        '继续保持卓越的工作表现，巩固核心地位',
        '主动承担更多战略性项目和责任',
        '发挥专业优势，指导和培养团队成员',
        '关注行业发展趋势，保持技能前瞻性',
        '建立更广泛的内外部专业网络'
      ];
    } else if (percentage >= 60) {
      risk = 'LOW';
      probability = Math.floor(Math.random() * 15) + 20; // 20-35%
      title = '职业稳定性良好';
      description = '您的工作表现整体良好，在组织中具有一定的价值和地位。虽然存在轻微的不确定性，但总体风险可控。';
      suggestions = [
        '持续提升专业技能和核心竞争力',
        '加强跨部门协作和沟通能力',
        '主动参与重要项目，提升可见度',
        '建立良好的上下级关系',
        '保持学习态度，适应组织变化'
      ];
    } else if (percentage >= 40) {
      risk = 'MEDIUM';
      probability = Math.floor(Math.random() * 15) + 40; // 40-55%
      title = '职业稳定性一般';
      description = '您目前处于中等风险水平，在某些关键维度上需要加强。这是一个重要的职业发展转折点，需要积极行动。';
      suggestions = [
        '重点提升工作绩效和专业能力',
        '增强学习能力，掌握新技能和知识',
        '改善人际关系，提升团队协作效果',
        '主动与上级沟通，明确发展期望',
        '制定具体的职业发展计划'
      ];
    } else if (percentage >= 25) {
      risk = 'HIGH';
      probability = Math.floor(Math.random() * 15) + 60; // 60-75%
      title = '职业稳定性较低';
      description = '评估显示您面临较高的职业风险，需要立即采取有效措施改善现状。建议制定系统性的改进计划。';
      suggestions = [
        '紧急提升工作表现和专业技能',
        '积极寻求上级指导和职业发展建议',
        '改善工作态度，提高团队合作精神',
        '考虑内部转岗或职能调整机会',
        '制定详细的能力提升计划',
        '建立应急职业规划'
      ];
    } else {
      risk = 'CRITICAL';
      probability = Math.floor(Math.random() * 15) + 80; // 80-95%
      title = '职业稳定性堪忧';
      description = '评估结果表明您目前面临严重的职业风险。建议立即采取紧急措施，同时制定备选职业方案。';
      suggestions = [
        '立即与直属上级进行深度沟通',
        '寻求人力资源部门的专业指导',
        '制定紧急的能力提升和改进计划',
        '考虑寻求外部职业发展机会',
        '更新简历，准备求职材料',
        '建立职业转换的应急预案',
        '寻求职业咨询师的专业建议'
      ];
    }

    return {
      risk,
      probability,
      title,
      description,
      suggestions,
      factors
    };
  };

  // Professional color themes - Business and corporate colors
  const colorThemes = [
    'linear-gradient(135deg, #2C3E50 0%, #34495E 50%, #4A6741 100%)', // Dark Blue → Slate → Dark Green
    'linear-gradient(135deg, #34495E 0%, #2C3E50 50%, #1A252F 100%)', // Slate → Dark Blue → Darker Blue
    'linear-gradient(135deg, #4A6741 0%, #2C3E50 50%, #34495E 100%)', // Dark Green → Dark Blue → Slate
    'linear-gradient(135deg, #1A252F 0%, #2C3E50 50%, #4A6741 100%)', // Darker Blue → Dark Blue → Dark Green
    'linear-gradient(135deg, #2C3E50 0%, #4A6741 50%, #34495E 100%)', // Dark Blue → Dark Green → Slate
    'linear-gradient(135deg, #34495E 0%, #1A252F 50%, #2C3E50 100%)', // Slate → Darker Blue → Dark Blue
    'linear-gradient(135deg, #4A6741 0%, #34495E 50%, #2C3E50 100%)', // Dark Green → Slate → Dark Blue
    'linear-gradient(135deg, #2C3E50 0%, #1A252F 50%, #4A6741 100%)', // Dark Blue → Darker Blue → Dark Green
  ];

  const getBackgroundStyle = () => {
    if (screen === 'question') {
      // 让问题页面使用自己的CSS背景
      return {};
    }
    return { background: colorThemes[0] };
  };


  // 显示加载状态
  if (isValidating) {
    return (
      <div className="app loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p>正在验证激活码...</p>
        </div>
      </div>
    );
  }

  // 显示激活错误
  if (!isActivated && activationError) {
    return <ActivationError message={activationError} code={activationCode || undefined} />;
  }

  // 激活成功，显示正常应用
  return (
    <div className="app" style={getBackgroundStyle()}>
      <div className="container">
        {screen === 'start' && <StartScreen onStart={handleStart} />}
        {screen === 'question' && (
          <QuestionScreen
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
          />
        )}
        {screen === 'result' && layoffResult && (
          <ResultScreen
            layoffResult={layoffResult}
          />
        )}
        <div className="card-watermark">职场风险评估系统</div>
      </div>
    </div>
  );
}

export default App;
