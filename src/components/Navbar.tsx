import * as React from "react";
import DogBadge from "../illustrations/DogBadge";
import { css } from "@emotion/react";

import colors from "../colors";

const ItemContainer: React.FunctionComponent<{ alignLeft?: boolean }> = ({
  children,
  alignLeft = true,
}) => (
  <div
    css={css`
      column-gap: 40px;
      display: flex;
      font-family: "Martha";
      font-size: 18px;
      flex-basis: 0;
      flex-grow: 1;
      align-items: center;
      justify-content: ${alignLeft ? "start" : "end"};
    `}
  >
    {children}
  </div>
);

const Navbar = () => (
  <div
    css={css`
      display: flex;
      padding: 32px 0;
    `}
  >
    <ItemContainer alignLeft={false}>
      <div>ÜBER UNS</div>
      <div>HUNDEFUTTER</div>
    </ItemContainer>
    <DogBadge
      css={css`
        height: 130px;
        margin: 0 80px;
      `}
      color={colors.stromboli}
    />
    <ItemContainer>
      <div>KONTAKT</div>
    </ItemContainer>
  </div>
);

export default Navbar;
