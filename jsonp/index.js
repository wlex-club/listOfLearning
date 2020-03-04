/**
 * 原理是：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。
 * 由于同源策略的限制，XmlHttpRequest只允许请求当前源（域名、协议、端口）的资源，为了实现跨域请求，可以通过script标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求。
 * 优点是兼容性好，简单易用，支持浏览器与服务器双向通信。缺点是只支持GET请求。
 * JSONP：json+padding（内填充），顾名思义，就是把JSON填充到一个盒子里
 * **/

function createJs(sUrl) {
    var oScript = document.createElement('script')
    oScript.type = "text/javascript"
    oScript.src = sUrl
    document.getElementsByTagName('head')[0].appendChild(oScript)
}

createJs('json.js')

box({
    'name': 'test'
})

function box(json) {
    alert(json.name)
}

const replaceStr = (str) => {
    return str.replace(/ /g, '%20')
}

