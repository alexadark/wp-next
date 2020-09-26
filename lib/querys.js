import { gql } from "graphql-request"

export const GET_PAGE = gql`
  query($id: ID!) {
    page(id: $id, idType: URI) {
      title
      slug
      databaseId
      content
    }
  }
`

export const ALL_PAGES_SLUGS = gql`
  query {
    pages {
      nodes {
        slug
      }
    }
  }
`

export const GET_POST = gql`
  query($id: ID!) {
    post(id: $id, idType: URI) {
      id
      uri
      slug
      title
      excerpt
      date
      content

      featuredImage {
        node {
          sourceUrl
          srcSet
          altText
        }
      }
      categories {
        nodes {
          id
          slug
          name
          uri
        }
      }

      author {
        node {
          name
          slug
          uri
          avatar {
            url
          }
        }
      }
      tags {
        nodes {
          name
          slug
          uri
        }
      }
    }
  }
`

export const ALL_POSTS_SLUGS = gql`
  query {
    posts {
      nodes {
        slug
      }
    }
  }
`

export const GET_ALL_POSTS = gql`
  query {
    posts(first: 10) {
      nodes {
        id
        uri
        slug
        title
        excerpt
        date

        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            slug
            name
            uri
          }
        }

        author {
          node {
            name
            slug
            uri
            avatar {
              url
            }
          }
        }
        tags {
          nodes {
            name
            slug
            uri
          }
        }
      }
    }
  }
`
