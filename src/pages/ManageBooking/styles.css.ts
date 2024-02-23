import { style } from "@vanilla-extract/css";
import { theme } from "../../providers/ThemeProvider/constants";

export const container = style({
  maxWidth: '600px',
  marginInline: 'auto',
});

export const titleContainer = style({
  backgroundColor: `${theme.token.colorPrimary} !important`,
  color: 'white !important',
});

export const button = style({
  width: '100%',
});
