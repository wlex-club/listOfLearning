### 获取 url 中的参数
1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回数组
`
function getUrlParam(sUrl, sKey) {
    var paramArr = sUrl.split('?')[1].split('#')[0].split('&'); // 取出每个参数的键值对放入数组
    const obj = {};
    paramArr.forEach(element => {
        const [key, value] = element.split('=');  // 取出数组中每一项的键与值
        if (obj[key] === undefined) {   // 表示第一次遍历这个元素，直接添加到对象上面
            obj[key] = value
        } else {
            obj[key] = [].concat(obj[key], value); // 表示不是第一次遍历说明这个键已有，通过数组存起来。
        }
    });
    return sKey === void 0 ? obj : obj[sKey] || ''   // 如果该方法为一个参数，则返回对象。
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))
///{ key: [ '1', '2', '3' ], test: '4' }
`