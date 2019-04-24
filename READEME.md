#遇到的坑
1. Missing write access to C:\Users\zhang\AppData\Roaming\npm\node_modules\create-react-app\node_modules\isarray
解决方法：
1）删除原有的node_modules文件夹，即C:\Users\zhang\AppData\Roaming\npm\node_modules
2）重新执行安装命令：npm install -g create-react-app


2.npm does not support node.js v10.15.3
`npm uninstall -g npm`  删除全局模块里面的npm