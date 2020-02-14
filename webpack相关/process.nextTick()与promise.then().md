```
process.nextTick(function(){
    console.log(7);
});

new Promise(function(resolve){
    console.log(3);
    resolve();
    console.log(4);
}).then(function(){
    console.log(5);
});

process.nextTick(function(){
    console.log(8);
});
// 执行结果:3 4 7 8 5
```

process.nextTick 永远大于 promise.then，原因其实很简单。。。在Node中，_tickCallback在每一次执行完TaskQueue中的一个任务后被调用，而这个_tickCallback中实质上干了两件事：
1.nextTickQueue中所有任务执行掉(长度最大1e4，Node版本v6.9.1)
2.第一步执行完后执行_runMicrotasks函数，执行microtask中的部分(promise.then注册的回调)
所以很明显 process.nextTick > promise.then
