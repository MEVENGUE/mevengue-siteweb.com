export type Project = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  short: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  // 2025 - Projets les plus récents
  {
    slug: "k8s-fleetman",
    title: "Cluster Kubernetes Fleetman",
    year: 2025,
    tags: ["Kubernetes", "Microservices", "ActiveMQ", "MongoDB"],
    short:
      "Déploiement d'un cluster Kubernetes (1 master + 2 workers) sur Hyper-V avec l'application Fleetman, configuration réseau, persistance et exposé des services.",
    github: "https://github.com/MEVENGUE/K8S",
  },
  {
    slug: "zabbix-on-k8s",
    title: "Monitoring Zabbix sur Kubernetes",
    year: 2025,
    tags: ["Zabbix", "Monitoring", "K8s", "Observabilité"],
    short:
      "Installation de Zabbix sur le cluster Kubernetes Fleetman pour superviser les nodes, pods et services. Découverte auto, dashboards et alerting basique.",
    github: "https://github.com/MEVENGUE/supervision-Projet-K8S-Zabbix",
    demo: "https://github.com/MEVENGUE/supervision-Projet-K8S-Zabbix/tree/main/Zabbix%20sch%C3%A9ma%20Cisco",
  },
  {
    slug: "zabbix-vm-hyperv",
    title: "Projet Zabbix – Supervision sur VM Hyper-V",
    year: 2025,
    tags: ["Zabbix", "Hyper-V", "Ubuntu", "Monitoring", "Kubernetes"],
    short:
      "Installation et configuration d'un serveur Zabbix 6.4 sur une VM Ubuntu 22.04 hébergée dans Hyper-V, avec mise en place d'un scénario de supervision CPU pour les nœuds d'un petit cluster Kubernetes (master + workers).",
    github: "https://github.com/MEVENGUE/zabbix-supervision",
    demo: "https://github.com/MEVENGUE/zabbix-supervision/tree/main/Zabbix%20sch%C3%A9ma%20Cisco",
  },
  {
    slug: "radar-tactique-coach",
    title: "Radar-Tactique-Profil-Coach-Football",
    year: 2025,
    tags: ["Python", "Football", "DataViz", "Analytics"],
    short:
      "Génère un diagramme radar tactique pour représenter le profil d'un entraîneur de football selon différents axes tactiques. Permet aux analystes, recruteurs ou passionnés de mieux comprendre les préférences de jeu, la philosophie défensive et la construction offensive d'un coach.",
    github: "https://github.com/MEVENGUE/Radar-Tactique-Profil-Coach-Football",
    demo: "https://github.com/MEVENGUE/Radar-Tactique-Profil-Coach-Football/tree/main/Output",
  },
  {
    slug: "ai-scouting-tools",
    title: "Outils IA pour scouting football",
    year: 2025,
    tags: ["IA", "LLM", "Football", "Agents"],
    short:
      "Prototype d'outils de scouting augmentés par IA : analyse textuelle de rapports, fiches joueurs et intégration de données statistiques.",
    github: "https://github.com/MEVENGUE",
  },
  {
    slug: "tuto-finance",
    title: "Tuto-Finance",
    year: 2025,
    tags: ["Python", "Finance", "Data Analysis", "Google Colab"],
    short:
      "Tutoriels Finance sur Google Colab : analyses financières, calculs de rentabilité, visualisations de données et outils d'aide à la décision financière.",
    github: "https://github.com/MEVENGUE/Tuto-Finance",
    demo: "https://github.com/MEVENGUE/Tuto-Finance/blob/main/Analyse_de_la_marge_de_rentabilit%C3%A9_avec_Python.ipynb",
  },
  {
    slug: "football",
    title: "Football",
    year: 2025,
    tags: ["Python", "Football", "Data Analysis", "Analytics"],
    short:
      "Projets d'analyse de données football : collecte, traitement et visualisation de données statistiques pour l'analyse de performance et la stratégie.",
    github: "https://github.com/MEVENGUE/Football",
  },
  // 2024
  {
    slug: "automation-sap-python",
    title: "Automatisation SAP avec Python & ABAP",
    year: 2024,
    tags: ["SAP", "Python", "ABAP", "Automatisation"],
    short:
      "Scripts d'automatisation en Python et développement ABAP pour fiabiliser les processus SAP : rapports, contrôles, interfaces Fiori.",
    github: "https://github.com/MEVENGUE",
  },
  // 2022 - Projets les plus anciens
  {
    slug: "projet-ingenieur",
    title: "Projet Ingénieur",
    year: 2022,
    tags: ["Ingénierie", "Académique", "Multi-disciplinaire"],
    short:
      "Collection de projets réalisés au cours de mon cursus en école d'ingénieur, couvrant différents domaines de l'ingénierie et des sciences.",
    github: "https://github.com/MEVENGUE/Projet_ING",
  },
  {
    slug: "virtual-mouse-python",
    title: "Virtual Mouse Python",
    year: 2022,
    tags: ["Python", "OpenCV", "IA", "Computer Vision", "Hand Tracking"],
    short:
      "Développement d'une approche basée sur l'IA pour contrôler le mouvement de la souris en utilisant Python et OpenCV avec une caméra en temps réel qui détecte les points de repère de la main, suit les motifs de gestes au lieu d'une souris physique.",
    github: "https://github.com/MEVENGUE/Virtual_Mouse_Python",
  },
];
