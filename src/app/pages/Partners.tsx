import { Handshake, Building2, Heart } from "lucide-react";

export function Partners() {
  const strategicPartners = [
    {
      name: "Polski Związek Jeździecki (PZJ)",
      type: "Partner merytoryczny",
      description: "Współpraca w zakresie rozwoju młodych talentów jeździeckich i organizacji szkoleń trenerskich."
    },
    {
      name: "Stadnina Koni Janów Podlaski",
      type: "Partner hodowlany",
      description: "Wsparcie w dostępie do wysokiej klasy koni sportowych oraz wymiana doświadczeń hodowlanych."
    },
    {
      name: "Bank Hipoteczny S.A.",
      type: "Partner główny",
      description: "Sponsoring stypendiów sportowych, organizacji obozów treningowych i modernizacji infrastruktury."
    }
  ];

  const sponsors = [
    "Cavallo Poland - odzież jeździecka",
    "Kieffer - siodła i ogłowia",
    "Equestro - karma dla koni",
    "Podkowy Max - usługi kowalskie",
    "VetHorse - opieka weterynaryjna",
    "HorseTransport - transport koni",
    "Equus Hotel & SPA",
    "Arena Sport - nawierzchnie"
  ];

  const friends = [
    {
      name: "Stajnia pod Lasem - Konstancin",
      support: "Współpraca w organizacji obozów i wymiana doświadczeń szkoleniowych"
    },
    {
      name: "Ośrodek Jeździecki Equus - Warszawa",
      support: "Udostępnienie infrastruktury do treningów i zawodów"
    },
    {
      name: "Fundacja Koń na Medal",
      support: "Współpraca w projektach społecznych związanych z jeździectwem"
    },
    {
      name: "Wydział Medycyny Weterynaryjnej SGGW",
      support: "Wsparcie weterynaryjne i edukacja w zakresie zdrowia koni"
    },
    {
      name: "Stowarzyszenie Trenerów Jeździectwa",
      support: "Szkolenia i certyfikacja dla naszej kadry trenerskiej"
    },
    {
      name: "Ośrodek Hippoterapii Konik",
      support: "Wymiana doświadczeń w zakresie terapii z udziałem koni"
    }
  ];

  const benefits = [
    {
      icon: Building2,
      title: "Dla firm",
      items: [
        "Logo firmy na strojach zawodniczek i sprzęcie",
        "Promocja w mediach społecznościowych fundacji",
        "Naming rights - nazwa firmy w nazwie zawodów",
        "Możliwość organizacji eventów firmowych w ośrodku",
        "Ulga podatkowa od darowizn",
        "VIP pakiety na organizowane przez nas zawody",
        "Współpraca w ramach CSR"
      ]
    },
    {
      icon: Heart,
      title: "Dla osób prywatnych",
      items: [
        "Satysfakcja ze wspierania młodych talentów",
        "Regularne newslettery z wynikami zawodniczek",
        "Zaproszenia na treningi i zawody",
        "Możliwość poznania koni i zawodniczek",
        "Ulga podatkowa - 1% podatku",
        "Certyfikat Przyjaciela Fundacji",
        "Udział w wydarzeniach fundacji"
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Nasi Partnerzy i Przyjaciele</h1>
        <p className="text-xl text-gray-600 mb-12">
          Wspólnie rozwijamy polskie jeździectwo i wspieramy młode talenty
        </p>

        {/* Strategic Partners */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Partnerzy strategiczni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
                <p className="text-sm text-blue-600 mb-3">{partner.type}</p>
                <p className="text-sm text-gray-700">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Sponsorzy</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-700 mb-6">
              Dziękujemy naszym sponsorom za wsparcie finansowe i rzeczowe. Dzięki nim możemy 
              zapewnić naszym zawodniczkom i koniom najlepsze warunki treningowe oraz sprzęt 
              na najwyższym poziomie.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors.map((sponsor, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 flex items-center justify-center min-h-[100px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-gray-800 text-center text-sm">{sponsor}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Friends */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Przyjaciele Fundacji</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {friends.map((friend, index) => (
              <div key={index} className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="font-semibold mb-2 text-blue-900">{friend.name}</h3>
                <p className="text-sm text-gray-600">{friend.support}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Korzyści dla partnerów</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sponsorship Packages */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Pakiety sponsorskie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-amber-500">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Pakiet BRĄZOWY</h3>
              <p className="text-2xl font-bold mb-4">5 000 zł/rok</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Logo na stronie internetowej</li>
                <li>✓ Wymienienie w social mediach</li>
                <li>✓ Certyfikat partnera</li>
                <li>✓ 2 zaproszenia na zawody</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gray-400">
              <h3 className="font-bold text-xl mb-2 text-gray-600">Pakiet SREBRNY</h3>
              <p className="text-2xl font-bold mb-4">15 000 zł/rok</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Wszystko z pakietu brązowego</li>
                <li>✓ Logo na bandach treningowych</li>
                <li>✓ Logo na koszulkach treningowych</li>
                <li>✓ 5 zaproszeń VIP na zawody</li>
                <li>✓ Możliwość eventu firmowego</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-yellow-500">
              <h3 className="font-bold text-xl mb-2 text-yellow-600">Pakiet ZŁOTY</h3>
              <p className="text-2xl font-bold mb-4">30 000 zł/rok</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Wszystko z pakietu srebrnego</li>
                <li>✓ Logo na strojach zawodowych</li>
                <li>✓ Naming rights zawodów</li>
                <li>✓ 10 zaproszeń VIP</li>
                <li>✓ Dedykowana kampania PR</li>
                <li>✓ Możliwość sponsoringu konkretnej zawodniczki</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Zostań naszym partnerem</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dołącz do grona firm i osób, które aktywnie wspierają rozwój polskiego jeździectwa. 
            Razem możemy wychować przyszłych mistrzów olimpijskich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerzy@fundacjajezdziecka.pl"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Skontaktuj się z nami
            </a>
            <a
              href="#"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Pobierz ofertę współpracy (PDF)
            </a>
          </div>
        </section>

        {/* Why Support */}
        <section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Dlaczego warto nas wspierać?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-blue-600 mb-3">Transparentność</h3>
              <p className="text-gray-700 text-sm">
                Regularnie publikujemy sprawozdania finansowe i raporty z działalności. 
                Każda złotówka jest dokładnie rozliczana i wykorzystywana zgodnie z celami statutowymi.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-3">Realne efekty</h3>
              <p className="text-gray-700 text-sm">
                Nasze zawodniczki regularnie zdobywają medale i reprezentują Polskę na 
                arenie międzynarodowej. Twoje wsparcie przekłada się na wymierne sukcesy sportowe.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-3">Doświadczenie</h3>
              <p className="text-gray-700 text-sm">
                Działamy od 2012 roku i mamy sprawdzony model współpracy z partnerami. 
                Wiemy, jak dbać o wizerunek naszych sponsorów i partnerów biznesowych.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-3">Rozw��j sportu</h3>
              <p className="text-gray-700 text-sm">
                Wspierając nas, inwestujesz w przyszłość polskiego jeździectwa i rozwijasz 
                dyscyplinę sportową, która łączy tradycję z nowoczesnością.
              </p>
            </div>
          </div>
        </section>

        {/* Thank You */}
        <section className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Serdecznie dziękujemy wszystkim partnerom, sponsorom i przyjaciołom za wsparcie 
            i wiarę w naszą misję. Dzięki Wam możemy pomagać młodym zawodniczkom spełniać 
            ich jeździeckie marzenia i reprezentować Polskę na międzynarodowych parkurach!
          </p>
          <p className="text-lg text-gray-600 mt-4 italic">
            - Zespół Fundacji Jeździeckiej
          </p>
        </section>
      </div>
    </div>
  );
}
