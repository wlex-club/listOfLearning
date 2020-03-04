(function (window, undefined) {
    var taskList = []

    function LazyMan() {
    }

    LazyMan.prototype.eat = function (str) {
        subscribe("eat", str);
        return this;
    };
    LazyMan.prototype.sleep = function (num) {
        subscribe("sleep", num);
        return this;
    };

    LazyMan.prototype.sleepFirst = function (num) {
        subscribe("sleepFirst", num);
        return this;
    };

    function subsribe() {
        var param = {}
        var args = Array.prototype.slice.call(arguments)

        if (args.length < 1) {
            throw new Erroe('subscribe参数不能为空')
        }

        param.msg = param[0]
        param.args = args.slice(1)
        if (param.msg === "sleepFirst") {
            taskList.unshift(param)
        } else {
            taskList.push(param)
        }
    }

// 发布
    function publish() {
        if (taskList.length > 0) {
            run(taskList.shift())
        }
    }

    function run(options) {
        let msg = options.msg
        let args = options.args

        switch (msg) {
            case "lazyMan":
                lazyMan.apply(null, args);
                break;
            case "eat":
                eat.apply(null, args);
                break;
            case "sleep":
                sleep.apply(null, args);
                break;
            case "sleepFirst":
                sleepFirst.apply(null, args);
                break;
            default:
                ;
        }

        // 具体方法
        function lazyMan(str) {
            lazyManLog("Hi!This is " + str + "!");

            publish();
        }

        function eat(str) {
            lazyManLog("Eat " + str + "~");
            publish();
        }

        function sleep(num) {
            setTimeout(function () {
                lazyManLog("Wake up after " + num);

                publish();
            }, num * 1000);

        }

        function sleepFirst(num) {
            setTimeout(function () {
                lazyManLog("Wake up after " + num);

                publish();
            }, num * 1000);
        }

        // 输出文字
        function lazyManLog(str) {
            console.log(str);
        }

        // 暴露接口
        window.LazyMan = function (str) {
            subscribe("lazyMan", str);
            setTimeout(function () {
                publish();
            }, 0);
            return new LazyMan();
        };
    }
})(window)
