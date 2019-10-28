# git index-pack failed

```sh
# 首先，关闭压缩：
$ git config --global core.compression 0

# 接下来，让我们做一个部分克隆，以截断下来的信息量：
$ git clone --depth 1 <repo_URI>

# 当它工作时，进入新目录并检索其余的克隆：
$ git fetch --unshallow

# 或者
$ git fetch --depth=2147483647

# 现在，做一个定期拉：
$ git pull --all
```
