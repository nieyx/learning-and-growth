### git shortcut 

#### git的学习

+ git add -- 将文件提交到暂存区域
	- **git add -A** -- 提交全部文件
+ git commit -m ‘文件提交的注释’ -- 将文件提交到工作区
+ git status -- 查看当前文件的状态
+ git push -- 将工作区的代码push到远程的仓库
+ git pull -- 将远程的代码与本地的同步
	- 当git push文件时，如果失败，可能是本地的版本和远程仓库的版本不一致
	- 解决方法：
		* 先git pull，将原称仓库中的内容同步到本地
		* 然后查看冲突的内容，
		* 修改文件后 ，在使用git push

+ git log 查看最近几次提交的版本
	- 推出git log,输入**q**
	- 文件的log信息太多，使用git log --pretty=oneline，让log信息一行显示

+ git reset --hard [commit id] 回退到指定的id版本
