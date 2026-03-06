import { Link } from "react-router";
import { Award, Heart, Target, Users } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-900">
        <img
          src="/pages/homeBanner.jpeg"
          alt="Horse Jumping"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fundacja Grzegorza Kubiaka - Klub Sportowy
            </h1>
            <p className="text-xl mb-8">
              Rozwijamy talenty jeździeckie, tworzymy przyszłych mistrzów. 
              Łączymy pasję do koni z profesjonalnym szkoleniem sportowym.
            </p>
            <Link
              to="/o-fundacji"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Poznaj naszą historię
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Pasja do jeździectwa</h3>
              <p className="text-sm text-gray-600">
                Kochamy konie i wierzymy w ich pozytywny wpływ na rozwój młodych ludzi
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Profesjonalne szkolenie</h3>
              <p className="text-sm text-gray-600">
                Trenujemy z najlepszym trenerem i najbardziej utytułowanym zawodnikiem
                Grzegorzem Kubiakiem
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Społeczność</h3>
              <p className="text-sm text-gray-600">
                Budujemy przyjazną społeczność miłośników koni i sportu jeździeckiego
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Sukcesy</h3>
              <p className="text-sm text-gray-600">
                Nasze zawodniczki regularnie zdobywają medale w zawodach krajowych
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nasze dyscypliny</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-1/3 mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1568910866193-8240a89e9648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMGp1bXBpbmclMjBjb21wZXRpdGlvbiUyMHNob3d8ZW58MXx8fHwxNzcyMDQ3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Skoki przez przeszkody"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Skoki przez przeszkody</h3>
                <p className="text-gray-700">
                  Najbardziej spektakularna dyscyplina jeździectwa wymagająca odwagi,
                  precyzji i doskonałej współpracy z koniem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Wspieraj talent jeździecki</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dołącz do naszej społeczności i pomóż młodym zawodniczkom osiągać sportowe cele. 
            Twoje wsparcie ma ogromne znaczenie.
          </p>
          <Link
            to="/partnerzy"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Zostań partnerem
          </Link>
        </div>
      </section>
    </div>
  );
}
