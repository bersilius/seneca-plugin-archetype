#!/bin/bash
testBaseDir=${HOME}/tmp
destDir=${testBaseDir}/test-seneca-plugin
cwd=`pwd`
echo Executing kickoff -a .kickoff.test.yml -f . -d destDir
rm $destDir -r
kickoff -a .kickoff.test.yml -f . -d $destDir
cd $destDir
npm install
npm run test
npm run lint
cd $cwd
