var fn;
(function () {
    var a = 5
    fn = function () {
        console.log(a++)
    }
})()

fn()


// 会被解析成
var fn;
var RANDOM_LAMBA_1 = {
    FormalParameterList: [],
    Scope: {fn: &fn},
    Code:`
    var a =5
    fn ={
      FormalParamterList:[],
      Code:"console.log(a++)",
      Scope:{a:&a}
    };
    return fn
    `
}

RANDOM_LAMBA_1.Call(this,[])
