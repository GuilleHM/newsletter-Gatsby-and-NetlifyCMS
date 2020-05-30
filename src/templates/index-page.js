/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import NuevoComponente from "../components/NuevoComponente";
import MyNewIndexPageComponent from "../components/MyNewIndexPageComponent";
//import Features from '../components/Features'
//import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  subheading,
  paragraph,
  multipleItems,
}) => (
    <div>
      <div
        className="margin-top-0"
        style={{
          textAlign: "center",
          padding: "72px"
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              color: "black",
              lineHeight: "1",
              padding: "0.25em"
            }}
          >
            {title}
          </h1>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              color: "#717171",
              lineHeight: "1",
              padding: "0.25em"
            }}
          >
            {subheading}
          </h3>
          <p
            className="parrafo-guille"
            style={{
              color: "#0000ff",
              lineHeight: "1",
              margin: "1rem auto",
              padding: "0.25em"
            }}>
            {paragraph}
          </p>
          <NuevoComponente />
          {/* <MyNewIndexPageComponent gridItems={multipleItems} /> */}
        </div>
      </div>
      <div
        style={{
          paddingTop: "22px",
          paddingBottom: "52px",
          textAlign: "center"
        }}
      >
        <i>(Replace below input with your email provider form)</i>
        <br />
        <br />
        <input
          style={{
            outline: "1px solid black",
            fontSize: "20px",
            placeholder: "Your email",
            padding: "6px",
            marginRight: "12px"
          }}
        />

        <button className="btn">Subscribe now!</button>

        <br />
        <br />

        <Link to="/archive">
          <button className="button">See past issues</button>
        </Link>

      </div>
    </div>
  );

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  paragraph: PropTypes.string,
  multipleItems: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        paragraph={frontmatter.paragraph}
        multipleItems={frontmatter.multipleItems}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        paragraph
        multipleItems {
          description
          finalparagraph
          title
        }
      }
    }
  }
`;

/*

image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

*/

/*


        mainpitch {
          title
          description
        }


*/
