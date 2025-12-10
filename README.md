# 🚀 Mon Portfolio - Next.js

Portfolio moderne et immersif développé avec **Next.js**, **TailwindCSS** et **Three.js**, offrant une expérience visuelle inspirée des animations d'OpenAI.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-0.169-000000?style=for-the-badge&logo=three.js)

## ✨ Fonctionnalités

- 🎨 **Hero 3D interactif** : Shader animé synchronisé au scroll et à la souris
- 📱 **Design responsive** : Adaptation automatique selon l'appareil (mobile, tablette, desktop)
- 🔍 **Détection d'appareil** : Détection du type d'appareil, navigateur et capacités tactiles
- 🍔 **Navigation adaptative** : Menu hamburger sur mobile, menu complet sur desktop
- 📄 **Pages structurées** : Projets, Lab, À propos, Contact
- 💾 **Données dynamiques** : Projets et démos chargés depuis des fichiers de données
- ⚡ **Performance optimisée** : Chargement dynamique des composants 3D

## 🛠️ Technologies

- **Next.js 14** (App Router) - Framework React
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS utilitaire
- **Three.js** + **React Three Fiber** + **Drei** - Rendu 3D et shaders
- **Hooks personnalisés** - Détection d'appareil et responsive


## 📱 Responsive Design

Le portfolio s'adapte automatiquement selon :

- **Mobile** (< 640px) : Menu hamburger, layout vertical, Hero 3D optimisé
- **Tablette** (640px - 1024px) : Layout hybride, navigation adaptée
- **Desktop** (> 1024px) : Layout complet, toutes les fonctionnalités

### Hooks disponibles

- `useDevice()` : Détecte le type d'appareil, navigateur, orientation
- `useResponsive()` : Gère les valeurs responsive selon l'appareil
- `ResponsiveWrapper` : Composant pour afficher du contenu différent par appareil

## 🎨 Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx            # Page d'accueil avec Hero 3D
│   ├── projects/           # Page projets
│   │   └── page.tsx
│   ├── lab/                # Page lab
│   │   └── page.tsx
│   ├── about/              # Page à propos
│   │   └── page.tsx
│   ├── contact/            # Page contact
│   │   └── page.tsx
│   ├── layout.tsx          # Layout principal
│   └── globals.css         # Styles globaux
├── components/             # Composants React
│   ├── Hero3D.tsx          # Hero 3D avec shader GLSL
│   ├── Navbar.tsx          # Navigation responsive
│   ├── Footer.tsx          # Footer
│   └── ResponsiveWrapper.tsx
├── hooks/                  # Hooks personnalisés
│   ├── useDevice.ts        # Détection d'appareil
│   └── useResponsive.ts    # Gestion responsive
├── data/                   # Données statiques
│   ├── projects.ts         # Liste des projets
│   └── labDemos.ts         # Liste des démos
└── utils/                  # Utilitaires
    └── responsive.ts       # Fonctions responsive
```

### GitHub Pages

Requiert une configuration supplémentaire pour Next.js. Voir la [documentation Next.js](https://nextjs.org/docs/deployment#github-pages).

## 🎨 Hero 3D

Le composant Hero3D utilise un shader GLSL personnalisé pour créer une animation de grille interactive :

- Réaction à la souris (glow effect)
- Synchronisation avec le scroll (changement de couleurs)
- Animation continue (pulse effect)
- Optimisé pour mobile (DPR réduit)


## 👤 Auteur

**FRANCK MEVENGUE**

- GitHub: [@MEVENGUE](https://github.com/MEVENGUE)
- Repository: [mevengue-siteweb.com](https://github.com/MEVENGUE/mevengue-siteweb.com)

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) pour le framework
- [Three.js](https://threejs.org/) pour le rendu 3D
- [TailwindCSS](https://tailwindcss.com/) pour le styling
- Inspiration: Animations OpenAI

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
