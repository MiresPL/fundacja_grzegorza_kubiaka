export function Partners() {
  const strategicPartners = [
    {
      name: "Polski Związek Jeździecki (PZJ)",
      logo: "/pages/partners/image20.png",
      url: "https://pzj.pl/"
    },
    {
      name: "Warszawsko-Mazowiecki Związek Jeździecki (WMZJ)",
      logo: "/pages/partners/image19.png",
      url: "https://wmzj.waw.pl/"
    }
  ];

  const sponsors = [
    {
      name: "Koński Świat",
      logo: "/pages/partners/image16.jpeg",
      url: "https://salonkonskiswiat.pl/"
    },
    {
      name: "Fundacja Studencka \"Młodzi-Młodszym\"",
      logo: "/pages/partners/image17.png",
      url: "https://fsmm.pl/"
    },
    {
      name: "Chrupka",
      logo: "/pages/partners/image18.jpeg",
      url: "https://chrupka.pl/"
    },
    {
      name: "OverHorse",
      logo: "/pages/partners/overHorse.png",
      url: "https://over-horse.com/"
    },
    {
      name: "Winderen",
      logo: "/pages/partners/winderen.PNG",
      url: "https://www.winderen.com"
    },
    {
      name: "Equi Projekt",
      logo: "/pages/partners/equiProjekt.png",
      url: "https://equiprojekt.pl/"
    },
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
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center cursor-pointer"
              >
                <div className="h-28 bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg">{partner.name}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* Sponsors */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Sponsorzy</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className={`grid grid-cols-2 sm:grid-cols-3 ${getMdColsClass(sponsors.length, 5)} gap-6`}>
              {sponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 flex items-center justify-center min-h-[110px] shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    className="max-h-16 max-w-full object-contain"
                  />
                </a>
              ))}
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
