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
      name: "Ministerstwo Sportu i Turystyki",
      logo: "/pages/partners/msit.png",
      url: "https://www.gov.pl/web/sport/ministerstwo-sportu-i-turystyki"
    },
    {
      name: "Polski Związek Jeździecki (PZJ)",
      logo: "/pages/partners/image20.png",
      url: "https://pzj.pl/"
    },
    {
      name: "Warszawsko-Mazowiecki Związek Jeździecki (WMZJ)",
      logo: "/pages/partners/image19.png",
      url: "https://wmzj.waw.pl/"
    },
    {
      name: "Aktywni Lokalnie",
      logo: "/pages/partners/aktywni_lokalnie.png",
      url: "https://aktywni-lokalnie.pl/"
    },
    {
      name: "Orły Sportu Fundacja",
      logo: "/pages/partners/orly_sportu.png",
      url: "https://orlysportu.pl/"
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
          name: "Cykl spotkań \"Piaseczno na koniu\" (2-5 dni)",
          items: [
            {
              id: "al-1-a",
              title: "treningi w KJ Erren - Szumawa",
              fullText: "",
              images: [],
              instagramEmbedCode: ""
            }
          ]
        },
        {
          id: "al-2",
          name: "Cykl spotkań \"Poznajemy życie stajenne-od czyszczenia do treningu\" (2-5 dni)",
          items: [
            {
              id: "al-1-a",
              title: "12 sierpnia 2026 Caritas",
              fullText: "W dniu 12 sierpnia 2026 r. w ramach programu Ministerstwa Sportu i\n" +
                  "Turystyki - Aktywni Lokalnie Fundacja Grzegorza Kubiaka-Rozwój i Pasja\n" +
                  "zaprosiła do stajni w Siedliskach małych i dużych mieszkańców\n" +
                  "Piaseczna i okolic.\n\n" +
                  "Gości powitała przedstawicielka Fundacji Magdalena Sapieszko-Kopania,\n" +
                  "a następnie wolontariuszki i pracownicy stajni zaopiekowali się\n" +
                  "gośćmi.\n\n" +
                  "W ramach wizyty nasi goście zapoznali się z życiem stajennym, dzieci\n" +
                  "pomagały przy czyszczeniu i siodłaniu koni. Następnie wszyscy\n" +
                  "uczestniczyli w treningu pokazowym, gdzie na koniach zaprezentowały\n" +
                  "się zawodniczki Fundacji Grzegorza Kubiaka-Rozwój i Pasja oraz sam\n" +
                  "Trener Grzegorz Kubiak. Trening przyciągnął uwagę gości, ponieważ\n" +
                  "konie skakały znakomicie, a treningi skokowe są zawsze bardzo\n" +
                  "widowiskowe. Po treningu dzieci mogły przygotować posiłek dla koni, a\n" +
                  "następnie przy pomocy pracowników Fundacji rozdawały konikom obiad.\n" +
                  "Trener Grzegorz Kubiak jako uznany hodowca gołębi sportowych\n" +
                  "zafundował dzieciom niespodziankę i zabrał chętnych do gołębnika,\n" +
                  "gdzie dzieci mogły nakarmić gołębie.\n\n" +
                  "Po pełnym atrakcji dniu wszyscy goście zostali zaproszeni na\n" +
                  "przygotowany poczęstunek.  Na zakończenie dzieci mogły wybrać sobie\n" +
                  "upominki z pudełka niespodzianek. Maskotki dla Uczestników ufundowała\n" +
                  "Firma Chrupka.\n\n" +
                  "Dziękujemy mieszkańcom za wizytę w naszej stajni. Mamy nadzieję, że\n" +
                  "był to dzień pełen niezapomnianych wrażeń.",
              images: [
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/1.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/2.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/3.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/4.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/5.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/6.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/7.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/8.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/9.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/10.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/11.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/12.jpg",
                  "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/12-sierpnia-caritas/13.jpg",
              ],
              instagramEmbedCode: ""
            },
            {
              id: "al-1-b",
              title: "13 sierpnia 2026 Caritas",
              fullText: "Przygotowanie sprzętu i konia do treningu",
              images: [
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/13-sierpnia-caritas/1.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/13-sierpnia-caritas/2.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/13-sierpnia-caritas/3.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/13-sierpnia-caritas/4.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/13-sierpnia-caritas/5.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/13-sierpnia-caritas/6.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/13-sierpnia-caritas/7.jpg",
              ],
              instagramEmbedCode: ""
            },
            {
              id: "al-1-c",
              title: "17 sierpnia 2026 Caritas",
              fullText: "17 sierpnia 2026 r na zaproszenie Fundacji Grzegorza Kubiaka-Rozwój i Pasja w ramach programu Ministerstwa Sportu i Turystyki Aktywni Lokalnie grupa dzieci z Piaseczna i okolic wraz z opiekunami miała okazję odwiedzić stajnię , gdzie czekało na nie wiele ciekawych atrakcji i niezapomnianych chwil. Była to doskonała okazja do bezpośredniego kontaktu z końmi, poznania ich zwyczajów oraz zdobycia nowych doświadczeń.\n" +
                  "\n" +
                  "Podczas pobytu dzieci zwiedziły stajnię i dowiedziały się, jak wygląda codzienna opieka nad końmi. Zobaczyły, czym konie są karmione, jak przygotowuje się je do jazdy oraz jak należy o nie dbać. Dużym zainteresowaniem cieszyło się czyszczenie koni – dzieci z zaangażowaniem szczotkowały ich sierść i uczyły się, jak bezpiecznie podchodzić do zwierząt.\n" +
                  "\n" +
                  "Najwięcej emocji wzbudził trening skokowy. Skoki przez przeszkody to zawsze bardzo widowiskowy i emocjonujący element pracy z koniem. Dla wielu dzieci było to pierwsze spotkanie z końmi z tak bliska, dlatego początkowo pojawiało się trochę niepewności. Szybko jednak zastąpiły ją uśmiechy, ciekawość i ogromna radość.\n" +
                  "\n" +
                  "Na wszystkich uczestników spotkania czekał poczęstunek oraz pudełko z niespodziankami. Maskotki ufundowała Firma Chrupka 😀 Dziękujemy !!!\n" +
                  "\n" +
                  "Wizyta w stajni była nie tylko świetną zabawą, ale również wartościową lekcją odpowiedzialności, cierpliwości i szacunku do zwierząt. Dzieci wróciły pełne pozytywnych emocji, nowych doświadczeń i pięknych wspomnień. Z pewnością chętnie odwiedzą stajnię ponownie!",
              images: [
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/1.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/2.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/3.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/4.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/5.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/6.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/7.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/8.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/9.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/10.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/11.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/12.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/13.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/14.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/15.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/16.jpg",
                "pages/partners/programs/aktywni-lokalnie/poznajemy-zycie-stajenne/17-sierpnia-caritas/17.jpg",
              ],
              instagramEmbedCode: ""
            }
          ]
        },
        {
          id: "al-3",
          name: "Zajęcia sportowe z treningiem ujeżdżeniowo-skokowym (10 bloków - 136 godzin)",
          items: [
            {
              id: "al-1-a",
              title: "12 sierpnia 2026 Caritas",
              fullText: "Nauka podstawowych czynności opiekuńczych nad koniem",
              images: [],
              instagramEmbedCode: ""
            },
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
          name: "Rozmowy z Mistrzem",
          items: [
            {
              id: "wm-1-a",
              title: "Rozmowy z Mistrzem w Viart Kampinos",
              fullText: "W ramach programu Ministerstwa Sportu i Turystyki Wielki Mistrz w stajni ViArt Kampinos odbyła się lekcja z Mistrzem na temat rodzajów wędzideł.\n" +
                  "Podczas lekcji w stajni Grzegorz Kubiak zaprezentował  różne rodzaje wędzideł stosowanych u koni oraz opowiedział jakie mają zastosowanie. Wędzidło jest elementem ogłowia, który znajduje się w pysku konia i za pomocą wodzy umożliwia jeźdźcowi przekazywanie sygnałów.\n" +
                  "\n" +
                  "Na początku Trener omówił podstawowe rodzaje wędzideł. Poznaliśmy między innymi wędzidła pojedynczo łamane, podwójnie łamane oraz proste. Dowiedzieliśmy się, że różnią się one budową, sposobem działania i siłą nacisku. Zwróciliśmy również uwagę na materiał, z którego są wykonane  oraz na ich odpowiedni rozmiar.\n" +
                  "\n" +
                  "Podczas zajęć nauczyliśmy się, że wybór wędzidła powinien być dopasowany do konkretnego konia, jego budowy pyska, wyszkolenia i wrażliwości. Ważne jest również prawidłowe dopasowanie wędzidła oraz delikatne używanie wodzy. Zbyt mocne działanie ręką może powodować u konia ból i dyskomfort.\n" +
                  "\n" +
                  "Lekcja była bardzo ciekawa i praktyczna. Mogliśmy obejrzeć różne wędzidła i porównać ich budowę. Dowiedzieliśmy się, że sprzęt jeździecki powinien być używany odpowiedzialnie, a przede wszystkim z troską o dobro i komfort konia.\n" +
                  "\n" +
                  "Podsumowując, lekcja pozwoliła nam lepiej poznać znaczenie wędzideł w jeździectwie oraz nauczyła nas, jak ważne jest właściwe dopasowanie sprzętu i delikatne obchodzenie się z koniem.\n" +
                  "\n" +
                  "Panie Trenerze to była bardzo ciekawa lekcja, wiele się nauczyliśmy i czekamy na kolejne z cyklu Rozmowy z Mistrzem.",
              images: [
                  "/pages/partners/programs/wielki-mistrz/rozmowy-z-mistrzem/ViArt/1.jpg",
                  "/pages/partners/programs/wielki-mistrz/rozmowy-z-mistrzem/ViArt/2.jpg",
                  "/pages/partners/programs/wielki-mistrz/rozmowy-z-mistrzem/ViArt/3.jpg",
                  "/pages/partners/programs/wielki-mistrz/rozmowy-z-mistrzem/ViArt/4.jpg",
                  "/pages/partners/programs/wielki-mistrz/rozmowy-z-mistrzem/ViArt/5.jpg",
                  "/pages/partners/programs/wielki-mistrz/rozmowy-z-mistrzem/ViArt/6.jpg"
              ],
              instagramEmbedCode: ""
            },
            {
              id: "wm-1-b",
              title: "Rozmowy z Mistrzem w Siedliskach na treningu",
              fullText: "Doskonalenie techniki jazdy na wyższym poziomie",
              images: [],
              instagramEmbedCode: ""
            },
            {
              id: "wm-1-c",
              title: "Rozmowy z Mistrzem z klasą kawalerii konnej",
              fullText: "Doskonalenie techniki jazdy na wyższym poziomie",
              images: [],
              instagramEmbedCode: ""
            },
            {
              id: "wm-1-d",
              title: "Rozmowy z Mistrzem z Technikum Hodowli Koni",
              fullText: "Doskonalenie techniki jazdy na wyższym poziomie",
              images: [],
              instagramEmbedCode: ""
            },
            {
              id: "wm-1-e",
              title: "Rozmowy z Mistrzem spotkanie na temat hejtu i social mediów z panią mecenas",
              fullText: "Doskonalenie techniki jazdy na wyższym poziomie",
              images: [],
              instagramEmbedCode: ""
            },
          ]
        },
        {
          id: "wm-2",
          name: "Treningi z Mistrzem (25 godzin)",
          items: [
            {
              id: "wm-2-a",
              title: "Treningi dzieci z Częstochowy",
              fullText: "Fundacja Grzegorza Kubiaka Rozwój i Pasja w ramach programu " +
                  "Ministerstwa Sportu i Turystyki Wielki Mistrz gościła w swojej stajni " +
                  "zawodniczki z klubu Don Camillo w Konopiskach k/Częstochowy. " +
                  "Dziewczynki uczestniczyły przez tydzień w treningu " +
                  "ujeżdżeniowo-skokowym pod okiem wybitnego zawodnika i trenera " +
                  "Grzegorza Kubiaka. Zawodniczki miały możliwość doskonalenia swoich " +
                  "umiejętności, słuchania cennych uwag, a także obserwowania codziennej " +
                  "pracy Wielkiego Mistrza z koniem i innymi zawodniczkami. Swoje " +
                  "umiejętności jeździeckie zawodniczki będą miały szansę zaprezentować " +
                  "podczas udziału w kolejnych zawodach w skokach przez przeszkody. " +
                  "To był bardzo fajny czas spędzony na treningach i ciekawych rozmowach, " +
                  "czas obfitujący w nowe doświadczenia i nowe umiejętności.",
              images: [
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/czestochowa/1.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/czestochowa/2.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/czestochowa/3.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/czestochowa/4.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/czestochowa/5.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/czestochowa/6.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/czestochowa/7.jpg",
              ],
              instagramEmbedCode: ""
            },
            {
              id: "wm-2-b",
              title: "Treningi w ViArt Kampinos",
              fullText: "W ramach programu Ministerstwa Sportu i Turystyki Wielki Mistrz Wiktoria Jannasz z Klubu ViArt Kampinos co tydzień trenuje z Grzegorzem Kubiakiem.\n" +
                  "Treningi odbywają się cyklicznie, Wiktoria trenuje na sześciu koniach, z którymi przygotowuje się do Mistrzostw Polski.\n" +
                  "Wiktoria Jannasz jest zawodniczką kadry narodowej dzieci i młodzieży i przygotowuje się z Grzegorzem Kubiakiem do najważniejszych startów kadrowych do Pucharu Narodów, Mistrzostw Europy.\n" +
                  "Treningi są bardzo wartościowe, dają wiele nowych doświadczeń i skutkują znakomitymi wynikami Wiktorii w zawodach krajowych i międzynarodowych.",
              images: [
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/1.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/2.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/3.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/4.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/5.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/6.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/7.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/8.jpg",
                  "/pages/partners/programs/wielki-mistrz/trening-z-mistrzem/ViArt/9.jpg",
              ],
              instagramEmbedCode: ""
            },
            {
              id: "wm-2-c",
              title: "Treningi u Eweliny Polskiej-Fijałek",
              fullText: "Fundamentalne umiejętności w skakaniu przez przeszkody",
              images: [],
              instagramEmbedCode: ""
            },
          ]
        },
        {
          id: "wm-3",
          name: "Kliniki z Mistrzem",
          items: [
            {
              id: "wm-3-a",
              title: "Klinika szkoleniowa z Mistrzem Kozłów",
              fullText: "Fundamentalne umiejętności w skakaniu przez przeszkody",
              images: [],
              instagramEmbedCode: ""
            },
            {
              id: "wm-3-b",
              title: "Klinika szkoleniowa z Mistrzem Budki Żelazowskie",
              fullText: "Fundamentalne umiejętności w skakaniu przez przeszkody",
              images: [],
              instagramEmbedCode: ""
            },
            {
              id: "wm-3-c",
              title: "Klinika szkoleniowa z Mistrzem Częstochowa",
              fullText: "Fundamentalne umiejętności w skakaniu przez przeszkody",
              images: [
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/4.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/5.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/6.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/7.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/8.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/9.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/11.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/12.jpg",
                  "/pages/partners/programs/wielki-mistrz/kliniki-z-mistrzem/czestochowa/13.jpg",
              ],
              instagramEmbedCode: ""
            },
          ]
        },

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
