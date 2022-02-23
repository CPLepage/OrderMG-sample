# OrderMG-sample
OrderMG sample setup. Fork, Copy or Clone this project to start your journey!  
Keep your own setup **private** as much as possible. That way you won't end up by publicly
put private keys on the internet. Try to keep this current project as an upstream so you can merge
changes whenever.

## Forking from GitHub to GitLab

*source: https://stackoverflow.com/a/52954199*

1. First make an empty repository in GitLab and clone it to your computer.
```
git clone https://gitlab-instance-url/your-project.git
cd your-project
```
2. Then add this project as the "upstream" remote with.
```
git remote add upstream https://github.com/CPLepage/OrderMG-sample.git
```
3. Now you can fetch and pull from the upstream when there is any changes.
```
git pull upstream main
```
4. Create **your** main branch and your first commit.
```
git switch -c main
git commit -m "first commit"
```
5. Finally, push back to your own GitLab repository.
```
git push -u origin main
```
