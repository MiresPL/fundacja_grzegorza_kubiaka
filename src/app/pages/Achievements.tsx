import { Trophy, Medal, Award, Star } from "lucide-react";

export function Achievements() {
  const yearlyAchievements = [
    {
      year: 2026,
      achievements: [
        {
          icon: Medal,
          title: "Halowy Puchar Warszawy i Mazowsza w skokach DK",
          description: "miejsca I - IV",
          date: "Aromer, Luty 2026"
        },
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie Dzieci i Młodzieży DIM",
          description: "miejsca I - III",
          date: "Becker Sport, Luty 2026"
        },
      ]
    },
    {
      year: 2025,
      achievements: [
        {
          icon: Trophy,
          title: "Mistrzostwa Europy Juniorów - Ujeżdżenie",
          description: "Wiktoria Kamińska - awans do finału, 8. miejsce",
          date: "Sierpień 2025"
        },
        {
          icon: Star,
          title: "Mistrzostwa Polski Juniorów - Skoki",
          description: "Julia Nowak - Złoty medal i tytuł Mistrzyni Polski",
          date: "Lipiec 2025"
        },
        {
          icon: Medal,
          title: "CCI2* Baborówko - WKKW",
          description: "Zuzanna Wiśniewska - 1. miejsce w zawodach WKKW",
          date: "Czerwiec 2025"
        },
        {
          icon: Trophy,
          title: "Grand Prix Lublin - Ujeżdżenie",
          description: "Wiktoria Kamińska - Złoto w konkursie Grand Prix",
          date: "Maj 2025"
        },
        {
          icon: Award,
          title: "CSI-Ch Sopot - Dzieci",
          description: "Oliwia Kowalczyk - Zwycięstwo w konkursie międzynarodowym dzieci",
          date: "Kwiecień 2025"
        },
        {
          icon: Medal,
          title: "Mistrzostwa Polski U21 WKKW",
          description: "Zuzanna Wiśniewska - Srebrny medal",
          date: "Marzec 2025"
        }
      ]
    },
    {
      year: 2024,
      achievements: [
        {
          icon: Trophy,
          title: "CSI2* Sopot Horse Show",
          description: "Natalia Dąbrowska - Zwycięstwo w konkursie międzynarodowym CSI2*",
          date: "Wrzesień 2024"
        },
        {
          icon: Star,
          title: "Mistrzostwa Polski U21 Ujeżdżenie",
          description: "Wiktoria Kamińska - Złoty medal i tytuł Mistrzyni Polski",
          date: "Lipiec 2024"
        },
        {
          icon: Medal,
          title: "CDI-J Zakrzów",
          description: "Martyna Lewandowska - 1. miejsce w międzynarodowych zawodach juniorów",
          date: "Czerwiec 2024"
        },
        {
          icon: Trophy,
          title: "Puchar Polski Młodzików - finał",
          description: "Oliwia Kowalczyk - 2. miejsce w klasyfikacji generalnej sezonu",
          date: "Październik 2024"
        }
      ]
    }
  ];

  const statistics = [
    { number: "67", label: "Medale w zawodach krajowych" },
    { number: "18", label: "Medale międzynarodowe" },
    { number: "6", label: "Tytuły Mistrzyń Polski" },
    { number: "5", label: "Zawodniczek w kadrach narodowych" }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Osiągnięcia Naszych Zawodniczek</h1>
        <p className="text-xl text-gray-600 mb-12">
          Dumnie prezentujemy sukcesy naszych podopiecznych na parkurach, ujeżdżalniach i trasach cross-country
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-blue-600 text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline of Achievements */}
        <div className="space-y-12">
          {yearlyAchievements.map((yearData) => (
            <div key={yearData.year}>
              <h2 className="text-3xl font-bold mb-6 text-blue-600">{yearData.year}</h2>
              <div className="space-y-6">
                {yearData.achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{achievement.title}</h3>
                          <span className="text-sm text-gray-600 whitespace-nowrap ml-4">{achievement.date}</span>
                        </div>
                        <p className="text-gray-700">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Special Achievements Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Wyróżnienia i specjalne osiągnięcia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Reprezentacja Polski</div>
              <div className="text-sm">5 zawodniczek w kadrach narodowych juniorów i młodych jeźdźców (2024-2026)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Puchar Narodów</div>
              <div className="text-sm">Natalia Dąbrowska - uczestniczka Pucharu Narodów Młodych Jeźdźców 2025</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Ranking FEI</div>
              <div className="text-sm">Wszystkie nasze zawodniczki w TOP 100 swoich kategorii wiekowych w Polsce</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Klubowy sukces</div>
              <div className="text-sm">Fundacja Jeździecka - najlepsza klubowa drużyna juniorek w Polsce 2025</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Olimpiada Juniorów</div>
              <div className="text-sm">Julia Nowak - kwalifikacja do European Youth Olympic Festival 2026</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Uznanie branżowe</div>
              <div className="text-sm">Nagroda "Złota Podkowa" za wkład w rozwój polskiego jeździectwa juniorskiego</div>
            </div>
          </div>
        </div>

        {/* Records Section */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Najlepsze wyniki sezonu 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Skoki przez przeszkody</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Julia Nowak</strong><br/>
                Najwyższy parkur bez błędów: 145cm<br/>
                Najszybszy czas w barażu: 34.56s (140cm)
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-blue-600 mb-2">Ujeżdżenie</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Wiktoria Kamińska</strong><br/>
                Najwyższy wynik w reprizie: 72.35%<br/>
                Poziom: Prix St. Georges (młode konie)
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-blue-600 mb-2">WKKW</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Zuzanna Wiśniewska</strong><br/>
                Najlepszy wynik klasyfikacji generalnej: 1. miejsce<br/>
                Poziom: CCI2* (międzynarodowy)
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "Każdy medal, każdy tytuł mistrzowski to efekt ogromnej pracy zawodniczek, 
            poświęcenia ich rodzin, profesjonalizmu trenerów i oczywiście naszych wspaniałych 
            koni. Jesteśmy dumni z każdego sukcesu, ale najbardziej cieszy nas obserwowanie 
            rozwoju młodych ludzi, którzy dzięki kontaktowi z końmi stają się odpowiedzialnymi, 
            empatycznymi osobami."
          </blockquote>
          <p className="font-semibold">- Anna Kowalska, Założycielka Fundacji Jeździeckiej</p>
        </div>
      </div>
    </div>
  );
}
