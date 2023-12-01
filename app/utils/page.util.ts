import { pages, unknowPage } from "../constants/page.constant";
import { PageModel } from "../models/page.model";

const findPageItemByLabel = (label: string): PageModel => {
  const page: PageModel =
    pages.find((page) => page.label.toLowerCase().includes(label.toLowerCase())) ?? unknowPage;

  return page;
};

const getAllPageItem = (): PageModel[] => {
  return pages;
};

export { findPageItemByLabel, getAllPageItem };
