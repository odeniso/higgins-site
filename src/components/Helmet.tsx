import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        url
        image
      }
    }
  }
`;

export const MyHelmet = () => {
  const { site } = useStaticQuery(query);
  const { title, image } = site.siteMetadata;
  return (
    <Helmet title={title}>
      <meta name="image" content={image} />
    </Helmet>
  );
};
