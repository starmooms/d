// declare module "*.vue" {
//     import Vue from 'vue'
//     export default Vue
// }

// declare module 'testsssjs' {
//     import testjs from 'ts_test/testjs'
//     export default testjs;
// }

//声明导出函数
declare module 'ts_test' {
    export function test(): void;
    export function msg(): void;
}
//声明导出类
declare module 'ts_test/src/lib1' {
    export class libA {
        a: number
        get(): number
        set(number): void
    }
}
//声明导出变量
declare module 'ts_test/src/lib2' {
    export const libB1: {
        A: string
        B: string
    }
    export const libB2: {
        C: string
        D: string
    }
}
// declare module 'iview' {
//     export function iview(): any;
// }
