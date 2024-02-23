import { globalStyle, style } from "@vanilla-extract/css";

export const table = style({
  boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
});

globalStyle(`${table} .ant-table-container`, {
  overflowX: 'auto',
});
