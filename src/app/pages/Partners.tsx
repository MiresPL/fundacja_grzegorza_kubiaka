import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { InstagramEmbed } from "../components/ui/InstagramEmbed.tsx";
import { useState } from "react";

type PartnerLink = {
  name: string;
  logo: string;
  url: string;
};

type ProgramItem = {
  id: string;
  title: string;
  fullText: string;
  images: string[];
  instagramEmbedCode: string;
};

type ProgramSubsection = {
  id: string;
  name: string;
  items: ProgramItem[];
};

type Program = {
  id: number;
  name: string;
  fullText: string;
  logo: string;
  images: string[];
  instagramEmbedCode: string;
  subprograms: ProgramSubsection[];
};

export function Partners() {
  const [openProgram, setOpenProgram] = useState<string | undefined>(undefined);

  const getPreviewText = (text: string, limit = 110) => {
    if (text.length <= limit) return text;
    return `${text.slice(0, limit).trimEnd()}...`;
  };

  const strategicPartners: PartnerLink[] = [
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

  const sponsors: PartnerLink[] = [
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
    }
  ];

  const programs: Program[] = [
    {
      id: 1,
      name: "Aktywni Lokalnie",
      fullText:
        "Program Aktywni Lokalnie to inicjatywa wspierająca lokalną społeczność poprzez promocję jeździectwa i aktywnego spędzania czasu. Program obejmuje szereg spotkań i warsztatów edukacyjnych dla jeźdźców wszystkich poziomów zaawansowania.",
      logo: "/pages/baner_Aktywni Lokalnie.png",
      images: [],
      instagramEmbedCode: "",
      subprograms: [
        {
          id: "al-1",
          name: "Cykl Spotkań",
          items: [
            {
              id: "al-1-a",
              title: "Spotkanie 1",
              fullText: "Opis spotkania 1",
              images: ["/pages/baner_Aktywni Lokalnie.png"],
              instagramEmbedCode: ""
            },
            {
              id: "al-1-b",
              title: "Spotkanie 2",
              fullText: "Opis spotkania 2",
              images: [],
              instagramEmbedCode: ""
            }
          ]
        },
        {
          id: "al-2",
          name: "Poznajemy Stajenne Życie, od czyszczenia do treningu",
          items: [
            {
              id: "al-2-a",
              title: "Podstawy opieki",
              fullText: "Nauka podstawowych czynności opiekuńczych nad koniem",
              images: [],
              instagramEmbedCode: ""
            },
            {
              id: "al-2-b",
              title: "Przygotowanie do jazdy",
              fullText: "Przygotowanie sprzętu i konia do treningu",
              images: [],
              instagramEmbedCode: ""
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Wielki Mistrz",
      fullText:
        "Program Wielki Mistrz to zaawansowany program szkoleniowy pod patronatem Ministerstwa Sportu i Turystyki. Program ma na celu wychowanie przyszłych mistrzów sportu jeździeckiego poprzez profesjonalne szkolenie prowadzone przez doświadczonych trenerów.",
      logo: "/pages/baner_Wielki Mistrz.jpg",
      images: [],
      instagramEmbedCode: "",
      subprograms: [
        {
          id: "wm-1",
          name: "Program Szkolenia",
          items: [
            {
              id: "wm-1-a",
              title: "Podstawy skakania",
              fullText: "Fundamentalne umiejętności w skakaniu przez przeszkody",
              images: [],
              instagramEmbedCode: ""
            },
            {
              id: "wm-1-b",
              title: "Zaawansowane techniki",
              fullText: "Doskonalenie techniki jazdy na wyższym poziomie",
              images: [],
              instagramEmbedCode: ""
            }
          ]
        }
      ]
    }
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

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Partnerzy i Programy</h1>
        <p className="text-xl text-gray-600 mb-12">Wspólnie rozwijamy polskie jeździectwo i wspieramy młode talenty</p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Partnerzy strategiczni</h2>
          <div className={`grid grid-cols-1 ${getMdColsClass(strategicPartners.length, 3)} gap-6`}>
            {strategicPartners.map((partner) => (
              <a
                key={partner.url}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center cursor-pointer"
              >
                <div className="h-28 bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-4">
                  <img src={partner.logo} alt={`Logo ${partner.name}`} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="font-semibold text-lg">{partner.name}</h3>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Sponsorzy</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className={`grid grid-cols-2 sm:grid-cols-3 ${getMdColsClass(sponsors.length, 5)} gap-6`}>
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.url}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 flex items-center justify-center min-h-[110px] shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img src={sponsor.logo} alt={`Logo ${sponsor.name}`} className="max-h-16 max-w-full object-contain" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Nasze Programy</h2>
          <Accordion type="single" collapsible className="w-full space-y-4" onValueChange={setOpenProgram} value={openProgram}>
            {programs.map((program) => (
              <AccordionItem key={program.id} value={`program-${program.id}`} className="border rounded-lg overflow-hidden bg-white shadow-md">
                <AccordionTrigger className="px-4 sm:px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <div className="flex items-start gap-3 sm:gap-4 text-left w-full">
                    <img src={program.logo} alt={program.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-lg break-words mt-1">{program.name}</h3>
                      {openProgram !== `program-${program.id}` && (
                        <p className="mt-1 text-xs sm:text-sm text-gray-600">{getPreviewText(program.fullText)}</p>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <div className="space-y-6 mt-2 bg-gray-50 p-6 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">O programie</h4>
                      <p className="text-gray-700 whitespace-pre-line">{program.fullText}</p>
                    </div>

                    {program.subprograms.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Podprogramy</h4>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                          {program.subprograms.map((subprogram) => (
                            <AccordionItem key={subprogram.id} value={`subprogram-${subprogram.id}`} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                              <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 hover:no-underline">
                                <h5 className="font-semibold text-base text-gray-900">{subprogram.name}</h5>
                              </AccordionTrigger>
                              <AccordionContent className="px-4 pb-4 pt-0">
                                <div className="space-y-4 mt-3">
                                  {/* Każdy element subprogramu jako własny, zwijany AccordionItem */}
                                  <Accordion type="single" collapsible className="w-full space-y-3">
                                    {subprogram.items.map((item) => (
                                      <AccordionItem key={item.id} value={`item-${item.id}`} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                                          <h5 className="font-semibold text-base text-gray-900">{item.title}</h5>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-4 pb-4 pt-0">
                                          <div className="space-y-4 mt-2 bg-gray-50 p-4 rounded-lg">
                                            <div>
                                              <p className="text-gray-700 whitespace-pre-line">{item.fullText}</p>
                                            </div>

                                            {item.images.length > 0 && (
                                              <div>
                                                <h4 className="font-semibold text-gray-900 mb-3">Galeria</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                  {item.images.map((image, idx) => (
                                                    <div key={`${item.id}-${idx}`} className="rounded-lg overflow-hidden bg-gray-200 aspect-square">
                                                      <img src={image} alt={`Spotkanie ${idx + 1}`} className="w-full h-full object-cover" />
                                                    </div>
                                                  ))}
                                                </div>
                                              </div>
                                            )}

                                            {item.instagramEmbedCode && (
                                              <div>
                                                <h4 className="font-semibold text-gray-900 mb-3">Wideo</h4>
                                                <div className="flex justify-center">
                                                  <InstagramEmbed html={item.instagramEmbedCode} />
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </AccordionContent>
                                      </AccordionItem>
                                    ))}
                                  </Accordion>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

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

        <section className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Serdecznie dziękujemy wszystkim partnerom, sponsorom i przyjaciołom za wsparcie
            i wiarę w naszą misję. Dzięki Wam możemy pomagać młodym zawodniczkom spełniać
            ich jeździeckie marzenia i reprezentować Polskę na międzynarodowych parkurach!
          </p>
          <p className="text-lg text-gray-600 mt-4 italic">- Zespół Fundacji Grzegorza Kubiaka</p>
        </section>
      </div>
    </div>
  );
}
