import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainBackground: string;
      secondaryBackground: string;
      tertiaryBackground: string;
      dark: string;
      light: string;
    };
    typography: {
      mainFont: string;
      secondaryFont: string;
    };
  }
}
