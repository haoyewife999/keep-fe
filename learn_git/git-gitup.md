# Learn Git 
## 介绍命令
**mkdir [名字]**
**cd [名字]**
创建空目录

**pwd**
显示当前目录

**ls**
显示当前文件夹中的文件目录

**git init**
把目录变成仓库

**vi [文件名]**
编写文件

**git add [文件名]**
把文件添加到仓库

**git commit -m"[说明]"**
把文件提交到仓库

**git status**
查看仓库当前状态

**git diff [文件名]**
显示修改

**git log**
显示提交记录

**git reset --hard HEAD^(or HEAD~[数字])**
回退到上一（几）个版本

**git reset --hard [版本号]**
穿梭到某一版本

**cat [文件名]**
查看文件内容

**git reflog**
显示命令历史

**git braanch**
查看分支

**git checkout --[文件名]**
把文件在工作区的修改全部撤销
* 修改后未放入暂存区（未git add）
  回到和版本库一样的状态
* 放入暂存区后又作的修改
  回到添加到暂存区后的状态
  
（git checkout 即用版本库的版本替换工作区的版本）

**git reset HEAD [文件名]**
把暂存区的修改撤销掉（已git add），并重新放入工作区 
再用git checkout，同上

**git log --graph**
看到分支合并图

## 介绍概念
**工作区（Working Directory）**
在电脑里能看到的目录

**版本库（Repository）**
工作区里的隐藏目录[.git]
git的版本库里存了很多东西，其中最重要的就是称为stage（或index）的暂存区，还有git为我们创建的第一个分支[master],以及指向[master]的分支[head]。

## GitHub
**git remote add origin git@github.com:[hub名]/[文件名].git**
关联远程库

**git push -u origin master**
第一次推送master分支所有内容

**git clone git@github.com:[hub名]/[文件名].git**
克隆远程库

## 分支
**创建分支**
git branch [分支名]

**切换分支**
git checkout/switch [分支名]

**创建+切换分支**
git checkout -b [分支名]/git switch -c [分支名]

**合并分支**
git merge [分支名]

**删除分支**
git branch -d [分支名]

**分支冲突**
git 合并时必须首先解决冲突，即把git合并失败的文件手动编辑，再提交。

* master分支是非常稳定的，仅用来发布新版本，平时不能在上面干活
* dev分支用来干活，发布时把dev分支合并到master上
* 工作时每人都有自己的分支，时不时往dev 上合并


