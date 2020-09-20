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
      title
      slug
      databaseId
      content
    }
  }
`

export const ALL_POSTS_SLUGS = gql`
  query allPagesSlugs {
    posts {
      nodes {
        slug
      }
    }
  }
`
