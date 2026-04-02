export function Partners() {
  const strategicPartners = [
    {
      name: "Polski Związek Jeździecki (PZJ)",
      logo: "/pages/partners/image20.png",
      // type: "Partner merytoryczny",
      // description: "Współpraca w zakresie rozwoju młodych talentów jeździeckich i organizacji szkoleń trenerskich."
    },
    {
      name: "Warszawsko-Mazowiecki Związek Jeździecki (WMZJ)",
      logo: "/pages/partners/image19.png",
      // type: "Partner hodowlany",
      // description: "Wsparcie w dostępie do wysokiej klasy koni sportowych oraz wymiana doświadczeń hodowlanych."
    }
  ];

  const sponsors = [
    { name: "Koński Świat", logo: "/pages/partners/image16.jpeg" },
    { name: "Fundacja Studencka \"Młodzi-Młodszym\"", logo: "/pages/partners/image17.png" },
    { name: "Chrupka", logo: "/pages/partners/image18.jpeg" },
    { name: "OverHorse", logo: "/pages/partners/overHorse.png" },
    { name: "Winderen", logo: "/pages/partners/winderen.PNG" },
  ];

  const mdColsClassMap = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5"
  } as const;

  const getMdColsClass = (count: number, max: 1 | 2 | 3 | 4 | 5) => {
    const normalized = Math.min(Math.max(count, 1), max) as 1 | 2 | 3 | 4 | 5;
    return mdColsClassMap[normalized];
  };

  /*const friends = [
    {
      name: "Test",
      support: "Test"
    }
  ];*/

  /*const benefits = [
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
  ];*/

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
          <div className={`grid grid-cols-1 ${getMdColsClass(strategicPartners.length, 3)} gap-6`}>
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
                <div className="h-28 bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg">{partner.name}</h3>
                {/* <p className="text-sm text-blue-600 mb-3">{partner.type}</p> */}
                {/* <p className="text-sm text-gray-700">{partner.description}</p> */}
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Sponsorzy</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className={`grid grid-cols-2 sm:grid-cols-3 ${getMdColsClass(sponsors.length, 5)} gap-6`}>
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 flex items-center justify-center min-h-[110px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Friends */}
        {/*<section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Przyjaciele Fundacji</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {friends.map((friend, index) => (
              <div key={index} className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h3 className="font-semibold mb-2 text-blue-900">{friend.name}</h3>
                <p className="text-sm text-gray-600">{friend.support}</p>
              </div>
            ))}
          </div>
        </section>*/}

        {/* Benefits */}
        {/*<section className="mb-16">
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
        </section>*/}

        {/* Sponsorship Packages */}
        {/*<section className="mb-16">
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
        </section>*/}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Zostań naszym partnerem</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Dołącz do grona firm i osób, które aktywnie wspierają rozwój polskiego jeździectwa. 
            Razem możemy wychować przyszłych mistrzów olimpijskich!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:funcjacja.grzegorza.kubiaka@gmail.com"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Skontaktuj się z nami
            </a>
            <a
              href="/downloads/Fundacja_Grzegorz_Kubiak-propozycja_współpracy.pdf"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Pobierz ofertę współpracy (PDF)
            </a>
          </div>
        </section>

        {/* Why Support */}
        {/*<section className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Dlaczego warto nas wspierać?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-blue-600 mb-3"></h3>
              <p className="text-gray-700 text-sm">
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-3"></h3>
              <p className="text-gray-700 text-sm">
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-3"></h3>
              <p className="text-gray-700 text-sm">
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 mb-3"></h3>
              <p className="text-gray-700 text-sm">
              </p>
            </div>
          </div>
        </section>*/}

        {/* Thank You */}
        <section className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Serdecznie dziękujemy wszystkim partnerom, sponsorom i przyjaciołom za wsparcie 
            i wiarę w naszą misję. Dzięki Wam możemy pomagać młodym zawodniczkom spełniać 
            ich jeździeckie marzenia i reprezentować Polskę na międzynarodowych parkurach!
          </p>
          <p className="text-lg text-gray-600 mt-4 italic">
            - Zespół Fundacji Grzegorza Kubiaka
          </p>
        </section>
      </div>
    </div>
  );
}
