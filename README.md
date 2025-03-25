# 极客园移动端

## 技术栈
* vite
* react
* react-router-dom
* typescript
* antd-mobile
* axios

## antd-mobile
* 安装
  ```bash
    npm i antd-mobile
  ```
* 使用
  ```ts
    import { Button } from 'antd-mobile';
    const App = () => {
      return (
        <Button>Hello World</Button>
      );
    }
  ```

## react-router-dom

* 安装
  ```bash
    npm i react-router-dom
  ```

## 配置路径别名
* 安装types/node
  ```bash
    npm i -D @types/node
  ```
* 修改vite.config.ts
  ```ts
    import path from 'path';
    export default defineConfig({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      }
    })
  ```
* 修改tsconfig.app.json
  ```json
    {
      "compilerOptions": {
        "baseUrl": "./",
        "paths": {
          "@/*": ["src/*"]
        }
      }
    }
  ```

## aixos
* 安装
  ```bash
    npm i axios
  ```