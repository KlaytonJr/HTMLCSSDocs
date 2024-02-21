#!/usr/bin/env sh
set -e
npm run docs:build
cd src/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:KlaytonJr/HTMLCSSDocs.git main:gh-pages
cd -