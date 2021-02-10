import * as React from "react";
import { Global, css } from "@emotion/react";
import { MyHelmet } from "./Helmet";

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <MyHelmet />
    <Global
      styles={css`
        html {
          background: #fff;
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
