function map() {
    let items = {}
    this.size = 0
    this.has = function (val) {
        return items.hasOwnProperty(val)
    }
    this.set = function (key, val) {
        items[key] = val
        this.size++
    }
}
