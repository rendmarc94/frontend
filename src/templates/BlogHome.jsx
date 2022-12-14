import React from "react"
import { graphql } from "gatsby"
import BlogHomepage from "../components/Homepage/BlogHomepage"

export const BlogHomeQuery = graphql`
  query blogHomePageQuery($limit: Int!, $offset: Int!) {
    allSanityPost(
      sort: {order: ASC, fields: publishedAt}
      limit: $limit
      skip: $offset
    ) {
      nodes {
      title
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData
        }
      }
    }
    }
  }
`

export default function BlogHome({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext
  const posts = data.allSanityPost.nodes
  console.log(posts)
  return (
    <>
      <BlogHomepage
        posts={posts}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </>
  )
}
