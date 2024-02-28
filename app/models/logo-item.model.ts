export interface LogoItemModel {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    margin?: {
      left: string;
      top: string;
    };
  };
  title: string;
  description: string;
}
