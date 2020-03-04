/// 手写call
Function.prototype.myCall = function(context = window, ...args) {
    context = context || window; // 参数默认值并不会排除null，所以重新赋值
    context.fn = this; // this是调用call的函数
    const result = context.fn(...args);
    delete context.fn; // 执行后删除新增属性
    return result;
}

/// 手写apply：
Function.prototype.myApply = function(context = window, args = []) {
    context = context || window; // 参数默认值并不会排除null，所以重新赋值
    context.fn = this; // this是调用call的函数
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

/// 手写bind
Function.prototype.myBind = function(context, ...args) {
    const _this = this;
    return function Bind(...newArgs) {
        // 考虑是否此函数被继承
        if (this instanceof Bind) {
            return _this.myApply(this, [...args, ...newArgs])
        }
        return _this.myApply(context, [...args, ...newArgs])
    }
}