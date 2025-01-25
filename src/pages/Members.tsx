import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ArrowRight, Lock } from 'lucide-react';

export function Members() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  if (user) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6">Espace Membre</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Mes Documents</h2>
                <p className="text-gray-600 mb-4">Accédez à vos documents et ressources partagées.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Voir mes documents
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Mes Événements</h2>
                <p className="text-gray-600 mb-4">Gérez vos inscriptions aux événements.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Voir mes événements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Mon Profil</h2>
                <p className="text-gray-600 mb-4">Modifiez vos informations personnelles.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Gérer mon profil
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-8">
            <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold">Connexion Espace Membre</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email professionnel
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}