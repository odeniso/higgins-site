import { css } from "@emotion/react";
import * as React from "react";

import image from "../images/dogsPoem-typemark-green.png";

const NavLogo = () => (
  <img
    css={css`
      height: 105px;
    `}
    src={image}
  />
);

export default NavLogo;
