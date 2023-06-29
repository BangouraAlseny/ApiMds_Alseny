# API RESTful

Cette API est RESTful,et suive les principes d'architecture de Richardson.

## Principe 1 : Adresses URL significatives

Chaque ressource dans cette API est accessible via une URL unique et significative, ce qui facilite la compréhension de l'API et la navigation entre les ressources. Par exemple :

- `/films` : Renvoie tous les films disponibles.
- `/films/{id}` : Renvoie un film spécifique en fonction de son ID.

## Principe 2 : Utilisation appropriée des verbes HTTP

Les verbes HTTP sont utilisés de manière appropriée pour les opérations CRUD (Create, Read, Update, Delete) :

- `GET` : Utilisé pour récupérer des données. Par exemple, `GET /films` renvoie tous les films.
- `POST` : Utilisé pour créer une nouvelle ressource. Par exemple, `POST /films` crée un nouveau film.
- `PUT` : Utilisé pour mettre à jour une ressource existante. Par exemple, `PUT /films/{id}` met à jour un film spécifique.
- `DELETE` : Utilisé pour supprimer une ressource existante. Par exemple, `DELETE /films/{id}` supprime un film spécifique.

## Principe 3 : Utilisation des codes de statut HTTP

Les codes de statut HTTP sont utilisés pour indiquer le résultat d'une requête. Voici quelques exemples :

- `200 OK` : La requête a réussi et les données demandées sont renvoyées.
- `201 Created` : Une nouvelle ressource a été créée avec succès.
- `404 Not Found` : La ressource demandée n'a pas été trouvée.
- `500 Internal Server Error` : Une erreur interne du serveur s'est produite.

## Principe 4 : Hyperliens entre les ressources

Les réponses renvoyées par l'API contiennent des liens hypertexte (URL) vers d'autres ressources liées. Cela permet à l'utilisateur de naviguer facilement entre les différentes ressources de l'API.

## Principe 5 : Représentation des ressources

Les ressources sont représentées dans un format approprié tel que JSON, XML, etc. Les données renvoyées par l'API sont structurées et suivent un schéma défini pour faciliter la consommation par les clients.

