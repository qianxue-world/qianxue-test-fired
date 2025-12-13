import React from 'react';
import { questions } from '../data/questions';
import { LayoffFactor } from '../types';
import './QuestionScreen.css';

interface QuestionScreenProps {
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (factor: LayoffFactor) => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  currentQuestion,
  totalQuestions,
  onAnswer,
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  
  // 使用中文问题数据
  const questionData = questions[currentQuestion];
  
  // 获取当前问题的维度信息
  const getDimensionInfo = (factor: string) => {
    const dimensionMap = {
      'PERFORMANCE': { name: '工作绩效', color: '#3498DB' },
      'ATTITUDE': { name: '职业态度', color: '#2ECC71' },
      'SKILL': { name: '专业能力', color: '#9B59B6' },
      'COST': { name: '成本效益', color: '#E67E22' },
      'RELATIONSHIP': { name: '人际关系', color: '#1ABC9C' },
      'ADAPTABILITY': { name: '适应能力', color: '#F39C12' },
      'LEADERSHIP': { name: '领导潜力', color: '#E74C3C' },
      'INNOVATION': { name: '创新贡献', color: '#34495E' }
    };
    return dimensionMap[factor as keyof typeof dimensionMap] || { name: '综合评估', color: '#95A5A6' };
  };
  
  const currentDimension = getDimensionInfo(questionData.options[0].factor);
  
  if (!questionData) {
    return <div>Question not found</div>;
  }

  return (
    <div className="question-screen">
      <div className="question-content">
        <div className="progress-container">
          <div className="progress-header">
            <div className="progress-title">评估进度</div>
            <div className="progress-text">
              {currentQuestion + 1} / {totalQuestions}
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        
        <div className="question-container">
          <div className="question-header">
            <div className="question-number">
              问题 {currentQuestion + 1}
            </div>
            <div className="dimension-badge" style={{ backgroundColor: currentDimension.color }}>
              {currentDimension.name}
            </div>
          </div>
          <h2>{questionData.question}</h2>
          <div className="question-instruction">
            请根据您的实际情况选择最符合的选项
          </div>
          <div className="options">
            {questionData.options.map((option, index) => (
              <div
                key={index}
                className="option-btn"
                onClick={() => onAnswer(option.factor)}
              >
                <div className="option-number">{String.fromCharCode(65 + index)}</div>
                <div className="option-text">{option.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
