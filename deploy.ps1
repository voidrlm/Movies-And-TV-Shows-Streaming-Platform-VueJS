#!/usr/bin/env pwsh
# Deploy VueJS app to GitHub Pages


# 1. Commit and push all changes to main
git add .
git commit -m "Update source before deployment"
git push origin main

# 2. Build the project
npm run build

# 3. Push dist folder to gh-pages branch
cd dist
git init
$repo = git config --get remote.origin.url
if (-not $repo) {
    Write-Host "No remote repo found. Please set up git remote origin."
    exit 1
}
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"
git push --force $repo gh-pages:gh-pages

# Clean up
cd ..
Remove-Item -Recurse -Force dist/.git
Write-Host "Deployment complete!"
