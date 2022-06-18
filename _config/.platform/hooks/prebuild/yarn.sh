#!/bin/bash

# need to install node first to be able to install yarn (as at prebuild no node is present yet)
curl --silent --location https://rpm.nodesource.com/setup_16.x | sudo bash - && yum -y install nodejs

yarn -v || (wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo && yum -y install yarn)

cd /var/app/staging/

ls -lah

yarn install

yarn db build

yarn server build

echo "Done with install and builds"