import { PageModel } from "../models/page.model";

const pages: PageModel[] = [
  {
    label: "Home",
    route: "/",
    title: "Csikszentmiklos",
    description: "Csikszentmiklos lorem ipsum",
    keywords: ["home", "future home"],
  },
  {
    label: "Contact",
    route: "/contact",
    title: "Contact Us",
    description: "Contact us lorem ipsum",
    keywords: ["home", "future home"],
  },
  {
    label: "Community",
    route: "/community",
    title: "Be part of the community",
    description: "Community lorem ipsum",
    keywords: ["home", "future home"],
  },
  {
    label: "Economy",
    route: "/economy",
    title: "Csikszentmiklos's economy",
    description: "Economy lorem ipsum",
    keywords: ["home", "future home"],
  },
  {
    label: "Gallery",
    route: "/gallery",
    title: "Gallery",
    description: "Gallery lorem ipsum",
    keywords: ["home", "future home"],
  },
  {
    label: "Institutions",
    route: "/institutions",
    title: "Institutions",
    description: "Institutions lorem ipsum",
    keywords: ["home", "future home"],
  },
];

const unknowPage: PageModel = {
  label: "Unknown",
  route: "/",
  title: "",
  description: "",
  keywords: [],
};

export { pages, unknowPage };
