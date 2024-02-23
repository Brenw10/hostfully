import { ConfigProvider } from "antd";
import { theme } from "./constants";

type TThemeProvider = {
  children: React.ReactNode,
};

const ThemeProvider = ({ children }: TThemeProvider) => {
  return (
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  )
};

export default ThemeProvider;
