pub struct Property {
    // 属性是否可被删除
    pub configurable: Option<bool>,
    // 属性是否可枚举
    pub enumberable: Option<bool>,
    // 是否可被复值重写
    pub writable: Option<bool>,
    /// 与属性关联的值
    pub value: Option<Value>,
    /// getter操作
    pub get: Option<Value>,
    /// setter操作
    pub set: Option<Value>,
}


impl Property {
    /**
        IsAccessorDescriptor ( Desc )
        When the abstract operation IsAccessorDescriptor is called with Property Descriptor Desc, the following steps are taken:
        1.If Desc is undefined, return false.
        2.If both Desc.[[Get]] and Desc.[[Set]] are absent, return false.
        3.Return true.
        访问器描述符包含[[Get]],[[Set]], 定义一个属性描述符Desc的方法调用方法：IsAccessorDescriptor
    **/
    pub fn is_accessor_descriptor(&self) -> bool {
        self.get.is_some() || self.set.is_some()
    }
    /**
        When the abstract operation IsDataDescriptor is called with Property Descriptor Desc, the following steps are taken:
        If Desc is undefined, return false.
        If both Desc.[[Value]] and Desc.[[Writable]] are absent, return false.
        Return true.
    **/
    pub fn is_data_descriptor(&self) -> bool {
        self.value.is_some() || writable.is_some()
    }

    pub fn is_some(&self) -> bool {
        match *self {
            Some(_) => true,
            None() => false
        }
    }
}
