import Vue from 'vue'
import "es6-promise"
import App from './app.vue'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'

new Vue({
    el: "#app",
    components: { App },
    render(h) {
        return h('App')
    }
})


