# website-saber

## 关于
基于 `gulp` 的自动化构建的 `CLI`。

有些项目用不到如 `webpack` 这类功能超级丰富的打包工具，它只需要简单的处理下 js、css、images、即可。

`webpack` 给我的感觉就像航空母舰一样，需要大的战场才能发挥威力。

`gulp` 就像一把瑞士军刀，它威力不大，但是灵活趁手，这也是本项目名称的由来。


## 适用场景

如果你需要开发一个品牌官网，我觉得他是最合适的，本工具创立之初就是为了开发这类业务的。

如果你并没有使用 `react`、 `vue`、 `angular` 等这些现代前端开发模式，也许 `gulp` 更合适你。


## 安装

安装到全局
```base
sudo npm install website-saber -g
```
在控制台输入 `website-saber` 将会显示一些帮助信息

执行
```base
website-saber init hello
```
会显示一系列的待输入和选项，将根据你的选择创建好一个初始项目，项目名称为 `hello` 

```base
cd hello && npm run dev
```
将会启动一个简单的静态服务器，接下来就是你上场的时候了。

## bug
有任何问题欢迎在 [issues](https://github.com/dogodo-cc/website-saber/issues) 里提给我。

## TODO
- [ ] 加入 image 的压缩处理
- [ ] 加入 html 共用模块处理
- [ ] 加入 typescript 的处理

