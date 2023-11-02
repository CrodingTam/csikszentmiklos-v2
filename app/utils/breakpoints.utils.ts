import "@mui/material";
declare module "@mui/material/styles" {
  // eslint-disable-next-line no-unused-vars
  interface BreakpointOverrides {
    xxl: true;
    xxs: true;
  }
}

export const customBreakpoints = {
  xxl: 1680,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 600,
  xs: 375,
  xxs: 0,
};
