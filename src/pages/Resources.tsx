import React from 'react';
import { Search, Filter, Download, FileText, Video, FileSpreadsheet } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Guide de la mutualisation sportive",
    type: "PDF",
    category: "Guide",
    date: "2024-03-15",
    description: "Un guide complet sur les bonnes pratiques de la mutualisation des équipements sportifs.",
    icon: FileText
  },
  {
    id: 2,
    title: "Webinaire - Innovation dans les infrastructures",
    type: "Vidéo",
    category: "Formation",
    date: "2024-03-10",
    description: "Replay du webinaire sur les innovations dans la gestion des infrastructures sportives.",
    icon: Video
  },
  {
    id: 3,
    title: "Modèle de convention de mutualisation",
    type: "Excel",
    category: "Modèle",
    date: "2024-03-05",
    description: "Template Excel pour établir une convention de mutualisation entre EPCI.",
    icon: FileSpreadsheet
  }
];

export function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Centre de Ressources</h1>
          <p className="text-gray-600">
            Accédez à notre bibliothèque de ressources pour la mutualisation sportive.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher une ressource..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filtrer
            </button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <resource.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {resource.type}
                        </span>
                        <span className="text-sm text-gray-500">{resource.category}</span>
                      </div>
                      <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}