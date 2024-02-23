import { style } from "@vanilla-extract/css";
import { theme } from "../../providers/ThemeProvider/constants";

export const container = style({
  boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
});

export const titleContainer = style({
  backgroundColor: `${theme.token.colorPrimary} !important`,
  color: 'white !important',
});

export const button = style({
  width: '100%',
});
