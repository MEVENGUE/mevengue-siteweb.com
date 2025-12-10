export type LabDemo = {
  slug: string;
  title: string;
  description: string;
  type: string;
  link: string;
  note?: string;
};

export const labDemos: LabDemo[] = [
  {
    slug: "zabbix-k8s-schema",
    title: "Zabbix – Schéma Cisco (K8s)",
    description:
      "Schéma de supervision Zabbix pour le cluster Kubernetes : architecture de monitoring, découverte automatique des nodes et pods, configuration des dashboards.",
    type: "monitoring",
    link: "https://github.com/MEVENGUE/supervision-Projet-K8S-Zabbix/tree/main/Zabbix%20sch%C3%A9ma%20Cisco",
  },
  {
    slug: "zabbix-hyperv-schema",
    title: "Zabbix – Schéma Cisco (Hyper-V)",
    description:
      "Schéma de supervision Zabbix pour infrastructure Hyper-V : configuration du serveur Zabbix sur VM Ubuntu, scénarios de supervision CPU pour cluster Kubernetes.",
    type: "monitoring",
    link: "https://github.com/MEVENGUE/zabbix-supervision/tree/main/Zabbix%20sch%C3%A9ma%20Cisco",
  },
  {
    slug: "radar-tactique-coach",
    title: "Radar Tactique – Profil Coach",
    description:
      "Visualisations de diagrammes radar tactique pour profils d'entraîneurs de football : analyse des préférences de jeu, philosophie défensive et construction offensive.",
    type: "football-analytics",
    link: "https://github.com/MEVENGUE/Radar-Tactique-Profil-Coach-Football/tree/main/Output",
  },
  {
    slug: "tuto-finance-colab",
    title: "Tuto Finance – Analyse de rentabilité",
    description:
      "Notebook Google Colab pour l'analyse de la marge de rentabilité avec Python : calculs financiers, visualisations et outils d'aide à la décision.",
    type: "finance",
    link: "https://github.com/MEVENGUE/Tuto-Finance/blob/main/Analyse_de_la_marge_de_rentabilit%C3%A9_avec_Python.ipynb",
    note: "Ouvrir dans Google Colab",
  },
];
