import React from 'react';
import { LayoffResult } from '../types';
import './ResultScreen.css';

interface ResultScreenProps {
  layoffResult: LayoffResult;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  layoffResult,
}) => {
  
  // 根据风险等级设置专业的颜色和图标
  const getRiskStyle = () => {
    switch (layoffResult.risk) {
      case 'SAFE':
        return {
          gradient: 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
          primary: '#27AE60',
          icon: '✓'
        };
      case 'LOW':
        return {
          gradient: 'linear-gradient(135deg, #3498DB 0%, #5DADE2 100%)',
          primary: '#3498DB',
          icon: '↗'
        };
      case 'MEDIUM':
        return {
          gradient: 'linear-gradient(135deg, #F39C12 0%, #F7DC6F 100%)',
          primary: '#F39C12',
          icon: '⚠'
        };
      case 'HIGH':
        return {
          gradient: 'linear-gradient(135deg, #E74C3C 0%, #EC7063 100%)',
          primary: '#E74C3C',
          icon: '⚡'
        };
      case 'CRITICAL':
        return {
          gradient: 'linear-gradient(135deg, #C0392B 0%, #E74C3C 100%)',
          primary: '#C0392B',
          icon: '⚠'
        };
      default:
        return {
          gradient: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
          primary: '#2C3E50',
          icon: '?'
        };
    }
  };

  const style = getRiskStyle();

  return (
    <div className="result-screen">
      {/* 裁员风险展示 */}
      <div className="layoff-risk-banner">
        <div className="risk-showcase" style={{ background: style.gradient }}>
          <div className="risk-icon">{style.icon}</div>
          <div className="risk-percentage">{layoffResult.probability}%</div>
          <div className="risk-title">{layoffResult.title}</div>
        </div>
      </div>

      {/* 结果描述 */}
      <div className="result-description">
        <div className="risk-description">
          <p className="risk-desc">{layoffResult.description}</p>
        </div>

        {/* 各因子得分统计 */}
        <div className="factors-section">
          <h3 className="section-title">📊 各维度评分</h3>
          <div className="factors-stats">
            {Object.entries(layoffResult.factors).map(([key, value]) => {
              const factorNames = {
                performance: '工作表现',
                attitude: '工作态度',
                skill: '技能水平',
                cost: '成本考量',
                relationship: '人际关系',
                adaptability: '适应能力',
                leadership: '领导力',
                innovation: '创新能力'
              };
              
              const percentage = (value / 10) * 100; // 假设最高分是10
              
              return (
                <div key={key} className="factor-stat-item">
                  <div className="factor-stat-label">
                    <span className="factor-name">{factorNames[key as keyof typeof factorNames]}</span>
                    <span className="factor-score">{value}/10</span>
                  </div>
                  <div className="factor-progress">
                    <div className="progress-track"></div>
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${percentage}%`,
                        background: style.gradient 
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 改进建议 */}
        <div className="suggestions-section">
          <h3 className="section-title">💡 改进建议</h3>
          <div className="suggestions-list">
            {layoffResult.suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                <span className="suggestion-bullet">•</span>
                <span className="suggestion-text">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 风险等级说明 */}
        <div className="risk-levels-section">
          <h3 className="section-title">📋 风险等级说明</h3>
          <div className="risk-levels">
            <div className="risk-level-item safe">
              <span className="level-icon">🛡️</span>
              <span className="level-name">安全 (0-20%)</span>
              <span className="level-desc">工作非常稳定</span>
            </div>
            <div className="risk-level-item low">
              <span className="level-icon">😊</span>
              <span className="level-name">低风险 (21-40%)</span>
              <span className="level-desc">相对安全</span>
            </div>
            <div className="risk-level-item medium">
              <span className="level-icon">⚠️</span>
              <span className="level-name">中等风险 (41-60%)</span>
              <span className="level-desc">需要注意</span>
            </div>
            <div className="risk-level-item high">
              <span className="level-icon">🚨</span>
              <span className="level-name">高风险 (61-80%)</span>
              <span className="level-desc">需要改进</span>
            </div>
            <div className="risk-level-item critical">
              <span className="level-icon">💀</span>
              <span className="level-name">极高风险 (81-100%)</span>
              <span className="level-desc">非常危险</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
