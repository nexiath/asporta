import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "La mutualisation sportive, clé du développement territorial",
    date: "15 mars 2024",
    author: "Marie Dubois",
    category: "Stratégie",
    excerpt: "Découvrez comment la mutualisation des équipements sportifs devient un levier majeur du développement territorial...",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Innovation : les nouvelles technologies au service du sport",
    date: "10 mars 2024",
    author: "Thomas Martin",
    category: "Innovation",
    excerpt: "L'intégration des technologies émergentes transforme la gestion des infrastructures sportives...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Retour d'expérience : la mutualisation réussie en Bretagne",
    date: "5 mars 2024",
    author: "Sophie Bernard",
    category: "Retour d'expérience",
    excerpt: "Focus sur le succès de la mutualisation des équipements sportifs en Bretagne...",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Actualités</h1>
          <p className="text-gray-600">
            Restez informé des dernières actualités et innovations en matière de mutualisation sportive.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                {articles[0].category}
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">{articles[0].title}</h2>
              <div className="flex items-center text-white/80 space-x-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{articles[0].author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{articles[0].date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}