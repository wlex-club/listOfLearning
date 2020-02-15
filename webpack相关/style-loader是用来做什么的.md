> webpack不仅有打包功能，还能对项目中各种文件按照我们的需求进行处理，这就用到了loader，
所谓loader就是集成到webpack的文件处理方法，这些loader在webpack打包过程中，可以对指定类型的文件进行相应的处理，
比如把less语法转换成浏览器可以识别的css语法，引入特定类型的文件（html）等等。下面将介绍一下一系列常用的loader

```asm
npm install --save-dev style-loader css-loader
```
```asm
// webpack.config.js
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/output',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
```

#### css-loader和style-loader是干什么用的呢
css-loader使你能够使用类似@import和url（…）的方法实现require的功能，style-loader将所有的计算后的样式加入页面中，
二者组合在一起使你能够把样式表嵌入webpack打包后的js文件中

我们这样配置后，遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”“url”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），
最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。
需要注意的是，loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。
因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）

> css-loader options
  alias: 解析别名
  importLoader(@import)
  Minimize: true or false,是否开启css代码压缩，比如压缩空格不换行。
  modules：是否开启css-modules
