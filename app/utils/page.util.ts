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

const getLeftPageItems = (): PageModel[] => {
  const items = pages.filter((page) => page.position === "left");
  return items;
};

const getRightPageItems = (): PageModel[] => {
  const items = pages.filter((page) => page.position === "right");
  return items;
};

export { findPageItemByLabel, getAllPageItem, getLeftPageItems, getRightPageItems };
