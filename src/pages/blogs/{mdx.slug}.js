import React from 'react'
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{data.mdx.frontmatter.tittle}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}


export const query = graphql`
  query Post ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`
export default BlogPost