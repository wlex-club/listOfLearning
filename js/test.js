setTimeout(()=>{
    console.log('setTimeout')
})

new Promise(()=>{
    console.log('promise')
}).then(()=>{
    console.log('then')
})
console.log('console')
