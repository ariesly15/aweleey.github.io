#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
npm i
npm run build

# 拷贝 circleci 配置文件
cp -r .circleci blog/.vuepress/dist

# 进入生成的构建文件夹
cd blog/.vuepress/dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git config --global user.email "ileeyi@qq.com"
git config --global user.name "aweleey-circleci"
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:aweleey/aweleey.git master:gh-pages

cd -