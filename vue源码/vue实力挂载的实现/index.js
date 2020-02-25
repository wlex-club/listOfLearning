///vue通过$mount来挂载实例vm

const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (el) {
    el = el && query(el)
    if (el === document.body || el === document.documentElement) {
        process.env.NODE_ENV !== 'production' && warn(
            `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
        )
        return this
    }

    const options = this.$options

    if (!options.render) {
        let template = options.template
        if (template) {
            if (typeof template === 'string') {
                if (template.charAt(0) === '#') {
                    template = idToTemplate(template)
                }
            }
        } else if (template.nodeType) {
            template = template.innerHTML
        }
    }
}

parseHmtl(html,{}){

}