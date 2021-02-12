import * as React from "react";

import { css } from "@emotion/react";
import { mapValues } from "lodash";

import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";
import ProductInfo from "../components/ProductInfo";
import { ContactUs } from "../components/ContactUs";
import Typemark from "../illustrations/higgins-typemark";

import { mediaQs } from "../mediaQueries";

import "../fonts/fonts.css";
import { colors } from "../params";

const partSpacingVertLarge = "96px";
const partSpacingVertHuge = "144px";
export const partSpacingVert = "48px";

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
      <Typemark
        css={css`
          height: 80px;
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

const ContentRow: React.FunctionComponent<{ className?: string }> = ({
  children,
}) => (
  <div
    css={css`
      margin-top: ${partSpacingVert};
      ${mediaQs.isMinLarge} {
        margin-top: ${partSpacingVertLarge};
      }
      ${mediaQs.isMinHuge} {
        margin-top: ${partSpacingVertHuge};
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
