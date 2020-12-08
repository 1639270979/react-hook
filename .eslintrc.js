module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: [ //定义文件继承的子规范
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
  ],
  plugins: [ //定义了该eslint文件所依赖的插件
      '@typescript-eslint',
      'react-hooks' // react官方发布的hook插件
  ],
  settings: { //自动发现React的版本，从而进行规范react代码
      react: {
          "pragma": "React",
          "version": "detect"
      }
  },
  parserOptions: { //指定ESLint可以解析JSX语法
      ecmaVersion: 2019,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      }
  },
  rules: {
      camelcase: "off",
      "@typescript-eslint/camelcase": [
          0, 
          { 
              "properties": "never", 
              "ignoreDestructuring": true, 
              'genericType': 'never'
          }
      ],
      semi: "off",
      "@typescript-eslint/no-var-requires": [0], // 忽略不允许使用require来引入模块的规则
      "@typescript-eslint/triple-slash-reference": [ 0 ],
      "@typescript-eslint/semi": ["error", "never"], // 禁止使用分号
      "@typescript-eslint/explicit-function-return-type": "off", // 不用显示声明返回值
      '@typescript-eslint/no-explicit-any': "off", // 允许any
      '@typescript-eslint/interface-name-prefix': "off", //interface
      "no-console": "off", // 允许console
      '@typescript-eslint/no-empty-function': [
          "error", 
          { "allow": [ "private-constructors", "arrowFunctions" ] }
      ],
      "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
      "react-hooks/exhaustive-deps": "warn", // 检查 effect 的依赖
      "@typescript-eslint/no-use-before-define": [
          "error", 
          { 
              "functions": false,
              "variables": false
          }
      ], // 不强制function一定要声明在前
      "@typescript-eslint/no-this-alias": [
          "error", 
          {
              allowDestructuring: true, // Allow `const { props, state } = this`; false by default
              allowedNames: ['self', '_this'], // Allow `const self = this`; `[]` by default
          },
      ],
      "react/prop-types": [
          "enabled",
          { "ignore": "ignore", "customValidators": "customValidator" }
      ]
  },
  env: { //指定代码的运行环境
      browser: true,
      node: true,
  }
}
