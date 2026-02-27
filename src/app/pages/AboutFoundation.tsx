export function AboutFoundation() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">O Fundacji</h1>
        
        <div className="prose max-w-none">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1758573951451-a6d625f124de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3JzZSUyMHN0YWJsZSUyMHRyYWluaW5nfGVufDF8fHx8MTc3MjA0NzEwNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Stajnia"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Kim jesteśmy</h2>
          <p className="mb-6 text-gray-700">
            Fundacja Grzegorza Kubiaka-Rozwój i Pasja to organizacja prowadząca klub sportowy, zarejestrowany w
            Warszawsko-Mazowieckim Związku Jeździeckim oraz w Polskim Związku Jeździeckim.
            Naszym głównym celem jest rozwój jeździectwa wyczynowego i wspieranie młodych talentów jeździeckich.
            Działamy od 2026 roku, łącząc pasję do koni z profesjonalnym podejściem do sportu.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Nasza historia</h2>
          <p className="mb-6 text-gray-700">
            Fundacja Grzegorza Kubiaka-Rozwój i Pasja powstała 20 stycznia 2026 r.
            Fundatorem i pomysłodawcą został Grzegorz Kubiak.
            Fundacja wspiera grupę ambitnej i utalentowanej młodzieży, która regularnie odnosi sukcesy w ogólnopolskich i międzynarodowych zawodach jeździeckich. Nasze zawodniczki i zawodnicy są regularnie powoływani do kadry wojewódzkiej oraz do kadry narodowej dzieci i młodzieży
            Naszym trenerem jest Olimpijczyk, Trener i Selekcjoner Kadry Narodowej – Grzegorz Kubiak
          </p>

          <p className="mb-6 text-gray-700">
            Nasza młodzież startuje w zawodach skokowych na poziomach od 110 do 150 cm, w tym w konkursach Grand Prix, CSI1* oraz CSI2* zarówno na zawodach jeździeckich w Polsce i Europie.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Nasze wartości</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Dobrostan koni na pierwszym miejscu</li>
            <li>Profesjonalizm w szkoleniu</li>
            <li>Etyka sportowa i fair play</li>
            <li>Transparentność działania</li>
            <li>Pasja i zaangażowanie</li>
            <li>Budowanie przyjaznej społeczności</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Nasza infrastruktura</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Hala treningowa</h3>
              <p>Kryta hala jeździecka 30x60m z profesjonalną nawierzchnią, umożliwiająca treningi przez cały rok.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Plac zewnętrzny</h3>
              <p>Zewnętrzna ujeżdżalnia 60m x 80m oraz tor przeszkód z możliwością budowy różnych konfiguracji.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Stajnie</h3>
              <p>Murowane boksy dla 30 koni.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Zaplecze</h3>
              <p>Paszarnia i siodlarnia oraz pomieszczenie socjalne</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Obszary działania</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Sport wyczynowy</h3>
              <p>Szkolenie zawodników w dyscyplinie skoki przez przeszkody. Organizacja startów w zawodach krajowych i międzynarodowych.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Nauka jazdy konnej</h3>
              <p>Profesjonalne lekcje jazdy konnej dla młodzieży i dorosłych na wszystkich poziomach zaawansowania.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Obozy i warsztaty</h3>
              <p>Możliwość Organizacji klinik jeździeckich, warsztatów tematycznych i szkoleń z zakresu hipologii i dobrostanu koni.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Zawody i eventy</h3>
              <p>Organizacja zawodów jeździeckich, pokazów i eventów promujących jeździectwo i kulturę końską.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
