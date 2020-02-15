工厂模式：
      工厂模式分为好集几种：
      例如：
      ```
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

      ```
      工厂模式并不仅仅是用来new出实例:
      可以想象一个场景。假设有一份很复杂的代码需要用户去调用，但是用户并不关心这些复杂的代码，只需要你提供给我一个接口去调用，用户只负责传递需要的参数，至于这些参数怎么使用，内部有什么逻辑是不关心的，只需要你最后返回我一个实例。这个构造过程就是工厂。
      
      工厂起到的作用就是隐藏了创建实例的复杂度，只需要提供一个接口，简单清晰。
      
      在 Vue 源码中，你也可以看到工厂模式的使用，比如创建异步组件:
      ```
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
      }```
      
 
