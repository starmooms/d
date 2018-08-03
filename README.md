
`git pull origin master --allow-unrelated-histories` 合并两个没有相同提交的项目

### typescript 支持
`ts-loader` `typescript` 本地安装(PS：typescript之前已全局安装)
tsconfig.json  配置

### Vue支持typescript
`vue-property-decorator`  (或者直接用`vue-class-component`)

建立一个根目录 *.d.ts     编辑器才不会报错找不到模块
``` js
declare module "*.vue" {
     import Vue from 'vue'
     export default Vue
}
```