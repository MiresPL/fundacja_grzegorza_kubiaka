export function Athletes() {
  const athletes = [
    {
      id: 1,
      // name: "Test test",
      // discipline: "Test",
      // age: 18,
      image: "/pages/athletes/image8.png",
      imagePositionClass: "object-top",
      // horse: "Test",
      // bio: "Test",
      // achievements: ["Test1", "Test 2", "Test 3"]
    },
    {
      id: 2,
      image: "/pages/athletes/image9.png"
    },
    {
      id: 3,
      image: "/pages/athletes/image10.png"
    },
    {
      id: 4,
      image: "/pages/athletes/image11.png",
      imagePositionClass: "object-top"
    },
    {
      id: 5,
      image: "/pages/athletes/image12.png",
      imagePositionClass: "object-top"
    },
    {
      id: 6,
      image: "/pages/athletes/image13.png",
      imagePositionClass: "object-top"
    },
    {
      id: 7,
      image: "/pages/athletes/image14.png"
    },
    {
      id: 8,
      image: "/pages/athletes/image15.png",
      imagePositionClass: "object-top"
    },
    {
      id: 9,
      image: "/pages/athletes/image21.jpg",
      imagePositionClass: "object-top"
    },
    /*{
      id: 10,
      image: "/pages/athletes/image25.jpg",
      imagePositionClass: "object-top"
    },*/
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Nasze Zawodniczki</h1>
        <p className="text-xl text-gray-600 mb-12">
          Poznaj utalentowane amazonki, które reprezentują naszą Fundację na zawodach krajowych i międzynarodowych
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete) => (
            <div key={athlete.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full aspect-[3/4] bg-gray-100">
                <img
                  src={athlete.image}
                  alt="Zawodniczka"
                  className={`w-full h-full object-cover ${athlete.imagePositionClass ?? "object-center"}`}
                />
              </div>
              {/* Zakomentowane dane osobowe - do odkomentowania w przyszłości jeśli klient zmieni zdanie */}
              {/* <div className="p-6">
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
              </div> */}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Chcesz dołączyć do naszego klubu?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Jeśli jesteś młodą, utalentowaną zawodniczką lub zawodnikiem i potrzebujesz wsparcia w rozwoju kariery
            jeździeckiej, skontaktuj się z nami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:funcjacja.grzegorza.kubiaka@gmail.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Wyślij zgłoszenie
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
