---
sidebar: auto
---

# git ssh 多账户配置

## 生成key
终端下 cd 到 ~/.ssh/ 目录下，执行
``` bash
ssh-keygen -t rsa -C 'ileeyi@qq.com' -f id_rsa_github_ileeyi_qq
```
其中 **`ileeyi@qq.com`** 替换为你的邮箱， **`id_rsa_github_ileeyi_qq`** 为生成文件文件名，执行后会问你是否需要 enter a passphrase， 默认一路确认就行。

## 添加公匙到账户
``` bash
# pbcopy 为 macOS 上的命令，把 pub 的内容复制到剪切板
pbcopy < ~/.ssh/id_rsa_github_ileeyi_qq.pub
```

## 添加到 ssh-agent
将新生成的key 添加到 **ssh-agent**
``` bash
ssh-agent -s
# ssh-add 这个命令不是用来永久性的记住你所使用的私钥的。
# 它的作用只是把你指定的私钥添加到 ssh-agent 所管理的一个 session 当中。
# 而 ssh-agent 是一个用于存储私钥的临时性的 session 服务。
# 也就是说当你重启之后，ssh-agent 服务也就重置了。
ssh-add ~/.ssh/id_rsa_github_ileeyi_qq
```
同时也可以通过命令 `ssh-add -l` 查看之前已添加的key。

## 创建并配置`config`文件使配置永久生效

``` bash
touch ~/.ssh/config
```

`config` 配置如下

```
Host *.github.com
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_github_ileeyi_qq
    User aweleey
    
Host *.git.oschina.net
    HostName git.oschina.net
    IdentityFile ~/.ssh/id_rsa_oschina
    User aweleey
```
## 测试
``` bash
ssh -T git@github.com
```

## 取消 git 的全局 email 和 name 配置

``` sh
git config --global --unset user.email
git config --global --unset user.name
```

> 如果出什么问题，可以通过`ssh -vT git@github.com`来输出编译信息，然后根据编译信息去解决问题

## 有可能碰到的问题
1. Could not open a connection to your authentication agent?
应该是 `ssh-agent` 没有启动，执行以下命令启动
``` bash
eval ssh-agent -s
ssh-add
```

2. Are you sure you want to continue connecting (yes/no)? `不要直接回车，默认是 no`