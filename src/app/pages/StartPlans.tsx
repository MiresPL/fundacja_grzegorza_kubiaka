import { Calendar, MapPin, Users } from "lucide-react";

export function StartPlans() {
  const upcomingEvents = [
    {
      id: 1,
      date: "8-9 Marca 2026",
      event: "CSI2* Cavaliada Poznań",
      location: "Poznań, Polska",
      athletes: ["Julia Nowak (140cm)", "Natalia Dąbrowska (145cm)"],
      status: "Potwierdzone"
    },
    {
      id: 2,
      date: "15-17 Marca 2026",
      event: "CDI-J Zakrzów",
      location: "Zakrzów, Polska",
      athletes: ["Wiktoria Kamińska (PSG)", "Martyna Lewandowska (Juniorzy)"],
      status: "Potwierdzone"
    },
    {
      id: 3,
      date: "22-23 Marca 2026",
      event: "Puchar Polski Juniorów - 2. runda",
      location: "Sopot, Polska",
      athletes: ["Julia Nowak", "Oliwia Kowalczyk"],
      status: "Potwierdzone"
    },
    {
      id: 4,
      date: "5-7 Kwietnia 2026",
      event: "CCI3* Baborówko",
      location: "Baborówko, Polska",
      athletes: ["Zuzanna Wiśniewska (CCI2*)"],
      status: "Zgłoszone"
    },
    {
      id: 5,
      date: "20-22 Kwietnia 2026",
      event: "Mistrzostwa Polski Juniorów - eliminacje",
      location: "Warszawa, Polska",
      athletes: ["Julia Nowak", "Oliwia Kowalczyk", "Martyna Lewandowska"],
      status: "Kwalifikacje w trakcie"
    },
    {
      id: 6,
      date: "3-5 Maja 2026",
      event: "CSI-Ch Sopot Horse Show",
      location: "Sopot, Polska",
      athletes: ["Oliwia Kowalczyk (Children)", "Julia Nowak (Junior)"],
      status: "Zgłoszone"
    },
    {
      id: 7,
      date: "15-18 Maja 2026",
      event: "CDIO Hagen - Puchar Narodów Juniorów",
      location: "Hagen, Niemcy",
      athletes: ["Wiktoria Kamińska (kadra narodowa)"],
      status: "Cel sezonowy"
    },
    {
      id: 8,
      date: "12-16 Czerwca 2026",
      event: "Mistrzostwa Europy Juniorów",
      location: "Fontainebleau, Francja",
      athletes: ["Julia Nowak (w przypadku kwalifikacji)"],
      status: "Cel sezonowy"
    },
    {
      id: 9,
      date: "5-10 Lipca 2026",
      event: "European Youth Olympic Festival (EYOF)",
      location: "Maribor, Słowenia",
      athletes: ["Julia Nowak (po kwalifikacji olimpijskiej)"],
      status: "Cel sezonowy"
    }
  ];

  const trainingCamps = [
    {
      date: "1-10 Marca 2026",
      location: "Ośrodek Jeździecki Equus, Polska",
      focus: "Obóz kondycyjny - skoki przez przeszkody",
      participants: "Julia Nowak, Oliwia Kowalczyk, Natalia Dąbrowska",
      trainer: "Trener: Janusz Bobik (kadra narodowa)"
    },
    {
      date: "15-25 Kwietnia 2026",
      location: "Stadnina Koni Janów Podlaski",
      focus: "Obóz ujeżdżeniowy - doskonalenie techniki",
      participants: "Wiktoria Kamińska, Martyna Lewandowska",
      trainer: "Trener: Anna Kowalska + gość specjalny z Niemiec"
    },
    {
      date: "1-15 Maja 2026",
      location: "Ośrodek WKKW Baborówko",
      focus: "Przygotowania do sezonu WKKW - cross country",
      participants: "Zuzanna Wiśniewska",
      trainer: "Trener: Paweł Warszawski (specjalista WKKW)"
    },
    {
      date: "20-30 Czerwca 2026",
      location: "Morasko k. Poznania",
      focus: "Obóz przedzawodowy przed Mistrzostwami Polski",
      participants: "Wszystkie zawodniczki",
      trainer: "Cały sztab trenerski fundacji"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Nasze Plany Startowe</h1>
        <p className="text-xl text-gray-600 mb-12">
          Kalendarz najbliższych startów i obozów treningowych naszych zawodniczek - sezon 2026
        </p>

        {/* Upcoming Competitions */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Nadchodzące zawody i starty</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.event}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-start gap-2 text-gray-700">
                      <Users className="h-4 w-4 mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <strong>Startują:</strong>
                        {event.athletes.map((athlete, index) => (
                          <div key={index}>{athlete}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      event.status === "Potwierdzone"
                        ? "bg-green-100 text-green-800"
                        : event.status === "Zgłoszone"
                        ? "bg-yellow-100 text-yellow-800"
                        : event.status === "Kwalifikacje w trakcie"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Camps */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Obozy treningowe i zgrupowania</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingCamps.map((camp, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <div className="text-blue-600 font-semibold mb-2">{camp.date}</div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-gray-700" />
                  <span className="font-semibold">{camp.location}</span>
                </div>
                <div className="text-sm text-gray-700 mb-2">
                  <strong>Cel obozu:</strong> {camp.focus}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Uczestniczki:</strong> {camp.participants}
                </div>
                <div className="text-sm text-gray-600 italic">
                  {camp.trainer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Season Goals */}
        <section className="bg-blue-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cele sportowe na sezon 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Cele indywidualne:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Julia Nowak - medal na Mistrzostwach Europy Juniorów w skokach</li>
                <li>• Wiktoria Kamińska - miejsce w finale ME Juniorów w ujeżdżeniu</li>
                <li>• Zuzanna Wiśniewska - zwycięstwo w zawodach CCI3*</li>
                <li>• Oliwia Kowalczyk - tytuł Mistrzyni Polski Młodzików</li>
                <li>• Natalia Dąbrowska - stabilne wyniki w zawodach CSI2*/CSI3*</li>
                <li>• Martyna Lewandowska - medal na Mistrzostwach Polski Juniorów</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Cele zespołowe:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Minimum 10 medali w zawodach krajowych</li>
                <li>• 3-5 medali w zawodach międzynarodowych</li>
                <li>• Wszystkie zawodniczki z licencją FEI</li>
                <li>• Udział w minimum jednym Pucharze Narodów</li>
                <li>• Tytuł najlepszego klubu juniorskiego w Polsce</li>
                <li>• Awans 2 zawodniczek do kadry narodowej</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Competition Info */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">O zawodach jeździeckich</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Skoki przez przeszkody</h3>
              <p className="text-sm text-gray-700 mb-2">
                Klasyfikacja zawodów według wysokości przeszkód i poziomu międzynarodowego:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Młodziki: do 120cm</li>
                <li>• Juniorzy: do 140cm</li>
                <li>• Młode Konie: do 145cm</li>
                <li>• CSI*/CSI**: 130-160cm</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Ujeżdżenie</h3>
              <p className="text-sm text-gray-700 mb-2">
                Poziomy trudności repryz ujeżdżeniowych:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Juniorzy: testy juniorskie</li>
                <li>• Young Riders: testy U25</li>
                <li>• PSG: Prix St. Georges</li>
                <li>• CDI: międzynarodowe</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">WKKW (Eventing)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Poziomy trudności WKKW:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CCI1*: wstępny</li>
                <li>• CCI2*: średni</li>
                <li>• CCI3*: zaawansowany</li>
                <li>• CCI4*/5*: najwyższy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Wesprzyj nasze zawodniczki</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Każdy start w zawodach to znaczny koszt - opłaty startowe, transport koni, 
            noclegi, opieka weterynaryjna. Twoje wsparcie pomoże naszym zawodniczkom 
            dotrzeć na najważniejsze zawody i walczyć o medale dla Polski.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Wpłać darowiznę
            </a>
            <a
              href="#"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Zostań sponsorem startu
            </a>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Koszt jednego startu międzynarodowego: 2000-5000 zł (w zależności od poziomu zawodów)
          </p>
        </section>
      </div>
    </div>
  );
}
