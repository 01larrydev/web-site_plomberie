'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { services } from '@/data/services';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nos Services de Plomberie
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              Solutions complètes et garanties pour tous vos problèmes de plomberie et chauffage. 
              Intervention rapide dans toute la France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-4 rounded-xl mr-6">
                      <Wrench className="h-10 w-10 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                      {service.price && (
                        <p className="text-primary-600 font-semibold text-lg">{service.price}</p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Ce qui est inclus :
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/services/${service.id}`}
                      className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                      href="/rendez-vous"
                      className="flex-1 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      <span>Réserver</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pourquoi Choisir PlombiPro ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et notre professionnalisme font la différence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Plombiers Certifiés',
                description: 'Artisans qualifiés et agréés, formés aux dernières techniques',
                icon: '🎓'
              },
              {
                title: 'Intervention Rapide',
                description: 'Disponibilité 24h/7j, intervention sous 1h si urgence',
                icon: '⚡'
              },
              {
                title: 'Garantie Travaux',
                description: 'Garantie sur tous nos travaux et pièces installées',
                icon: '✅'
              },
              {
                title: 'Matériel Professionnel',
                description: 'Équipements modernes et pièces de qualité',
                icon: '🔧'
              },
              {
                title: 'Devis Gratuit',
                description: 'Évaluation et devis sans engagement',
                icon: '💰'
              },
              {
                title: '+3000 Clients',
                description: 'Plus de 3000 clients satisfaits depuis 2015',
                icon: '👥'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}  
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt à Résoudre Votre Problème ?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contactez-nous dès maintenant pour un devis gratuit et une intervention rapide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rendez-vous"
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="inline mr-2 h-5 w-5" />
                Prendre Rendez-vous
              </Link>
              <a
                href="tel:0123456789"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300"
              >
                03 37 51 23 79
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;