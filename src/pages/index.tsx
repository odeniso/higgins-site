import * as React from "react";

import { css } from "@emotion/react";

import Navbar from "../components/Navbar";

import "../fonts/fonts.css";
import Layout from "../components/Layout";
import Landing from "../components/Landing";

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
            max-width: 84%;
          `}
        >
          <Navbar />
          <Landing />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
