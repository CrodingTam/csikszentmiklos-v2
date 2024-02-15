import { TypographyStyle, TypographyStyleOptions } from "@mui/material/styles/createTypography";

interface CustomTypography {
  [index: string]: TypographyStyleOptions | TypographyStyle | string | number;
}

declare module "@mui/material/styles/createTypography" {
  // eslint-disable-next-line no-unused-vars
  interface TypographyOptions extends CustomTypography {}
}

declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    default: React.CSSProperties;
    main: React.CSSProperties;
    mainMedium: React.CSSProperties;
    mainSemiBold: React.CSSProperties;
  }

  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    default?: React.CSSProperties;
    main?: React.CSSProperties;
    mainMedium?: React.CSSProperties;
    mainSemiBold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    default: true;
    main: true;
    mainMedium: true;
    mainSemiBold: true;
    mainBold: true;
  }
}

export const customVariant = {
  h1: {
    fontFamily: "RalewayBold",
    fontSize: "55px",
    lineHeight: "55px",
    letterSpacing: "0.15px",
  },
  h2: {
    fontFamily: "RalewaySemiBold",
    fontSize: "38px",
    letterSpacing: "0.15px",
  },
  h3: {
    fontFamily: "RalewaySemiBold",
    fontSize: "28px",
    letterSpacing: "0.15px",
  },
  subtitle1: {
    fontFamily: "RalewayExtraBold",
    fontSize: "16px",
  },
  h4: {
    fontFamily: "RalewaySemiBold",
    fontSize: "18px",
    letterSpacing: "0.15px",
  },
  h5: {},
  h6: {},
  default: {
    fontFamily: "Raleway",
    fontSize: "16px",
  },
  main: {
    fontFamily: "RalewayLight",
    fontSize: "16px",
  },
  mainMedium: {
    fontFamily: "RalewayMedium",
    fontSize: "16px",
  },
  mainSemiBold: {
    fontFamily: "RalewaySemiBold",
    fontSize: "16px",
  },
  mainBold: {
    fontFamily: "RalewayBold",
    fontSize: "16px",
  },
  mainLight: {
    fontFamily: "RalewayLight",
    fontSize: "16px",
  },
};
