import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
});

export const datePickerPopUp = style({
  '@media': {
    'screen and (max-width: 769px)': {
      transform: 'scale(0.8)',
    },
  },
});

globalStyle(`${datePickerPopUp} .ant-picker-panels`, {
  '@media': {
    'screen and (max-width: 769px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
});

export const button = style({
  width: '100%',
});
