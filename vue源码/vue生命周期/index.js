new Vue()/**创建vue对象**/
->
beforeCreate()
/**创建vue实例前的钩子函数**/

const throttle = (fn, t) => {
    let time = null
    if (time) {
        clearTimeout(time)
    }
    return setTimeout(() => {
        fn.apply(fn, arguments)
    }, t)
}
