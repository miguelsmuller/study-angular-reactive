# **WORKFLOW**
## 🔼 **Features** 
### **Start Feature**  
```bash
git checkout -b feature/{X} develop
```

### **Finish Feature**
```bash
# Bring code to develop
git checkout develop
git merge --squash feature/{X}
git commit

# Send to remote
git push -u origin develop

# Delete unnecessary branches
git branch -D feature/X
git push origin --delete feature/{X}
```

<br/>

## ☑️ **Releases** 
### **Start Release**  
*Update version numbers (package.json and changelog.md)*
```bash
git checkout -b release/{X.0.0} develop
```

### **Finish Release**
```bash
# Bring code to develop
git checkout develop
git merge --squash release/{X.0.0}
git commit

# Send to remote
git push -u origin develop

# Bring code to master branch
git checkout master
git merge develop

# Tag a Branch
git tag -a {X.0.0} -m '{X.0.0}'

# Send to remote
git push -u origin master
git push --tags origin

# Then delete branches as needed
git branch -D release/{X.0.0}
git push origin --delete release/{X.0.0}
```

<br/>

## 🔄 **Hotfixes** 
### **Start Hotfix**
```bash
git checkout -b hotfix/{0.0.X} master
```

➡️ *Remember update version (package.json and changelog.md)* ⬅️

### **Finish Hotfix** 
```bash
# Bring code to develop
git checkout develop
git merge --squash hotfix/{0.0.X}
git commit

# Send to remote
git push -u origin develop

# Bring code to master branch
git checkout master
git merge develop

# Tag a Branch
git tag -a {0.0.X} -m '{0.0.X}'

# Then delete branches as needed
git branch -D hotfix/{0.0.X}
git push origin --delete hotfix/{0.0.X}
```
