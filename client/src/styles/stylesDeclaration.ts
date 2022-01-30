import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    flexDirection: {
      column: string;
      row: string;
    }
  }
}