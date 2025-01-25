import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Activity, BookOpen, Calendar, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Activity className="h-8 w-8" />
                <span className="font-bold text-xl">ASPORTA</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
            <Link to="/blog" className="flex items-center space-x-1 hover:text-blue-200">
                <FileText className="h-5 w-5" />
                <span>Actualités</span>
              </Link>
              <Link to="/events" className="flex items-center space-x-1 hover:text-blue-200">
                <Calendar className="h-5 w-5" />
                <span>Événements</span>
              </Link>
              <Link to="/resources" className="flex items-center space-x-1 hover:text-blue-200">
                <BookOpen className="h-5 w-5" />
                <span>Equipe</span>
              </Link>
              <Link to="/blog" className="flex items-center space-x-1 hover:text-blue-200">
                <FileText className="h-5 w-5" />
                <span>Partenaires</span>
              </Link>
              <Link to="/resources" className="flex items-center space-x-1 hover:text-blue-200">
                <BookOpen className="h-5 w-5" />
                <span>Ressources</span>
              </Link>
              {user ? (
                <Link to="/members" className="flex items-center space-x-1 bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600">
                  <User className="h-5 w-5" />
                  <span>Espace Membre</span>
                </Link>
              ) : (
                <Link to="/members" className="flex items-center space-x-1 bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-600">
                  <span>Adhésion</span>
                </Link>
              )}
              <button className="p-2 hover:bg-blue-800 rounded-full">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-blue-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/resources" className="block px-3 py-2 rounded-md hover:bg-blue-800">Ressources</Link>
              <Link to="/events" className="block px-3 py-2 rounded-md hover:bg-blue-800">Événements</Link>
              <Link to="/blog" className="block px-3 py-2 rounded-md hover:bg-blue-800">Actualités</Link>
              <Link to="/members" className="block px-3 py-2 rounded-md bg-blue-700 hover:bg-blue-600">
                {user ? 'Espace Membre' : 'Connexion'}
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ASPORTA</h3>
              <p className="text-gray-400">
                Fédérer et promouvoir la mutualisation sportive intercommunale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/resources" className="hover:text-white">Ressources</Link></li>
                <li><Link to="/events" className="hover:text-white">Événements</Link></li>
                <li><Link to="/blog" className="hover:text-white">Actualités</Link></li>
                <li><Link to="/members" className="hover:text-white">Espace Membre</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@asporta.fr<br />
                Tél: +33 (0)1 23 45 67 89
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ASPORTA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}