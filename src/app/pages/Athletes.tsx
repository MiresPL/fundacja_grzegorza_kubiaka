export function Athletes() {
  const athletes = [
    {
      id: 1,
      name: "Julia Nowak",
      discipline: "Skoki przez przeszkody (WKKW)",
      age: 17,
      image: "https://images.unsplash.com/photo-1732884432332-ab7827f0e226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlcXVlc3RyaWFuJTIwcmlkZXIlMjBob3JzZXxlbnwxfHx8fDE3NzIwNDcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      horse: "Casper (wałach, 10 lat)",
      bio: "Młoda, bardzo utalentowana zawodniczka specjalizująca się w skokach. W klubie od 8 roku życia.",
      achievements: ["Mistrzyni Polski Juniorów 2025", "Wicemistrzyni Polski Młodzików 2024", "3. miejsce w Grand Prix Sopot 2025"]
    },
    {
      id: 2,
      name: "Wiktoria Kamińska",
      discipline: "Ujeżdżenie",
      age: 19,
      image: "https://images.unsplash.com/photo-1613085411234-9c83af5562d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGdpcmwlMjByaWRpbmclMjBob3JzZXxlbnwxfHx8fDE3NzIwNDcxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      horse: "Dante (ogier, 9 lat)",
      bio: "Reprezentantka Polski juniorów w ujeżdżeniu. Stypendystka fundacji od 2022 roku.",
      achievements: ["Finalistka Mistrzostw Europy Juniorów 2025", "Mistrzyni Polski U21 w ujeżdżeniu 2024", "Złoto w Grand Prix Lublin 2025"]
    },
    {
      id: 3,
      name: "Zuzanna Wiśniewska",
      discipline: "WKKW (Wszechstronny Konkurs Konia Wierzchowego)",
      age: 20,
      image: "https://images.unsplash.com/photo-1610766920689-5d4c57e1dfba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcXVlc3RyaWFuJTIwYXJlbmElMjByaWRpbmd8ZW58MXx8fHwxNzcyMDQ3MTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      horse: "Thunder (wałach, 11 lat)",
      bio: "Wszechstronna zawodniczka, specjalistka od WKKW - najbardziej wymagającej dyscypliny jeździeckiej.",
      achievements: ["Wicemistrzyni Polski U21 WKKW 2025", "Uczestniczka Mistrzostw Europy Młodych Jeźdźców 2024", "Zwycięzczyni CCI2* Baborówko 2025"]
    },
    {
      id: 4,
      name: "Oliwia Kowalczyk",
      discipline: "Skoki przez przeszkody",
      age: 16,
      image: "https://images.unsplash.com/photo-1568910866193-8240a89e9648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMGp1bXBpbmclMjBjb21wZXRpdGlvbiUyMHNob3d8ZW58MXx8fHwxNzcyMDQ3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      horse: "Bella (klacz, 8 lat)",
      bio: "Najmłodsza w naszym składzie, ale już z imponującym dorobkiem sportowym.",
      achievements: ["Mistrzyni Polski Młodzików 2025", "2. miejsce Puchar Polski Młodzików 2024/2025", "Zwycięzczyni CSI-Ch Sopot 2025"]
    },
    {
      id: 5,
      name: "Martyna Lewandowska",
      discipline: "Ujeżdżenie",
      age: 18,
      image: "https://images.unsplash.com/photo-1585650159754-247184315eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVzc2FnZSUyMGhvcnNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIwMDYxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      horse: "Fiorentino (ogier, 10 lat)",
      bio: "Pasjonatka klasycznego ujeżdżenia, znana z precyzji i harmonii w pracy z koniem.",
      achievements: ["Brązowa medalistka Mistrzostw Polski Juniorów 2025", "1. miejsce CDI-J Zakrzów 2024", "Finalistka Grand Prix Warsaw 2025"]
    },
    {
      id: 6,
      name: "Natalia Dąbrowska",
      discipline: "Skoki przez przeszkody",
      age: 21,
      image: "https://images.unsplash.com/photo-1732884432332-ab7827f0e226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlcXVlc3RyaWFuJTIwcmlkZXIlMjBob3JzZXxlbnwxfHx8fDE3NzIwNDcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      horse: "Aramis (wałach, 12 lat)",
      bio: "Najstarsza w składzie, obecnie studiuje weterynę i łączy karierę sportową z edukacją.",
      achievements: ["Reprezentantka Polski U25 2024-2026", "Zwycięzczyni CSI2* Sopot 2024", "Finalistka Pucharu Narodów Młodych Jeźdźców 2025"]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Nasze Zawodniczki</h1>
        <p className="text-xl text-gray-600 mb-12">
          Poznaj utalentowane jeźdźce, które reprezentują naszą Fundację na zawodach krajowych i międzynarodowych
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete) => (
            <div key={athlete.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={athlete.image}
                alt={athlete.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold">{athlete.name}</h2>
                  <span className="text-sm text-gray-600">{athlete.age} lat</span>
                </div>
                <p className="text-blue-600 font-medium mb-1">{athlete.discipline}</p>
                <p className="text-sm text-gray-500 mb-3 italic">Koń: {athlete.horse}</p>
                <p className="text-gray-700 mb-4">{athlete.bio}</p>
                
                <div>
                  <h3 className="font-semibold mb-2">Najważniejsze osiągnięcia:</h3>
                  <ul className="space-y-1">
                    {athlete.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">🏆</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Chcesz dołączyć do naszego klubu?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Jeśli jesteś młodą, utalentowaną zawodniczką i potrzebujesz wsparcia w rozwoju kariery 
            jeździeckiej, skontaktuj się z nami. Program stypendialny jest otwarty dla ambitnych 
            jeźdźców, którzy chcą rozwijać swoje umiejętności pod okiem doświadczonych trenerów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rekrutacja@fundacjajezdziecka.pl"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Wyślij zgłoszenie
            </a>
            <a
              href="#"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Zobacz wymagania
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Program stypendialny</h2>
          <p className="text-gray-700 mb-6">
            Nasza Fundacja oferuje kompleksowe wsparcie dla młodych jeźdźców poprzez program stypendialny, 
            który obejmuje:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">Bezpłatne treningi z certyfikowanymi trenerami</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">Dostęp do koni szkoleniowych</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">Pokrycie kosztów startów w zawodach</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">Transport na zawody krajowe i zagraniczne</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">Wsparcie psychologa sportowego</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700">Udział w obozach treningowych</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
