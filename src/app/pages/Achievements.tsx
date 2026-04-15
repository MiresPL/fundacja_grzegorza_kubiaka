import { Trophy, Medal } from "lucide-react";

export function Achievements() {
  const yearlyAchievements = [
    {
      year: 2026,
      achievements: [
        {
          icon: Medal,
          title: "Zawody Ogólnopolskie w Skokach przez Przeszkody 1* CSN SO",
          description: "III miejsce w finale Srebrnej Rundy 135 cm",
          date: "Bogusławice, kwiecień 2026"
        },
        {
          icon: Medal,
          title: "Zawody Ogólnopolskie w Skokach przez Przeszkody 1* CSN SO",
          description: "II miejsce w finale Brązowej Rundy 125 cm",
          date: "Bogusławice, kwiecień 2026"
        },
        {
          icon: Trophy,
          title: "Halowe Mistrzostwa Polski w skokach",
          description: "X miejsce w finale Juniorów 135 cm",
          date: "Krajkowo, marzec 2026"
        },
        {
          icon: Medal,
          title: "HZO1* w skokach przez przeszkody",
          description: "II miejsce w finale Dużej Rundy 140 cm",
          date: "Łąck, marzec 2026"
        },
        {
          icon: Medal,
          title: "Halowy Puchar Warszawy i Mazowsza w skokach DK",
          description: "miejsca I-IV",
          date: "KJ Aromer, luty 2026"
        },
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie Dzieci i Młodzieży DIM",
          description: "miejsca I-III",
          date: "Becker Sport, luty 2026"
        },
        {
          icon: Trophy,
          title: "Halowe Zawody Ogólnopolskie 2*",
          description: "miejsca I-III",
          date: "Krajkowo, luty 2026"
        }
      ]
    },
    {
      year: 2025,
      achievements: [
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie Dzieci i Młodzieży DIM",
          description: "miejsca I-III",
          date: "Becker Sport, listopad 2025"
        },
        {
          icon: Medal,
          title: "4Foulee CSI2*",
          description: "II miejsce",
          date: "Barczewo (Dąbrówka Mała), październik 2025"
        },
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie 1*",
          description: "miejsca I-II",
          date: "Becker Sport, październik 2025"
        },
        {
          icon: Trophy,
          title: "Mistrzostwa Warszawy i Mazowsza",
          description: "miejsca I-V",
          date: "Becker Sport, wrzesień 2025"
        },
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie w Skokach przez Przeszkody 2* CSN",
          description: "miejsca II-III",
          date: "Bogusławice, sierpień 2025"
        },
        {
          icon: Medal,
          title: "4Foulee Międzynarodowe Zawody w Skokach przez Przeszkody CSI2*",
          description: "II miejsce",
          date: "Łąck, lipiec 2025"
        },
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie 1*",
          description: "miejsca I-II",
          date: "Warka Sielanka, lipiec 2025"
        },
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie 2*",
          description: "III miejsce",
          date: "Centrum Hipiki Jaszkowo, czerwiec 2025"
        },
        {
          icon: Trophy,
          title: "Zawody Ogólnopolskie",
          description: "miejsca II-III",
          date: "Kozienice, czerwiec 2025"
        },
        {
          icon: Trophy,
          title: "Zawody międzynarodowe CSIO",
          description: "miejsca II-III",
          date: "Zduchovice, kwiecień 2025"
        },
        {
          icon: Medal,
          title: "Halowy Puchar Warszawy i Mazowsza w skokach DK",
          description: "miejsca II-III",
          date: "kwiecień 2025"
        },
        {
          icon: Trophy,
          title: "Halowe Zawody Ogólnopolskie 3*",
          description: "miejsca I-III",
          date: "Krajkowo, luty 2025"
        }
      ]
    }
  ];

  /*const statistics = [
    { number: "1", label: "Test" }
  ];*/

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Osiągnięcia Naszych Zawodniczek</h1>
        <p className="text-xl text-gray-600 mb-12">
          Dumnie prezentujemy sukcesy naszych podopiecznych na parkurach
        </p>

        {/* Statistics */}
        {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-blue-600 text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>*/}

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
        {/*<div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Wyróżnienia i specjalne osiągnięcia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1"></div>
              <div className="text-sm"></div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1"></div>
              <div className="text-sm"></div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Ranking FEI</div>
              <div className="text-sm"></div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1"></div>
              <div className="text-sm"></div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1"></div>
              <div className="text-sm"></div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="font-semibold mb-1"></div>
              <div className="text-sm"></div>
            </div>
          </div>
        </div>*/}

        {/* Records Section */}
        {/*<div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Najlepsze wyniki sezonu 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-blue-600 mb-2"></h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Test</strong><br/>
                Test<br/>
                Test
              </p>
            </div>
          </div>
        </div>*/}

        {/* Quote Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "Każdy medal, każdy tytuł mistrzowski to efekt ogromnej pracy zawodniczek, 
            poświęcenia ich rodzin, profesjonalizmu trenera i oczywiście naszych wspaniałych
            koni. Jestem dumny z każdego sukcesu, ale najbardziej cieszy mnie obserwowanie
            rozwoju młodych ludzi, którzy dzięki kontaktom z końmi stają się odpowiedzialnymi i
            empatycznymi osobami."
          </blockquote>
          <p className="font-semibold">- Grzegorz Kubiak, Założyciel Fundacji</p>
        </div>
      </div>
    </div>
  );
}
