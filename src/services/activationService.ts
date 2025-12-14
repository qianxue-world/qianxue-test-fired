// 激活码验证服务

interface ValidateResponse {
  isValid: boolean;
  message: string;
  expiresAt: string | null;
  validationCount?: number;
  remainingValidations?: number;
}

interface SavedActivation {
  code: string;
  expiresAt: string;
  validatedAt: string;
}

const API_URL = 'https://api.qianxue.online/api/activation/validate';
const STORAGE_KEY = 'layoff_test_activation';

export const ActivationService = {
  // 从URL路径获取激活码 (格式: /CODE_123456)
  getActivationCodeFromURL(): string | null {
    const pathname = window.location.pathname;
    // 移除开头的斜杠，获取激活码
    const code = pathname.replace(/^\//, '');
    if (code && code.length > 0 && code !== '/') {
      return code;
    }
    return null;
  },

  // 检查是否为开发环境
  isDevelopmentMode(): boolean {
    const hostname = window.location.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1';
  },

  // 从本地存储获取已保存的激活码
  getSavedActivationCode(): SavedActivation | null {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return null;
      
      const activation: SavedActivation = JSON.parse(saved);
      
      // 检查是否过期
      if (new Date(activation.expiresAt) < new Date()) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      
      return activation;
    } catch {
      return null;
    }
  },

  // 保存激活码到本地存储
  saveActivationCode(code: string, expiresAt: string): void {
    const activation: SavedActivation = {
      code,
      expiresAt,
      validatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activation));
  },

  // 清除保存的激活码
  clearActivationCode(): void {
    localStorage.removeItem(STORAGE_KEY);
  },

  // 向后端验证激活码
  async validateActivationCode(code: string): Promise<ValidateResponse> {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data: ValidateResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Activation validation error:', error);
      return {
        isValid: false,
        message: '网络错误，请检查网络连接后重试',
        expiresAt: null
      };
    }
  }
};
