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
            Fundacja Jeździecka to organizacja non-profit prowadząca klub sportowy, 
            którego głównym celem jest rozwój jeździectwa wyczynowego i wspieranie młodych 
            talentów jeździeckich. Działamy od 2012 roku, łącząc pasję do koni z 
            profesjonalnym podejściem do sportu.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Nasza historia</h2>
          <p className="mb-6 text-gray-700">
            Fundacja została założona przez grupę pasjonatów jeździectwa, którzy dostrzegli 
            potrzebę systematycznego wsparcia dla młodych zawodniczek. Rozpoczęliśmy od małej 
            stajni z kilkoma końmi, a dziś dysponujemy nowoczesnym ośrodkiem jeździeckim z 
            profesjonalną infrastrukturą, 25 końmi szkoleniowymi i pełnowymiarową halą treningową.
          </p>

          <p className="mb-6 text-gray-700">
            Od momentu powstania przeszkoliłyśmy ponad 150 jeźdźców, a nasze zawodniczki 
            zdobyły ponad 80 medali w zawodach krajowych i międzynarodowych. Jesteśmy dumni, 
            że kilka z nich reprezentowało Polskę w międzynarodowych zawodach juniorskich.
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
              <p>Kryta hala jeździecka 20x60m z profesjonalną nawierzchnią, 
              umożliwiająca treningi przez cały rok.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Plac zewnętrzny</h3>
              <p>Zewnętrzne ujeżdżalnie 20x40m i 20x60m oraz tor przeszkód z możliwością 
              budowy różnych konfiguracji.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Stajnie</h3>
              <p>Nowoczesne boksy dla 40 koni z profesjonalną wentylacją, 
              solarium i okrągłym padokiem.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Zaplecze</h3>
              <p>Szatnie, pomieszczenia socjalne, przechowalnia sprzętu i siodlarnia.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Nasze konie</h2>
          <p className="mb-6 text-gray-700">
            W naszej stajni znajduje się 25 koni szkoleniowych różnych ras i poziomów 
            wyszkolenia. Mamy konie odpowiednie zarówno dla początkujących jeźdźców, 
            jak i dla zaawansowanych zawodników startujących w zawodach. Wszystkie konie 
            są regularnie badane weterynaryjnie i otrzymują najwyższej klasy opiekę.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Obszary działania</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Sport wyczynowy</h3>
              <p>Szkolenie zawodników w dyscyplinach: WKKW (skoki), ujeżdżenie i eventing. 
              Organizacja startów w zawodach krajowych i międzynarodowych.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Nauka jazdy konnej</h3>
              <p>Profesjonalne lekcje jazdy konnej dla dzieci, młodzieży i dorosłych 
              na wszystkich poziomach zaawansowania.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Obozy i warsztaty</h3>
              <p>Organizacja obozów jeździeckich, warsztatów tematycznych i szkoleń 
              z zakresu hipologii i dobrostanu koni.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Zawody i eventy</h3>
              <p>Organizacja zawodów jeździeckich, pokazów i eventów promujących 
              jeździectwo i kulturę końską.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
