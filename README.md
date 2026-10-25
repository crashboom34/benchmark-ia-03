# SÉLUNE — site vitrine (benchmark IA)

Site vitrine d'une marque fictive de café de spécialité, réalisé en **HTML5, CSS3 et JavaScript natif** — sans framework, sans bibliothèque, sans package ni backend.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure unique du site (une seule page) |
| `style.css` | Design system, mise en page responsive, animations |
| `script.js` | Menu mobile accessible, apparition au scroll, FAQ exclusive, année courante |

## Contenu

- Section d'accueil visuelle (héros + bandeau défilant)
- Trois cafés avec origines, notes de dégustation et prix indicatifs
- Engagements de la marque (4 principes)
- Abonnement mensuel « Formule Rituel »
- FAQ interactive (accordéon accessible, `<details>` natif)
- Pied de page professionnel avec coordonnées

## Accessibilité & robustesse

- Points de repère sémantiques, lien d'évitement, `aria-expanded` sur le menu
- Navigation clavier complète, états de focus visibles
- Respect de `prefers-reduced-motion` (animations désactivées)
- Affichage de repli propre si les images distantes ne chargent pas (dégradés + `onerror`)

## Images distantes

Une photographie Unsplash (licence Unsplash, usage libre) :

- `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085` — tasse de café et grains torréfiés (section d'accueil)

Les phases de lune des cartes produits sont dessinées en CSS pur, sans image. Si la photo ne se charge pas, un dégradé de repli s'affiche (`onerror`).

## Aperçu local

Ouvrir simplement `index.html` dans un navigateur (aucune étape de build).

## Mention

Marque **fictive** créée pour un benchmark de développement web : aucun achat, paiement ou commande réel n'est possible. Les prix sont indicatifs.
