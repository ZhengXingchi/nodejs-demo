#遇到的坑
1. Missing write access to C:\Users\zhang\AppData\Roaming\npm\node_modules\create-react-app\node_modules\isarray
解决方法：
1）删除原有的node_modules文件夹，即C:\Users\zhang\AppData\Roaming\npm\node_modules
2）重新执行安装命令：npm install -g create-react-app


2.npm does not support node.js v10.15.3
`npm uninstall -g npm`  删除全局模块里面的npm



# mongodb的安装
参考[mongodb的安装和简单实用以及32-bit servers don't have journaling enabled by default. Please use --journal 错误](https://blog.csdn.net/u010214269/article/details/48024375)


加入环境变量
把`MongoDB`加入环境变量 `C:\Program Files\MongoDB\Server\3.2\bin`


配置数据库地址以及logs日志地址以及配置服务名"MongoDB"
`mongod --dbpath "D:\mongodb\Server\data"  --logpath "D:\mongodb\Server\logs\logs.txt"  --install -serviceName "MongoDB"  --journal`

`mongod --dbpath "D:\mongodb\Server\data" --storageEngine=mmapv1  --journal`
>按照它的指示：“The default storage engine 'wiredTiger' is not available with this build of mongod. Please specify a different storage engine explicitly, e.g. --storageEngine=mmapv1”，换一个storage engine。
必须指定--dbpath "D:\mongodb\Server\data"数据库地址
 

[与MongoDB的第一次亲密接触](https://segmentfault.com/a/1190000002744306)
[安装MongoDB遇到问题](https://blog.csdn.net/gebitan505/article/details/48052273)

Hotfix KB2731284 or later update is not installed(现在已经失效windows不再支持)
[Hotfix KB2731284 or later update is not installed, will zero-out data files](http://www.kriblog.com/bigdata/NoSQL/MongoDb/hotfix-kb2731284-or-later-update-is-not-installed-will-zero-out-data-files.html)
[Steps to download and install Hotfix KB2731284 for mongoDB](http://www.kriblog.com/bigdata/NoSQL/MongoDb/steps-to-download-and-install-hotfix-kb2731284-for-mongodb.html)