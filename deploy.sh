#!/usr/blin/env sh

set -e

npm run build

cd dist

git init 
git add -A
git commit -m "New Deployment"
git push -f git@github.com:luvenan/luisa-portfolio.git master:gh-pages

cd -