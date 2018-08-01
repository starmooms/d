import Vue from 'vue'
import "es6-promise"
import App from './app.vue'

new Vue({
    el: "#app",
    components: { App },
    render(h) {
        return h('App')
    }
})



//typescript 支持
//ts-loader typescript 安装2个
//tsconfig.json  配置

//vue支持typescript 
//vue-property-decorator  安装1个

//声明vue
// declare module "*.vue" {
//     import Vue from 'vue'
//     export default Vue
// }