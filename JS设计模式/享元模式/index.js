/**
 * 什么是“享元模式”？
 * 享元模式：运用共享技术来减少创建对象的数量，从而减少内存占用、提高性能。
 * 享元模式提醒我们将一个对象的属性划分为内部和外部状态。
 * 内部状态：可以被对象集合共享，通常不会改变
 * 外部状态：根据应用场景经常改变
 * 享元模式是利用时间换取空间的优化模式。
 * **/

/// ES6
///对象池
class ObjectPool {
    constructor() {
        this._pool = []
    }

    // 创建对象
    create(obj) {
        return this._pool.length === 0
            ? new obj(this)
            : this._pool.shift()
    }

    // 对象回收
    recover(obj) {
        return this._pool.push(obj)
    }

    /// 对象池大小
    size() {
        return this._pool.length
    }
}

// 模拟文件对象
class File {
    constructor(pool) {
        this.pool = pool;
    }

    // 模拟下载操作
    download() {
        console.log(`+ 从 ${this.src} 开始下载 ${this.name}`);
        setTimeout(() => {
            console.log(`- ${this.name} 下载完毕`); // 下载完毕后, 将对象重新放入对象池
            this.pool.recover(this);
        }, 100);
    }
}

let objPool = new ObjectPool();

let file1 = objPool.create(File);
file1.name = "文件1";
file1.src = "https://download1.com";
file1.download();

let file2 = objPool.create(File);
file2.name = "文件2";
file2.src = "https://download2.com";
file2.download();

setTimeout(() => {
    let file3 = objPool.create(File);
    file3.name = "文件3";
    file3.src = "https://download3.com";
    file3.download();
}, 200);

setTimeout(
    () =>
        console.log(
            `${"*".repeat(
                50
            )}\n下载了3个文件，但其实只创建了${objPool.size()}个对象`
        ),
    1000
);
