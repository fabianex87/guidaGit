# guidaGit

comandi di git

# una piccola guida di Git

## Due modi per creare iniziare con il rrepo in github o gitlab

### I modo senza README.md

Crei il progetto in Github senza README.md
Ti sposti nella cartella di lavoro
git init
git remote add origin urlRepositoryGit
git add -A (git add .)
git commit -m "First commit."
git checkout -b feature/fabian
git push origin feature/fabian

### II modo con README.md

Crei il progetto in Github con README.md
Ti sposti nella cartella di lavoro
git init
git clone urlRepositoryGit
ti sposti nella cartella creata al fare il clone
fai le tue modifiche
git add -A (git add .)
git commit -m "First commit."
git checkout -b feature/fabian
git push origin feature/fabian
