# Frontend Mentor - Sunnyside agency landing page

## Présentation
Ce projet est une intégration de landing page réalisée sur mon temps libre. Ce challenge m'a permis de travailler spécifiquement sur la mise en page asymétrique et la gestion des grilles d'images responsives.

**Démo en ligne :** [Sunnyside](https://marchandbaptiste.github.io/sunnyside-agency-landing-page/)]

## Objectifs du projet
* Maîtriser l'alternance de contenu (texte/image) en utilisant les propriétés d'ordre de Flexbox ou Grid.
* Créer une galerie d'images parfaitement responsive.
* Implémenter une navigation mobile fonctionnelle avec un menu toggle.

## Technologies utilisées
* **HTML5** : Structure sémantique pour le SEO et l'accessibilité.
* **CSS3** : Utilisation intensive de **CSS Grid** pour la galerie et les sections alternées.
* **JavaScript** : Script léger pour l'ouverture et la fermeture du menu mobile.

## Analyse technique
### Points complexes
1. **Inversion des sections** : Sur desktop, le design alterne texte et image. Sur mobile, l'ordre change pour que l'image apparaisse toujours au-dessus du texte correspondant. J'ai résolu cela en utilisant la propriété `order` de Flexbox/Grid.
2. **Gestion de la galerie** : La section finale nécessite une grille fluide qui passe de 2x2 sur mobile à 1x4 sur desktop sans déformation des images.
3. **Design System** : Respect rigoureux de la palette de couleurs et des typographies spécifiques (Fraunces et Barlow) via Google Fonts.

### Ce que j'ai appris
Ce projet est excellent pour comprendre la gestion des proportions. J'ai renforcé ma capacité à créer des composants réutilisables, notamment pour les sections de services qui partagent une structure identique mais des styles (couleurs, icônes) différents.

## Sources
* Design & Assets : [Frontend Mentor](https://www.frontendmentor.io)
* Guide CSS Grid : [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout)
* Polices : [Google Fonts](https://fonts.google.com/)
