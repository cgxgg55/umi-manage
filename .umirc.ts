/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-07-30 13:52:57
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-16 10:58:22
 */
import { defineConfig } from 'umi';
import { resolve } from 'path';
// import menusSource from './src/router';
export default defineConfig({
  title: '业务管理平台',
  hash: false,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  // 是否启用按需加载
  // dynamicImport: {},
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  // targets: {
  //   ie: 11,
  // },
  theme: {
    '@primary-color': '#1DA57A',
  },
  proxy: {
    '/api': {
      target: 'http://192.168.0.192:50000/',
      ws: true,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
