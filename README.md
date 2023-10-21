# labelleboucle

Application qui permet de vérifier quand un rendez-vous est disponible sur le site de la belle boucle studio Lyon.

## Comment ça marche ?

Le projet utilise playwright qui simule un utilisateur qui consulte le site de planity, et s'il n'y a pas le texte "pas de disponibilité", alors il utilise nodemail pour envoyer un email à l'adresse configurée.

Pour configurer l'adresse email, il faut avoir un serveur capable d'envoyer des emails et renseigner ces informations dans le code.

Pour démarrer automatiquement l'application, le plus simple est de mettre en place un cronjob.
