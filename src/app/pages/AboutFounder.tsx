export function AboutFounder() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">O Fundatorze</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src="/pages/o-fundatorze.png"
                alt="Fundator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-semibold mb-4">Grzegorz Kubiak</h2>
              <p className="text-gray-600 mb-4">NIE ZNAM FUNKCJI</p>
              <div className="space-y-4 text-gray-700">
                <p>
                  NIE MAM OPISU
                </p>
                <p>
                  NIE MAM OPISU
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Osiągnięcia sportowe</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>Olimpijczyk – Ateny 2004, odznaczony Złotą Odznaką FEI</li>
            <li>Ośmiokrotny złoty medalista Mistrzostw Polski</li>
            <li>Pięciokrotny finalista Pucharu Świata w skokach przez przeszkody</li>
            <li>Zwycięzca konkursu potęga skoku z Berlina (208 cm)</li>
            <li>Finalista licznych konkursów Grand Prix w prestiżowym rankingu Longines</li>
            <li>Trener mistrzów – syn Dawid pod jego kierunkiem sięgnął po tytuł Mistrza Polski i start w Olimpiadzie w 2024</li>
            <li>Selekcjoner, mentor oraz Trener Mentor PZJ, szkoleniowiec Kadry Narodowej Dzieci i Młodzieży</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Droga do założenia Fundacji</h2>
          <p className="mb-6 text-gray-700">
            "Jeździectwo to nie tylko sport - to styl życia, który kształtuje charakter, uczy
            odpowiedzialności i buduje więź z naturą. W czasie mojej kariery sportowej zrozumiałem,
            że chcę pozostać w tym świecie i pomagać młodym ludziom odkrywać piękno tego sportu."
          </p>

          <p className="mb-6 text-gray-700">
            Pomysł założenia Fundacji zrodził się z obserwacji, że wielu utalentowanych młodych jeźdźców
            nie ma możliwości rozwijania swojego talentu ze względu na wysokie koszty treningów,
            utrzymania koni i startów w zawodach. Postanowiłem stworzyć miejsce,
            gdzie talent spotyka się z profesjonalnym wsparciem.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Wizja i motywacja</h2>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic mb-6 text-gray-700">
            "Wierzę, że każde dziecko, które marzy o jeździectwie, zasługuje na szansę. Sport jeździecki
            uczy nie tylko umiejętności technicznych, ale przede wszystkim empatii, cierpliwości i szacunku
            - wartości, które towarzyszą przez całe życie. Fundacja to moja misja oddania jeździectwu
            tego, co jeździectwo dało mnie."
          </blockquote>
        </div>
      </div>
    </div>
  );
}
