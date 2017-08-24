#!/bin/bash

set -e

# Deploy built docs from this branch
: ${DEPLOY_BRANCH:=master}

# Use this SSH key to push to github
: ${SSH_KEY:=id_rsa}

# Use this git user name in commits
: ${GIT_NAME:=travis}

# Use this git user email in commits
: ${GIT_EMAIL:=deploy@travis-ci.org}

# get and modify repo origin url if needed
REPO=$(git config remote.origin.url)
REPO=${REPO/git:\/\/github.com\//git@github.com:}
REPO=${REPO/https:\/\/github.com\//git@github.com:}

if [ -n "$TRAVIS_BUILD_ID" ]; then
  echo DEPLOY_BRANCH: $DEPLOY_BRANCH
  echo SSH_KEY: $SSH_KEY
  echo GIT_NAME: $GIT_NAME
  echo GIT_EMAIL: $GIT_EMAIL

  # if [ "$TRAVIS_BRANCH" != "$DEPLOY_BRANCH" ]; then
  if false; then
    echo "Travis should only deploy from the DEPLOY_BRANCH ($DEPLOY_BRANCH) branch"
  else
    # if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    if false; then
      echo "Travis should not deploy from pull requests"
    else
      chmod 600 $SSH_KEY
      eval `ssh-agent -s`
      ssh-add $SSH_KEY
      git config --global user.name "$GIT_NAME"
      git config --global user.email "$GIT_EMAIL"
      git remote set-url origin $REPO

      # run deploy script
      npm run deploy
    fi
  fi
fi
