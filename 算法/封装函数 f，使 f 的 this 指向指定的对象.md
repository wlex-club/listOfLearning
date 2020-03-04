`
function bindThis(f, oTarget) {
    let args = Array.prototype.slice.call(arguments, 2);
    return function(){
        return f.apply(oTarget, Array.prototype.slice.call(arguments).concat(args));
    }
}
`