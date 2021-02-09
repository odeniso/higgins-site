import * as React from "react";
import { Global, css } from "@emotion/react";

const Layout: React.FunctionComponent = ({ children }) => (
  <>
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
