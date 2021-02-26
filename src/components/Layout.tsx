import * as React from "react";
import { Global, css } from "@emotion/react";
import { MyHelmet } from "./Helmet";
import { theme } from "../params";

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <MyHelmet />
    <Global
      styles={css`
        html {
          background: ${theme.background};
          body {
            margin: 0;
          }
        }
      `}
    />
    {children}
  </>
);

export default Layout;
