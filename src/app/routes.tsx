import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AboutFoundation } from "./pages/AboutFoundation";
import { AboutFounder } from "./pages/AboutFounder";
import { Athletes } from "./pages/Athletes";
import { Achievements } from "./pages/Achievements";
import { StartPlans } from "./pages/StartPlans";
import { Partners } from "./pages/Partners";

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
            { path: "plany-startowe", Component: StartPlans },
            { path: "partnerzy", Component: Partners },
        ],
    },
]);