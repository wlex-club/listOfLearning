class Man {
    constructor(name) {
        this.name = name
    }

    consoleName() {
        console.log(this.name)
    }
}

class Factory {
    static create(name) {
        return new Man(name)
    }
}

Factory.create('yck').consoleName()

export function createComponent (
    Ctor: Class<Component> | Function | Object | void,
    data: ?VNodeData,
    context: Component,
    children: ?Array<VNode>,
    tag?: string
): VNode | Array<VNode> | void {
    // 逻辑处理...
    const vnode = new VNode(
        `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,
        data, undefined, undefined, undefined, context,
        { Ctor, propsData, listeners, tag, children },
        asyncFactory
    )

    return vnode
}
