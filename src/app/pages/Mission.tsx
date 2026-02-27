import { Target, Users, TrendingUp, Heart } from "lucide-react";

export function Mission() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Nasza Misja</h1>
        
        <div className="bg-blue-600 text-white p-8 rounded-lg mb-12">
          <p className="text-xl leading-relaxed">
            Misją Fundacji Jeździeckiej jest krzewienie kultury jeździeckiej, wspieranie 
            rozwoju sportu jeździeckiego oraz zapewnienie młodym zawodniczkom dostępu do 
            profesjonalnego szkolenia i infrastruktury, która umożliwi im realizację 
            sportowych ambicji przy zachowaniu najwyższych standardów dobrostanu koni.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Nasze cele</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">Rozwój sportowy</h3>
            </div>
            <p className="text-gray-700">
              Zapewniamy kompleksowe szkolenie jeździeckie na najwyższym poziomie, 
              dostęp do doświadczonych trenerów, odpowiednich koni i nowoczesnej infrastruktury.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">Budowanie społeczności</h3>
            </div>
            <p className="text-gray-700">
              Tworzymy społeczność pasjonatów koni i jeździectwa, gdzie panuje atmosfera 
              wsparcia, przyjaźni i wspólnej pasji.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">Promocja jeździectwa</h3>
            </div>
            <p className="text-gray-700">
              Promujemy sport jeździecki, organizujemy eventy i zawody, zachęcamy młodzież 
              do kontaktu z końmi i naturą.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">Dobrostan koni</h3>
            </div>
            <p className="text-gray-700">
              Edukujemy o właściwej opiece nad końmi, promujemy wysokie standardy 
              dobrostanu i etyczne podejście do jeździectwa.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Jak realizujemy naszą misję</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">1. Program stypendialny dla młodych jeźdźców</h3>
            <p className="text-gray-700">
              Przyznajemy stypendia pokrywające koszty treningów, wynajmu koni, startów 
              w zawodach oraz opieki trenerskiej dla najbardziej utalentowanych i zaangażowanych 
              zawodniczek, które nie mają możliwości finansowych na rozwijanie swojej pasji.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">2. Profesjonalne szkolenie</h3>
            <p className="text-gray-700">
              Zatrudniamy doświadczonych trenerów z certyfikatami PZHK (Polskiego Związku 
              Hodowców Koni) i międzynarodowymi uprawnieniami. Organizujemy regularne 
              treningi, szkolenia z wizytującymi trenerami oraz wyjazdy na obozy kondycyjne.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">3. Dostęp do wysokiej klasy koni</h3>
            <p className="text-gray-700">
              Posiadamy stado 25 koni szkoleniowych różnych poziomów zaawansowania. 
              Współpracujemy również z hodowcami i właścicielami koni, aby zapewnić 
              zawodniczkom dostęp do koni odpowiednich do ich poziomu i ambicji sportowych.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">4. Wsparcie w startach zawodowych</h3>
            <p className="text-gray-700">
              Organizujemy wyjazdy na zawody krajowe i międzynarodowe, zapewniając transport 
              koni, opiekę w czasie startów oraz wsparcie finansowe na opłaty startowe dla 
              naszych stypendystek.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">5. Edukacja hipologiczna</h3>
            <p className="text-gray-700">
              Prowadzimy warsztaty i szkolenia z zakresu anatomii konia, dietetyki, 
              pierwszej pomocy, kowalstwa oraz psychologii koni. Wierzymy, że dobry jeździec 
              to przede wszystkim osoba, która rozumie konia i potrafi o niego dbać.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">6. Wsparcie psychologiczne i mentoring</h3>
            <p className="text-gray-700">
              Zapewniamy dostęp do psychologa sportowego oraz program mentoringowy, 
              w ramach którego doświadczeni zawodnicy dzielą się swoim doświadczeniem 
              i wspierają młodsze koleżanki w rozwoju kariery sportowej.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">7. Organizacja eventów i zawodów</h3>
            <p className="text-gray-700">
              Regularnie organizujemy zawody jeździeckie, pokazy, dni otwarte i eventy 
              edukacyjne, które promują jeździectwo i pozwalają naszym zawodniczkom 
              zdobywać doświadczenie startowe w przyjaznym środowisku.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Nasza wizja przyszłości</h2>
          <p className="text-gray-700 mb-4">
            Mamy ambitne plany rozwoju Fundacji. W perspektywie najbliższych lat chcemy:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Rozbudować infrastrukturę o dodatkową halę treningową</li>
            <li>Stworzyć akademię jeździecką dla uzdolnionej młodzieży</li>
            <li>Rozwinąć program hodowlany wysokiej klasy koni sportowych</li>
            <li>Organizować międzynarodowe zawody jeździeckie</li>
            <li>Stworzyć ośrodek rehabilitacji koni po kontuzjach</li>
            <li>Wprowadzić program hipoterapii dla dzieci z niepełnosprawnościami</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
