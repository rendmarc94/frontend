import React from "react"
import { graphql } from "gatsby"
import CompletePost from "../components/BlogPost/CompletePost"

export const SinglePostQuery = graphql`
  query singlePostQueryQuery($id: String!) {
    allSanityPost(filter: { slug: { current: { eq: $id } } }) {
      nodes {
        title
        slug {
          current
        }
        categories {
          title
        }
        author {
          bio {
            children {
              text
            }
          }
          name
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        publishedAt(formatString: "MMM DD,YYYY")
        readTime
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        _rawBody
        excerpt
        body {
          children {
            text
          }
        }
      }
    }
  }
`

export default function SinglePost({ data }) {
  const post = data.allSanityPost.nodes[0]
  return (
    <>
      <CompletePost
        author={post.author}
        cat={post.categories[0].title}
        title={post.title}
        mainImage={post.mainImage}
        excerpt={post.excerpt}
        blogPost={post._rawBody}
      />
    </>
  )
}
