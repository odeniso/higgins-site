import * as React from "react";

import { css } from "@emotion/react";

import { mapValues } from "lodash";

import Navbar from "../components/Navbar";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";

import "../fonts/fonts.css";
import ProductInfo from "../components/ProductInfo";
import { ContactUs } from "../components/ContactUs";

const partSpacingVert = "96px";

const anchorNameMap = {
  about: "about",
  product: "product",
  contact: "contact",
};

const IndexPage = () => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            justify-content: center;
          `}
        >
          <Navbar
            css={css`
              margin: 32px 0;
            `}
            urlMap={mapValues(anchorNameMap, (anchorName) => `#${anchorName}`)}
          />
          <Landing
            css={css`
              margin: ${partSpacingVert} 0;
            `}
          />
          <AboutUs
            css={css`
              margin: ${partSpacingVert} 0;
            `}
            id={anchorNameMap.about}
          />
          <ProductInfo
            css={css`
              margin: ${partSpacingVert} 0;
            `}
            id={anchorNameMap.product}
          />
          <ContactUs
            css={css`
              margin: ${partSpacingVert} 0;
            `}
            id={anchorNameMap.contact}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
