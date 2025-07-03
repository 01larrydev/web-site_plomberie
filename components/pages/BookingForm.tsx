'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare
} from 'lucide-react';
import { pestTypes } from '@/data/pests';
import { services } from '@/data/services';
import { createAppointment } from '@/lib/firebase';

interface FormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceType: string;
  pestTypes: string[];
  preferredDate: string;
  address: string;
  message: string;
}

const BookingForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    serviceType: '',
    pestTypes: [],
    preferredDate: '',
    address: '',
    message: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePestToggle = (pestId: string) => {
    setFormData(prev => ({
      ...prev,
      pestTypes: prev.pestTypes.includes(pestId)
        ? prev.pestTypes.filter(id => id !== pestId)
        : [...prev.pestTypes, pestId]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await createAppointment({
        client_name: formData.clientName,
        client_email: formData.clientEmail,
        client_phone: formData.clientPhone,
        service_type: formData.serviceType,
        pest_types: formData.pestTypes,
        preferred_date: formData.preferredDate,
        address: formData.address,
        message: formData.message
      });
      
      alert('Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.');
      
      // Reset form
      setFormData({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        serviceType: '',
        pestTypes: [],
        preferredDate: '',
        address: '',
        message: ''
      });
      setCurrentStep(1);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.serviceType !== '';
      case 2:
        return formData.pestTypes.length > 0;
      case 3:
        return formData.clientName && formData.clientEmail && formData.clientPhone && formData.address;
      case 4:
        return formData.preferredDate !== '';
      default:
        return false;
    }
  };

  const groupedPests = pestTypes.reduce((acc, pest) => {
    if (!acc[pest.category]) {
      acc[pest.category] = [];
    }
    acc[pest.category].push(pest);
    return acc;
  }, {} as Record<string, typeof pestTypes>);

  const categoryLabels = {
    plumbing: 'Problèmes de Plomberie',
    heating: 'Problèmes de Chauffage',
    emergency: 'Urgences',
    installation: 'Installations & Rénovations'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Réservez Votre Intervention
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez ce formulaire pour recevoir un devis personnalisé
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                  step <= currentStep
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step < currentStep ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  step
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Problème</span>
            <span>Contact</span>
            <span>Planification</span>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Quel service vous intéresse ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleInputChange('serviceType', service.id)}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                        formData.serviceType === service.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      {service.price && (
                        <p className="text-primary-600 font-semibold">{service.price}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Problem Selection */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Quel est votre problème ?
                </h2>
                <p className="text-gray-600 mb-8">
                  Sélectionnez tous les problèmes rencontrés (plusieurs choix possibles)
                </p>
                
                {Object.entries(groupedPests).map(([category, pests]) => (
                  <div key={category} className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {pests.map((pest) => (
                        <div
                          key={pest.id}
                          onClick={() => handlePestToggle(pest.id)}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center hover:shadow-md ${
                            formData.pestTypes.includes(pest.id)
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-2xl mb-2">🔧</div>
                          <p className="text-sm font-medium text-gray-900">
                            {pest.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Vos informations de contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.clientName}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      value={formData.clientPhone}
                      onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Adresse complète *
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Adresse complète de l'intervention"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Message (optionnel)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Décrivez votre problème, l'urgence, ou toute information utile..."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Date Selection */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Quand souhaitez-vous l'intervention ?
                </h2>
                <div className="max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Date préférée *
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={new Date().toISOString().slice(0, 16)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Nous vous contacterons pour confirmer le créneau ou proposer une alternative.
                  </p>
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Récapitulatif de votre demande
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Service :</strong> {services.find(s => s.id === formData.serviceType)?.title}</p>
                    <p><strong>Problèmes :</strong> {formData.pestTypes.map(id => pestTypes.find(p => p.id === id)?.name).join(', ')}</p>
                    <p><strong>Contact :</strong> {formData.clientName} - {formData.clientPhone}</p>
                    <p><strong>Date souhaitée :</strong> {formData.preferredDate ? new Date(formData.preferredDate).toLocaleString('fr-FR') : 'Non spécifiée'}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Précédent
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  isStepValid()
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Suivant
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  isStepValid() && !isSubmitting
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            )}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Besoin d'une intervention urgente ? Appelez-nous directement :
          </p>
          <a
            href="tel:0123456789"
            className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            <Phone className="mr-2 h-5 w-5" />
            01 23 45 67 89 - Urgence 24h/7j
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;