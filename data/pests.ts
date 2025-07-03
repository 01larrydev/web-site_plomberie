import { PestType } from '@/types';

export const pestTypes: PestType[] = [
  // Problèmes de plomberie
  { id: 'fuite-eau', name: 'Fuite d\'eau', category: 'plumbing', icon: 'Droplets' },
  { id: 'canalisation-bouchee', name: 'Canalisation bouchée', category: 'plumbing', icon: 'Pipe' },
  { id: 'robinet-defaillant', name: 'Robinet défaillant', category: 'plumbing', icon: 'Wrench' },
  { id: 'wc-bouche', name: 'WC bouché', category: 'plumbing', icon: 'Home' },
  
  // Problèmes de chauffage
  { id: 'chaudiere-panne', name: 'Chaudière en panne', category: 'heating', icon: 'Flame' },
  { id: 'radiateur-froid', name: 'Radiateur froid', category: 'heating', icon: 'Thermometer' },
  { id: 'fuite-chauffage', name: 'Fuite circuit chauffage', category: 'heating', icon: 'Droplets' },
  { id: 'thermostat-defaut', name: 'Thermostat défaillant', category: 'heating', icon: 'Settings' },
  
  // Urgences
  { id: 'inondation', name: 'Inondation', category: 'emergency', icon: 'AlertTriangle' },
  { id: 'degat-eaux', name: 'Dégât des eaux', category: 'emergency', icon: 'AlertCircle' },
  { id: 'coupure-eau', name: 'Coupure d\'eau', category: 'emergency', icon: 'XCircle' },
  { id: 'gaz-odeur', name: 'Odeur de gaz', category: 'emergency', icon: 'AlertTriangle' },
  
  // Installations
  { id: 'installation-sanitaire', name: 'Installation sanitaire', category: 'installation', icon: 'Plus' },
  { id: 'renovation-sdb', name: 'Rénovation salle de bain', category: 'installation', icon: 'Home' },
  { id: 'installation-chaudiere', name: 'Installation chaudière', category: 'installation', icon: 'Wrench' },
  { id: 'autre-probleme', name: 'Autre problème', category: 'installation', icon: 'HelpCircle' }
];