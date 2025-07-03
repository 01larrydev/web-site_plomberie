'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Phone, 
  CheckCircle, 
  Clock, 
  Award, 
  Users,
  ArrowRight,
  Star,
  Zap
} from 'lucide-react';
import { services } from '@/data/services';

const Home: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Intervention Rapide',
      description: 'Intervention dans l\'heure en cas d\'urgence'
    },
    {
      icon: Wrench,
      title: 'Expertise Certifiée',
      description: 'Plombiers qualifiés et agréés'
    },
    {
      icon: Award,
      title: 'Garantie Travaux',
      description: 'Garantie sur tous nos travaux'
    },
    {
      icon: Users,
      title: '+3000 Clients',
      description: 'Satisfaits depuis 2015'
    }
  ];

  const testimonials = [
    {
      name: 'Alexandre Nasis',
      location: 'Paris 15e',
      rating: 5,
      comment: 'Intervention très rapide pour une fuite d\'eau. Plombier professionnel et prix correct. Je recommande !'
    },
    {
      name: 'Jean-Pierre Laurent',
      location: 'Lyon',
      rating: 5,
      comment: 'Excellent service pour l\'installation de ma nouvelle chaudière. Travail soigné et dans les délais.'
    },
    {
      name: 'Sophie Martin',
      location: 'Marseille',
      rating: 5,
      comment: 'Rénovation complète de ma salle de bain. Résultat magnifique et équipe très professionnelle.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert en
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Plomberie & Chauffage
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-100">
                Intervention rapide 24h/7j dans toute la France. 
                Solutions durables pour tous vos problèmes de plomberie et chauffage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/rendez-vous"
                  className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Urgence 24h/7j
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 text-center"
                >
                  Nos Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    <Zap className="h-8 w-8 text-yellow-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Intervention Express</h3>
                    <p className="text-primary-200">Dans l\'heure si urgence</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Devis gratuit immédiat</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Garantie sur tous les travaux</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Plombiers certifiés et assurés</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise et notre professionnalisme garantissent des solutions durables 
              pour tous vos problèmes de plomberie et chauffage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes et personnalisées pour tous vos besoins en plomberie et chauffage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4 group-hover:bg-primary-600 transition-colors duration-300">
                      <Wrench className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      {service.price && (
                        <p className="text-primary-600 font-semibold">{service.price}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 3000 clients satisfaits nous font confiance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Besoin d'une Intervention Rapide ?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Nos plombiers sont disponibles 24h/7j pour répondre à vos urgences
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
                Appeler Maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;