// components/ContactSection.js
'use client'; // Si vous utilisez Next.js 13+ avec app directory

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: type === 'checkbox' ? checked : value
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitMessage('');

  //   // try {
  //   //   // Remplacez cette URL par votre endpoint API
  //   //   const response = await fetch('/api/contact', {
  //   //     method: 'POST',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //     body: JSON.stringify(formData),
  //   //   });

  //   //   if (response.ok) {
  //   //     setSubmitMessage('Merci ! Votre message a été envoyé avec succès.');
  //   //     setFormData({
  //   //       name: '',
  //   //       email: '',
  //   //       phone: '',
  //   //       subject: '',
  //   //       message: '',
  //   //       agreeTerms: false
  //   //     });
  //   //   } else {
  //   //     throw new Error('Erreur lors de l\'envoi');
  //   //   }
  //   // }
  //   //  catch (error) {
  //   //   console.error('Erreur:', error);
  //   //   setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
  //   // } finally {
  //   //   setIsSubmitting(false);
  //   // }
  // };

  return (
    <section 
      className="py-16 px-6"
      style={{ backgroundColor: '#F3EEE3' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Section Gauche - Informations de contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#0B2C72' }}>
                Contactez-nous
              </h2>
              <p className="text-lg" style={{ color: '#374151' }}>
                Prenez rendez-vous avec nous pour construire votre parcours de conception.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#0B2C72' }}>
                  Appelez-nous maintenant
                </h3>
                <div style={{ color: '#374151' }} className="space-y-1">
                  <p>Parlons ensemble et voyons comment nous pouvons</p>
                  <p>travailler ensemble +225 27 45 12 34</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#0B2C72' }}>
                  Votre Message
                </h3>
                <div style={{ color: '#374151' }} className="space-y-1">
                  <p>Nous répondons généralement dans les 24 heures</p>
                  <p>projets@construction-btp.ci</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#0B2C72' }}>
                  Votre Localisation
                </h3>
                <p style={{ color: '#374151' }}>
                  Zone Industrielle, Yopougon, Abidjan, Côte d'Ivoire
                </p>
              </div>
            </div>
          </div>

          {/* Section Droite - Formulaire */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#0B2C72' }}>
              Envoyez-nous un message
            </h3>
            
            <form
            //  onSubmit={handleSubmit} 
             className="space-y-6">
              {/* Ligne 1: Nom et Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    // onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                    style={{ borderColor: '#D1D5DB' }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    // onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                    style={{ borderColor: '#D1D5DB' }}
                  />
                </div>
              </div>

              {/* Ligne 2: Téléphone et Sujet */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    // onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                    style={{ borderColor: '#D1D5DB' }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    // onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
                    style={{ borderColor: '#D1D5DB' }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Comment pouvons-nous vous aider ? N'hésitez pas à nous contacter !"
                  rows={6}
                  value={formData.message}
                  // onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all resize-none"
                  style={{ borderColor: '#D1D5DB' }}
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  // onChange={handleInputChange}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                  style={{ accentColor: '#0B2C72' }}
                />
                <label htmlFor="agreeTerms" className="text-sm" style={{ color: '#374151' }}>
                  J'accepte vos conditions générales et conditions tempor aliqua.
                </label>
              </div>

              {/* Message de confirmation/erreur */}
              {submitMessage && (
                <div 
                  className={`p-4 rounded-lg ${submitMessage.includes('succès') 
                    ? 'bg-green-50 text-green-800' 
                    : 'bg-red-50 text-red-800'}`}
                >
                  {submitMessage}
                </div>
              )}

              {/* Bouton Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 rounded-full text-white font-medium hover:opacity-90 hover:transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#FFB703' }}
                >
                  <span>{isSubmitting ? 'Envoi...' : 'Commencer'}</span>
                  {!isSubmitting && (
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Styles CSS intégrés pour ce composant */}
      <style jsx>{`
        input:focus,
        textarea:focus {
          border-color: #0B2C72 !important;
          box-shadow: 0 0 0 3px rgba(11, 44, 114, 0.1);
        }

        input::placeholder,
        textarea::placeholder {
          color: #9CA3AF;
        }

        button:hover:not(:disabled) {
          box-shadow: 0 4px 12px rgba(255, 183, 3, 0.3);
        }

        @media (max-width: 768px) {
          .grid {
            gap: 2rem;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          .px-6 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
}