function Promise(executor) {
    let self = this;
    self.value = undefined;
    self.reason = undefined;
    self.status = 'pending';

    self.onFulFilledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'resolved'

            self.onFulFilledCallbacks.forEach(onFulFilled => {
                onFulFilled(self.value)
            });
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onRejectedCallbacks.forEach(onRejected => {
                onRejected(self.reason)
            });
        }
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error)
    }
}

Promise.prototype.then = function (onFulFilled, onRejected) {
    if (this.status === 'pending') {
        this.onFulFilledCallbacks.push(() => {
            onFulFilled(this.value)
        });
        this.onRejectedCallbacks.push(() => {
            onRejected(this.reason)
        })
    } else if (this.status === 'resolved') {
        onFulFilled(this.value);
    } else if (this.status === 'rejected') {
        onRejected(this.reason);
    }
}
