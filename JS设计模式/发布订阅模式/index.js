/**
 * 发布订阅模式者模式，是js甚至是大多数语言都有的语言模式
 *
 * 订阅者把自己想订阅的事件注册到调度中心，当该事件出发的时候，发布者
 * 发布该事件到调度中心，由调度中心统一调度订阅者注册到调度中心的处理代码
 **/

/**
 *优点
 1.一对多。
 一个发布者可以绑定多个订阅者，当事件触发时，由调度中心全部通知。
 2.解耦。
 发布订阅者模式中，订阅者是不知道也不关心事件是为什么触发，是由哪一个事件触发，只知道事件触发时候，会告诉自己。发布者也不用一一通知，只要告诉调度中心，事件触发了就好了。所以代码松耦合。
 3.程序便于扩展。
 缺点：
 实现方式麻烦
 *
 * **/

var observer = function () {
    var _observer = {};
    let _queue = {};     // 所有事件的队列
    /**
     * @param 注册的事件名称
     * @param 事件触发时执行的函数
     */
    _observer.on = function (eventName, fn) {
        if (Object.prototype.toString.call(fn) !== '[object Function]') return;
        if (_queue[eventName] && _queue[eventName].length > 0) {
            // 如果之前注册过eventName事件
            _queue[eventName].push(fn);
        } else {
            // 之前没有注册过eventName事件
            _queue[eventName] = [fn];
        }
    },
        /**
         * @param 已经触发的事件（发布事件）
         */
        _observer.trigger = function (triggerEventName) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (!_queue[triggerEventName]) return;
            for (var i = 0; i < _queue[triggerEventName].length; i++) {
                _queue[triggerEventName][i].apply(null, args);
            }
        },
        // 移除注册事件
        _observer.remove = function (removeEventName) {
            for (var k in _queue) {
                if (k === removeEventName) {
                    delete _queue[k];
                }
            }
        }
    // 移除所有注册事件
    _observer.removeAll = function () {
        _queue = {};
    }
    return _observer;
}()
