import * as React from "react";

import { css } from "@emotion/react";

import { margins, gutters, copy } from "../params";
import { mediaQs } from "../mediaQueries";
import { TinyArticle } from "./TinyArticle";

import { getPackagingImg } from "../images/packaging";

const ProductInfo = ({
  className = "",
  id = "",
}: {
  className?: string;
  id?: string;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      ${mediaQs.isMinLarge} {
        align-items: stretch;
        flex-direction: row;
      }
    `}
    className={className}
    id={id}
  >
    <div
      css={css`
        flex: 1;
        margin: 0 ${margins.side};
        margin-bottom: ${margins.vertical.small};
        ${mediaQs.isMinLarge} {
          margin: 0;
          margin-right: ${gutters.minLarge};
        }
      `}
    >
      <div
        css={css`
          ${mediaQs.isMinLarge} {
            margin-left: ${margins.sideLarge};
          }
          ${mediaQs.isMinHuge} {
            margin-left: ${margins.sideHuge};
          }
        `}
      >
        <TinyArticle
          tinyTitle={copy.productInfo.title}
          title={copy.productInfo.header}
        >
          {copy.productInfo.content}
        </TinyArticle>
      </div>
    </div>
    <div
      css={css`
        flex: 1;
      `}
    >
      <div
        css={css`
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 30%;
          ${mediaQs.isMinLarge} {
            margin-right: ${margins.sideLarge};
            height: 100%;
            padding: 0;
          }
          ${mediaQs.isMinHuge} {
            margin-right: ${margins.sideHuge};
          }
        `}
      >
        <img
          src={getPackagingImg()}
          css={css`
            max-width: 100%;
            ${mediaQs.isMinLarge} {
              height: 500px;
            }
          `}
        />
      </div>
    </div>
  </div>
);

export default ProductInfo;
