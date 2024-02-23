import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const content = style({
  padding: '1rem 2rem',
  backgroundColor: '#f5f5f5',
  flex: 1,
});
