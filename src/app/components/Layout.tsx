import { Outlet, Link, useLocation } from "react-router";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaCopy, FaInstagram } from "react-icons/fa";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "funcjacja.grzegorza.kubiaka@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const navigation = [
    { name: "Strona główna", href: "/" },
    { name: "O Fundacji", href: "/o-fundacji" },
    { name: "O Fundatorze", href: "/o-fundatorze" },
    { name: "Nasze zawodniczki", href: "/nasze-zawodniczki" },
    { name: "Osiągnięcia", href: "/osiagniecia" },
    { name: "Partnerzy", href: "/partnerzy" },
  ];

  const documents = [
    {
      name: "Statut Fundacji",
      url: "/downloads/Statut_Fundacji_podpisany.pdf",
    },
    {
      name: "Wniosek o Zmianę Barw Klubowych",
      url: "/downloads/Wniosek_zmiana_barw_kubowych.docx",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/pages/logo.png"
                alt="Logo Fundacji"
                className="h-12 w-12 object-cover rounded-full"
              />
              <div>
                <div className="font-semibold text-lg">
                  Fundacja Grzegorza Kubiaka
                </div>
                <div className="text-sm text-gray-600">
                  Klub Sportowy - Rozwój i Pasja
                </div>
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
              <h4 className="font-semibold mb-3">Fundacja Grzegorza Kubiaka</h4>
              <p className="text-sm text-gray-400">
                Klub Sportowy - Rozwój i Pasja.
              </p>
              <a
                href="https://www.instagram.com/fundacja_grzegorzakubiaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-gray-400 hover:underline"
              >
                <FaInstagram className="h-4 w-4" />
                <span>fundacja_grzegorzakubiaka</span>
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Kontakt</h4>
              <p className="text-sm text-gray-400">
                Email:{" "}
                <a
                  href={`mailto:${email}`}
                  className="hover:underline"
                  rel="noopener noreferrer"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="ml-2 inline-flex items-center cursor-pointer hover:text-gray-700 transition-colors"
                  type="button"
                >
                  <FaCopy />
                </button>
                {copied && (
                  <div
                    className={`fixed bottom-6 left-1/2 -translate-x-1/2 
        backdrop-blur-sm
        bg-white/90
        border border-green-500
        text-green-700
        px-6 py-3
        rounded-xl
        shadow-lg
        transition-all duration-300 ease-in-out
        ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
                  >
                    Skopiowano!
                  </div>
                )}{" "}
                <br />
                Tel: +48 601 896 618 <br />
                KRS: 0001221898
                <br />
                REGON: 543 904 132
                <br />
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Adres</h4>
              <p className="text-sm text-gray-400">
                ul. Kamienna 16
                <br />
                05-510 Siedliska
                <br />
                <a
                  href={"https://maps.app.goo.gl/YisXwTefajyJnei7A"}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Fundacja Grzegorza Kubiaka. Wszelkie prawa
            zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
}