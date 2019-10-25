#!/usr/bin/env sh

# 终止一个错误
set -e

# 提交的文本
_by="[circleci]"

if [ "$1" != "" ]; then
    _by="[$1]"
fi

# 构建
npm i
npm run build

# 拷贝 circleci 配置文件
cp -r .circleci docs/.vuepress/dist

# 进入生成的构建文件夹
cd docs/.vuepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.email "ileeyi@qq.com"
git config user.name "aweleey"
git add -A
git commit -m "$_by deploy commit at $(date '+%Y-%m-%d %T')"

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:aweleey/aweleey.github.io.git master:master

cd -
