import { pageItems, unknowPage } from "../constants/page.constant";
import { PageItemModel } from "../models/page.model";

const findPageItemByLabel = (label: string): PageItemModel => {
  const page: PageItemModel =
    pageItems.find((page) => page.label.toLowerCase().includes(label.toLowerCase())) ?? unknowPage;

  return page;
};

const getAllPageItem = (): PageItemModel[] => {
  return pageItems;
};

const getLeftPageItems = (): PageItemModel[] => {
  const items = pageItems.filter((page) => page.position === "left");
  return items;
};

const getRightPageItems = (): PageItemModel[] => {
  const items = pageItems.filter((page) => page.position === "right");
  return items;
};

export { findPageItemByLabel, getAllPageItem, getLeftPageItems, getRightPageItems };
