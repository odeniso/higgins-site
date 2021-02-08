import * as React from "react";

import { css } from "@emotion/react";

import Navbar from "../components/Navbar";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";

import "../fonts/fonts.css";

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
              margin: 64px 0;
            `}
          />
          <AboutUs
            css={css`
              margin: 64px 0;
            `}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
