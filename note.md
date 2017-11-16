
## vue-cli脚手架

搭建一套有热更新，单文件组件编译，vue-router等等的一个开发集成环境，基于webpack

package.json里配置了一些npm scripts快捷操作：

dev : 开始开发环境 == npm start

生产的时候：npm run build,打包成项目文件

build:和打包相关、服务、webpack相关的东西

static：放静态文件

src：开发目录

main.js是入口文件，在这里定义根实例

在脚手架中，我们写组件使用单文件组件的方法，一个文件就是一个组件，需要使用vue-loader来对其进行编译

App.vue 根组件，最外层的大组件

router目录 路由的配置

component 组件

assets 本地文件


---

## Vue-Router

1. 引入vue-router
2. 通过Vue.use(Router)进行启动，插件的使用都要进行这一步，
3. 通过 new Router(options)来创建路由对象

    3.1 在new Router过程中可以传入options配置选项
    3.2 通过传入routes的配置来实现路由切换，routes是路由表
    3.3 在需要进行路由切换的地方，写上 <router-view></router-view>

4. 创建好路由对象后，需要在根实例里配置上全局路由对象，目的是，这样的话，根实例会将router相关api，传入到任意一个组件中,this.$route,this.$router来使用


