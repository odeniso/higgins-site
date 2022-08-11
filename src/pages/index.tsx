import * as React from "react";

import { css } from "@emotion/react";
import { mapValues } from "lodash";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";
import ProductInfo from "../components/ProductInfo";
import { ContactUs } from "../components/ContactUs";

import { mediaQs } from "../mediaQueries";

import "../fonts/fonts.css";
import { margins } from "../params";
import { BulletPoints } from "../components/BulletPoints";
import NavLogo from "../components/NavLogo";

const anchorNameMap = {
  about: "about",
  product: "product",
  contact: "contact",
};

const NavBarContainer = () => (
  <div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin-top: 24px;
        ${mediaQs.isMinLarge} {
          display: none;
        }
      `}
    >
      <NavLogo
        css={css`
          height: 80px;
        `}
      />
    </div>
    <div
      css={css`
        display: none;
        ${mediaQs.isMinLarge} {
          display: block;
        }
      `}
    >
      <Navbar
        css={css`
          margin: 24px 0;
          ${mediaQs.isMinHuge} {
            margin: 32px 0;
          }
        `}
        urlMap={mapValues(anchorNameMap, (anchorName) => `#${anchorName}`)}
      />
    </div>
  </div>
);

const ContentRow: React.FunctionComponent<{ className?: string }> = ({
  children,
}) => (
  <div
    css={css`
      margin-top: ${margins.vertical.small};
      ${mediaQs.isMinLarge} {
        margin-top: ${margins.vertical.large};
      }
      ${mediaQs.isMinHuge} {
        margin-top: ${margins.vertical.huge};
      }
    `}
  >
    {children}
  </div>
);

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <NavBarContainer />
        <ContentRow>
          <Landing />
        </ContentRow>
        <ContentRow>
          <AboutUs id={anchorNameMap.about} />
        </ContentRow>
        {/* <BulletPoints /> */}
        <ContentRow>
          <ProductInfo id={anchorNameMap.product} />
        </ContentRow>
        <ContentRow>
          <ContactUs id={anchorNameMap.contact} />
        </ContentRow>
      </div>
    </Layout>
  );
};

export default IndexPage;
