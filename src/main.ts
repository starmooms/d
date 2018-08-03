/// <reference path="./sfc.d.ts" />
import Vue from 'vue'
import "es6-promise"
import App from './app.vue'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import { test, msg } from 'ts_test'
import { libA } from 'ts_test/src/lib1'
import { libB1, libB2 } from 'ts_test/src/lib2'

new Vue({
    el: "#app",
    components: { App },
    render(h) {
        return h('App')
    }
})


//1
test()
msg()

//2
let testlibA = new libA()
console.log(testlibA.get())
testlibA.set(444)
console.log(testlibA.get())

//3
console.log(libB1)
console.log(libB2)


// https://blog.csdn.net/letterTiger/article/details/80596369


