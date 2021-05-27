# develop

This is created from master. All of the changes should be merged back into master.

## Feature branches
**1. Creating a feature branch**
```
git checkout -b feature/routine develop
```

**2. Incorporating a finished feature on develop**
* Switch to branch 'develop'
```
git checkout develop
```
* Update
```
git merge --no-ff feature/routine
```
* Delete feature branch
```
git branch -d feature/routine
```
* Push
```
git push origin develop
```

## References
* https://nvie.com/posts/a-successful-git-branching-model/
