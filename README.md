# 🔥 裁员概率测试

一个有趣的职场风险评估工具，通过科学的测试帮你了解自己被裁员的概率。

## ✨ 特性

- 🎯 **科学评估**: 基于8个关键维度进行专业分析
- 📊 **精准预测**: 给出详细的风险概率和等级
- 💡 **改进建议**: 提供针对性的职场提升建议
- 🎨 **精美界面**: 现代化的UI设计，流畅的用户体验
- 📱 **响应式**: 完美适配各种设备

## 🧪 测试维度

1. **工作表现** - 你的工作完成质量和效率
2. **工作态度** - 你对工作的积极性和配合度
3. **技能水平** - 你的专业技能和学习能力
4. **成本考量** - 你的薪资性价比和可替代性
5. **人际关系** - 你在团队中的人缘和沟通能力
6. **适应能力** - 你对变化和新事物的适应性
7. **领导力** - 你的影响力和带队能力
8. **创新能力** - 你的创新思维和改进贡献

## 🚀 技术栈

- React 18 + TypeScript
- Vite 构建工具
- CSS3 动画和渐变
- 响应式设计

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
