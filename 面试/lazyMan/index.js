/**
 * 实现一个LazyMan，可以按照以下方式调用:
 * LazyMan("Hank")输出:
 * Hi! This is Hank!
  
 * LazyMan("Hank").sleep(10).eat("dinner")输出
 * Hi! This is Hank!
 * //等待10秒..
 * Wake up after 10
 * Eat dinner~
  
 * LazyMan("Hank").eat("dinner").eat("supper")输出
 * Hi This is Hank!
 * Eat dinner~
 * Eat supper~
  
 * LazyMan("Hank").sleepFirst(5).eat("supper")输出
 * //等待5秒
 * Wake up after 5
 * Hi This is Hank!
 * Eat supper
 * **/
function Test(name) {
  this.task = [];
  let fn = () => {
    console.log(name);
    this.next();
  };
  this.task.push(fn);
  setTimeout(() => {
    this.next();
  }, 0);
  return this;
}

Test.prototype.firstSleep = function(timer) {
  console.time('firstSleep');
  let that = this;
  let fn = () => {
    setTimeout(() => {
      console.timeEnd('firstSleep');
      that.next();
    }, timer * 1000);
  };
  this.task.unshift(fn);
  return this;
};

Test.prototype.sleep = function(timer) {
  console.time('sleep');
  let that = this;
  let fn = () => {
    setTimeout(() => {
      console.timeEnd('sleep');
      that.next();
    }, timer * 1000);
  };
  this.task.push(fn);
  return this;
};

Test.prototype.eat = function(dinner) {
  let that = this;
  let fn = () => {
    console.log(dinner);
    that.next();
  };
  this.task.push(fn);
  return this;
};

Test.prototype.next = function(dinner) {
  let fn = this.task.shift();
  fn && fn();
};

new Test('test').firstSleep(3).sleep(5).eat('dinner');
