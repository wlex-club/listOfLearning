/// bind commit and dispatch to self
const store = this

const {dispatch, commit} = this

this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload)
}

this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options)
}

let hidemodel = function (sex, clo) {
    this.sex = sex
    this.clo = clo
}

hidemodel.prototype.wearclo = function () {
    console.log(this.sex + 'shichaun' + this.clo)
}

for (let i = 0; i < 100; i++) {
    let model = new hidemodel('male', 'di' + i + 'nanzhuang')
    model.wearclo()
}

/// 享元模式则只需要男女各一名，试穿所有的衣服

var HireModel = function (sex) {
    this.sex = sex
}

HireModel.prototype.wearClothes = function (clothes) {
    console.log(this.sex + "wear" + clothes)
}

var ModelFactory = (function () {
    var cacheObj = {}
    return {
        create: function (sex) {
            if (cacheObj[sex]) {
                return cacheObj[sex]
            } else {
                cacheObj[sex] = new HireModel(sex)
                return cacheObj[sex]
            }
        }
    }
})()
/// 管理
var ModelManager = (function () {
    var vessel = {}
    return {
        add: function (sex, clothes, id) {
            var model = ModelFactory.create(sex)
            vessel[id] = {
                model: model,
                clothes: clothes
            }
        },
        wear:function () {
            for(var key in vessel){
                vessel[key]['model'].wearClothes(vessel[key]['clothes'])
            }
        }
    }
})()

for(var i=0;i<100;i++){
    ModelManager.add('male','第'+i+'款男衣服',i);
    ModelManager.add('female','第'+i+'款女衣服',i);
}
ModelManager.wear();

