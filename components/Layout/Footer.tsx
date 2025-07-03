import React from 'react';
import Link from 'next/link';
import { Wrench, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">PlombiPro</h2>
                <p className="text-primary-400 font-medium">Expert en Plomberie et Chauffage</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire de confiance pour tous vos travaux de plomberie et chauffage. 
              Intervention rapide, solutions durables et service professionnel 
              dans toute la France.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/plomberie-generale" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Plomberie Générale
                </Link>
              </li>
              <li>
                <Link href="/services/chauffage" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Chauffage
                </Link>
              </li>
              <li>
                <Link href="/services/depannage-urgence" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Dépannage d'Urgence
                </Link>
              </li>
              <li>
                <Link href="/services/renovation-salle-bain" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Rénovation Salle de Bain
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <div>
                  <p className="font-medium">03 37 51 23 79</p>
                  <p className="text-sm text-gray-400">Urgence 24h/7j</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <p>contact@plombipro.fr</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <p>Intervention dans toute la France</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-400" />
                <div>
                  <p>Lun-Ven: 8h-19h</p>
                  <p className="text-sm text-gray-400">Sam: 9h-17h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PlombiPro. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;