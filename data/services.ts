import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'plomberie-generale',
    title: 'Plomberie Générale',
    description: 'Installation et réparation de tous types de canalisations, robinetterie et équipements sanitaires.',
    icon: 'Wrench',
    features: [
      'Réparation de fuites d\'eau',
      'Installation de robinetterie',
      'Débouchage de canalisations',
      'Remplacement de tuyauterie',
      'Détection de fuites par caméra'
    ],
    price: 'À partir de 60€'
  },
  {
    id: 'chauffage',
    title: 'Chauffage et Chaudière',
    description: 'Installation, entretien et dépannage de systèmes de chauffage et chaudières.',
    icon: 'Flame',
    features: [
      'Installation de chaudières',
      'Entretien annuel obligatoire',
      'Dépannage d\'urgence',
      'Remplacement de radiateurs',
      'Optimisation énergétique'
    ],
    price: 'À partir de 80€'
  },
  {
    id: 'depannage-urgence',
    title: 'Dépannage d\'Urgence',
    description: 'Intervention rapide 24h/7j pour tous vos problèmes de plomberie urgents.',
    icon: 'Zap',
    features: [
      'Intervention sous 1h',
      'Disponible 24h/7j',
      'Réparation de fuites majeures',
      'Débouchage d\'urgence',
      'Coupure d\'eau d\'urgence'
    ],
    price: 'À partir de 90€'
  },
  {
    id: 'renovation-salle-bain',
    title: 'Rénovation Salle de Bain',
    description: 'Rénovation complète de salles de bain avec installation sanitaire moderne.',
    icon: 'Home',
    features: [
      'Conception sur mesure',
      'Installation complète',
      'Carrelage et étanchéité',
      'Électricité et éclairage',
      'Garantie 10 ans'
    ],
    price: 'Sur devis'
  }
];