#!/bin/bash

# Navigate to the production directory
cd production

git reset --hard origin main

# Remove all files except .git and .gitignore
shopt -s extglob
rm -rf !(.git|.gitignore|api)

# Copy the contents of the /dist/ directory to /public_html/
cp -R ../.output/public/* ./

# Deploy the site
git add . && git commit -m "auto deploy" && git push -u origin main

# Exit the script
exit 0
