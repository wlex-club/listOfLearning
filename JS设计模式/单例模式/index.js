var Singleton = function () {
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = function () {
    return this.name
}

/// instance of if(thsi.instance){ this.instance = new Singleton(name)}

function getInstance(name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

var a = new Singleton("aa")
var b = new Singleton("bb")

console.log(a === b); // true


// 单体模式
var CreateDiv = function () {
    this.html = html
    this.init()
}

CreateDiv.prototype.init = function () {
    var div = document.createElement("div")
    div.innerHTML = this.html;
    document.body.appendChild(div)
}

var ProxyMode = (function () {
    var instance
    return function (html) {
        if(!instance){
            instance = new CreateDiv("测试")
        }
        return instance
    }
})()

var a  = new ProxyMode("aaa")
var b = new ProxyMode("bbb")
