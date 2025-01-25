import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Forum de la Mutualisation Sportive 2024",
    date: "2024-06-15",
    time: "09:00 - 18:00",
    location: "Palais des Congrès, Paris",
    type: "Présentiel",
    capacity: 200,
    description: "Le rendez-vous annuel des acteurs de la mutualisation sportive intercommunale.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Webinaire: Innovations en Gestion Sportive",
    date: "2024-04-20",
    time: "14:00 - 16:00",
    location: "En ligne",
    type: "Distanciel",
    capacity: 100,
    description: "Découvrez les dernières innovations en matière de gestion des équipements sportifs.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Atelier: Optimisation des Ressources",
    date: "2024-05-10",
    time: "10:00 - 17:00",
    location: "Centre sportif régional, Lyon",
    type: "Présentiel",
    capacity: 50,
    description: "Formation pratique sur l'optimisation des ressources sportives intercommunales.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
  }
];

export function Events() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Événements</h1>
          <p className="text-gray-600">
            Découvrez nos prochains événements et inscrivez-vous pour participer.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'Présentiel' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.capacity} places</span>
                  </div>
                </div>
                <button className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  S'inscrire
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}