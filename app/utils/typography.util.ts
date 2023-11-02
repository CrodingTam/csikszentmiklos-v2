import {
  TypographyStyle,
  TypographyStyleOptions,
} from "@mui/material/styles/createTypography";

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
  }
}

export const customVariant = {
  h1: {
    fontFamily: "RalewaySemiBold",
    fontSize: "100px",
    letterSpacing: "0.15px",
  },
  h2: {
    fontFamily: "RalewaySemiBold",
    fontSize: "36px",
    letterSpacing: "0.15px",
  },
  h3: {
    fontFamily: "RalewaySemiBold",
    fontSize: "26px",
    letterSpacing: "0.15px",
  },
  h4: {},
  h5: {},
  h6: {},
  default: {
    fontFamily: "Raleway",
    fontSize: "16px",
  },
  main: {
    fontFamily: "Raleway",
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
