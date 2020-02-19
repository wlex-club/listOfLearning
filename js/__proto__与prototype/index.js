var pp = {name: 0}
var o4 = Object.create(pp)
console.log(o4)
console.log("2", o4.prototype) // undefined
console.log("2", o4.__proto__) // undefined


function test(name) {
    this.name = name
}

// 函数含有__proto__,prototype
console.log("1", test.__proto__.constructor) // [function]
console.log("2", test.prototype.constructor) // Object

/**
 * 对象含有__proto__, 不含有prototype
 * **/
let aa = {name: 2}
let b = {age: 9}
aa.__proto__ = b
console.log(typeof aa.__proto__) // object
console.log(typeof aa.prototype) // undefined


// test.__proto__ 继承自Function的prototype, 因此test.__proto__是function,也就是说__proto__要看父类的原型
test.prototype.getName = function () {
    console.log('name:是' + this.name)
}

let a = new test("99")
console.log(test.prototype)

// new的时候将a的__proto__ 指向函数test的prototype a.__proto__= test.prototype

console.log(typeof a.__proto__ === typeof test.prototype) // true
console.log(typeof a.__proto__ === typeof test.__proto__) // false
console.log(typeof test.__proto__) // 继承自[Function]的protype 是function类型
a.getName()


// 通过构造函数
var M = function(name){
    this.name = name
}
var o3 = new M('o3')

console.log(o3.__proto__) // object
console.log(o3.prototype) // undefined

