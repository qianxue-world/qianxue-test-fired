import React from 'react';
import './ActivationError.css';

interface ActivationErrorProps {
  message: string;
  code?: string;
}

export const ActivationError: React.FC<ActivationErrorProps> = ({ message, code }) => {
  return (
    <div className="activation-error">
      <div className="activation-error-content">
        <div className="error-icon">⚠️</div>
        <h1>访问受限</h1>
        <p className="error-message">{message}</p>
        
        {code && (
          <div className="error-code">
            <span>激活码: </span>
            <code>{code}</code>
          </div>
        )}

        <div className="purchase-info">
          <h2>如何获取激活码？</h2>
          <p>请关注小红书账号获取激活码</p>
          <div className="xiaohongshu-info">
            <span className="platform-icon">📕</span>
            <span className="account-name">@潜学天下</span>
          </div>
          <p className="hint">在小红书搜索"潜学天下"，私信获取激活码</p>
        </div>

        <div className="action-buttons">
          <a 
            href="https://www.xiaohongshu.com/user/profile/5f2b3c7d0000000001001234" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            前往小红书
          </a>
          <button 
            className="btn-secondary"
            onClick={() => window.location.reload()}
          >
            重新验证
          </button>
        </div>
      </div>
    </div>
  );
};
