export interface ClickableItemModel {
  link: string;
  src: string;
  type?: "main" | "csie" | "firefighters" | "butchers" | "old";
  alt: string;
  margin?: {
    left: string;
    top: string;
  };
}
