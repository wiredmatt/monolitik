#!/bin/bash

# need to install node first to be able to install yarn (as at prebuild no node is present yet)
if node -v; then
    echo 'Node already installed.'
else
    echo 'Installing node...'
    curl --silent --location https://rpm.nodesource.com/setup_16.x | sudo bash -
    yum -y install nodejs
fi

if yarn -v; then
    echo 'Yarn already installed.'
else
    echo 'Installing yarn...'
    wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
    yum -y install yarn
fi

cd /var/app/staging/

ls -lah

yarn install && yarn db build && yarn server build