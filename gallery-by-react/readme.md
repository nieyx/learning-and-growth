## react画廊项目的构建

###  安装项目构建工具
+ yeoman
> npm install -g yo
>
> yo --version

+ generator-react-webpack
> npm install -g generator-react-webpack
>
> npm ls -g --depth:1 2>/dev/null | grep generator-
> 
> npm ls -g 查看全局安装的所有包
>
> --depth:1 忽略包之间的依赖，一行显示
>
> 2>/dev/null 将错误信息重定向到dev／null文件中
>
> grep generator- 抓取generator文件


### 运行项目
> npm start 
> 
> 在浏览器输入http://localhost:8000/webpack-dev-server/


