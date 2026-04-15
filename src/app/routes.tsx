import { createHashRouter} from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutFoundation } from "./pages/AboutFoundation";
import { AboutFounder } from "./pages/AboutFounder";
import { Athletes } from "./pages/Athletes";
import { Achievements } from "./pages/Achievements";
import { Partners } from "./pages/Partners";
import { TrainingsClinic } from "./pages/TrainingsClinic";
import { MediaAboutUs } from "./pages/MediaAboutUs";

export const router = createHashRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: Home },
            { path: "o-fundacji", Component: AboutFoundation },
            { path: "o-fundatorze", Component: AboutFounder },
            { path: "nasze-zawodniczki", Component: Athletes },
            { path: "osiagniecia", Component: Achievements },
            { path: "szkolenia-kliniki", Component: TrainingsClinic },
            { path: "partnerzy", Component: Partners },
            { path: "media-o-nas", Component: MediaAboutUs }
        ],
    },
]);