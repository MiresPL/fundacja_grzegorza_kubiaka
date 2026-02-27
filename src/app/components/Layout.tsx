import { Outlet, Link, useLocation } from "react-router";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Strona główna", href: "/" },
    { name: "O Fundacji", href: "/o-fundacji" },
    { name: "O Fundatorze", href: "/o-fundatorze" },
    { name: "Nasza misja", href: "/nasza-misja" },
    { name: "Nasze zawodniczki", href: "/nasze-zawodniczki" },
    { name: "Osiągnięcia", href: "/osiagniecia" },
    { name: "Plany startowe", href: "/plany-startowe" },
    { name: "Partnerzy", href: "/partnerzy" },
  ];

  const documents = [
    { name: "Statut Fundacji", url: "#" },
    { name: "KRS", url: "#" },
    { name: "Sprawozdanie finansowe 2025", url: "#" },
    { name: "Regulamin Klubu", url: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1723406225488-00dac3cd980a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHBvcnRyYWl0JTIwYmVhdXRpZnVsfGVufDF8fHx8MTc3MjA0NzEwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Logo Fundacji"
                className="h-12 w-12 object-cover rounded-full"
              />
              <div>
                <div className="font-semibold text-lg">Fundacja Jeździecka</div>
                <div className="text-sm text-gray-600">Klub Sportowy - Pasja i Mistrzostwo</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm transition-colors ${
                    location.pathname === item.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-2 rounded-lg ${
                    location.pathname === item.href
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Documents Section */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="font-semibold text-lg mb-4">Dokumenty do pobrania</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <a
                key={doc.name}
                href={doc.url}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                download
              >
                <Download className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm">{doc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Fundacja Jeździecka</h4>
              <p className="text-sm text-gray-400">
                Klub Sportowy rozwijający jeździectwo wyczynowe i rekreacyjne.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Kontakt</h4>
              <p className="text-sm text-gray-400">
                Email: kontakt@fundacjajezdziecka.pl<br />
                Tel: +48 123 456 789
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Adres</h4>
              <p className="text-sm text-gray-400">
                ul. Stadnina 15<br />
                05-850 Ożarów Mazowiecki
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Fundacja Jeździecka. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
}