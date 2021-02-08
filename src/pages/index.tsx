import * as React from "react";

import { css } from "@emotion/react";

import Navbar from "../components/Navbar";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";

import "../fonts/fonts.css";
import ProductInfo from "../components/ProductInfo";

const partSpacingVert = "96px";

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
          />
          <ProductInfo
            css={css`
              margin: ${partSpacingVert} 0;
            `}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
