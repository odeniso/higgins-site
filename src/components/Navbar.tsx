import * as React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import DogBadge from "../illustrations/DogBadge";
import { css } from "@emotion/react";

import { colors } from "../params";

const ItemContainer: React.FunctionComponent<{ alignLeft?: boolean }> = ({
  children,
  alignLeft = true,
}) => (
  <div
    css={css`
      & > *:not(:last-child) {
        margin-right: 40px;
      }
      display: flex;
      font-family: "Martha";
      font-size: 18px;
      flex-basis: 0;
      flex-grow: 1;
      align-items: center;
      justify-content: ${alignLeft ? "flex-start" : "flex-end"};
    `}
  >
    {children}
  </div>
);

const LinkItem: React.FunctionComponent<{ href: string }> = ({
  href,
  children,
}) => (
  <div>
    <AnchorLink
      css={css`
        text-decoration: none;
        color: #000;
      `}
      href={href}
      offset={100}
    >
      {children}
    </AnchorLink>
  </div>
);

type Url = string;
interface UrlMap {
  about: Url;
  product: Url;
  contact: Url;
}

const Navbar = ({
  className = "",
  urlMap,
}: {
  className?: string;
  urlMap: UrlMap;
}) => (
  <div
    css={css`
      display: flex;
    `}
    className={className}
  >
    <ItemContainer alignLeft={false}>
      <LinkItem href={urlMap.about}>ÜBER UNS</LinkItem>
      <LinkItem href={urlMap.product}>HUNDEFUTTER</LinkItem>
    </ItemContainer>
    <DogBadge
      css={css`
        height: 130px;
        margin: 0 80px;
      `}
      color={colors.stromboli}
    />
    <ItemContainer>
      <LinkItem href={urlMap.contact}>KONTAKT</LinkItem>
    </ItemContainer>
  </div>
);

export default Navbar;
