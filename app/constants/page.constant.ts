import { PageModel } from "../models/page.model";

const pages: PageModel[] = [
  {
    label: "Home",
    route: "/",
    title: "Csikszentmiklos",
    description: "Csikszentmiklos lorem ipsum",
    keywords: ["home", "future home"],
    position: "left",
  },
  {
    label: "Contact",
    route: "/contact",
    title: "Contact Us",
    description: "Contact us lorem ipsum",
    keywords: ["home", "future home"],
    position: "left",
  },
  {
    label: "Community",
    route: "/community",
    title: "Be part of the community",
    description: "Community lorem ipsum",
    keywords: ["home", "future home"],
    position: "left",
  },
  {
    label: "Economy",
    route: "/economy",
    title: "Csikszentmiklos's economy",
    description: "Economy lorem ipsum",
    keywords: ["home", "future home"],
    position: "right",
  },
  {
    label: "Gallery",
    route: "/gallery",
    title: "Gallery",
    description: "Gallery lorem ipsum",
    keywords: ["home", "future home"],
    position: "right",
  },
  {
    label: "Institutions",
    route: "/institutions",
    title: "Institutions",
    description: "Institutions lorem ipsum",
    keywords: ["home", "future home"],
    position: "right",
  },
];

const unknowPage: PageModel = {
  label: "Unknown",
  route: "/",
  title: "",
  description: "",
  keywords: [],
  position: "left",
};

export { pages, unknowPage };
