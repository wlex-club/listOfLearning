严格来说，UMD并不能说是一种模块标准，不如说它是一组模块形式的集合更准确。
##### UMD的全称是Universal Module Definition，也就是通用模块标准，它的目标是使一个模块能运行在各种环境下，不论是CommonJS、AMD，还是非模块化的环境（当时ES6 Module还未被提出）
```
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('b'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.b);
    }
}(this, function (b) {
    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));
```
#### 使用UMD声明的模块会默认按照AMD的方式去打包
> UMD模块一般都最先判断AMD环境，也就是全局下是否有define函数，而通过AMD定义的模块是无法使用CommonJS或ES6 Module的形式正确引入的。
在Webpack中，由于它同时支持AMD及CommonJS，也许工程中的所有模块都是CommonJS，而UMD标准却发现当前有AMD环境，并使用了AMD方式导出，这会使得模块导入时出错。当需要这样做时，我们可以更改UMD模块中判断的顺序，使其以CommonJS的形式导出即可。
