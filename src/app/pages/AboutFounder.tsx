export function AboutFounder() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">O Fundatorze</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1732884432332-ab7827f0e226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlcXVlc3RyaWFuJTIwcmlkZXIlMjBob3JzZXxlbnwxfHx8fDE3NzIwNDcxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fundator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-semibold mb-4">Anna Kowalska</h2>
              <p className="text-gray-600 mb-4">Założycielka i Prezes Fundacji</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  Anna Kowalska to była reprezentantka Polski w jeździectwie, 
                  specjalizująca się w skokach przez przeszkody i wszechstronnym 
                  konkursie konia wierzchowego (WKKW).
                </p>
                <p>
                  Z ponad 25-letnim doświadczeniem w sporcie jeździeckim i certyfikatem 
                  trenera klasy mistrzowskiej, Anna doskonale rozumie potrzeby młodych 
                  jeźdźców. Jej pasją jest dzielenie się wiedzą i pomaganie następnym 
                  pokoleniom w realizacji ich jeździeckich marzeń.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Osiągnięcia sportowe</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Reprezentantka Polski w Mistrzostwach Europy WKKW (2008, 2010, 2012)</li>
            <li>Mistrzyni Polski w skokach przez przeszkody (2009, 2011)</li>
            <li>Wicemistrzyni Polski w WKKW (2010, 2012, 2014)</li>
            <li>Wielokrotna medalistka zawodów międzynarodowych CSI*/CSI**</li>
            <li>Uczestniczka Pucharu Narodów w Falsterbo (2011)</li>
            <li>Zwycięzczyni Grand Prix w Sopot Horse Show (2013)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Droga do założenia Fundacji</h2>
          <p className="mb-6 text-gray-700">
            "Jeździectwo to nie tylko sport - to styl życia, który kształtuje charakter, 
            uczy odpowiedzialności i buduje więź z naturą. Po zakończeniu kariery sportowej 
            wiedziałam, że chcę pozostać w tym świecie i pomagać młodym ludziom odkrywać 
            piękno tego sportu."
          </p>

          <p className="mb-6 text-gray-700">
            Pomysł założenia Fundacji zrodził się z obserwacji, że wielu utalentowanych 
            młodych jeźdźców nie ma możliwości rozwijania swojego talentu ze względu na 
            wysokie koszty treningów, utrzymania koni i startów w zawodach. Anna postanowiła 
            stworzyć miejsce, gdzie talent spotyka się z profesjonalnym wsparciem.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Wizja i motywacja</h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic mb-6 text-gray-700">
            "Wierzę, że każde dziecko, które marzy o jeździectwie, zasługuje na szansę. 
            Sport jeździecki uczy nie tylko umiejętności technicznych, ale przede wszystkim 
            empatii, cierpliwości i szacunku - wartości, które towarzyszą przez całe życie. 
            Fundacja to moja misja oddania jeździectwu tego, co ono dało mnie."
          </blockquote>

          <h2 className="text-2xl font-semibold mb-4">Działalność społeczna i edukacyjna</h2>
          <p className="mb-4 text-gray-700">
            Oprócz prowadzenia Fundacji, Anna aktywnie działa na rzecz rozwoju jeździectwa 
            w Polsce:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Członek Komisji WKKW Polskiego Związku Jeździeckiego</li>
            <li>Trener kadry wojewódzkiej juniorów w skokach przez przeszkody</li>
            <li>Wykładowca na kursach dla instruktorów jeździectwa</li>
            <li>Sędzia zawodów krajowych klasy C</li>
            <li>Autorka artykułów o jeździectwie w magazynie "Koń Polski"</li>
            <li>Prowadząca warsztaty z zakresu dobrostanu koni</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Filozofia pracy</h2>
          <p className="text-gray-700">
            Anna wierzy w holistyczne podejście do szkolenia jeździeckiego. Jej metoda 
            łączy klasyczne zasady jazdy konnej z nowoczesnymi technikami treningowymi, 
            zawsze stawiając na pierwszym miejscu dobrostan konia i bezpieczeństwo jeźdźca. 
            Kładzie duży nacisk na budowanie pozytywnej relacji między koniem a jeźdźcem, 
            opartej na zaufaniu i wzajemnym szacunku.
          </p>
        </div>
      </div>
    </div>
  );
}
