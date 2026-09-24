# Reine & Associés — Site vitrine bilingue (FR / EN)

Projet **front-end & UX/UI** : conception complète (wireframes, UI, interactions) et développement d’un site vitrine bilingue pour un cabinet d’avocats **fictif** basé à Lyon.

**Certification Front-End — Codecademy**  
Site statique, interface dynamique, sans backend.

> ⚠️ Cabinet, dossiers, témoignages et coordonnées sont **entièrement fictifs**.  
> Projet de démonstration — ne représente pas un vrai cabinet d’avocats.

---


## Vision & objectifs

Exercice professionnel complet, à la croisée de :

| Domaine | Travail réalisé |
|--------|------------------|
| **UX/UI** | Recherche, architecture de contenu, wireframes, hiérarchie visuelle |
| **Front-end** | Intégration responsive, interactions JS, i18n FR/EN |
| **Branding** | Identité sobre et professionnelle (métaphore des échecs) |
| **Accessibilité** | Contrastes, focus visible, navigation clavier, `prefers-reduced-motion` |

**Objectif :** un site vitrine crédible, élégant et fonctionnel, comme pour un vrai client.

---


## Processus UX/UI

### 1. Recherche & cadrage
- Analyse de sites de cabinets d’avocats
- Définition des attentes d’un cabinet fictif haut de gamme
- Arborescence claire et rassurante (stratégie → expertises → victoires → contact)

### 2. Wireframes
- Wireframes basse fidélité pour structurer les sections
- Tests de hiérarchie visuelle et de parcours utilisateur
- Optimisation mobile/desktop

### 3. UI Design
- Palette **bordeaux / or / encre**
- Typographies : Playfair Display (titres), DM Sans & DM Mono (texte / UI)
- Découpes en `clip-path`, cartes et onglets sobres
- Icônes SVG minimalistes (pièces d’échecs, symboles juridiques)

### 4. Design system
- Couleurs, typographies, espacements, boutons, navigation
- Composants réutilisables (sections, accordéons, onglets, formulaire)
- Variantes de labels FR / EN
---

## Développement front-end

### Technologies

| Techno | Rôle |
|--------|------|
| **HTML5** | Structure sémantique |
| **CSS3** | Custom properties, grid, flexbox, media queries |
| **JavaScript vanilla** | IIFE — i18n, UI, canvas, formulaire (pas de framework) |
| **Google Fonts** | Playfair Display, DM Sans, DM Mono |

Aucune dépendance de build : site léger et rapide.

### Fonctionnalités
- Bascule **FR / EN** sans rechargement (`localStorage`)
- Préchargeur avec bouton « Passer »
- Navigation sticky + menu mobile (fermeture Escape)
- Méthode en 6 étapes avec ligne de progression au scroll
- Onglets d’expertises (navigation clavier : flèches, Home, End)
- Études de cas en accordéon
- Témoignages interactifs
- Formulaire de contact (validation HTML5, succès simulé)
- Mentions légales en `<dialog>` native
- Fond canvas discret (pause hors onglet / reduced-motion)

### Accessibilité
- Lien d’évitement, `:focus-visible`, `prefers-reduced-motion`
- `inert` pendant le préchargeur
- Attributs `aria-*` (langue, menu, onglets, accordéons, formulaire)
- Cibles tactiles ≥ 44 px

---

## Ce que ce projet démontre

- Conception d’un site **complet** : UX, UI, design system
- Maîtrise du **front-end vanilla** (HTML / CSS / JS)
- Gestion du **bilingue** sans framework
- Sens du **branding** et de la cohérence visuelle
- Production d’une vitrine **professionnelle**, crédible et élégante
- Code **organisé**, lisible et maintenable
- Prise en compte de l’**accessibilité** et du responsive

---

## Futures améliorations (roadmap)

- [ ] Animations plus riches (CSS avancées ou GSAP)
- [ ] Mode clair
- [ ] Passage éventuel à React pour une architecture plus scalable
- [ ] Intégration CMS headless (optionnel)
- [ ] Envoi réel du formulaire (service type Formspree / Netlify Forms)

---

## Licence

Code libre pour usage **portfolio / démonstration**.  
Textes, identité et visuels : démonstration uniquement — pas un vrai cabinet.
