/**
 * tre stati
 * 1) working directory (dove lavori)
 * git add
 * 2) staging area
 * git commit
 * 3) git directory (repository)
 * 1  -------->  2  -------->  3  ------> 1
 *    (git add)    (git commit)   (checkout)
 *
 * git init: per inizializzare con git
 * git add: per aggiungere
 * git status: per vedere in quale di quei tre stati stà il tuo git
 *
 * git push:
 * git pull:
 * git clone: fai una copia
 *
 * git add.: mette tutto in staging area
 * git commit: fa una specie di foto e lo mette nell'header
 * git log: lista di tutti i commit
 * git checkout bbce9131012384ef15c2e3af406b8000cf0465e1: ti permette di andare
 * a quel commit
 * git ignore: tutti i file che non saranno versionti (per es: token)
 * tutto ha soluzione in git tranne se digiti "git checkout ." (PERICOLOSO)
 *
 *
 * problemi che puoi riscontrare:
 * quando modifichi il master e non fai il commit e poi ti sposti ad un branch figlio develop
 * git branch nomeBranch: creazione del branch
 * git checkout nomeBranch: per spostarti a quel branch
 * git chekout -b nomeBranch: crei e ti sposti al branch contemporaneamente
 * git merge: unire le modifiche del branch1 al branch2 (per es. master o develop)
 * git checkout branch1
 * git merge branch2
 *
 * problemi al merge:
 * conflitto: lo mette insieme pero con conflitti
 * soluzione: fare un pull Request e chiede la revisione delle persone che ha lavorato per sapere con quale versione rimanere
 *
 *
 *
 */
