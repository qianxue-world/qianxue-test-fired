import React from 'react';
import './StartScreen.css';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-content">
        <div className="header-section">
          <h1>职场风险评估系统</h1>
          <p className="subtitle">Professional Career Risk Assessment</p>
        </div>
        
        <div className="intro-section">
          <h2>基于心理测评的职业稳定性分析</h2>
          <p className="intro-text">
            本系统采用科学的心理测评方法，结合组织行为学和人力资源管理理论，
            从多个维度客观评估您在当前职位的稳定性和发展潜力。
            通过专业的量表设计，为您提供准确的职业风险分析和发展建议。
          </p>
        </div>

        <div className="assessment-info">
          <div className="info-item">
            <div className="info-label">评估维度</div>
            <div className="info-value">8个核心指标</div>
          </div>
          <div className="info-item">
            <div className="info-label">题目数量</div>
            <div className="info-value">50道专业题目</div>
          </div>
          <div className="info-item">
            <div className="info-label">完成时间</div>
            <div className="info-value">约8-10分钟</div>
          </div>
          <div className="info-item">
            <div className="info-label">评估方法</div>
            <div className="info-value">李克特量表</div>
          </div>
        </div>

        <div className="dimensions-grid">
          <div className="dimension-card">
            <h3>科学评估</h3>
            <p>基于心理测评理论和组织行为学，从8个核心维度进行专业分析</p>
          </div>
          <div className="dimension-card">
            <h3>精准预测</h3>
            <p>结合大数据分析和专业量表，提供准确的职业风险评估</p>
          </div>
          <div className="dimension-card">
            <h3>发展建议</h3>
            <p>针对性提供职场提升建议，助力个人职业发展规划</p>
          </div>
        </div>

        <div className="disclaimer">
          <div className="disclaimer-header">
            <strong>评估说明</strong>
          </div>
          <div className="disclaimer-content">
            <p>• 本评估基于科学的心理测评理论设计，具有一定的参考价值</p>
            <p>• 结果仅供个人职业发展参考，不构成任何法律或商业建议</p>
            <p>• 请根据实际情况理性分析，建议结合多方面信息综合判断</p>
          </div>
        </div>

        <div className="start-button" onClick={onStart}>
          <span>开始专业评估</span>
        </div>
      </div>
    </div>
  );
};
