import * as React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { css } from "@emotion/react";
import { copy, fonts, theme } from "../params";

import NavLogo from "./NavLogo";

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
      font-family: ${fonts.serif};
      font-size: 18px;
      flex-basis: 0;
      flex-grow: 1;
      align-items: center;
      justify-content: space-evenly;
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
        color: ${theme.eyebrowTitleColor};
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
      <LinkItem href={urlMap.about}>{copy.aboutUs.title}</LinkItem>
      <LinkItem href={urlMap.product}>{copy.productInfo.title}</LinkItem>
    </ItemContainer>
    <NavLogo
      css={css`
        height: 150px;
        margin: 0 80px;
      `}
    />
    <ItemContainer>
      <LinkItem href={urlMap.contact}>ABONNIEREN</LinkItem>
      <LinkItem href={urlMap.contact}>KONTAKT</LinkItem>
    </ItemContainer>
  </div>
);

export default Navbar;
