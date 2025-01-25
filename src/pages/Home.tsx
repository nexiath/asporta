import React from 'react';
import { ArrowRight, Users, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
            alt="Sport facilities"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ensemble pour le sport intercommunal
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            ASPORTA fédère les acteurs de la mutualisation sportive pour un développement territorial harmonieux et durable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/members"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-colors"
            >
              Rejoindre le réseau
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white rounded-md hover:bg-white/10 transition-colors"
            >
              Découvrir nos ressources
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">33+</h3>
              <p className="text-gray-600">EPCI membres</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-gray-600">Ressources partagées</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Événements annuels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Actualités récentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-151764976396${i}-0c623066013b?auto=format&fit=crop&q=80`}
                  alt="Article thumbnail"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Innovation dans la gestion des équipements sportifs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez les dernières tendances en matière de mutualisation des infrastructures sportives...
                  </p>
                  <Link
                    to="/blog"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à rejoindre le réseau ASPORTA ?
          </h2>
          <p className="text-xl mb-8">
            Bénéficiez de l'expertise de notre réseau et participez à l'avenir du sport intercommunal.
          </p>
          <Link
            to="/members"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-colors"
          >
            Devenir membre
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}