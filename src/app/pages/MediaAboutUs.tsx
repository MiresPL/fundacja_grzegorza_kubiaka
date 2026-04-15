import { ExternalLink, Newspaper, Radio, Share2, Trophy } from "lucide-react";

export function MediaAboutUs() {
  const articles = [
    {
      category: "Artykuły",
      icon: Newspaper,
      items: [
        {
          title: "Fundacja Grzegorza Kubiaka-Rozwój i Pasja",
          source: "Swiat Koni",
          date: "2026-04-02",
          description: "Artykuł o historii Grzegorza Kubiaka i o założeniu fundacji",
          url: "https://www.swiatkoni.pl/fundacja-grzegorza-kubiaka-rozwoj-i-pasja-powstala-20-stycznia-2026-roku-"
        }
      ]
    },
    {
      category: "Wywiady",
      icon: Radio,
      items: [
      ]
    },
    {
      category: "Wiadomości",
      icon: Trophy,
      items: [
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Media o Nas
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Przeczytaj artykuły, wywiady i wiadomości o naszej fundacji w mediach.
          </p>
        </div>
      </section>

      {/* Media Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.map((section, idx) => {
            const IconComponent = section.icon;
            return (
              <div key={idx} className="mb-16">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <article
                      key={itemIdx}
                      className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-1 p-6 flex flex-col">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-blue-600 font-medium mb-1">
                              {item.source}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(item.date).toLocaleDateString("pl-PL", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                              })}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm flex-1 mb-4">
                          {item.description}
                        </p>
                      </div>

                      {/* Link Button */}
                      {item.url !== "#" && (
                        <div className="px-6 pb-6">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          >
                            Przeczytaj więcej
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      )}
                    </article>
                  ))}
                </div>

                {/* Divider */}
                {idx < articles.length - 1 && (
                  <div className="my-12 border-t border-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bądź zawsze na bieżąco
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Obserwuj nas w mediach społecznościowych, aby być na bieżąco z najnowszymi informacjami o fundacji, zawodach i treningach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/fundacja_grzegorzakubiaka/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-medium"
              >
                <Share2 className="h-5 w-5" />
                Obserwuj nas na Instagramie
              </a>
              <a
                href="mailto:fundacja.grzegorza.kubiaka@gmail.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <Newspaper className="h-5 w-5" />
                Napisz do nas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

