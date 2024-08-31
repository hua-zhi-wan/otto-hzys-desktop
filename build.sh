#!/bin/bash

git submodule update

pushd otto-hzys || exit
git pull origin master
npm install
npm run build
popd || exit

npm install
npm run make