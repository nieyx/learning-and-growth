### git shortcut 

#### git的学习

#### 什么是git
分布式版本管理控制系统

#### git的快捷键

+ git add -- 将工作区的文件提交到暂存区域
	- **git add -A** -- 提交全部文件
+ git commit -m ‘文件提交的注释’ 
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
+ git diff HEAD -- filename -- 将当前工作区内容与版本库的文件作比较

+ git checkout -- filename : 删除工作区的修改内容
+ git reset HEAD filename 
	 - 将文件git add 添加到了暂存区，先通过git reset HEAD撤销秋改
	 - 在使用git checkout -- filename 来撤销工作区的内容

+ git rm filename 
	- 在本地删除了文件，或者用rm filename之后
		* 没有没有git commit ，此时使用git checkout -- filename，回恢复文件
		* 若是使用git rm ，git commit ，则只能使用git log，查看commit id ，然后会退到上一个版本

+ git checkout -b [branchName]
	- git checkout -b dev创建分支并切换到分支，分支名称为dev
	- 当前HEAD指向了dev分支
	- git checkout -b dev 
		* 此行代码相当于下面两行
		* git branch dev  // 创建dev分支
		* git checkout dev // 切换dev分支

+ git branch [branchName]
	- git branch // 查看分支
	- git branch dev // 创建dev分支
	- git branch -d dev // 删除dev分支
	- git branch -D dev // 强行删除没有merge的分支

+ git checkout dev // 切换分支

+ git merge dev 
	- git merge dev // 合并分支
	- 如果merge时候，出现冲突，根据文件中所提示的内容，作修改后再提交

+ git stash
	- 保存当前分支的内容，解决其他issue之后回来继续编辑
	- git stash list // 查看stach的状态
	- git stash pop // 恢复之前编辑的内容，并删除stash内容
		* git stash apply // 恢复stash内容
		* git stash drop // 删除stash内容
	-  git stash apply stash@{0} // 多次stach，可选择恢复的内容

+ git remote
	- 查看远程仓库，默认名为origin
	- git remote -v 查看更加详细的信息

+ git config user.name ／user.email 
	- 查看当前的用户名和邮箱
	- 在 git config user.name ／user.email 后面可以加上修改的邮箱


