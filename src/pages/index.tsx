import * as React from "react";

import { css } from "@emotion/react";
import { mapValues } from "lodash";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";
import ProductInfo from "../components/ProductInfo";
import { ContactUs } from "../components/ContactUs";
import DogBadge from "../illustrations/DogBadge";

import { mediaQs } from "../mediaQueries";

import "../fonts/fonts.css";
import { colors } from "../params";

const partSpacingVertLarge = "48px";
const partSpacingVertHuge = "96px";
const partSpacingVert = "40px";

const anchorNameMap = {
  about: "about",
  product: "product",
  contact: "contact",
};

const NavBarContainer = () => (
  <div>
    <div
      css={css`
        ${mediaQs.isMinLarge} {
          display: none;
        }
      `}
    >
      <DogBadge
        css={css`
          height: 80px;
          margin: 24px;
        `}
        color={colors.stromboli}
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

const ContentRow: React.FunctionComponent = ({ children }) => (
  <div
    css={css`
      margin: ${partSpacingVert} 0;
      ${mediaQs.isMinLarge} {
        margin: ${partSpacingVertLarge} 0;
      }
      ${mediaQs.isMinHuge} {
        margin: ${partSpacingVertHuge} 0;
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
