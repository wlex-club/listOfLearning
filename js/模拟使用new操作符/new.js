function analog_new(constructor, ...rest) {
    if (typeof constructor !== 'function') {
        return constructor;
    }
    //创建新的对象,关联构造函数的原型对象
    const _constructor = Object.create(constructor.prototype);
    //执行构造函数
    const obj = constructor.apply(_constructor, rest);
    //如果构造函数执行结果是对象则返回执行结果
    if (typeof obj === 'object') {
        return obj;
    } else {
        return _constructor;
    }
};
