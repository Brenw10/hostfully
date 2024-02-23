import { style } from "@vanilla-extract/css";

export const container = style({
  border: '1px solid rgb(235, 237, 240)',
  padding: '1rem 2rem',
  boxShadow: '6px 8px 4px -7px rgb(208 216 243 / 29%)',
  zIndex: 1,
});

export const title = style({
  margin: 0,
  fontWeight: 'normal',
  fontSize: '1rem',
});

export const link = style({
  color: 'black',
});
