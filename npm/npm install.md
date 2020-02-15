> 执行npm install命令：
1. ① 发出 npm install 命令
2. ② 查询node_modules目录之中是否已经存在指定模块，若存在，不再重新安装
3. ③ 若不存在，npm 向 registry 查询模块压缩包的网址
4. ④ 下载压缩包，存放在根目录下的.npm目录里
5. ⑤ 解压压缩包到当前项目的node_modules目录注意： 一个模块安装以后，本地其实保存了两份。
一份是.npm目录下的压缩包，另一份是node_modules目录下解压后的代码。
但是，运行npm install 的时候，只会检查node_modules目录，而不会检查.npm目录。
也就是说，如果一个模块在.npm下有压缩包，但是没有安装在node_modules目录中，npm 依然会从远程仓库下载一次新的压缩包

#### 五、npm update
如果想更新已安装模块，就要用到 npm update 命令。
它会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装。

