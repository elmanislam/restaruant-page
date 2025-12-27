Run these commands on a new branch to deploy

git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin {your_branch}
git checkout main
